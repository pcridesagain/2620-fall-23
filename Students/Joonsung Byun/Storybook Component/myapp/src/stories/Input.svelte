<script>
    import './input.css';
    export let placeholder = 'Placeholder'; 
    export let backgroundColor= '';
</script>

<style>
    input {
        border: 1px solid black;
    }
</style>

<input type="text" value={placeholder} style="background-color: {backgroundColor};">