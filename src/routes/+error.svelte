<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { handleErrorPageRedirection } from '$lib/scripts/error';
    // import { get } from 'svelte/store';
    // import { goto } from '$app/navigation';
    // import { checkIfPageHasReplacement } from '$lib/scripts/error/handlers/hasReplacement';

    onMount(() => {
        handleErrorPageRedirection(page);
        // const url = get(page).url.pathname;

        // const replacementResult = checkIfPageHasReplacement(url);

        // if (replacementResult) {
        //     if (replacementResult.replacement) {
        //         goto(replacementResult.replacement);
        //     } else {
        //         console.log('No replacement found for the current URL.');
        //     }
        // }
    });
</script>

<div>
    <p>Path: {$page.url.pathname}</p>
    <p>Full URL: {$page.url.href}</p>
    <p>Query Param: {$page.url.searchParams.get('search')}</p>
</div>

<style>
    div {
        padding-top: 10rem;
        color: #ff8a96;
        border-radius: 0.25rem;
    }
</style>

<!-- pages/cv.html -->