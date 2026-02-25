<script lang="ts">
    import { base } from "$app/paths";
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<nav class="nav">
    <div class="nav__inner">
        <span class="nav__brand"><a href="/{base}">Toonvb.com</a></span>

        <button
            class="nav__toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onclick={toggleMenu}
        >
            <img src={`${base}/menu-` + (menuOpen ? "open" : "closed") + ".png"} alt="" />
        </button>

        <ul class={"nav__links " + (menuOpen ? "open" : "")}>
            <!-- 
                <li><a href="{base}/Projects" onclick={closeMenu}>Projects</a></li>
                <li><a href="{base}/Gallery" onclick={closeMenu}>Gallery</a></li>
                <li><a href="{base}/who-am-i" onclick={closeMenu}>Who am i?</a></li>
                <li><a href="{base}/contact" onclick={closeMenu}>Contact</a></li> 
            -->
            <li><a href="{base}/" onclick={closeMenu}>Projects</a></li>
            <li><a href="{base}/" onclick={closeMenu}>Gallery</a></li>
            <li><a href="{base}/" onclick={closeMenu}>Who am i?</a></li>
            <li><a href="{base}/" onclick={closeMenu}>Contact</a></li> 
        </ul>
    </div>
</nav>