<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"/>
</svelte:head>

<script>
    import Button from '$lib/AuthButtons.svelte';
</script>

<h1>Welcome to SvelteKit new app featuring AuthButtons</h1>

<!-- SINGLE HTML BUTTON COMPONENT APPLE-->
<Button name="Apple" type="apple" />

<!-- SINGLE HTML BUTTON COMPONENT GOOGLE-->
<Button name="Google" type="google" color =white/>

<!-- SINGLE HTML BUTTON COMPONENT FACEBOOK-->
<Button name="Facebook" type= "facebook" color =blue-500/>

<!-- SINGLE HTML BUTTON COMPONENT TWITTER-->
<Button name="Twitter" type= "twitter" color =blue-300/>