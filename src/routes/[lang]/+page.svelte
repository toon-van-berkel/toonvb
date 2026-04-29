<script lang="ts">
    import MainBanner from '$lib/pages/components/MainBanner.svelte';

    import { content } from '$lib/typescript/content/pages/home';
    import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';

    const homeContent = $derived(
        content[$currentLanguage] ?? content[defaultLanguage]
    );
</script>

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