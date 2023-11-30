import Input from "./Input.svelte";

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
  
  };

  export const IN_Login = {
    args: {
      primary: true,
      placeholder: 'Add Username',
    },
  };

  export const IN_Password = {
    args: {
      primary: true,
      placeholder: 'Create Password',
    },
  };