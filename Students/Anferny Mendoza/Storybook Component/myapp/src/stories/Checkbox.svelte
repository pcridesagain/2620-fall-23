<script>
	export let name = "Default";
	export let type = "regular"; // regular, disabled
	export let color = "indigo";
    import 'tailwindcss/tailwind.css';
</script>

<div class="bg-black">
{#if type === "regular"}
	<label class={`flex items-center accent-${color}-500 p-4`}>
		<input type="checkbox" />
		{name}
	</label>
{:else if type === "disabled"}
	<label class={`flex items-center p-4`}>
		<input type="checkbox" disabled checked />
		{name}
	</label>
{/if}
</div>