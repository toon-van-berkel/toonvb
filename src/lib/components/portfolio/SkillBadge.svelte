<script lang="ts">
    type Props = {
        name:           string;
        icon:           string;
        category:       string;
        status:         "experienced" | "learning";
        borderColor:    string;
        shadowColor:    string;
    };

    let { name, icon, category, status, borderColor, shadowColor }: Props = $props();
</script>

<article
    class={`skill-badge skill-badge--${status}`}
    aria-label={`${name}, ${category}, ${status}`}
    style={`--skill-border: ${borderColor}; --skill-shadow: ${shadowColor};`}
>
    <span class="skill-badge__icon" aria-hidden="true">
        <img src={icon} alt="" loading="lazy" />
    </span>

    <span class="skill-badge__body">
        <strong>{name}</strong>
        <small>{category}</small>
    </span>
</article>