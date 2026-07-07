<script lang="ts">
    type Props = {
        animated?: boolean;
    };

    let { animated = true }: Props = $props();
</script>

<div class:is-animated={animated} class="data-cable-background" aria-hidden="true">
    <div class="data-cable-scene">
        <svg
            class="data-cable-svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="cable-gradient-soft" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stop-color="var(--color-secondary)" />
                    <stop offset="48%" stop-color="var(--color-primary)" />
                    <stop offset="100%" stop-color="var(--color-data)" />
                </linearGradient>

                <linearGradient id="cable-gradient-main" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stop-color="var(--color-secondary-dark)" />
                    <stop offset="42%" stop-color="var(--color-primary)" />
                    <stop offset="100%" stop-color="var(--color-data-light)" />
                </linearGradient>
            </defs>

            <path
                class="cable cable-haze cable-haze-primary"
                d="M -160 760 C 190 620, 240 790, 500 620 S 880 300, 1120 260 S 1320 250, 1600 80"
            />

            <path
                class="cable cable-core cable-core-primary"
                d="M -160 760 C 190 620, 240 790, 500 620 S 880 300, 1120 260 S 1320 250, 1600 80"
            />

            <path
                class="cable cable-haze cable-haze-secondary"
                d="M -120 860 C 180 690, 370 760, 610 530 S 910 260, 1220 180 S 1420 120, 1580 10"
            />

            <path
                class="cable cable-core cable-core-secondary"
                d="M -120 860 C 180 690, 370 760, 610 530 S 910 260, 1220 180 S 1420 120, 1580 10"
            />
        </svg>
    </div>

    <span class="data-pulse data-pulse-one"></span>
    <span class="data-pulse data-pulse-two"></span>
</div>