<script lang="ts">
    const animes = [
        {
            title: 'Naruto',
            state: 'finished'
        },
        {
            title: 'Boruto',
            state: 'watching'
        }
    ];

    let filter = $state('');

    function handleFilterClick(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        filter = button.dataset.filter ?? '';
    }
</script>

<main class="normalize">
    <section class="section">
        <h1>Anime</h1>

        <button data-filter="watching" onclick={handleFilterClick}>Watching</button>
        <button data-filter="finished" onclick={handleFilterClick}>Finished</button>
        <button data-filter="" onclick={handleFilterClick}>All</button>

        <ul>
            {#each animes as anime}
                {#if filter === '' || anime.state === filter}
                        <li>{anime.title}</li>
                {/if}
            {/each}
        </ul>
    </section>
</main>