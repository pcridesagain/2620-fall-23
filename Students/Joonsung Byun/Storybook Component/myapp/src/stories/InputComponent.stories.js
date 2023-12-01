import InputComponent from './InputComponent.svelte';

export default {
  title: 'Example/InputComponent',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    placeholder: {type: 'select'}
  },
};

export const Small = {
  args: {
    size: 'small',
    textColor: '#000',
    backgroundColor: '#fff',
    placeholder: 'Hello Patrick this is Small'
  },
};

export const Medium = {
  args: {
    size: 'medium',
    textColor: '#000',
    backgroundColor: '#fff',
    placeholder: 'Hello Patrick this is Medium'
  },
};

export const Large = {
  args: {
    size: 'large',
    textColor: '#000',
    backgroundColor: '#fff',
    placeholder: 'Hello Patrick this is Large'
  },
};