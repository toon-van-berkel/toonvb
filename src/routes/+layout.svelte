<script lang="ts">
    import DevConsole from "$lib/components/dev/DevConsole.svelte";
    import { handleTheme } from "$lib/scripts/theme";
    import { onMount } from "svelte";

    onMount(() => {
        handleTheme();
    })
</script>
<!-- <script lang="ts">
    import { onMount } from "svelte";

    import { dev } from "$app/environment";
    onMount(() => {
        if (dev) {
console.log(
    "%c Development mode is active. ",
    `
        width: 100%;
        font-size: 15px;
        font-weight: 700;
        color: #c026ff;
        background: #17111f;
        padding: 8px 16px;
        border: 1px solid #c026ff;
        border-radius: 8px;
    `
);
        }
    });

    import "$lib/styles/main.scss";

    type Props = {
        children?: import("svelte").Snippet;
    };

    let { children }: Props = $props();

    type NavItem = {
        label: string;
        href: string;
        current?: boolean;
    };

    const navItems: NavItem[] = [
        { label: "Work", href: "/", current: true },
        { label: "About", href: "/" },
        { label: "Experience", href: "/" },
        { label: "Blog", href: "/" }
    ];

    let menuOpen = $state(false);

    function closeMenu() {
        menuOpen = false;
    }
</script>

<div class="nav-container" class:is-open={menuOpen}>
    <div class="nav">
        <a href="/" class="nav-logo" aria-label="Toonvb.com home" onclick={closeMenu}>
            <span>Toonvb</span><span>.com</span>
        </a>

        <button
            class="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onclick={() => (menuOpen = !menuOpen)}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>

        <nav id="primary-navigation" class="nav-links" aria-label="Primary navigation">
            {#each navItems as item}
                <a
                    href={item.href}
                    class:active={item.current}
                    aria-current={item.current ? "page" : undefined}
                    onclick={closeMenu}
                >
                    {item.label}
                </a>
            {/each}
        </nav>

        <a href="/contact" class="nav-cta" onclick={closeMenu}>
            Let's talk
        </a>
    </div>
</div>
{@render children?.()} -->

<DevConsole />