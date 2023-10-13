<script>
    //let numberOfSegments = 2;

    export let segments = ["name1", "name2", "name3"];
    let selected = segments[0];

    /**
   * @param {string} item
   */
    function setActive(item) {
        selected = item;
    }
</script>

<section>
    <div class="bg-black m-4 p-2 w-1/3 rounded-lg">
        <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
            {#each segments as item}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="bg-gray-{selected === item ? '600' : '800'} p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600 hover:cursor-pointer" on:click={() => setActive(item)}>{item}</div>
            {/each}
        </div>
    </div>

    

    <!-- <p class="m-4">This shows how passing a prop for the number of segments would work:</p>
    <div class="m-4">
        <label for="barsNumber">Enter the amount of segments for your bar (2-4):</label>
        <input bind:value={numberOfSegments}
        type="number" placeholder="1" min="2" max="4"
        class="card text-black bg-blue-100 items-center text-center border-solid border-black rounded-full barsNumber"/>
    </div> -->

    <!-- <div class="bg-black m-4 p-2 w-1/3 rounded-lg">
        {#if numberOfSegments == 2}
            <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
                <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
                <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
            </div>
        {:else if numberOfSegments == 3}
            <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
                <div class="p-2 m-1 rounded-lg w-1/2 h-10 text-center hover:bg-gray-600">Segment</div>
                <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
                <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
            </div>
        {:else}
            <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
                <div class="p-2 m-1 rounded-lg w-1/2 h-10 text-center hover:bg-gray-600">Segment</div>
                <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
                <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
                <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
            </div>
        {/if}
    </div>

    <p class="m-4">Here is an overview of the options:</p>
    <div class="bg-black m-4 p-2 w-1/3 rounded-lg">
        <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
            <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
            <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
        </div>
        <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
            <div class="p-2 m-1 rounded-lg w-1/2 h-10 text-center hover:bg-gray-600">Segment</div>
            <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
            <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
        </div>
        <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
            <div class="p-2 m-1 rounded-lg w-1/2 h-10 text-center hover:bg-gray-600">Segment</div>
            <div class="bg-gray-600 p-2 m-1 rounded-lg w-1/2 text-center h-10">Segment</div>
            <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
            <div class="p-2 m-1 rounded-lg w-1/2 text-center h-10 hover:bg-gray-600">Segment</div>
        </div>
    </div> -->


</section>