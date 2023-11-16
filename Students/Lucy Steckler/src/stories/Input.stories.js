import Input from "./Input.svelte";

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
   
  };
  
export const MyInputIN_Login = {
    args: {
        primary: true,
        placeholder: 'Add username'
    }
   
  };

  export const IN_Password = {
    args: {
        primary: true,
        placeholder: 'Create password'
    }
   
  };