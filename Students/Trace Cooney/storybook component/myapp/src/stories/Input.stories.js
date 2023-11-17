// @ts-nocheck
// @ts-ignore
// @ts-ignore
import Input from "./Input.svelte";

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  };

  export const IN_Login = {
    args: {
      primary: true,
      label: 'Add Username',
    },
  };

  export const IN_Password = {
    args: {
      primary: true,
      label: 'Create Password',
    },
  };