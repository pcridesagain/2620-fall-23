<script>
	let buttonText = "Button"; // Replace with your button text
  
	// Define an array of button colors for the first set of rows
	let buttonColorsSet1 = [
	  ['#6B4EFF', '#6B4EFF', '#6B4EFF', '#6B4EFF'],
	  ['#5538EE', '#5538EE', '#5538EE', '#5538EE'],
	  ['#303437', '#303437', '#303437', '#303437'],
	];
  
	// Define an array of button colors for the second set of rows
	let buttonColorsSet2 = [
	  ['#C6C4FF', '#C6C4FF', '#C6C4FF', '#C6C4FF'],
	  ['#9990FF', '#9990FF', '#9990FF', '#9990FF'],
	  ['#303437', '#303437', '#303437', '#303437'],
	];
  
	// Define an array of button colors for the third set of rows
	let buttonColorsSet3 = [
	  ['#000', '#000', '#000', '#000'],
	  ['#000', '#000', '#000', '#000'],
	  ['#000', '#000', '#000', '#000'],
	];
  </script>
  
  <style>
	.custom-button {
	  display: inline-flex;
	  width: 327px;
	  height: 48px;
	  padding: 16px 32px; /* Adjusted padding */
	  justify-content: center;
	  align-items: center;
	  flex-shrink: 0;
	  color: #fff; /* Change the text color to your preference */
	  border: none;
	  cursor: pointer;
	  border-radius: 48px;
	  background: var(--primary-base, #6B4EFF);
	  margin-right: 10px; /* Add a 10px gap between the buttons */
	  margin-bottom: 10px; /* Add a 10px gap between rows */
	}
  
	/* Apply border-radius and border to the last three sets of rows */
	/* Apply border-radius and border to the last three sets of rows */
	.row-container:nth-last-child(-n+3) .custom-button {
	  border-radius: 48px;
	  border: 1px solid var(--primary-light, #9990FF);
	}
	  
	.row-container {
	  display: inline-flex;
	}
  </style>
  <div class="button-container">
	{#each Array(3) as _, setIndex}
	  {#if setIndex > 0}
		<div class="separator" style="height: 20px;"></div>
	  {/if}
	  {#each Array(3) as _, rowIndex}
		<div class="row-container">
		  {#each Array(4) as _, buttonIndex}
			{#if setIndex === 0}
			  <button class="custom-button" style="background-color: {buttonColorsSet1[rowIndex][buttonIndex]};">{buttonText}</button>
			{/if}
			{#if setIndex === 1}
			  <button class="custom-button" style="background-color: {buttonColorsSet2[rowIndex][buttonIndex]};">{buttonText}</button>
			{/if}
			{#if setIndex === 2}
			  <button class="custom-button" style="background-color: {buttonColorsSet3[rowIndex][buttonIndex]};">{buttonText}</button>
			{/if}
		  {/each}
		</div>
	  {/each}
	{/each}
  </div>
  