<script>
	export let name = "Default";
	export let type = "regular"; // regular, disabled
	export let color = "indigo";
    
</script>

<div class="bg-black">
{#if type === "regular"}
	<label class={`flex items-center accent-${color}-500 p-4`}>
		<input type="radio" />
		{name}
	</label>
{:else if type === "disabled"}
	<label class={`flex items-center p-4`}>
		<input type="radio" disabled checked/>
		{name}
	</label>
{/if}
</div>