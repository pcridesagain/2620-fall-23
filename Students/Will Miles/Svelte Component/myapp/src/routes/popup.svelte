<script>
    let item = 'item'
        import Button from 'button.svelte';
        </script>
    
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    
    <div class='flex flex-wrap flex-col  items-center bg-gray-800 w-3/4 py-8 rounded-xl' id='popup'>
        
    <h1 class='text-center text-3xl my-8 font-extrabold'>
    Remove	{item}?
    </h1>
    <p class='text-gray-400 text-center mb-8'>Are you sure you want to remove this {item} from your cart?</p>
            
            <Button hover='bg-indigo-800' bgColor='bg-indigo-600' value='Sure'/>
            <Button hover='text-white' textColor='text-gray-400' value='No, thanks'/>
        
    </div>