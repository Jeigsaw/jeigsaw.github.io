import Alpine from 'alpinejs';


// Global store
Alpine.store('stuffs', {
  categories: ['Web Design', 'Web Development','Simulation', 'Music', 'Visual Arts'],

  data: [
    {
      id: 0,
      name: 'Ghadi',
      desc: 'A clock without Numbers',
      category: 'Web Development',
      link: 'https://jeigsaw.github.io/ghadi',
    },
    {
      id: 10,
      name: 'Genetic Drift Simulator',
      desc: 'A simple simulation of Genetic Drift for a gene with two alleles',
      category: 'Simulation',
      link: 'https://codepen.io/Jeigsaw/full/bREyKV',
    },
    {
      id: 1,
      name: 'PMS Job Nepal',
      desc: 'Job Portal of PMS Job Nepal',
      category: 'Web Development',
      link: 'https://pmsjobnepal.com',
    },
    {
      id: 9,
      name: 'Skewuy',
      desc: 'A CSS library to implement 3D rotation effect with 2D images',
      category: 'Web Design',
      link: 'https://jeigsaw.github.io/Skewuy/',
    },
    {
      id: 2,
      name: 'PMS News Nepal',
      desc: 'News Portal of PMS Multimedia Pvt. Ltd.',
      category: 'Web Development',
      link: 'https://pmsnewsnepal.com',
    },
    {
      id: 3,
      name: 'Chitiboard',
      desc: 'Website Design and Prototyping for Chitiboard Cooperatives',
      category: 'Web Design',
      link: 'https://www.figma.com/file/IzId3gUuxc1KBabRmqTZ5s/chitiboard-design-system?type=design&node-id=25%3A3823&mode=design&t=cDyuh1M1GC8ucdaV-1',
    },
    {
      id: 11,
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
      id: 4,
      name: 'जिवनकाे आधार (Jiwan ko Adhar)',
      desc: 'A Pop-rock song',
      category: 'Music',
      link: 'https://soundcloud.com/sam-shrestha/fkvacuzhqqox',
    },
    {
      id: 5,
      name: 'Najeek Cover',
      desc: 'An improvised cover of Najeek originally by Bartika Eam Rai',
      category: 'Music',
      link: 'https://www.youtube.com/watch?v=O6SrycL14TI',
    },
    {
      id: 6,
      name: 'The Form',
      desc: 'Chalk sculptures',
      category: 'Visual Arts',
      link: 'https://www.instagram.com/p/CbquEP9OZUu/?img_index=1',
    },
    {
      id: 7,
      name: 'Paridhi',
      desc: 'Soft sculpture made with blanket',
      category: 'Visual Arts',
      link: 'https://www.instagram.com/p/CUbXj-fspsy/',
    },
  ]
});

// alpine init
Alpine.start();


// filtering stuffs
export const filterGallery = (e:Event):void => {
  const filterBtns = document.querySelectorAll('.filterBtn');
  const selectedCategory = e.target.dataset.filter;
  const galleryItems = document.querySelectorAll('.stuffCard');

  filterBtns.forEach(btn => {
    btn.classList.remove('activeFilter');
  });

  e.target.classList.add('activeFilter');


  galleryItems.forEach(item => {
    item.classList.add('hidden');

    if (selectedCategory == ' ') {
      item.classList.remove('hidden');
    }

    const category = item.dataset.category;
    if (category == selectedCategory) {
      item.classList.remove('hidden');
    }
  });
}