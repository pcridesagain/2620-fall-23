<script>
	import Calendar from '../components/Calendar.svelte';

	const msg = 'I <3 u';
</script>

<h1>Welcome to SvelteKit - {msg}</h1>
<section class="flex">
	<div class="dark">
		<Calendar />
	</div>

	<div>
<Calendar />
	</div>
</section>

