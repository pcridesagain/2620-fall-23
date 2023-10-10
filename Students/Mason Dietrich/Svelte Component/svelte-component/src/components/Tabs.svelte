<script>
    import {createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let menuItems;
    export let activeItem;

    export let tabs;
</script>

<div>
    <ul class="flex justify-center flex-wrap">
        {#each menuItems as item}
            <li on:click={() => dispatch('tabChange', item)} class="m-10 text-lg">
                <div class:active={item === activeItem} class="text-gray-400">{item}</div>
            </li>
        {/each}
    </ul>
</div>


<style>
    .active {
        color: #9990FF;
        border-bottom: 1px solid #9990FF;
        padding-bottom: 4px;
    }
</style>