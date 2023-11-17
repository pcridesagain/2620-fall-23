<script>
	export let value;
	export let bgColor;
	export let textColor
	export let hover
</script>

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<button class='{bgColor} hover:{hover} {textColor} p-3 rounded-xl w-3/4'>
	{value}
</button>