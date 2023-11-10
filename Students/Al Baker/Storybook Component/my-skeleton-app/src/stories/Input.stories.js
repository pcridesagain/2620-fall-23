import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: { type: 'select' },
            options: ['Login', 'Create password']
        },
    },
};

export const Login = {
    args: {
        placeholder: "Login",
    },
};

export const Password = {
    args: {
        placeholder: "Create password",
    },
};
