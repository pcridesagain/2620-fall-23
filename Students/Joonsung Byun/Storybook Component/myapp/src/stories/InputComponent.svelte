<script>
    export let size = 'medium';
    export let textColor = '#000';
    export let backgroundColor = '#fff';
    export let placeholder = "Hello Patrick"
  </script>
  
  <style>
    :host {
      display: block;
      margin-bottom: 10px;
    }
  
    input {
    width: var(--input-width, 200px);
    height: var(--input-height, 30px);
    padding: 5px;
    font-size: var(--font-size, 14px);
    color: var(--text-color);
    background-color: var(--background-color);
    border: 1px solid gray;
    margin-left: 10px;
  }

  
    .small {
      --input-width: 150px;
      --input-height: 20px;
      --font-size: 12px;
    }
  
    .medium {
      --input-width: 200px;
      --input-height: 30px;
      --font-size: 14px;
    }
  
    .large {
      --input-width: 250px;
      --input-height: 40px;
      --font-size: 16px;
    }
  </style>
  
  <input type="text" class={size}  style="color: {textColor}; background-color: {backgroundColor}" placeholder={placeholder}/>