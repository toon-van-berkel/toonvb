<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/state';
    import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema, canonicalUrl } from '$lib/seo/site';
    import { content } from '$lib/typescript/content/pages/anime';
    import {
        currentLanguage,
        defaultLanguage,
        isSupportedLanguage
    } from '$lib/typescript/pref/language';

    const activeLanguage = $derived(
        isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
    );

    const pageContent = $derived(content[activeLanguage] ?? content[defaultLanguage]);
    const anime = $derived(
        pageContent.items.find((item) => item.slug === page.params.slug) ?? pageContent.items[0]
    );

	function imageSrc(src: string) {
		return src.startsWith('http') ? src : `${base}${src}`;
	}

	const seoPath = $derived(`/${activeLanguage}/Anime/${anime.slug}`);
	const seoTitle = $derived(`${anime.title} | ${pageContent.pageTitle} by Toon van Berkel`);
	const jsonLd = $derived([
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: pageContent.pageTitle, path: `/${activeLanguage}/Anime` },
			{ name: anime.title, path: seoPath }
		]),
		{
			'@context': 'https://schema.org',
			'@type': 'Review',
			name: seoTitle,
			url: canonicalUrl(seoPath),
			itemReviewed: {
				'@type': 'CreativeWorkSeries',
				name: anime.title
			},
			author: {
				'@type': 'Person',
				name: 'Toon van Berkel'
			},
			reviewBody: anime.thought
		}
	]);
</script>

<SeoHead
	title={seoTitle}
	description={anime.thought}
	path={seoPath}
	lang={activeLanguage}
	type="article"
	image={anime.image}
	jsonLd={jsonLd}
/>

<main class="normalize">
    <section class="anime-page anime-page--detail">
        <Breadcrumbs
            items={[
                { label: pageContent.breadcrumbs.anime, href: `${base}/${activeLanguage}/Anime` },
                { label: anime.title }
            ]}
        />

        <article class="anime-profile">
            <img src={imageSrc(anime.image)} alt={anime.imageAlt} />

            <div class="anime-profile__content">
                <div class="anime-profile__meta">
                    <span>{pageContent.statusLabels[anime.state]}</span>
                    <span>{anime.years}</span>
                </div>

                <h1>{anime.title}</h1>
                <p>{anime.summary}</p>

                <h2>{pageContent.detailHeading} {anime.title}</h2>
                <p>{anime.thought}</p>
            </div>
        </article>
    </section>
</main>
