<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/state';
    import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
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
</script>

<svelte:head>
    <title>{anime.title} | {pageContent.pageTitle} | Toonvb.com</title>
    <meta name="description" content={anime.thought} />
</svelte:head>

<main class="normalize">
    <section class="anime-page anime-page--detail">
        <Breadcrumbs
            items={[
                { label: pageContent.breadcrumbs.anime, href: `${base}/${activeLanguage}/Anime` },
                { label: anime.title }
            ]}
        />

        <article class="anime-profile">
            <img src={`${base}${anime.image}`} alt={anime.imageAlt} />

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
