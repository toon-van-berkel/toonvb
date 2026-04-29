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

    currentWork: {
        title: string;
        text: string;
    };

    faq: {
        title: string;
        items: FaqItem[];
    };
};

export const content: Record<SupportedLanguage, HomeContent> = {
    'en-gb': {
        seoIntro: {
            title: 'Creative Software Developer focused on modern web experiences',
            text1: `Toon van Berkel is a Creative Software Developer from the Rotterdam area, focused on building modern websites, interactive web applications and digital portfolio projects. His work combines clean front-end design, practical functionality, performance, SEO and user-friendly interfaces.`,
            text2: `Through projects such as VOX-Tech, LUMO, AnimeShow, ElectroVibe and custom SvelteKit/React applications, Toon creates digital experiences that are visually strong, technically structured and easy to use.`
        },

        featuredProjects: {
            title: 'Featured Projects',
            projects: [
                {
                    title: 'VOX-Tech',
                    text: `VOX-Tech is a modern web project focused on performance, SEO and clear digital communication. The platform presents web services, website checks and online visibility reports.`
                },
                {
                    title: 'LUMO',
                    text: `LUMO is an interactive concept for auditively impaired athletes, using visual and tactile feedback to improve accessibility during sports activities.`
                },
                {
                    title: 'AnimeShow',
                    text: `AnimeShow is a streaming-service concept for anime fans, featuring filters, schedules, rankings, news sections and a modern entertainment-focused interface.`
                }
            ]
        },

        servicesOverview: {
            title: 'What Toon Builds',
            items: [
                'Modern portfolio websites with strong visual design',
                'Interactive web applications using SvelteKit, React and JavaScript',
                'SEO-focused landing pages and structured website content',
                'Creative digital concepts, prototypes and user interfaces',
                'Technical tools, dashboards and custom web-based systems'
            ]
        },

        currentWork: {
            title: 'Currently Working On',
            text: `Toon is currently working on several web and software projects, including interactive SvelteKit websites, SEO-focused portfolio content, digital tools and creative technical experiments. These projects combine front-end development, usability, visual design and practical problem-solving.`
        },

        faq: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Who is Toon van Berkel?',
                    answer: `Toon van Berkel is a Creative Software Developer who builds modern websites, interactive applications and digital portfolio projects.`
                },
                {
                    question: 'What kind of projects does Toon create?',
                    answer: `Toon creates portfolio websites, web applications, interactive prototypes, SEO-focused pages and creative digital concepts.`
                },
                {
                    question: 'Which technologies does Toon use?',
                    answer: `Toon works with technologies such as SvelteKit, React, JavaScript, TypeScript, PHP, HTML, CSS and modern front-end development tools.`
                },
                {
                    question: 'Can Toon build SEO-friendly websites?',
                    answer: `Yes. Toon focuses on clean structure, readable content, performance, metadata and user-friendly website layouts.`
                }
            ]
        }
    },

    'nl-nl': {
        seoIntro: {
            title: 'Creative Software Developer met focus op moderne webervaringen',
            text1: `Toon van Berkel is een Creative Software Developer uit de regio Rotterdam, gericht op het bouwen van moderne websites, interactieve webapplicaties en digitale portfolio-projecten. Zijn werk combineert strak front-end design, praktische functionaliteit, performance, SEO en gebruiksvriendelijke interfaces.`,
            text2: `Met projecten zoals VOX-Tech, LUMO, AnimeShow, ElectroVibe en maatwerk SvelteKit/React-applicaties creëert Toon digitale ervaringen die visueel sterk, technisch gestructureerd en prettig in gebruik zijn.`
        },

        featuredProjects: {
            title: 'Uitgelichte projecten',
            projects: [
                {
                    title: 'VOX-Tech',
                    text: `VOX-Tech is een modern webproject gericht op performance, SEO en duidelijke digitale communicatie. Het platform presenteert webservices, websitechecks en rapportages rondom online zichtbaarheid.`
                },
                {
                    title: 'LUMO',
                    text: `LUMO is een interactief concept voor auditief beperkte sporters, waarbij visuele en voelbare feedback wordt gebruikt om toegankelijkheid tijdens sportactiviteiten te verbeteren.`
                },
                {
                    title: 'AnimeShow',
                    text: `AnimeShow is een streamingservice-concept voor animefans, met filters, schema’s, ranglijsten, nieuwssecties en een moderne entertainmentgerichte interface.`
                }
            ]
        },

        servicesOverview: {
            title: 'Wat Toon bouwt',
            items: [
                'Moderne portfolio-websites met een sterk visueel ontwerp',
                'Interactieve webapplicaties met SvelteKit, React en JavaScript',
                'SEO-gerichte landingspagina’s en gestructureerde websitecontent',
                'Creatieve digitale concepten, prototypes en gebruikersinterfaces',
                'Technische tools, dashboards en maatwerk websystemen'
            ]
        },

        currentWork: {
            title: 'Waar Toon momenteel aan werkt',
            text: `Toon werkt momenteel aan verschillende web- en softwareprojecten, waaronder interactieve SvelteKit-websites, SEO-gerichte portfoliocontent, digitale tools en creatieve technische experimenten. Deze projecten combineren front-end development, gebruiksvriendelijkheid, visueel ontwerp en praktische probleemoplossing.`
        },

        faq: {
            title: 'Veelgestelde vragen',
            items: [
                {
                    question: 'Wie is Toon van Berkel?',
                    answer: `Toon van Berkel is een Creative Software Developer die moderne websites, interactieve applicaties en digitale portfolio-projecten bouwt.`
                },
                {
                    question: 'Wat voor projecten maakt Toon?',
                    answer: `Toon maakt portfolio-websites, webapplicaties, interactieve prototypes, SEO-gerichte pagina’s en creatieve digitale concepten.`
                },
                {
                    question: 'Welke technologieën gebruikt Toon?',
                    answer: `Toon werkt met technologieën zoals SvelteKit, React, JavaScript, TypeScript, PHP, HTML, CSS en moderne front-end development tools.`
                },
                {
                    question: 'Kan Toon SEO-vriendelijke websites bouwen?',
                    answer: `Ja. Toon focust op duidelijke structuur, leesbare content, performance, metadata en gebruiksvriendelijke website-indelingen.`
                }
            ]
        }
    }
};