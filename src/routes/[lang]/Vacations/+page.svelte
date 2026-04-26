<script>
    import { base } from "$app/paths";
    import { currentLanguage } from "$lib/typescript/pref/language";
</script>

<main class="normalize">
    <section class="section">
        <h1>Vacations</h1>
        <p>Find information on the vacations that Toon van Berkel has gone on.</p>

        <div class="card-wrapper">
            <a href={`${base}/${$currentLanguage}/Vacations/Mallorca-2026`}>
                <article>
                    <img 
                        src="https://scontent.fpmi3-1.fna.fbcdn.net/v/t39.30808-6/674569317_122129847525133142_5151357731418312407_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_ohc=0vs8u7xkv0gQ7kNvwF_vanu&_nc_oc=AdqwKAJabh1WfEC443Tf8aNyRN5DlbA9PU4xfYzyMVqjAfiYPk-uwwmCBiCX0jkV7m4&_nc_zt=23&_nc_ht=scontent.fpmi3-1.fna&_nc_gid=2kn6X9wwE9-Qtg2qLtD7-w&_nc_ss=7b2a8&oh=00_Af3v5NL3aWtrHE4ClOvVERo4Q7k_HUXSoJZdnjVDhC2kZA&oe=69F2C4AF" 
                        alt="Mallorca 2026 vacation preview"
                    >

                    <span class="card-tag">Vacation</span>

                    <h2>Mallorca - 2026</h2>

                    <p>
                        See all videos and pictures of the vacation to Mallorca in 2026.
                        Use an interactive map to see where Toon has been.
                    </p>

                    <span class="card-link">View vacation →</span>
                </article>
            </a>
        </div>
    </section>
</main>

<style>
.card-wrapper {
    width: min(100%, 430px);
    max-width: 430px;
    margin: 32px 0 0;
    display: grid;
    grid-template-columns: 1fr;
}

.card-wrapper a {
    display: block;
    color: inherit;
    text-decoration: none;
    border-radius: 24px;
}

.card-wrapper article {
    position: relative;
    width: 100%;
    height: 380px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border-radius: 24px;
    background-color: var(--card-bg);
    box-shadow: 0 18px 42px rgba(57, 46, 30, 0.22);
    isolation: isolate;
}

.card-wrapper article img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    z-index: -4;
    transform: scale(1.02);
    transition: transform 0.5s ease, filter 0.5s ease;
}

/* Overlay over the full image */
.card-wrapper article::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -3;
    background:
        linear-gradient(
            to bottom,
            rgba(57, 46, 30, 0.08),
            rgba(57, 46, 30, 0.28) 42%,
            rgba(57, 46, 30, 0.68)
        );
}

/* Readable text panel */
.card-wrapper article::after {
    content: "";
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    height: 225px;
    z-index: -1;
    border-radius: 20px;
    background: rgba(132, 97, 54, 0.5);
    border-left: 4px solid var(--link-on-dark);
    box-shadow: 0 14px 34px rgba(57, 46, 30, 0.28);
    backdrop-filter: blur(10px);
}

.card-wrapper article h2,
.card-wrapper article p,
.card-wrapper article .card-tag,
.card-wrapper article .card-link {
    position: relative;
    z-index: 1;
    max-width: calc(100% - 36px);
    margin-left: 18px;
    margin-right: 18px;
}

.card-wrapper article .card-tag {
    display: inline-block;
    width: fit-content;
    margin-bottom: 8px;
    padding: 5px 11px;
    border-radius: 999px;
    background: rgba(253, 242, 208, 0.18);
    color: var(--link-on-dark);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.card-wrapper article h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: var(--link-on-dark);
    font-size: clamp(1.8rem, 4vw, 2.35rem);
    line-height: 1.05;
}

.card-wrapper article p {
    margin-top: 0;
    margin-bottom: 14px;
    color: #fff7df;
    font-size: 0.92rem;
    line-height: 1.45;
}

.card-wrapper article .card-link {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 12px;
    padding-bottom: 4px;
    color: var(--link-on-dark);
    font-size: 0.9rem;
    font-weight: 700;
    transition: transform 0.3s ease, color 0.3s ease;
}

.card-wrapper a:hover article img {
    transform: scale(1.07);
    filter: brightness(1.04);
}

.card-wrapper a:hover .card-link {
    transform: translateX(5px);
    color: var(--link-on-dark-hover);
}

.card-wrapper a:focus-visible {
    outline: 4px solid var(--link-on-dark-hover);
    outline-offset: 6px;
}

@media (max-width: 760px) {
    .card-wrapper {
        width: min(100%, 92vw);
        max-width: 390px;
        margin-top: 28px;
    }

    .card-wrapper article {
        height: 440px;
        padding: 18px;
        border-radius: 22px;
    }

    .card-wrapper article::after {
        left: 18px;
        right: 18px;
        bottom: 18px;
        height: 235px;
        border-radius: 20px;
    }

    .card-wrapper article h2,
    .card-wrapper article p,
    .card-wrapper article .card-tag,
    .card-wrapper article .card-link {
        margin-left: 18px;
        margin-right: 18px;
        max-width: calc(100% - 36px);
    }

    .card-wrapper article h2 {
        font-size: 2rem;
    }
}
@media (max-width: 400px) {
    .card-wrapper article {
        height: 270px;
    }
    .card-wrapper article::after {
        height: 135px;
    }
    .card-wrapper article h2 {
        font-size: 1.5em;
    }
    .card-wrapper article p {
        display: none;
    }
}
</style>