<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/state";
    import Breadcrumbs from "$lib/pages/components/Breadcrumbs.svelte";
	import SeoHead from "$lib/seo/SeoHead.svelte";
	import { breadcrumbSchema } from "$lib/seo/site";
    import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from "$lib/typescript/pref/language";

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);
	const pageTitle = $derived(activeLanguage === 'nl-nl' ? 'Vakanties' : 'Vacations');
	const heading = $derived(activeLanguage === 'nl-nl' ? 'Vakanties' : 'Vacations');
	const intro = $derived(
		activeLanguage === 'nl-nl'
			? 'Bekijk reisnotities, foto’s en interactieve kaarten van vakanties van Toon van Berkel.'
			: 'Explore travel notes, photos and interactive maps from vacations by Toon van Berkel.'
	);
	const seoPath = $derived(`/${activeLanguage}/Vacations`);
	const jsonLd = $derived(
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: pageTitle, path: seoPath }
		])
	);
</script>

<SeoHead
	title={`${pageTitle} by Toon van Berkel | Travel Maps & Photo Notes`}
	description={intro}
	path={seoPath}
	lang={activeLanguage}
	jsonLd={jsonLd}
/>

<main class="normalize">
    <section class="section">
        <Breadcrumbs items={[{ label: pageTitle }]} />
        <h1>{heading}</h1>
        <p>{intro}</p>

        <div class="card-wrapper">
            <a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026`}>
                <article>
                    <img 
                        src="https://31nl.github.io/a/1.jpg" 
                        alt="Toon van Berkel on vacation in Mallorca, a sea in the background and standing on natural rocks."
						loading="lazy"
						width="430"
						height="380"
                    >

                    <span class="card-tag">Vacation</span>

                    <h2>Mallorca - 2026</h2>

                    <p>
                        See all videos and pictures of the vacation to Mallorca in 2026.
                        Use an interactive map to see where Toon has been.
                    </p>

                    <span class="card-link">View vacation →</span>
                </article>
            </a>
        </div>
    </section>
</main>

<style>
.card-wrapper {
    width: min(100%, 430px);
    max-width: 430px;
    margin: 32px 0 0;
    display: grid;
    grid-template-columns: 1fr;
}

.card-wrapper a {
    display: block;
    color: inherit;
    text-decoration: none;
    border-radius: var(--radius-xl);
}

.card-wrapper article {
    position: relative;
    width: 100%;
    height: 380px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border-radius: var(--radius-xl);
    background-color: var(--color-surface);
    box-shadow: var(--shadow-card);
    isolation: isolate;
}

.card-wrapper article img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    z-index: -4;
    transform: scale(1.02);
    transition: transform 0.5s ease, filter 0.5s ease;
}

/* Overlay over the full image */
.card-wrapper article::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -3;
    background:
        linear-gradient(
            to bottom,
            rgb(15 42 68 / 8%),
            rgb(15 42 68 / 30%) 42%,
            rgb(15 42 68 / 72%)
        );
}

/* Readable text panel */
.card-wrapper article::after {
    content: "";
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    height: 225px;
    z-index: -1;
    border-radius: var(--radius-lg);
    background: color-mix(in srgb, var(--color-primary) 70%, transparent);
    border-left: 4px solid var(--color-link-on-dark);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);
}

.card-wrapper article h2,
.card-wrapper article p,
.card-wrapper article .card-tag,
.card-wrapper article .card-link {
    position: relative;
    z-index: 1;
    max-width: calc(100% - 36px);
    margin-left: 18px;
    margin-right: 18px;
}

.card-wrapper article .card-tag {
    display: inline-block;
    width: fit-content;
    margin-bottom: 8px;
    padding: 5px 11px;
    border-radius: var(--radius-pill);
    background: color-mix(in srgb, var(--color-link-on-dark) 18%, transparent);
    color: var(--color-link-on-dark);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.card-wrapper article h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: var(--color-link-on-dark);
    font-size: clamp(1.8rem, 4vw, 2.35rem);
    line-height: 1.05;
}

.card-wrapper article p {
    margin-top: 0;
    margin-bottom: 14px;
    color: var(--color-light-text);
    font-size: 0.92rem;
    line-height: 1.45;
}

.card-wrapper article .card-link {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 12px;
    padding-bottom: 4px;
    color: var(--color-link-on-dark);
    font-size: 0.9rem;
    font-weight: 700;
    transition: transform 0.3s ease, color 0.3s ease;
}

.card-wrapper a:hover article img {
    transform: scale(1.07);
    filter: brightness(1.04);
}

.card-wrapper a:hover .card-link {
    transform: translateX(5px);
    color: var(--color-link-on-dark-hover);
}

.card-wrapper a:focus-visible {
    outline: 4px solid var(--color-link-on-dark-hover);
    outline-offset: 6px;
}

@media (max-width: 760px) {
    .card-wrapper {
        width: min(100%, 92vw);
        max-width: 390px;
        margin-top: 28px;
    }

    .card-wrapper article {
        height: 440px;
        padding: 18px;
        border-radius: var(--radius-xl);
    }

    .card-wrapper article::after {
        left: 18px;
        right: 18px;
        bottom: 18px;
        height: 235px;
        border-radius: var(--radius-lg);
    }

    .card-wrapper article h2,
    .card-wrapper article p,
    .card-wrapper article .card-tag,
    .card-wrapper article .card-link {
        margin-left: 18px;
        margin-right: 18px;
        max-width: calc(100% - 36px);
    }

    .card-wrapper article h2 {
        font-size: 2rem;
    }
}
@media (max-width: 400px) {
    .card-wrapper article {
        height: 270px;
    }
    .card-wrapper article::after {
        height: 135px;
    }
    .card-wrapper article h2 {
        font-size: 1.5em;
    }
    .card-wrapper article p {
        display: none;
    }
}
</style>
