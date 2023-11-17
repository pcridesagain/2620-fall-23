<script>
	export let name = "Default";
	export let type = "regular"; // regular, flat, disabled
	export let size = "md"; // xs, sm, md, lg
	export let color = "blue";
	const sizes = {
		"xs" : "px-.5 py-.3 pr-2 pl-8",
		"sm" : "px-1 py-1.5 pr-4 pl-8",
		"md" : "px-5 py-3 pr-6 pl-8",
		"lg" : "px-7 py-5 pr-8 pl-10",
	}
</script>

{#if type=="regular"}
 <button class={`rounded-full bg-${color}-600 border border-1 border-gray-500 font-bold text-gray-200 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button>
{/if}

{#if type=="flat"}
 <button class={`rounded-full font-bold border border-1 border-gray-500 text-${color}-600 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button>
{/if}

{#if type=="disabled"}
 <button class={`rounded-full bg-${color}-900 font-bold border border-2 border-gray-700 text-gray-700 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button> 
{/if}

{#if type=="1"}
 <button class={`rounded-full bg-${color}-200 border border-1 border-gray-500 font-bold text-black ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button>
{/if}

{#if type=="2"}
 <button class={`rounded-full bg-${color}-400 font-bold border border-1 border-gray-500 text-${color}-600 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button>
{/if}

{#if type=="3"}
 <button class={`rounded-full bg-${color}-90 font-bold border border-2 border-gray-700 text-gray-700 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button> 
{/if}
{#if type=="4"}
 <button class={`rounded-full bg-${color}-90 font-bold border border-2 border-gray-700 text-gray-700 ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
  {name}
 </button> 
{/if}
