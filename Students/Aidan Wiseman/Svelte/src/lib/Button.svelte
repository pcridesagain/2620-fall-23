<script lang="ts">
  export let name = "Default";
  export let type = "regular"; // regular, flat, disabled
  export let size = "sl"; // sm, md, lg
  export let color = "purple";
  export let borderColor = "violet";
  const sizes: { [key: string]: string } = {
    sl: " mt-1 w-[115px] h-12 px-8 py-4 rounded-[48px] justify-center items-center inline-flex mb-4",
    md: "mt-1 mb-4 w-[327px] h-12 opacity-100 p-0 rounded-[48px] top-24 items-center justify-center",
    lg: "px-7 py-5 pr-8 pl-8",
    xlg: "px-10 py-5 pr-8 pl-8",
  };
  const colors: { [key: string]: string } = {
    purple: "bg-indigo-500 text-white",
    purple1: "bg-indigo-600 text-white",
    gray: "bg-gray-800 text-gray-500",
	lightpurple: "bg-indigo-200 text-indigo-600",
	violet: "bg-violet-400 text-indigo-600",
	indigo: "bg-indigo-200 text-indigo-500",
  };
  const borderColors: { [key: string]: string } = {
    violet: "border-violet-400 text-violet-400",
	indigo: "border-indigo-500 text-indigo-500",
	zinc: "border-zinc-700 text-zinc-700",

    // Add more custom border colors here
  };
</script>

{#if type == "regular"}
  <button
    class={`rounded-full ${colors[color]} font-medium ${
      size in sizes ? sizes[size] : sizes["sl"]
    }`}
  >
    {name}
  </button>
{/if}

{#if type == "flat"}
  <button
    class={`rounded-full font-medium border border-none text-indigo-500 ${
      size in sizes ? sizes[size] : sizes["md"]
    }`}
  >
    {name}
  </button>
{/if}

{#if type == "disabled"}
  <button
    class={`rounded-full font-medium border-2 ${borderColors[borderColor]} ${
      size in sizes ? sizes[size] : sizes["md"]
    }`}
  >
    {name}
  </button>
{/if}

<!--<script>
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

-->
