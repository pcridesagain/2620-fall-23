<svelte:head>
<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>
<div class="bg-[#0F0E10] flex flex-col pt-[45px] pb-[45px] max-w-[423px] pl-[30px]">
	<input class="m-3" id="topSlider" type="range">
	<input class="m-3" id="bottomSlider" type="range">
</div>

<style>
	input[type=range] {
    -webkit-appearance: none;
	}
	#topSlider {
		max-width: 327px;
	}
	#topSlider::-webkit-slider-runnable-track {
		background-color: #6B4EFF;
		height: 4px;
	}
	#topSlider::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: #6B4EFF;
		height: 24px;
		width: 24px;
		border-radius: 12px;
		margin-top:-10px;
	}
	#bottomSlider {
		margin-top: 40px;
		max-width: 327px;
	}
	#bottomSlider::-webkit-slider-runnable-track {
		background-color: #6B4EFF;
		height: 4px;
	}
	#bottomSlider::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: #6B4EFF;
		height: 24px;
		width: 24px;
		border-radius: 12px;
		margin-top:-10px;
	}
</style>