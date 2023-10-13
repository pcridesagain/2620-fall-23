<script lang="ts">
    import LongFilledInButtons from '$lib/components/LongFilledInButtons.svelte';
import LongOutlineButtons from '$lib/components/LongOutlineButtons.svelte';
	import ShortFilledInButtons from '$lib/components/ShortFilledInButtons.svelte';
	import ShortOutlineButtons from '$lib/components/ShortOutlineButtons.svelte';
</script>

<div class="bg-slate-900 w-full h-screen">
    <h1 class="text-white text-center p-8">Welcome to SvelteKit</h1>
    <div class="flex justify-center items-center flex-wrap">
<ShortFilledInButtons/>
<ShortOutlineButtons/>
<LongFilledInButtons/>
<LongOutlineButtons/>
</div>
</div>
