<script>
  export let type = "basic"; //caption, action
  function fillCircle(){
  var circles = document.querySelectorAll("i");
      circles.forEach(function(circle) {
          circle.classList.toggle("fa-regular");
          circle.classList.toggle("fa-solid");
      });
}
</script>
<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
<script src="https://kit.fontawesome.com/c0a01584c9.js" crossorigin="anonymous"></script>
</svelte:head>  

<div class="bg-black h-screen flex flex-col items-center">
      <h1 class="text-center p-4 text-purple-600">STORYBOOK COMPONENT Gabbe Pond</h1>
          {#if type == "basic"}
          <button  class="bg-gray-400 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
              <i class="fa-regular pr-4" style="color: #ffffff;"></i>
              <ul class=flex>
                <li class="p-2">&lt; &nbsp;&nbsp; Title &nbsp;&nbsp;</li> <li><i class="fa-solid fa-gear p-3"></i></li>
              </ul>
          </button>
          <button  class="bg-gray-400 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
            <i class="fa-regular pr-4" style="color: #ffffff;"></i>
            <ul class=flex>
              <li class="p-2">&lt; &nbsp;&nbsp; Title &nbsp;&nbsp;</li> <li class="text-purple-600 p-2">Action</li>
            </ul>
          </button>
          <button  class="bg-gray-400 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
            <i class="fa-regular pr-4" style="color: #ffffff;"></i>
            <ul class=flex>
              <li class="p-2">&lt; &nbsp;&nbsp; Title &nbsp;&nbsp;</li> <li class="bg-purple-600 hover:bg-purple-600 rounded-lg p-2">Action</li>
            </ul>
          </button>
          {/if}

          {#if type == "caption"}
          <button  class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
              <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
              <div>
              <p>Content</p>
              <p class="text-gray-400 text-sm">Caption</p>
              </div>
          </button>
         {/if}

          {#if type == "action"}
          <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
              <div class="flex items-center">
                  <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                  <div>
                      <p>Content</p>
                      <p class="text-gray-400 text-sm">Caption</p>
                  </div>
              </div>
              <p class="justify-self-end self-center ">Action</p>
          </div>
          {/if}
      </div>