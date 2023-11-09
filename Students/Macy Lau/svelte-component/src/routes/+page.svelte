<script>
    let label = "Input Label";
    let placeholder = "Input text";
    let defaultBorder = 'border-gray-700';
    let blueBorder = 'border-indigo-600';
    let redBorder = 'border-red-700';
    let defaultBg = 'bg-black';
    let inputStyle = 'box-border h-4 w-80 p-4 rounded-md focus:outline-none';

</script>
<div class="bg-black w-96 h-1/2 p-4">
    <div>
        <label class="text-white" for="input-field">{label}</label>
        <input class="{inputStyle} + {defaultBg} + border-2 + {defaultBorder}" type="text" placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{label}</label>
        <input class="{inputStyle} + {defaultBg} + border-2 + {blueBorder}" type="text" placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{label}</label>
        <input class="{inputStyle} + {defaultBg} + border-2 + {defaultBorder}" type="text" placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{label}</label>
        <input class="{inputStyle} + {defaultBg} + border-2 + {redBorder}" type="text" placeholder={placeholder}>
    </div>

    <div>
        <label class="text-white" for="input-field">{label}</label>
        <input class="{inputStyle} + bg-zinc-900" type="text" placeholder={placeholder}>
    </div>

    


</div>
<slot></slot>

