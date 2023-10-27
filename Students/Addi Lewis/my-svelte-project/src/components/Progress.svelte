<script>
  export let value = 20;
  export let max = 100
  </script>

  <section>
    <div class="p-10">
      <label for="file">Downloading</label>
      <progress id="file" value={value} max={max}>
        {value}%
      </progress>    
    </div>
  </section>