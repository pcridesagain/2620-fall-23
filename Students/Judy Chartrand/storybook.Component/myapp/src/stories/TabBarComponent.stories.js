import TabBarsComponent from './TabBarComponent.svelte';

export default {
    title: 'Example/TabBar',
    component: TabBarsComponent,
    tags: ['autodocs'],
  };

  export const Single = {
    args: {
      sections: '1+6',
    },
  };

  export const Double = {
    args: {
        
      section: '2',
    },
  };

  export const Triple = {
    args: {
      section: '3'
    },
  };
  
  