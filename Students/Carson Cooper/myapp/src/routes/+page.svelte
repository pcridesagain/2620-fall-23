<script>
    let text = "Input";
    let placeholder = ".....";
    let Border = 'border-white-500';
    let Background = 'bg-black';
    let Style = 'box-border h-4 w-80 p-4 rounded-md focus:outline-none';

</script>
<div class="bg-black w-96 h-1/2 p-4">
    <div>
        <label class="text-white" for="input-field">{text}</label>
        <input placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{text}</label>
        <input placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{text}</label>
        <input placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{text}</label>
        <input placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{text}</label>
        <input placeholder={placeholder}>
    </div>

    


</div>
<slot></slot>
