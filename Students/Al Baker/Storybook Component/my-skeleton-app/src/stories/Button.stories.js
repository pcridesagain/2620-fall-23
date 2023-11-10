import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'transparent']
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
  },
};

export const Outline = {
  args: {
    type: 'outline',
  },
};

export const Transparent = {
  args: {
    type: 'transparent',
  },
};
