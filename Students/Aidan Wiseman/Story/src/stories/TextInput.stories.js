import Button from "./Button.svelte";

export default {
    title: 'DWDD-Component',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { 
        control: { type: 'select' },
        options:  {
            purple: "bg-indigo-500 text-white",
            purple1: "bg-indigo-600 text-white",
            gray: "bg-gray-800 text-gray-500",
            lightpurple: "bg-indigo-200 text-indigo-600",
            violet: "bg-violet-400 text-indigo-600",
            indigo: "bg-indigo-200 text-indigo-500",
        },
    },
      size: {
        control: { type: 'select' },
        options:   {  
        sl: " mt-1 w-[115px] h-12 px-8 py-4 rounded-[48px] justify-center items-center inline-flex mb-4",
        md: "mt-1 mb-4 w-[327px] h-12 opacity-100 p-0 rounded-[48px] top-24 items-center justify-center",
        lg: "px-7 py-5 pr-8 pl-8",
        xlg: "px-10 py-5 pr-8 pl-8",
      },
      },
    },
  };

export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large = {
    args: {
      size: 'xlg',
      label: 'Button',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };
  