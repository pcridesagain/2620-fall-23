<script lang='ts'>
import Button from "$lib/components/Button.svelte";
</script>


<div class="flex flex-col p-4">

    <div class="mb-4">
        <Button size="lg" />
        <Button text="Send" color="active" size="lg" />
    </div>

    <div class="mb-4">
        <Button />
        <Button text="Confirm your action" color="active" />
    </div>

    <div>
        <Button size="sm" />
        <Button text="Confirm your action" color="active" size="sm" />
    </div>


    
</div>
