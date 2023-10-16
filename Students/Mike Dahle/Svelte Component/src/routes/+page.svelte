<script lang='ts'>
import SmallButton from "$lib/components/SmallButton.svelte";
import MediumButton from "$lib/components/MediumButton.svelte";
import LargeButton from "$lib/components/LargeButton.svelte";
</script>


<div class="flex flex-col p-4">

    <div class="mb-4">
        <LargeButton />
    </div>
    
    <div class="mb-4">
        <MediumButton />
    </div>
    
    <div class="mb-4">
        <SmallButton />
    </div>
    
</div>
