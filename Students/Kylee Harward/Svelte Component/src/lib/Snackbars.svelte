<script>
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

<div class="bg-black">
 
        <h1 class="text-center m-4 text-pink-200">SNACKBARS COMPONENT KYLEE HARWARD</h1>
        <div class="grid grid-cols-2">
        <!--rounded-->
        <div>
            <!--basic-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 max-w-md">
                <p>Content</p>
            </div>
            <!--caption-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 max-w-md">
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
            </div>
            <!--circle-->
            <button on:click={fillCircle} class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
            </button>
            <!--caption & circle-->
            <button on:click={fillCircle} class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <div>
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
                </div>
            </button>
            <!--action-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <p>Content</p>
                <p class="justify-self-end">Action</p>
            </div>
            <!--caption & action-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div>
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
                </div>
                <p class="justify-self-end self-center ">Action</p>
            </div>
            <!--circle & action-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
                </div>
                <p class="justify-self-end self-center">Action</p>
            </div>
            <!--caption circle & action-->
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
            <!--right circle-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <p>Content</p>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff;"></i>
            </div>
            <!--caption & right circle-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div>
                    <p>Content</p>
                    <p class="text-gray-400 text-sm">Caption</p>
                    </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff;"></i>
            </div>
            <!--two circles-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
                </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff; font-size: 20px;"></i>
            </div>
            <!--caption & two circles-->
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <div>
                    <p>Content</p>
                    <p class="text-gray-400 text-sm">Caption</p>
                </div>
                </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff; font-size: 20px;"></i>
            </div>
        </div>
        <!--square-->
        <div>
            <!--basic-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 max-w-md">
                <p>Content</p>
            </div>
            <!--caption-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 max-w-md">
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
            </div>
            <!--circle-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
            </div>
            <!--caption & circle-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <div>
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
                </div>
            </div>
            <!--action-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <p>Content</p>
                <p class="justify-self-end">Action</p>
            </div>
            <!--caption & action-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div>
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
                </div>
                <p class="justify-self-end self-center ">Action</p>
            </div>
            <!--circle & action-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
                </div>
                <p class="justify-self-end self-center">Action</p>
            </div>
            <!--caption circle & action-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                    <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                    <div>
                        <p>Content</p>
                        <p class="text-gray-400 text-sm">Caption</p>
                    </div>
                </div>
                <p class="justify-self-end self-center ">Action</p>
            </div>
            <!--right circle-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <p>Content</p>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff;"></i>
            </div>
            <!--caption & right circle-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div>
                    <p>Content</p>
                    <p class="text-gray-400 text-sm">Caption</p>
                    </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff;"></i>
            </div>
            <!--two circles-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
                </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff; font-size: 20px;"></i>
            </div>
            <!--caption & two circles-->
            <div class="bg-indigo-600 text-white m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <div>
                    <p>Content</p>
                    <p class="text-gray-400 text-sm">Caption</p>
                </div>
                </div>
                <i class="fa-regular fa-circle justify-self-end self-center" style="color: #ffffff; font-size: 20px;"></i>
            </div>
        </div>
    </div>

</div>