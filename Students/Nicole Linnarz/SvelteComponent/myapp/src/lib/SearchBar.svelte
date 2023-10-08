<script>
	let display = false;
	function handleFocus() {
		console.log('hello');
		display = !display;
	}
</script>
<div class="bg-black p-5 my-2">
<div class="">
	<div class=" flex items-center  ">
		<i class=" bg-[#202325] rounded-l-lg  fa fa-light fa-magnifying-glass text-white p-3.5" />
		<input
			on:focus={handleFocus}
			on:focusout={handleFocus}
			dir ="rtl"
      class ="outline-none p-2 ml-0 mr-0 m-2  w-[12rem] input-field bg-[#202325] text-lg text-left focus:w-[10rem] text-white"
			type="text"
			placeholder="Search"
		/>
    {#if !display}
		<i class=" bg-[#202325] rounded-r-lg  fa fa-light fa-magnifying-glass text-white p-3.5 fa fa-light fa-microphone text-white" />
    {/if}
		{#if display}
    <p class=" bg-[#202325] rounded-r-lg text-white p-2.5 text-white">X</p>
			<p class="text-gray-400 text-lg bg-black ml-2">Cancel</p>
		{/if}
  </div>
</div>
</div>