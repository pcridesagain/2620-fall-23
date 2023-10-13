<script>
    let regularCheckboxes = [false, false];
    let disabledCheckboxes = [false, true];
    let firstCheckboxDisabled = true;
  </script>


  <div class="grid grid-cols-2 gap-1 p-4 w-20 bg-black accent-indigo-500">
    {#each regularCheckboxes as checkbox, i}
      <label class="flex items-center">
        <input
          type="checkbox"
          class="accent-indigo-500"
          bind:checked={regularCheckboxes[i]}
        />
      </label>
    {/each}

    <label class="flex items-center">
      <input
        type="checkbox"
        class="form-checkbox text-gray-500 cursor-not-allowed"
        disabled={!firstCheckboxDisabled}
        checked={!firstCheckboxDisabled}
      />
    </label>
  
    <label class="flex items-center">
      <input
        type="checkbox"
        class="form-checkbox text-gray-500 cursor-not-allowed accent-gray-500 hover:none"
        disabled={!firstCheckboxDisabled}
        checked={firstCheckboxDisabled}
      />
    </label>
  </div>
