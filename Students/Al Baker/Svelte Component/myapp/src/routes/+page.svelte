<script>
	import Buttons from '$lib/Buttons.svelte';

	let size = true;

	function toggleSize() {
		size = !size;
	}
</script>

<h1 class="text-2xl m-2">Svelte Component - Button Icons</h1>
<h2 class="text-xl m-2">Al Baker, DWDD 2620</h2>

<p class="m-2">Show small buttons or large buttons?</p>
<div class="m-2 mb-4">
	<button on:click={toggleSize} class="rounded-full bg-darkGray py-2 px-4 text-white mr-2"
		>Large</button
	>
	<button on:click={toggleSize} class="rounded-full bg-darkGray py-2 px-4 text-white">Small</button>
</div>

<div class="bg-black p-2">
	{#if size}
		<Buttons type="primary" size="lg" />
		<Buttons type="secondary" size="lg" />
		<Buttons type="outline" size="lg" />
		<Buttons type="transparent" size="lg" />
	{/if}

	{#if !size}
		<Buttons type="primary" size="sm" />
		<Buttons type="secondary" size="sm" />
		<Buttons type="outline" size="sm" />
		<Buttons type="transparent" size="sm" />
	{/if}
</div>
