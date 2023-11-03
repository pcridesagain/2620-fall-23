<script>
	// primary, secondary, outline, transparent
	// lg, sm

	export let type = 'primary';
	export let size = 'lg';
	let index = 0;
	if (size === 'lg') index = 1;
	const sizes = ['h-8 w-8', 'h-12 w-12'];
    const innerSizes = ['fa-xs', 'text-lg'];
</script>

{#if type === 'primary'}
	<button
		class="rounded-full bg-primaryBlue block my-2 {sizes[index]} active:bg-darkBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle {innerSizes[index]} text-white group-disabled:text-lightGray" />
	</button>
{/if}

{#if type === 'secondary'}
	<button
		class="rounded-full bg-lighterBlue block my-2 {sizes[index]} active:bg-lightBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle {innerSizes[index]} text-darkBlue group-disabled:text-lightGray" />
	</button>
{/if}

{#if type === 'outline'}
	<button
		class="rounded-full border-2 border-lightBlue block my-2 {sizes[index]} active:border-primaryBlue disabled:border-darkGray group"
	>
		<i
			class="fa-regular fa-circle {innerSizes[index]} text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button>
{/if}

{#if type === 'transparent'}
	<button 
		class="rounded-full block my-2 {sizes[index]} active:bg-lightBlue group"
	>
		<i
			class="fa-regular fa-circle {innerSizes[index]} text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button>
{/if}
