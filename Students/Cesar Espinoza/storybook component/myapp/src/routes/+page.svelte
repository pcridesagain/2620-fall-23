<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
	import MyBadge from "$lib/badges.svelte"
</script>

<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"/>
</svelte:head>

<MyBadge text="Success"/>
<MyBadge type="Alert" text="Alert"/>
<MyBadge type="Warning" text="Warning"/>
<MyBadge type="Info" text="Info"/>
<MyBadge type="Number" text="7"/>
<MyBadge type="Blank"/>