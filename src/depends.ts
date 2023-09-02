import Alpine from 'alpinejs';


// Global store
Alpine.store('stuffs', {
  categories: ['Web Dev','Theme/Plugin','Simulation', 'Music', 'Visual Arts'],

  data: [
    {
      id: 0,
      name: 'Ghadi',
      desc: 'A clock without Numbers',
      category: 'Web Dev',
      link: 'https://jeigsaw.github.io/ghadi',
    },
    {
      id: 1,
      name: 'Genetic Drift Simulator',
      desc: 'A simple simulation of Genetic Drift for a gene with two alleles',
      category: 'Simulation',
      link: 'https://codepen.io/Jeigsaw/full/bREyKV',
    },
    {
      id: 2,
      name: 'PMS Job Nepal',
      desc: 'Job Portal of PMS Job Nepal',
      category: 'Web Dev',
      link: 'https://pmsjobnepal.com',
    },
    {
      id: 3,
      name: 'Skewuy',
      desc: 'A CSS library to implement 3D rotation effect with 2D images',
      category: 'Theme/Plugin',
      link: 'https://jeigsaw.github.io/Skewuy/',
    },
    {
      id: 4,
      name: 'PMS News Nepal',
      desc: 'News Portal of PMS Multimedia Pvt. Ltd.',
      category: 'Web Dev',
      link: 'https://pmsnewsnepal.com',
    },
    {
      id: 5,
      name: 'Olive Dark Theme',
      desc: 'A dark theme with olive accent color for a popular text editor VS Code',
      category: 'Theme/Plugin',
      link: 'https://marketplace.visualstudio.com/items?itemName=Jeigsaw.olive-dark-theme',
    },
    {
      id: 6,
      name: 'Chitiboard',
      desc: 'Website Design and Prototyping for Chitiboard Cooperatives',
      category: 'Web Dev',
      link: 'https://www.figma.com/file/IzId3gUuxc1KBabRmqTZ5s/chitiboard-design-system?type=design&node-id=25%3A3823&mode=design&t=cDyuh1M1GC8ucdaV-1',
    },
    {
      id: 7,
      name: 'Flip a Coin',
      desc: 'A coin flipping simulation',
      category: 'Simulation',
      link: 'https://codepen.io/Jeigsaw/full/GmeWNG',
    },
    {
      id: 8,
      name: 'Three Full Measures',
      desc: 'A clock that uses musical notes to tell time',
      category: 'Visual Arts',
      link: 'https://www.instagram.com/p/CQaFXS3MccC/',
    },
    {
      id: 9,
      name: 'जिवनकाे आधार (Jiwan ko Adhar)',
      desc: 'A Pop-rock song',
      category: 'Music',
      link: 'https://soundcloud.com/sam-shrestha/fkvacuzhqqox',
    },
    {
      id: 10,
      name: 'Najeek Cover',
      desc: 'An improvised cover of Najeek originally by Bartika Eam Rai',
      category: 'Music',
      link: 'https://www.youtube.com/watch?v=O6SrycL14TI',
    },
    {
      id: 11,
      name: 'The Form',
      desc: 'Chalk sculptures',
      category: 'Visual Arts',
      link: 'https://www.instagram.com/p/CbquEP9OZUu/?img_index=1',
    },
    {
      id: 12,
      name: 'Paridhi',
      desc: 'Soft sculpture made with blanket',
      category: 'Visual Arts',
      link: 'https://www.instagram.com/p/CUbXj-fspsy/',
    },
    {
      id: 13,
      name: 'Hotel Manaslu',
      desc: 'Hotel Manaslu website',
      category: 'Web Dev',
      link: 'https://hotelmanaslu.com/',
    },
    {
      id: 14,
      name: 'Olive Light Theme',
      desc: 'A light theme with olive accent color for a popular text editor VS Code',
      category: 'Theme/Plugin',
      link: 'https://marketplace.visualstudio.com/items?itemName=Jeigsaw.olive-light-theme',
    },
  ]
});

// alpine init
Alpine.start();


// filtering stuffs
export const filterGallery = (e:Event):void => {
  const filterBtns = document.querySelectorAll('.filterBtn');
  const target = e.target as HTMLButtonElement;
  const selectedCategory = target.dataset.filter;
  const galleryItems = document.querySelectorAll('.stuffCard');

  filterBtns.forEach(btn => {
    btn.classList.remove('activeFilter');
  });

  target.classList.add('activeFilter');


  galleryItems.forEach(item => {
    item.classList.add('hidden');

    if (selectedCategory == ' ') {
      item.classList.remove('hidden');
    }

    const el = item as HTMLElement;
    const category = el.dataset.category;
    if (category == selectedCategory) {
      item.classList.remove('hidden');
    }
  });
}