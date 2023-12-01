import Card from './Card.svelte';

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    size: {
      control: {type: 'select',},
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Small = {
    args: {
      title: 'Card Component',
      content: 'This is a Small card component.',
      backgroundColor: '#ffffff',
      borderColor: '#000000',
      size: 'small',
    },
  };

export const Medium = {
  args: {
    title: 'Card Component',
    content: 'This is a Medium card component.',
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    size: 'medium',
  },
};

export const Large = {
  args: {
    title: 'Card Component',
    content: 'This card is a Large card component.',
    backgroundColor: '#ffcc00',
    borderColor: '#ff9900',
    size: 'large',
  },
};