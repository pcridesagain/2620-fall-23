<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
</svelte:head>

<script>
    import Card from "../stories/Card.svelte";
    import InputComponent from "../stories/InputComponent.svelte";
</script>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<InputComponent size="small" textColor="#000" backgroundColor="#e0e0e0" placeholder="Hello Patrick this is Small" primary/>
<p>Hello World</p>
<Card title="Card Component" content="This is a Small card component." backgroundColor="#ffffff" borderColor="#000000" size="small"/>

