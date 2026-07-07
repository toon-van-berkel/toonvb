<script lang="ts">
    import DataCableBackground  from "$lib/components/background/DataCableBackground.svelte";
    import Hero                 from "$lib/components/portfolio/Hero.svelte";
    import SkillBadge           from "$lib/components/portfolio/SkillBadge.svelte";

    import expo_Icon                from "$lib/assets/icons/white/icon-white-expo.svg";

    import laravel_Icon             from "$lib/assets/icons/color/icon-color-laravel.svg";
    import github_Icon              from "$lib/assets/icons/color/icon-color-github.svg";
    import css3_Icon                from "$lib/assets/icons/color/icon-color-css3.svg";
    import figma_Icon               from "$lib/assets/icons/color/icon-color-figma.svg";
    import git_Icon                 from "$lib/assets/icons/color/icon-color-git.svg";
    import html5_Icon               from "$lib/assets/icons/color/icon-color-html5.svg";
    import java_Icon                from "$lib/assets/icons/color/icon-color-java.svg";
    import javascript_Icon          from "$lib/assets/icons/color/icon-color-javascript.svg";
    import mysql_Icon               from "$lib/assets/icons/color/icon-color-mysql.svg";
    import nodeJs_Icon              from "$lib/assets/icons/color/icon-color-node_js.svg";
    import openScad_Icon            from "$lib/assets/icons/color/icon-color-open_scad.svg";
    import php_Icon                 from "$lib/assets/icons/color/icon-color-php.svg";
    import react_Icon               from "$lib/assets/icons/color/icon-color-react.svg";
    import scss2_Icon               from "$lib/assets/icons/color/icon-color-scss2.svg";
    import svelte_Icon              from "$lib/assets/icons/color/icon-color-svelte.svg";
    import tailwind_Icon            from "$lib/assets/icons/color/icon-color-tailwind.svg";
    import typescript_Icon          from "$lib/assets/icons/color/icon-color-typescript.svg";
    import visualStudioCode_Icon    from "$lib/assets/icons/color/icon-color-visual_studio_code.svg";
    import visualStudio_Icon        from "$lib/assets/icons/color/icon-color-visual_studio.svg";
    import mongoDb_Icon             from "$lib/assets/icons/color/icon-color-mongo_db.svg";
    import python_Icon              from "$lib/assets/icons/color/icon-color-python.svg";
    import materialUi_Icon          from "$lib/assets/icons/color/icon-color-material_ui.svg";
    import vue_Icon                 from "$lib/assets/icons/color/icon-color-vue.svg";
    import gsap_Icon                from "$lib/assets/icons/color/icon-color-gsap.svg";
    import bootstrap_Icon           from "$lib/assets/icons/color/icon-color-bootstrap.svg";
    import bulma_Icon               from "$lib/assets/icons/color/icon-color-bulma.svg";
    import npm_Icon                 from "$lib/assets/icons/color/icon-color-npm.svg";
    import chartJs_Icon             from "$lib/assets/icons/color/icon-color-chartjs.svg";
    
    import c_Icon                   from "$lib/assets/icons/color/icon-color-c.svg";
    import cPlusPlus_Icon           from "$lib/assets/icons/color/icon-color-c_plus_plus.svg";
    import cSharp_Icon              from "$lib/assets/icons/color/icon-color-c_sharp.svg";
    import rust_Icon                from "$lib/assets/icons/color/icon-color-rust.svg";
    import tauri_Icon               from "$lib/assets/icons/color/icon-color-tauri.svg";


    type Props = {
        animatedBackground?:    boolean;
        class?:                 string;
        children?:              import("svelte").Snippet;
    };

    type Skill = {
        name:           string;
        icon:           string;
        category:       string;
        status:         "experienced" | "learning";
        borderColor:    string;
        shadowColor:    string;
    };

    const skills: Skill[] = [
        { name: "SvelteKit",    icon: svelte_Icon,              category: "Frontend",       status: "experienced",  borderColor: "#FF3E0050", shadowColor: "#FF3E0020"},
        { name: "React",        icon: react_Icon,               category: "Frontend",       status: "experienced",  borderColor: "#53C1DE50", shadowColor: "#53C1DE20"},
        { name: "JavaScript",   icon: javascript_Icon,          category: "Language",       status: "experienced",  borderColor: "#F7DF1E50", shadowColor: "#F7DF1E20"},
        { name: "TypeScript",   icon: typescript_Icon,          category: "Language",       status: "experienced",  borderColor: "#007ACC50", shadowColor: "#007ACC20"},
        { name: "Python",       icon: python_Icon,              category: "Language",       status: "experienced",  borderColor: "#9BA17150", shadowColor: "#9BA17120"},
        { name: "Vue",          icon: vue_Icon,                 category: "Language",       status: "experienced",  borderColor: "#41B88350", shadowColor: "#41B88320"},
        { name: "HTML",         icon: html5_Icon,               category: "Markup",         status: "experienced",  borderColor: "#F1652950", shadowColor: "#F1652920"},
        { name: "CSS",          icon: css3_Icon,                category: "Styling",        status: "experienced",  borderColor: "#33AADD50", shadowColor: "#33AADD20"},
        { name: "SCSS",         icon: scss2_Icon,               category: "Styling",        status: "experienced",  borderColor: "#CC669950", shadowColor: "#CC669920"},
        { name: "Tailwind",     icon: tailwind_Icon,            category: "Styling",        status: "experienced",  borderColor: "#44A8B350", shadowColor: "#44A8B320"},
        { name: "Material UI",  icon: materialUi_Icon,          category: "Styling",        status: "experienced",  borderColor: "#00B0FF50", shadowColor: "#00B0FF20"},
        { name: "Bootstrap",    icon: bootstrap_Icon,           category: "Styling",        status: "experienced",  borderColor: "#8F13FC50", shadowColor: "#8F13FC20"},
        { name: "Bulma",        icon: bulma_Icon,               category: "styling",        status: "experienced",  borderColor: "#00D1B250", shadowColor: "#00D1B220"},
        { name: "gsap",         icon: gsap_Icon,                category: "Animation",      status: "experienced",  borderColor: "#8AC64050", shadowColor: "#8AC64020"},
        { name: "Chart.js",     icon: chartJs_Icon,             category: "library",        status: "experienced",  borderColor: "#FFCE5650", shadowColor: "#FFCE5620"},
        { name: "PHP",          icon: php_Icon,                 category: "Backend",        status: "experienced",  borderColor: "#8993BE50", shadowColor: "#8993BE20"},
        { name: "Node.js",      icon: nodeJs_Icon,              category: "Runtime",        status: "experienced",  borderColor: "#8CC84B50", shadowColor: "#8CC84B20"},
        { name: "Git",          icon: git_Icon,                 category: "Workflow",       status: "experienced",  borderColor: "#EE513B50", shadowColor: "#EE513B20"},
        { name: "GitHub",       icon: github_Icon,              category: "Workflow",       status: "experienced",  borderColor: "#5C6BC050", shadowColor: "#5C6BC020"},
        { name: "OpenSCAD",     icon: openScad_Icon,            category: "Creative code",  status: "experienced",  borderColor: "#F6CE2E50", shadowColor: "#F6CE2E20"},
        { name: "Visual Studio", icon: visualStudio_Icon,       category: "Tooling",        status: "experienced",  borderColor: "#854CC750", shadowColor: "#854CC720"},
        { name: "VS Code",      icon: visualStudioCode_Icon,    category: "Tooling",        status: "experienced",  borderColor: "#007ACC50", shadowColor: "#007ACC20"},
        { name: "npm",          icon: npm_Icon,                 category: "Tooling",        status: "experienced",  borderColor: "#CB383750", shadowColor: "#CB383720"},
        { name: "Figma",        icon: figma_Icon,               category: "Design",         status: "experienced",  borderColor: "#0ACF8350", shadowColor: "#0ACF8320"},
        { name: "Expo",         icon: expo_Icon,                category: "Mobile",         status: "experienced",  borderColor: "#ffffff50", shadowColor: "#ffffff20"},
        { name: "MongoDB",      icon: mongoDb_Icon,             category: "Database",       status: "experienced",  borderColor: "#6CAC4850", shadowColor: "#6CAC4820"},
        { name: "MySQL",        icon: mysql_Icon,               category: "Database",       status: "experienced",  borderColor: "#5D87A150", shadowColor: "#5D87A120"},

        { name: "Rust",         icon: rust_Icon,                category: "Systems",        status: "learning",     borderColor: "#FF704350", shadowColor: "#FF704320"},
        { name: "Tauri",        icon: tauri_Icon,               category: "Systems",        status: "learning",     borderColor: "#FFC13150", shadowColor: "#FFC13120"},
        { name: "C",            icon: c_Icon,                   category: "Systems",        status: "learning",     borderColor: "#00599C50", shadowColor: "#00599C20"},
        { name: "C++",          icon: cPlusPlus_Icon,           category: "Systems",        status: "learning",     borderColor: "#1B598E50", shadowColor: "#1B598E20"},
        { name: "C#",           icon: cSharp_Icon,              category: "Platform",       status: "learning",     borderColor: "#39009150", shadowColor: "#39009120"},
        { name: "Java",         icon: java_Icon,                category: "Backend",        status: "learning",     borderColor: "#5382A150", shadowColor: "#5382A120"},
        { name: "Laravel",      icon: laravel_Icon,             category: "Framework",      status: "learning",     borderColor: "#F8040450", shadowColor: "#F8040420"}
    ];

    const experiencedSkills = skills.filter((skill) => skill.status === "experienced");
    const futureSkills      = skills.filter((skill) => skill.status === "learning");

    let { animatedBackground = true, class: className = "", children }: Props = $props();
