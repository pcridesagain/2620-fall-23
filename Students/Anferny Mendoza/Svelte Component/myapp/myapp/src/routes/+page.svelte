<script>
// @ts-nocheck

    import MyCheckbox from '$lib/Checkboxes.svelte';
    import MyRadioButton from '$lib/RadioButtons.svelte';
    
  </script>
  
<svelte:head>
    
    <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>
  <main class="pl-4">
    <h1>Checkboxes</h1>
    <div class="flex flex-row">
        <MyCheckbox name="" type="regular"/>
        <MyCheckbox name="" type="regular"/>
    </div>
    <div class="flex flex-row">
        <MyCheckbox name="" type="regular"/>
        <MyCheckbox name="" type="disabled"/>
    </div>

    <h1>Radio Buttons</h1>
    <div class="flex flex-row">
        <MyRadioButton name="" type="regular" />
        <MyRadioButton name="" type="regular" />
    </div>
    <div class="flex flex-row">
        <MyRadioButton name="" type="regular" />
        <MyRadioButton name="" type="disabled" />
    </div>
    
  </main>
