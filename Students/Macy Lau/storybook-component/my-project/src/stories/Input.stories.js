import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
  };

export const IN_Login = {
  args: {
    primary: true,
    placeholder: 'Username',
  },
};

export const IN_Password = {
    args: {
      primary: true,
      placeholder: 'Password',
    },
};

export const IN_Email = {
    args: {
      primary: true,
      placeholder: 'Email',
    },
};
