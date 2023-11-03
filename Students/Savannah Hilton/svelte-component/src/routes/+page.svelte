<script lang="ts">
    import LongFilledInButtons from '$lib/components/LongFilledInButtons.svelte';
import LongOutlineButtons from '$lib/components/LongOutlineButtons.svelte';
	import ShortFilledInButtons from '$lib/components/ShortFilledInButtons.svelte';
	import ShortOutlineButtons from '$lib/components/ShortOutlineButtons.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<div class="bg-slate-900 w-full h-screen">
    <h1 class="text-white text-center p-8">Welcome to SvelteKit</h1>
    <div class="flex justify-center items-center flex-wrap">

        <div>
        <Button side="left" size="long" style="filledIn"/>
        <Button side="right" size="long" style="filledIn"/>
        <Button side="none" size="long" style="filledIn"/>
    </div>
    <div>
        <Button side="left" size="long" style="outline"/>
        <Button side="right" size="long" style="outline"/>
        <Button side="none" size="long" style="outline"/>
    </div>
    <div>
        <Button side="left" size="short" style="filledIn"/>
        <Button side="right" size="short" style="filledIn"/>
        <Button side="none" size="short" style="filledIn"/>
    </div>
    <div>
        <Button side="left" size="short" style="outline"/>
        <Button side="right" size="short" style="outline"/>
        <Button side="none" size="short" style="outline"/>
    </div>
<!-- <ShortFilledInButtons/>
<ShortOutlineButtons/>
<LongFilledInButtons/>
<LongOutlineButtons/> -->
</div>
</div>
