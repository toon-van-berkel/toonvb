<script lang="ts">
    import mouseIcon from "$lib/assets/icons/white/icon-white-mouse.svg";
</script>

<section class="hero" aria-labelledby="hero-title">
    <div class="hero__content">
        <p class="eyebrow">Developer portfolio</p>
        <h1 id="hero-title">Technology is a playground for the creative.</h1>
        <p class="hero__intro">
            I build digital interfaces with a sharp front-end focus, clean structure and a visual style that feels technical without becoming noisy.
        </p>

        <div class="hero__actions" aria-label="Primary actions">
            <a class="button button--primary" href="#work">View work</a>
            <a class="button button--ghost" href="#experience">Tech stack</a>
        </div>
    </div>

    <div class="hero__visual" aria-label="Portrait of Toon van Berkel">
        <img class="hero-image" src="/toon_van_berkel-Aurapose.webp" alt="Toon van Berkel" />
        <div class="hero__signal-card">
            <img src={mouseIcon} alt="" loading="lazy" />
            <strong>Scroll down to see more</strong>
        </div>
    </div>
</section>
