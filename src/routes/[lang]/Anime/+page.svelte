<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/state';
    import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema } from '$lib/seo/site';
    import { content } from '$lib/typescript/content/pages/anime';
    import {
        currentLanguage,
        defaultLanguage,
        isSupportedLanguage
    } from '$lib/typescript/pref/language';

    let filter = $state('');

    const activeLanguage = $derived(
        isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
    );

    const pageContent = $derived(content[activeLanguage] ?? content[defaultLanguage]);

    const filteredAnimes = $derived(
        pageContent.items.filter((anime) => filter === '' || anime.state === filter)
    );

    function handleFilterClick(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        filter = button.dataset.filter ?? '';
    }

	function imageSrc(src: string) {
		return src.startsWith('http') ? src : `${base}${src}`;
	}

	const seoPath = $derived(`/${activeLanguage}/Anime`);
	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Anime lijst van Toon van Berkel | Persoonlijke kijklijst'
			: 'Anime List by Toon van Berkel | Personal Watchlist'
	);
	const jsonLd = $derived(
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: pageContent.pageTitle, path: seoPath }
		])
	);
</script>

<SeoHead title={seoTitle} description={pageContent.intro} path={seoPath} lang={activeLanguage} jsonLd={jsonLd} />

<main class="normalize">
    <section class="anime-page">
        <Breadcrumbs items={[{ label: pageContent.breadcrumbs.anime }]} />

        <div class="anime-page__header">
            <h1>{pageContent.pageTitle}</h1>
            <p>{pageContent.intro}</p>
        </div>

        <div class="anime-page__filters" aria-label={pageContent.galleryLabel}>
            <button class:active={filter === ''} data-filter="" type="button" onclick={handleFilterClick}>{pageContent.filters.all}</button>
            <button class:active={filter === 'watching'} data-filter="watching" type="button" onclick={handleFilterClick}>{pageContent.filters.watching}</button>
            <button class:active={filter === 'finished'} data-filter="finished" type="button" onclick={handleFilterClick}>{pageContent.filters.finished}</button>
        </div>

        <div class="anime-page__layout">
            <div class="anime-page__grid" aria-label={pageContent.galleryLabel}>
                {#each filteredAnimes as anime}
                    <a class="anime-card" href={`${base}/${activeLanguage}/Anime/${anime.slug}`}>
                        <img src={imageSrc(anime.image)} alt={anime.imageAlt} loading="lazy" />
                        <span class="anime-card__content">
                            <strong>{anime.title}</strong>
                            <span class="anime-card__meta">{anime.years}</span>
                            <small>{pageContent.statusLabels[anime.state]}</small>
                        </span>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</main>
