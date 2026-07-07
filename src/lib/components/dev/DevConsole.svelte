<script lang='ts'>
    import * as dev from '$lib/scripts/dev';

    let isTheDevConsoleOpen = $state(true);
</script>

<button onclick={() => isTheDevConsoleOpen = !isTheDevConsoleOpen}>
    Toggle dev console
</button>

{#if isTheDevConsoleOpen}
    <button onclick={() => dev.devConsole.clear()}>
        Clear
    </button>

    <div>
        {#each dev.$devConsoleMessages as message}
            {#if message.type === 'message'}
                <p class="{message.status}">
                    <b>{message.status}:</b> {message.message}
                </p>
            {:else if message.type === 'function'}
                <p>
                    <b>running:</b> {message.functionName}()
                    <br />
                    <b>result:</b> {message.status}

                    {#if message.result}
                        : {message.result}
                    {/if}
                </p>
            {/if}
        {/each}
    </div>
{/if}

<style>
    .running {
        color: blue;
    }
    .failed {
        color: red;
    }
    .success {
        color: green;
    }
    .warning {
        color: orange;
    }
</style>