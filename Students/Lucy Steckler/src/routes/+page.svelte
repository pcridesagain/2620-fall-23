<script>
    import Switches from "./lib/Switches.svelte";

    let isChecked1 = false
  let isChecked2 = false
  let color = "purple"
    
</script>


<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"/>
</svelte:head>



<Switches {isChecked1} {isChecked2} {color}/>