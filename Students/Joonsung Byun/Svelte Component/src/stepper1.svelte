<script>
  let count = 0;

  function decrease() {
    count -= 1;
  }

  function increase() {
    count += 1;
  }
  
  export let size = ['large', 'small'];
  const sizes = {
    'small': "bg-black w-20 h-8 mb-8 flex justify-center gap-4",
    'large': "bg-black w-24 h-12 mb-8 flex justify-center gap-4"
  }

  export let fontSize = ["sm", "lg"];

const fontSizes = {
  sm: "text-base",
  lg: "text-2xl",
}
;
</script>

<div class="{(size in sizes) ? sizes[size] : sizes['']} {(fontSize in fontSizes) ? fontSizes[fontSize] : fontSizes['']}">
      <button on:click={decrease} class="border-0 text-gray-500 ">-</button>
      <p class="text-white pt-1">{count}</p>
      <button on:click={increase} class="border-0 text-blue-800">+</button>
=======
</script>

<div class="bg-black w-72 h-12 mb-8">
    <div class="flex justify-center  gap-10">
      <button on:click={decrease} class="text-slate-400 text-3xl border-0">-</button>
      <p class="text-white text-2xl leading-10">{count}</p>
      <button on:click={increase} class="text-indigo-700 text-3xl border-0">+</button>
    </div>
  </div>