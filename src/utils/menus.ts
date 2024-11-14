export interface MenuItem {
    name: string;
    link: string;
  }
  
  export const menus: MenuItem[] = [
    {
        name: 'Home',
        link: '/',
    },
    {
      name: 'Tasks',
      link: '/tasks',
    },
  ];