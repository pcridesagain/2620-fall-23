<script lang="ts">
    let count = 1;
</script>
<h1 class="font-bold text-xl">Welcome to SvelteKit {count}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button type="button" on:click={()=> count += 1} class="btn btn-primary">Augment</button>
<button type="button" on:click={()=> count += 1} class="btn btn-success">Augment</button>