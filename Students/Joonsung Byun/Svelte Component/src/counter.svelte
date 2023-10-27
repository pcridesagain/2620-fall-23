<script>
  export let plus = "+";
  export let minus = "-";

  export let fontSize = ["sm", "lg"];

  const fontSizes = {
    sm: "text-base",
    lg: "text-2xl leading-6",
  };

  export let type = ['sm-type', 'lg-type'];

  const types = {
    'sm-type': "flex items-center bg-black text-white w-16 h-5 justify-center rounded-full border border-gray-300 gap-5 relative m-2",
    'lg-type': "flex m-2 w-20 h-8 bg-black rounded-full border border-gray-300 justify-center gap-4 relative"
  }
</script>

<style>
   div p:nth-child(2){
	position: absolute;
	top: 0;
	left: 50%; /* 가운데 정렬을 위해 부모 요소 너비의 반값으로 설정 */
	width: 1px; /* 수직 선의 너비 */
	height: 100%; /* 수직 선의 높이를 부모 요소와 같게 설정 */
	background-color: gray; /* 원하는 선 색상 설정 */
	transform: translateX(-1px); /* 가운데 정렬을 위한 수평 이동 */
}
</style>


<div class="{(type in types) ? types[type] : types['']} {(fontSize in fontSizes) ? fontSizes[fontSize] : fontSizes['']} ">
    <p style="color: white;">{minus}</p>
    <p></p>
    <p>{plus}</p>
  </div>