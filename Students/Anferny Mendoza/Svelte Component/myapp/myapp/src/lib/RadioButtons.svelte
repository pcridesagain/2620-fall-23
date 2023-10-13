<script>
    /**
	 * @type {number | null}
	 */
    let selectedRegularRadio = null;
    /**
	 * @type {number | null}
	 */
    let selectedDisabledRadio = 1;
  
    /**
	 * @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} event
	 * @param {number} index
	 */
    function handleRegularRadioChange(event, index) {
      selectedRegularRadio = index;
    }
  
    /**
	 * @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} event
	 * @param {number} index
	 */
    function handleDisabledRadioChange(event, index) {
     
    }

</script>

<div class="grid grid-cols-2 gap-1 p-4 w-20 bg-black accent-indigo-500">
  {#each [0, 1] as i}
    <label class="flex items-center">
      <input
        type="radio"
        class="accent-indigo-500 p-4"
        name="regularRadios"
        on:change={(e) => handleRegularRadioChange(e, i)}
        checked={selectedRegularRadio === i}
      />
    </label>
  {/each}

  {#each [0, 1] as i}
    <label class="flex items-center">
      <input
        type="radio"
        class="accent-gray-500 cursor-not-allowed"
        name="disabledRadios"
        on:change={(e) => handleDisabledRadioChange(e, i)}
        checked={selectedDisabledRadio === i}
        disabled={i === 1}
      />
    </label>
  {/each}
</div>