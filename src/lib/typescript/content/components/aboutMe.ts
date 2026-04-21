import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Aboutme = {
    title: 	    string;
    text1: 	    string;
    text2: 		string;
    text3: 		string;
    text4: 		string;
    text5: 		string;
};

export const content: Record<SupportedLanguage, Aboutme> = {
    'en-gb': {
        title:      'About Toon van Berkel',
        text1:      `Toon van Berkel is a creative software developer with a strong 
                    passion for technology, design, and digital innovation. He focuses 
                    on building modern websites, interactive applications, and user-friendly 
                    digital experiences that combine clean visuals with practical functionality. 
                    For Toon, development is not just about writing code, but about creating 
                    solutions that feel intuitive, perform well, and leave a lasting impression.`,
        text2:      `His interest in technology started at a young age. What began with curiosity 
                    and experimentation grew into a serious passion for software, web development, 
                    and problem-solving. Since then, Toon has continued to expand his skills across 
                    both front-end and back-end development, working with technologies such as 
                    JavaScript, Svelte, React, Python, PHP, and modern web tooling. He enjoys 
                    translating ideas into real products and is always looking for ways to improve 
                    performance, usability, and visual quality.`,
        text3:      `What sets Toon apart is his combination of technical thinking and creative vision. 
                    He enjoys designing interfaces that are not only functional, but also engaging and 
                    visually strong. Whether he is developing a portfolio website, building a custom 
                    platform, creating animated user experiences, or experimenting with new digital 
                    concepts, he approaches every project with enthusiasm, precision, and a drive to 
                    keep learning.`,
        text4:      `Beyond development, Toon is someone who values growth, creativity, and meaningful 
                    connections. He draws inspiration from travel, music, gaming, design, and the people 
                    around him. These interests influence the way he works: open-minded, curious, and 
                    always focused on creating something valuable. He enjoys exploring new technologies, 
                    taking on new challenges, and turning ambitious ideas into polished results.`,
        text5:      `Toon van Berkel is continuously developing himself as a professional and as a creator. 
                    His goal is to keep building digital experiences that are modern, memorable, and genuinely 
                    useful. With a mindset focused on progress and innovation, he is always ready for the next 
                    challenge.`
    },
    'nl-nl': {
        title:      'Over Toon van Berkel',
        text1:      `Toon van Berkel is een creatieve software developer met een sterke 
                    passie voor technologie, design en digitale innovatie. Hij richt zich 
                    op het bouwen van moderne websites, interactieve applicaties en 
                    gebruiksvriendelijke digitale ervaringen die strakke vormgeving combineren 
                    met praktische functionaliteit. Voor Toon draait ontwikkelen niet alleen 
                    om het schrijven van code, maar om het creëren van oplossingen die intuïtief 
                    aanvoelen, goed presteren en een blijvende indruk achterlaten.`,
        text2:      `Zijn interesse in technologie begon al op jonge leeftijd. Wat startte met 
                    nieuwsgierigheid en experimenteren groeide uit tot een serieuze passie voor 
                    software, webdevelopment en het oplossen van problemen. Sindsdien heeft Toon 
                    zijn vaardigheden verder uitgebreid op zowel front-end als back-end gebied, 
                    met technologieën zoals JavaScript, Svelte, React, Python, PHP en moderne 
                    webtools. Hij vindt het leuk om ideeën om te zetten in echte producten en is 
                    altijd op zoek naar manieren om prestaties, gebruiksvriendelijkheid en visuele 
                    kwaliteit te verbeteren.`,
        text3:      `Wat Toon onderscheidt, is zijn combinatie van technisch inzicht en creatieve visie. 
                    Hij ontwerpt graag interfaces die niet alleen functioneel zijn, maar ook aantrekkelijk 
                    en visueel sterk. Of hij nu werkt aan een portfolio website, een maatwerkplatform bouwt, 
                    geanimeerde gebruikerservaringen ontwikkelt of experimenteert met nieuwe digitale concepten, 
                    hij pakt ieder project aan met enthousiasme, precisie en de drang om te blijven leren.`,
        text4:      `Naast development is Toon iemand die waarde hecht aan groei, creativiteit en betekenisvolle 
                    connecties. Hij haalt inspiratie uit reizen, muziek, gaming, design en de mensen om hem heen. 
                    Die interesses hebben invloed op zijn manier van werken: open-minded, nieuwsgierig en altijd 
                    gericht op het creëren van iets waardevols. Hij ontdekt graag nieuwe technologieën, gaat met 
                    plezier nieuwe uitdagingen aan en zet ambitieuze ideeën om in verzorgde eindresultaten.`,
        text5:      `Toon van Berkel blijft zichzelf voortdurend ontwikkelen, zowel als professional als maker. 
                    Zijn doel is om digitale ervaringen te blijven bouwen die modern, memorabel en echt nuttig zijn. 
                    Met een mindset die gericht is op vooruitgang en innovatie staat hij altijd klaar voor de volgende uitdaging.`
    }
};