<script lang="ts">
	import { page } from '$app/state';
    import MainBanner from '$lib/pages/components/MainBanner.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema, personSchema, websiteSchema } from '$lib/seo/site';

    import { content } from '$lib/typescript/content/pages/home';
    import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

    const homeContent = $derived(
        content[activeLanguage] ?? content[defaultLanguage]
    );

	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Toon van Berkel | Creative Developer & Digitaal Portfolio'
			: 'Toon van Berkel | Creative Developer & Digital Portfolio'
	);
	const seoDescription = $derived(
		activeLanguage === 'nl-nl'
			? 'Bekijk het digitale portfolio van Toon van Berkel, een creative software developer gericht op SvelteKit, webdevelopment, front-end design, automation en praktische digitale oplossingen.'
			: 'Explore the digital portfolio of Toon van Berkel, a creative software developer focused on SvelteKit, web development, front-end design, automation and practical digital solutions.'
	);
	const seoPath = $derived(`/${activeLanguage}`);
	const faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: homeContent.faq.items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	});
	const jsonLd = $derived([
		personSchema(),
		websiteSchema(),
		breadcrumbSchema([{ name: 'Home', path: seoPath }]),
		faqSchema
	]);
</script>

<SeoHead
	title={seoTitle}
	description={seoDescription}
	path={seoPath}
	lang={activeLanguage}
	jsonLd={jsonLd}
/>

<main>
    <MainBanner />

    <div class="normalize">
        <section>
            <h2>{homeContent.seoIntro.title}</h2>

            <p>{homeContent.seoIntro.text1}</p>
            <p>{homeContent.seoIntro.text2}</p>
        </section>

        <section class="featured-projects">
            <h2>{homeContent.featuredProjects.title}</h2>

            <div>
                {#each homeContent.featuredProjects.projects as project}
                    <article>
                        <h3>{project.title}</h3>
                        <p>{project.text}</p>
                    </article>
                {/each}
            </div>
        </section>

        <section class="services-overview">
            <h2>{homeContent.servicesOverview.title}</h2>

            <ul>
                {#each homeContent.servicesOverview.items as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </section>

        <section class="current-work">
            <h2>{homeContent.currentWork.title}</h2>

            <p>{homeContent.currentWork.text}</p>
        </section>

        <section class="faq">
            <h2>{homeContent.faq.title}</h2>

            {#each homeContent.faq.items as item}
                <details>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                </details>
            {/each}
        </section>
    </div>
</main>
