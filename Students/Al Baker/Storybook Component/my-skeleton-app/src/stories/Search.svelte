<script>
    import '../app.postcss';

    export let clicked = false;
</script>

{#if clicked}
    <input placeholder="clicked" type="text" />
{/if}

{#if !clicked}
    <input placeholder="not clicked" type="text" />
{/if}
