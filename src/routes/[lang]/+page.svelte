<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	import MainBanner from '$lib/pages/components/MainBanner.svelte';
	import Counter from '$lib/pages/components/DriverLicenseCounter.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema, personSchema, websiteSchema } from '$lib/seo/site';

	import { content } from '$lib/typescript/content/pages/home';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	import carIcon from '$lib/assets/web/favicon/others/car.svg';
	import codeIcon from '$lib/assets/web/favicon/others/code.svg';

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
			? 'Bekijk Toons portfolio met SvelteKit-projecten, webdevelopment, front-end design, automation en creatief digitaal werk.'
			: 'Explore Toon van Berkel’s portfolio with SvelteKit projects, web development, front-end design, automation and creative digital work.'
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
		<section class="stats">
			<article>
				<div>
					<img src={carIcon} alt="Car Icon" width="48" height="48" />
					<h2>Driving experience</h2>
				</div>

				<Counter date="2026-03-18T12:12:10" label="Time I have my driver's license"/>

                <div class="stat_card-container">
                    <div class="stat_card">
                        <span class="stat_card-value">
                            7000<span class="stat_card-unit">km</span>
                        </span>

                        <span class="stat_card-label">
                            Driven
                        </span>
                    </div>

                    <div class="stat_card">
                        <span class="stat_card-value">
                            3
                        </span>
                        <span class="stat_card-label">Countries</span>
                    </div>

                    <div class="stat_card">
                        <span class="stat_card-value">
                            4
                        </span>
                        <span class="stat_card-label">Different cars driven</span>
                    </div>
                </div>
			</article>

			<article>
				<div>
					<img src={codeIcon} alt="Code Icon" width="48" height="48" />
					<h2>Code experience</h2>
				</div>

				<Counter date="2023-02-27T07:23:12" label="Time I have been coding"/>

                <div class="stat_card-container">
                    <div class="stat_card stat_card--extra">
                        <span class="stat_card-value">
                            652123
                        </span>

                        <span class="stat_card-label">
                            Lines coded
                        </span>
                    </div>

                    <div class="stat_card">
                        <span class="stat_card-value">
                            16
                        </span>
                        <span class="stat_card-label">
                            Finished projects
                        </span>
                    </div>

                    <div class="stat_card">
                        <span class="stat_card-value">
                            9
                        </span>
                        <span class="stat_card-label">
                            Group projects
                        </span>
                    </div>

                    <div class="stat_card">
                        <span class="stat_card-value">
                            28
                        </span>
                        <span class="stat_card-label">
                            Current projects
                        </span>
                    </div>
                </div>
			</article>
		</section>

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

		<section class="technology-overview">
			<h2>{homeContent.technologies.title}</h2>

			<p>{homeContent.technologies.intro}</p>

			<ul>
				{#each homeContent.technologies.items as item}
					<li>{item}</li>
				{/each}
			</ul>

			<p>
				{homeContent.technologies.externalIntro}
				<a href="https://svelte.dev/docs/kit" target="_blank" rel="noopener noreferrer">
					SvelteKit documentation
				</a>
				{homeContent.technologies.andText}
				<a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
					TypeScript documentation
				</a>.
			</p>
		</section>

		<section class="current-work">
			<h2>{homeContent.currentWork.title}</h2>

			<p>{homeContent.currentWork.text}</p>
		</section>

		<section class="portfolio-purpose">
			<h2>{homeContent.portfolioPurpose.title}</h2>

			<p>{homeContent.portfolioPurpose.text1}</p>
			<p>{homeContent.portfolioPurpose.text2}</p>

			<p>
				<a href={`${base}/${activeLanguage}/Projects`}>
					{homeContent.portfolioPurpose.projectsLink}
				</a>
				<span aria-hidden="true"> · </span>
				<a href={`${base}/${activeLanguage}/Aboutme`}>
					{homeContent.portfolioPurpose.aboutLink}
				</a>
				<span aria-hidden="true"> · </span>
				<a href={`${base}/${activeLanguage}/Contact`}>
					{homeContent.portfolioPurpose.contactLink}
				</a>
			</p>
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