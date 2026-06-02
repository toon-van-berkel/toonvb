import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Project = {
	title: string;
	text: string;
};

type FaqItem = {
	question: string;
	answer: string;
};

type HomeContent = {
	seoIntro: {
		title: string;
		text1: string;
		text2: string;
	};

	featuredProjects: {
		title: string;
		projects: Project[];
	};

	servicesOverview: {
		title: string;
		items: string[];
	};

	technologies: {
		title: string;
		intro: string;
		items: string[];
		externalIntro: string;
		andText: string;
	};

	currentWork: {
		title: string;
		text: string;
	};

	portfolioPurpose: {
		title: string;
		text1: string;
		text2: string;
		projectsLink: string;
		aboutLink: string;
		contactLink: string;
	};

	faq: {
		title: string;
		items: FaqItem[];
	};
};

export const content: Record<SupportedLanguage, HomeContent> = {
	'en-gb': {
		seoIntro: {
			title: 'Practical web development with a creative edge',
			text1:
				'Toon van Berkel is a Creative Software Developer and CMGT student from the Rotterdam area. He builds modern websites, interactive web applications, portfolio pages and technical prototypes that combine visual design with practical functionality.',
			text2:
				'His work focuses on SvelteKit, front-end structure, automation, creative coding, usability, performance and clear content. The goal is not only to make a page look good, but to make it understandable, maintainable and useful for real visitors.'
		},

		featuredProjects: {
			title: 'Featured project directions',
			projects: [
				{
					title: 'VOX-Tech',
					text:
						'VOX-Tech is a modern web project focused on performance, SEO and clear digital communication. The platform presents web services, website checks and online visibility reports in a structured way.'
				},
				{
					title: 'LUMO',
					text:
						'LUMO is an interactive concept for auditively impaired athletes. It explores how visual and tactile feedback can make sports activities easier to follow and more accessible.'
				},
				{
					title: 'AnimeShow',
					text:
						'AnimeShow is a streaming-service concept for anime fans, featuring filters, schedules, rankings, news sections and a modern entertainment-focused interface.'
				}
			]
		},

		servicesOverview: {
			title: 'What Toon builds',
			items: [
				'Modern portfolio websites with strong visual design and clear page structure',
				'Interactive web applications using SvelteKit, React, JavaScript and TypeScript',
				'SEO-focused landing pages with readable content, metadata and semantic HTML',
				'Creative digital concepts, prototypes, small tools and user interface experiments',
				'Technical tools, dashboards and custom web-based systems for practical workflows'
			]
		},

		technologies: {
			title: 'Technologies Toon uses',
			intro:
				"Toon's work usually starts with a simple question: what should this page, tool or prototype help someone do? From there he chooses technology that keeps the project maintainable and practical.",
			items: [
				'SvelteKit and Svelte 5 for fast portfolio pages and interactive web interfaces',
				'TypeScript and JavaScript for structured front-end logic',
				'HTML, CSS and SCSS for semantic layouts and responsive visual design',
				'React, PHP and Python where they fit the project or learning goal',
				'OpenSCAD, JSCAD and creative coding tools for technical experiments and 3D ideas'
			],
			externalIntro: 'For the core web stack used on this site, see the ',
			andText: ' and '
		},

		currentWork: {
			title: 'Current focus',
			text:
				'Toon is currently working on interactive SvelteKit websites, SEO-focused portfolio content, digital tools and creative technical experiments. The focus is on improving front-end structure, page performance, accessibility and the way project information is presented to real visitors.'
		},

		portfolioPurpose: {
			title: 'Why this portfolio exists',
			text1:
				"Toonvb.com collects professional work, school projects, personal experiments and technical notes in one public portfolio. It is meant to show both the visual side and the problem-solving side of Toon's work.",
			text2:
				'The site is also used as a live project: structure, metadata, performance, accessibility and content quality are improved over time instead of treated as one-time tasks.',
			projectsLink: "View Toon's web development projects",
			aboutLink: 'Read more about Toon van Berkel',
			contactLink: 'Contact Toon van Berkel about a project'
		},

		faq: {
			title: 'Questions about Toonvb.com',
			items: [
				{
					question: 'Who is Toon van Berkel?',
					answer:
						'Toon van Berkel is a Creative Software Developer and CMGT student who builds modern websites, interactive applications and digital portfolio projects.'
				},
				{
					question: 'What kind of projects does Toon create?',
					answer:
						'Toon creates portfolio websites, web applications, interactive prototypes, SEO-focused pages, creative digital concepts and practical tools.'
				},
				{
					question: 'Which technologies does Toon use?',
					answer:
						'Toon works with technologies such as SvelteKit, React, JavaScript, TypeScript, PHP, Python, HTML, CSS, SCSS and modern front-end development tools.'
				},
				{
					question: 'Can Toon build SEO-friendly websites?',
					answer:
						'Yes. Toon focuses on clean structure, readable content, performance, metadata, accessibility and user-friendly website layouts.'
				}
			]
		}
	},

	'nl-nl': {
		seoIntro: {
			title: 'Praktische webdevelopment met een creatieve aanpak',
			text1:
				'Toon van Berkel is een Creative Software Developer en CMGT-student uit de regio Rotterdam. Hij bouwt moderne websites, interactieve webapplicaties, portfoliopagina’s en technische prototypes die visueel ontwerp combineren met praktische functionaliteit.',
			text2:
				'Zijn werk richt zich op SvelteKit, front-end structuur, automation, creative coding, gebruiksvriendelijkheid, performance en duidelijke content. Het doel is niet alleen dat een pagina er goed uitziet, maar ook dat deze begrijpelijk, onderhoudbaar en nuttig is voor echte bezoekers.'
		},

		featuredProjects: {
			title: 'Uitgelichte projectrichtingen',
			projects: [
				{
					title: 'VOX-Tech',
					text:
						'VOX-Tech is een modern webproject gericht op performance, SEO en duidelijke digitale communicatie. Het platform presenteert webservices, websitechecks en rapportages rondom online zichtbaarheid.'
				},
				{
					title: 'LUMO',
					text:
						'LUMO is een interactief concept voor auditief beperkte sporters. Het onderzoekt hoe visuele en voelbare feedback sportactiviteiten toegankelijker en beter te volgen kan maken.'
				},
				{
					title: 'AnimeShow',
					text:
						'AnimeShow is een streamingservice-concept voor animefans, met filters, schema’s, ranglijsten, nieuwssecties en een moderne entertainmentgerichte interface.'
				}
			]
		},

		servicesOverview: {
			title: 'Wat Toon bouwt',
			items: [
				'Moderne portfolio-websites met sterk visueel ontwerp en duidelijke paginastructuur',
				'Interactieve webapplicaties met SvelteKit, React, JavaScript en TypeScript',
				'SEO-gerichte landingspagina’s met leesbare content, metadata en semantische HTML',
				'Creatieve digitale concepten, prototypes, kleine tools en interface-experimenten',
				'Technische tools, dashboards en maatwerk websystemen voor praktische workflows'
			]
		},

		technologies: {
			title: 'Technologieën die Toon gebruikt',
			intro:
				'Toons werk begint meestal met een simpele vraag: wat moet deze pagina, tool of prototype voor iemand oplossen? Daarna kiest hij technologie die het project praktisch en onderhoudbaar houdt.',
			items: [
				'SvelteKit en Svelte 5 voor snelle portfoliopagina’s en interactieve webinterfaces',
				'TypeScript en JavaScript voor gestructureerde front-end logica',
				'HTML, CSS en SCSS voor semantische layouts en responsive visual design',
				'React, PHP en Python wanneer dat past bij het project of leerdoel',
				'OpenSCAD, JSCAD en creative coding tools voor technische experimenten en 3D-ideeën'
			],
			externalIntro: 'Voor de kern van de webstack op deze site, bekijk de ',
			andText: ' en '
		},

		currentWork: {
			title: 'Huidige focus',
			text:
				'Toon werkt momenteel aan interactieve SvelteKit-websites, SEO-gerichte portfoliocontent, digitale tools en creatieve technische experimenten. De focus ligt op betere front-end structuur, performance, toegankelijkheid en duidelijke projectinformatie voor echte bezoekers.'
		},

		portfolioPurpose: {
			title: 'Waarom dit portfolio bestaat',
			text1:
				'Toonvb.com verzamelt professioneel werk, schoolprojecten, persoonlijke experimenten en technische notities op één publieke plek. Het portfolio laat zowel de visuele kant als de probleemoplossende kant van Toons werk zien.',
			text2:
				'De site wordt ook gebruikt als live project: structuur, metadata, performance, toegankelijkheid en contentkwaliteit worden stap voor stap verbeterd.',
			projectsLink: 'Bekijk Toons webdevelopment projecten',
			aboutLink: 'Lees meer over Toon van Berkel',
			contactLink: 'Neem contact op met Toon van Berkel'
		},

		faq: {
			title: 'Vragen over Toonvb.com',
			items: [
				{
					question: 'Wie is Toon van Berkel?',
					answer:
						'Toon van Berkel is een Creative Software Developer en CMGT-student die moderne websites, interactieve applicaties en digitale portfolio-projecten bouwt.'
				},
				{
					question: 'Wat voor projecten maakt Toon?',
					answer:
						'Toon maakt portfolio-websites, webapplicaties, interactieve prototypes, SEO-gerichte pagina’s, creatieve digitale concepten en praktische tools.'
				},
				{
					question: 'Welke technologieën gebruikt Toon?',
					answer:
						'Toon werkt met technologieën zoals SvelteKit, React, JavaScript, TypeScript, PHP, Python, HTML, CSS, SCSS en moderne front-end development tools.'
				},
				{
					question: 'Kan Toon SEO-vriendelijke websites bouwen?',
					answer:
						'Ja. Toon focust op duidelijke structuur, leesbare content, performance, metadata, toegankelijkheid en gebruiksvriendelijke website-indelingen.'
				}
			]
		}
	}
};
