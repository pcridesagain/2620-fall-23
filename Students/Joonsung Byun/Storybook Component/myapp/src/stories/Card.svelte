<script>
    export let title = 'Card Title';
    export let content = 'Card Content';
    export let backgroundColor = '#ffffff';
    export let borderColor = '#000000';
    export let size = 'medium';
  </script>
  
  <style>
    .card {
      border: 1px solid var(--border-color, #ddd);
      border-radius: 8px;
      background-color: var(--background-color, #fff);
      padding: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      margin-bottom: 8px;
    }
  
    .small {
      width: 200px;
    }
  
    .medium {
      width: 300px;
    }
  
    .large {
      width: 400px;
    }
  </style>
  
  <div class="card {size}" style="background-color: {backgroundColor}; border-color: {borderColor}">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>