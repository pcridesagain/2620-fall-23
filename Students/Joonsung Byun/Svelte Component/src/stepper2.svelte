<script>
  let count2 = 0;

function decrease2() {
  count2 -= 1;
}

function increase2() {
  count2 += 1;
}

</script>
<div class="bg-black w-48 h-12 mb-8">
    <div class="flex justify-center  gap-10">
      <button on:click={decrease2} class="text-slate-400 text-lg border-0">-</button>
      <p class="text-white text-l leading-10">{count2}</p>
      <button on:click={increase2} class="text-indigo-700 text-lg border-0">+</button>
    </div>
  </div>