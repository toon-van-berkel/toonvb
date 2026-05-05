<script lang="ts">
    import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
    import { content } from '$lib/typescript/content/components/footer';

    const footerContent = $derived(
        content[$currentLanguage] ?? content[defaultLanguage] ?? content['en-gb']
    );

    function buildLink(link: string) {
        const lang = $currentLanguage ?? defaultLanguage;

        // External links should stay untouched
        if (link.startsWith('http')) {
            return link;
        }

        // Home page: "/" becomes "/en-gb"
        if (link === '/') {
            return `/${lang}`;
        }

        // Other pages: "/about" becomes "/en-gb/about"
        return `/${lang}${link}`;
    }

    const year = new Date().getFullYear();
</script>

{#if footerContent}
    <footer class="footer">
        <div class="footer-inner">
            <section class="footer-brand">
                <h2>{footerContent.title}</h2>
                <p>{footerContent.desc}</p>
            </section>

            <section class="footer-links">
                {#each footerContent.groups as group}
                    <div>
                        <h3>{group.title}</h3>

                        <ul>
                            {#each group.links as link}
                                <li>
                                    <a href={buildLink(link.href)}>{link.label}</a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </section>
        </div>

        <div class="footer-bottom">
            <p>© {year} {footerContent.title}. {footerContent.copy}.</p>
        </div>
    </footer>
{/if}