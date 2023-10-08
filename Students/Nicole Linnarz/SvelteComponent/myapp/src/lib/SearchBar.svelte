<script>
	let display = false;
	function handleFocus() {
		display = !display;
	}
  // let textInput = document.getElementById("textInput")
  // let deleteInputBtn = document.getElementById("deleteInputBtn")

  
// function deleteInput() {
//   textInput?.innerHTML = ""; 
// }

// deleteInputBtn.addEventListener("click", deleteInput);
</script>

<div class="bg-black p-5 my-2">
	<div class="">
		<div class=" flex items-center">
			<i class=" bg-[#202325] rounded-l-lg fa fa-light fa-magnifying-glass text-white p-3.5" />
			<input
				id="textInput"
				on:focus={handleFocus}
				on:focusout={handleFocus}
				dir="rtl"
				class="outline-none p-2 ml-0 mr-0 m-2 w-[12rem] input-field bg-[#202325] text-lg text-left focus:w-[10rem] text-white"
				type="text"
				placeholder="Search"
			/>
			{#if !display}
				<i class=" bg-[#202325] rounded-r-lg text-white p-3.5 fa fa-light fa-microphone" />
			{/if}
			{#if display}
				<button
					id="deleteInputBtn"
					
					class=" bg-[#202325] rounded-r-lg text-white p-2.5">X</button
				>

				<button class="text-gray-400 text-lg bg-black ml-2">Cancel</button>
			{/if}
		</div>
	</div>
</div>
