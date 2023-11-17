import Button from './Component.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const First = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Second = {
  args: {
    label: 'Button',
  },
};

export const Third = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Fourth = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