</script>

<div class={`page ${className}`}>
    <DataCableBackground animated={animatedBackground} />

    <main id="top" class="portfolio">
        <Hero />

        <section id="work" class="section section--work" aria-labelledby="work-title">
            <div class="section__header">
                <p class="eyebrow">Work</p>
                <h2 id="work-title">Modern web experiences with a technical edge.</h2>
            </div>

            <div class="work-grid">
                <article class="experience-card">
                    <span class="card-kicker">Interface engineering</span>
                    <h3>Responsive frontends</h3>
                    <p>Layouts that stay balanced across desktop, tablet and mobile, with clear hierarchy and no horizontal overflow.</p>
                </article>

                <article class="experience-card">
                    <span class="card-kicker">Product polish</span>
                    <h3>Premium visual systems</h3>
                    <p>Dark, futuristic UI with restrained motion, glass layers, readable typography and reusable styling primitives.</p>
                </article>

                <article class="experience-card">
                    <span class="card-kicker">Code foundations</span>
                    <h3>Maintainable builds</h3>
                    <p>SvelteKit, TypeScript and SCSS structure that keeps components focused and the project easier to extend.</p>
                </article>
            </div>
        </section>

        <section id="experience" class="section section--experience" aria-labelledby="experience-title">
            <div class="section__header">
                <p class="eyebrow">Experience</p>
                <h2 id="experience-title">A practical stack split by confidence level.</h2>
            </div>

            <div class="experience-grid">
                <article class="experience-card experience-card--wide">
                    <div class="experience-card__header">
                        <div>
                            <span class="card-kicker">Experienced</span>
                            <h3>Production-ready tools</h3>
                        </div>
                    </div>

                    <div class="skills-grid">
                        {#each experiencedSkills as skill}
                            <SkillBadge {...skill} />
                        {/each}
                    </div>
                </article>
            </div>
        </section>

        <section id="future" class="section section--future" aria-labelledby="future-title">
            <div class="section__header">
                <p class="eyebrow">For the future</p>
                <h2 id="future-title">Tools and languages I am expanding into next.</h2>
            </div>

            <article class="experience-card experience-card--wide">
                <div class="skills-grid skills-grid--compact">
                    {#each futureSkills as skill}
                        <SkillBadge {...skill} />
                    {/each}
                </div>
            </article>
        </section>

        <section id="about" class="section section--about" aria-labelledby="about-title">
            <div class="section__header">
                <p class="eyebrow">About</p>
                <h2 id="about-title">Creative developer energy, cleaner execution.</h2>
            </div>

            <p class="about-copy">
                This portfolio keeps the dark purple-blue identity, but tightens the layout around the essentials: a stronger hero, clearer skill cards, a modern navigation system and calmer background visuals.
            </p>
        </section>

        <section id="blog" class="section section--blog" aria-labelledby="blog-title">
            <div class="section__header">
                <p class="eyebrow">Blog</p>
                <h2 id="blog-title">Notes and experiments can live here next.</h2>
            </div>
        </section>

        <section id="contact" class="section section--contact" aria-labelledby="contact-title">
            <div class="contact-panel">
                <div>
                    <p class="eyebrow">Contact</p>
                    <h2 id="contact-title">Let's build something polished.</h2>
                </div>
                <a class="button button--primary" href="mailto:hello@toonvb.com">hello@toonvb.com</a>
            </div>
        </section>

        {@render children?.()}
    </main>
</div>
