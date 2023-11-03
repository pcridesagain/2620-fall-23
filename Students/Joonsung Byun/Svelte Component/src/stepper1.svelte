<script>
  let count = 0;

  function decrease() {
    count -= 1;
  }

  function increase() {
    count += 1;
  }
</script>

<div class="bg-black w-72 h-12 mb-8">
    <div class="flex justify-center  gap-10">
      <button on:click={decrease} class="text-slate-400 text-3xl border-0">-</button>
      <p class="text-white text-2xl leading-10">{count}</p>
      <button on:click={increase} class="text-indigo-700 text-3xl border-0">+</button>
    </div>
  </div>