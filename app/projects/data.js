import shoppingcart1 from '@/assets/shoppingcart1.png'
import moviesearch1 from '@/assets/moviesearch1.png'
import tictactoe1 from '@/assets/tictactoe1.png'
import pidogs1 from '@/assets/pidogs1.png'
import mangacoffee1 from '@/assets/mangacoffee1.png'
import searchsongs1 from '@/assets/searchsongs1.png'
import rickandmorty1 from '@/assets/rickandmorty1.png'

export const projects = [
  {
    id: 1,
    image: searchsongs1,
    color: '#E8C539',
    modal: {
      type: '/Practice',
      description: 'A website I made in practice mode to search a song by its name or by the artist, connected to a REST API. Additionally, you can view the details of each song.',
      link: 'https://search-songs.vercel.app/',
      githublink: 'https://github.com/rochialbani/search-songs'
    },

    title: 'SEARCH SONGS ',
    skillscolor: '#E5A836',
    skills: ['Javascript', 'React', 'Tailwind Css']
  },
  {
    id: 2,
    image: rickandmorty1,
    color: '#BBDAF2',
    modal: {
      type: '/Practice',
      description: 'A website I made in practice mode to search Rick and Morty characters, connected to a REST API. It has the particularity that the search is done automatically while typing',
      link: 'https://rickandmorty-rochialbani.vercel.app/',
      githublink: 'https://github.com/rochialbani/rickandmorty'
    },

    title: 'RICK AND MORTY ',
    skillscolor: '#65B8BF',
    skills: ['Javascript', 'React', 'Tailwind Css']
  },
  {
    id: 3,
    color: '#EFA18A',
    modal: {
      type: '/Practice',
      description: 'An e-commerce website I made in practice mode following the tutorial by midudev. It displays a list of products fetched from a JSON, which can be filtered by category and price, and you can also add them to the cart. This cart saves the products in memory so that if the page is reloaded, the data is not lost. Additionally, you can modify the quantity and remove items from the cart.',
      link: 'https://shopping-cart-pied-eight.vercel.app/',
      githublink: 'https://github.com/rochialbani/shopping-cart'
    },
    image: shoppingcart1,

    title: 'SHOPPING CART ',
    skillscolor: '#ED7D51',
    skills: ['JavaScript', 'React', 'CSS']
  },
  {
    id: 4,
    image: moviesearch1,
    color: '#97E589',
    modal: {
      type: '/Practice',
      description: 'A movie search website I made in practice mode following the tutorial by midudev. It has the particularity that the search is done automatically while typing, and you can also sort the movies alphabetically.',
      link: 'https://movies-search-two.vercel.app/',
      githublink: 'https://github.com/rochialbani/movies-search'
    },
    title: 'MOVIES SEARCH ',
    skillscolor: 'rgb(34 197 94 / var(--tw-bg-opacity))',
    skills: ['JavaScript', 'React', 'Talwind Css']

  },
  {
    id: 5,
    image: tictactoe1,
    color: '#BE8CE5',
    modal: {
      type: '/Practice',
      description: 'This is the game Tic Tac Toe I made in practice mode following the tutorial by midudev. It saves the ongoing game in memory and allows you to reset it.',
      link: 'https://tic-tac-toe-rochialbani.vercel.app/',
      githublink: 'https://github.com/rochialbani/Tic-Tac-Toe'
    },

    title: 'TIC TAC TOE ',
    skillscolor: '#A063C8',
    skills: ['JavaScript', 'React', 'CSS']
  },
  {
    id: 6,
    image: pidogs1,
    color: '#F7BAD3',
    modal: {
      type: '/Academic',
      description: 'It is the first website I made while studying in Henry. It is a Single Page Application (SPA) about dogs and their characteristics, connected to a REST API. The page shows a list of dogs that can be filtered by temperament and sorted alphabetically and by weight. Additionally, you can view the details of each dog. It also includes a form to create a new breed.',
      link: '', // https://pi-dogs-theta-beige.vercel.app/,
      githublink: 'https://github.com/rochialbani/PI-Dogs'
    },

    title: 'DOGS API ',
    skillscolor: '#EE8EA5',
    skills: ['Javascript', 'React', 'Redux', 'Css', 'Express', 'PostgreSQL']

  },
  {
    id: 7,
    image: mangacoffee1,
    color: '#EFBA97',
    modal: {
      type: '/Academic',
      description: 'It is the final project that I did at Henry along with seven other people, where I worked on the front-end. It is a website for reading mangas. If you log in, you can also communicate with other people through a chat, leave your comments on each manga, add them to your favorites, and make purchases of related products. Additionally, if your account is admin, you have access to a dashboard to update mangas and products, as well as manage the status of other accounts.',
      link: '', // https://manga-coffee.vercel.app/,
      githublink: 'https://github.com/rochialbani/MANGA-COFFEE'
    },

    title: 'MANGA COFFEE ',
    skillscolor: 'rgb(251 146 60 / var(--tw-bg-opacity))',
    skills: ['Typescript', 'React', 'Redux Toolkit', 'Sass']
  }

]
