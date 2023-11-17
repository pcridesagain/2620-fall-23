import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        backgroundColor: 'white',
        placeholder: 'Placeholder'
    },
};

export const IN_Login = {
    args: {
        primary: true,
        placeholder: 'Add Username',
        backgroundColor: ''
    },
};

export const IN_Password = {
    args: {
        primary: true,
        placeholder: 'Create password',
        backgroundColor: ''
    },
};

export const Email = {
    args: {
        primary: true,
        placeholder: 'Type your Email',
        backgroundColor : ''
    },
};