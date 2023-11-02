<script>
  import MyButton from "../lib/Button.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  />
</svelte:head>

<!-- Section1 -->
<div class="ml-3">
  <MyButton name="Button" type="regular" size="md" color="purple" />
  <MyButton name="Button" type="regular" size="md" color="purple" />
  <MyButton name="Button" type="regular" size="md" color="purple" />
  <MyButton name="Button" type="regular" size="md" color="purple" />
</div>

<div class="ml-3">
    <MyButton name="Button" type="regular" size="md" color="purple1" />
    <MyButton name="Button" type="regular" size="md" color="purple1" />
    <MyButton name="Button" type="regular" size="md" color="purple1" />
    <MyButton name="Button" type="regular" size="md" color="purple1" />
 </div>

 <div class="ml-3">
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
 </div>

<!-- Section2 -->
 <div class="ml-3 mt-10">
    <MyButton name="Button" type="regular" size="md" color="lightpurple" />
    <MyButton name="Button" type="regular" size="md" color="lightpurple" />
    <MyButton name="Button" type="regular" size="md" color="lightpurple" />
    <MyButton name="Button" type="regular" size="md" color="lightpurple" />
 </div>

 <div class="ml-3">
    <MyButton name="Button" type="regular" size="md" color="violet" />
    <MyButton name="Button" type="regular" size="md" color="violet" />
    <MyButton name="Button" type="regular" size="md" color="violet" />
    <MyButton name="Button" type="regular" size="md" color="violet" />
 </div>

 <div class="ml-3">
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
    <MyButton name="Button" type="regular" size="md" color="gray" />
 </div>

<!-- Section3 -->
 <div class="ml-3 mt-10">
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="violet" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="violet" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="violet" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="violet" />
 </div>
 <div class="ml-3">
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="indigo" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="indigo" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="indigo" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="indigo" />
 </div>
 <div class="ml-3">
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="zinc" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="zinc" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="zinc" />
    <MyButton name="Button" type="disabled" size="md" color="gray" borderColor="zinc" />
 </div>

<!-- Section4 -->
 <div class="ml-3 mt-10">
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
 </div>

 <div class="ml-3">
    <MyButton name="Button" type="regular" size="md" color="indigo" />
    <MyButton name="Button" type="regular" size="md" color="indigo" />
    <MyButton name="Button" type="regular" size="md" color="indigo" />
    <MyButton name="Button" type="regular" size="md" color="indigo" />
 </div>
 <div class="ml-3">
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
    <MyButton name="Button" type="flat" size="md" color="gray" borderColor="violet"/>
 </div>

<!-- Section5 SM BUTTONS -->

<!-- Section1 -->
<div class="ml-3">
    <MyButton name="Button" type="regular" size="sl" color="purple" />
    <MyButton name="Button" type="regular" size="sl" color="purple" />
    <MyButton name="Button" type="regular" size="sl" color="purple" />
    <MyButton name="Button" type="regular" size="sl" color="purple" />
  </div>
  
  <div class="ml-3">
      <MyButton name="Button" type="regular" size="sl" color="purple1" />
      <MyButton name="Button" type="regular" size="sl" color="purple1" />
      <MyButton name="Button" type="regular" size="sl" color="purple1" />
      <MyButton name="Button" type="regular" size="sl" color="purple1" />
   </div>
  
   <div class="ml-3">
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
   </div>
  
  <!-- Section2 -->
   <div class="ml-3 mt-10">
      <MyButton name="Button" type="regular" size="sl" color="lightpurple" />
      <MyButton name="Button" type="regular" size="sl" color="lightpurple" />
      <MyButton name="Button" type="regular" size="sl" color="lightpurple" />
      <MyButton name="Button" type="regular" size="sl" color="lightpurple" />
   </div>
  
   <div class="ml-3">
      <MyButton name="Button" type="regular" size="sl" color="violet" />
      <MyButton name="Button" type="regular" size="sl" color="violet" />
      <MyButton name="Button" type="regular" size="sl" color="violet" />
      <MyButton name="Button" type="regular" size="sl" color="violet" />
   </div>
  
   <div class="ml-3">
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
      <MyButton name="Button" type="regular" size="sl" color="gray" />
   </div>
  
  <!-- Section3 -->
   <div class="ml-3 mt-10">
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="violet" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="violet" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="violet" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="violet" />
   </div>
   <div class="ml-3">
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="indigo" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="indigo" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="indigo" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="indigo" />
   </div>
   <div class="ml-3">
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="zinc" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="zinc" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="zinc" />
      <MyButton name="Button" type="disabled" size="sl" color="gray" borderColor="zinc" />
   </div>
  
  <!-- Section4 -->
   <div class="ml-3 mt-10">
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
   </div>
  <!-- Secret -->
   <div class="ml-3">
      <MyButton name="Button" type="regular" size="sl" color="indigo" />
      <MyButton name="Button" type="regular" size="sl" color="indigo" />
      <MyButton name="Button" type="regular" size="sl" color="indigo" />
      <MyButton name="Button" type="regular" size="sl" color="indigo" />
   </div>
   <div class="ml-3">
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
      <MyButton name="Button" type="flat" size="sl" color="gray" borderColor="violet"/>
   </div>
  

<!-- SINGLE HTML FORM COMPONENT -->
<!-- <MyForm/> -->
