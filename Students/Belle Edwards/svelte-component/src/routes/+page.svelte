<script>
	import Calendar from '../components/calendar.svelte';

	const msg = 'I <3 u';
</script>

<h1>Welcome to SvelteKit - {msg}</h1>

<div>
	<Calendar theme="light"/>
	<Calendar theme="dark"/>
</div>


<style>
    div{
        display:flex;
    }
</style>