<script>
    let socialButtons = [
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        text: 'Continue with Google',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
      },
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        text: 'Continue with Google',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
      },
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        text: 'Continue with Google',
        bgColor: 'bg-blue-500',
        textColor: 'text-white',
      },
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        text: 'Continue with Twitter',
        bgColor: 'bg-twiterBlue',
        textColor: 'text-white',
      }
    ];
  </script>
  
  {#each socialButtons as button}
    <a class="flex w-[366px] h-12 p-3 pl-16 pr-98 items-center gap-7 {button.bgColor} {button.textColor} font-inter font-medium text-base" href="page">
      <img src={button.icon} class="w-4 h-5 fill-current" alt="Social Icon" />
      {button.text}
    </a>
  {/each}
  