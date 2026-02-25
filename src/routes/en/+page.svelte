<script lang="ts">
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
        <span class="nav__brand"><a href="/">Toonvb.com</a></span>

        <button
            class="nav__toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onclick={toggleMenu}
        >
            <img src={"/menu-" + (menuOpen ? "open" : "closed") + ".png"} alt="" />
        </button>

        <ul class={"nav__links " + (menuOpen ? "open" : "")}>
            <li><a href="/Projects" onclick={closeMenu}>Projects</a></li>
            <li><a href="/Gallery" onclick={closeMenu}>Gallery</a></li>
            <li><a href="/who-am-i" onclick={closeMenu}>Who am i?</a></li>
            <li><a href="/contact" onclick={closeMenu}>Contact</a></li>
        </ul>
    </div>
</nav>

<main>
    <section class="banner">
        <div class="banner__text">
            <article class="banner__card">
                <h1>Toon van Berkel</h1>
                <h2>Creative Software Developer</h2>
                <p>
                    This portfolio is a collection of projects, experiments, and ideas that
                    Toon van Berkel has built over the years. From front-end design and
                    animations to complete web apps—everything with a focus on creativity,
                    clean execution, and the joy of building.
                </p>
            </article>
        </div>
        <img src="/Banner.png" alt="Banner" class="banner__img" />
    </section>

    <section class="normal">
        <div class="section">            
            <h2>Projects</h2>
            <p>
                Toon van Berkel has worked on a wide range of projects—coding, photography, 
                drone work, 3D printing, logo design, poster design, and website design, to 
                name a few. He enjoys the variety that comes with creating new things; if 
                it’s always the same, it’s simply not for him.
            </p>
        </div>
    </section>
</main>
<!-- 
 #B6A995
 #846136
 #392E1E
 #5E3F20
  -->
