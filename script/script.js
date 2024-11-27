let headerBottomButton = document.querySelectorAll('.bottom-button__wrapper').forEach((button) => {
  button.addEventListener('click', () => {
      button.classList.toggle('arrow-rotate')
  })
});

let buttonRealism = document.querySelector('.button-realism');
let buttonImpressionism = document.querySelector('.button-impressionism');
let buttonPostImpressionism = document.querySelector('.button-postimpressionism');
let buttonAvangard = document.querySelector('.button-avangard');
let buttonFuturism = document.querySelector('.button-futurism');

let galleryRealism = document.querySelector('.gallery-realism');
let galleryImpressionism = document.querySelector('.gallery-impressionism');
let galleryPostImpressionism = document.querySelector('.gallery-postimpressionism');
let galleryAvangard = document.querySelector('.gallery-avangard');
let galleryFuturism = document.querySelector('.gallery-futurism');

buttonRealism.addEventListener('click', () => {
  galleryRealism.classList.toggle('bottom-gallery__visible');
  galleryImpressionism.classList.remove('bottom-gallery__visible');
  galleryPostImpressionism.classList.remove('bottom-gallery__visible');
  galleryAvangard.classList.remove('bottom-gallery__visible');
  galleryFuturism.classList.remove('bottom-gallery__visible');
});
buttonImpressionism.addEventListener('click', () => {
  galleryImpressionism.classList.toggle('bottom-gallery__visible')
  galleryRealism.classList.remove('bottom-gallery__visible')
  galleryPostImpressionism.classList.remove('bottom-gallery__visible')
  galleryAvangard.classList.remove('bottom-gallery__visible')
  galleryFuturism.classList.remove('bottom-gallery__visible')
});
buttonPostImpressionism.addEventListener('click', () => {
  galleryPostImpressionism.classList.toggle('bottom-gallery__visible')
  galleryImpressionism.classList.remove('bottom-gallery__visible')
  galleryRealism.classList.remove('bottom-gallery__visible')
  galleryAvangard.classList.remove('bottom-gallery__visible')
  galleryFuturism.classList.remove('bottom-gallery__visible')
});
buttonAvangard.addEventListener('click', () => {
  galleryAvangard.classList.toggle('bottom-gallery__visible')
  galleryRealism.classList.remove('bottom-gallery__visible')
  galleryImpressionism.classList.remove('bottom-gallery__visible')
  galleryFuturism.classList.remove('bottom-gallery__visible')
  galleryPostImpressionism.classList.remove('bottom-gallery__visible')
});
buttonFuturism.addEventListener('click', () => {
  galleryFuturism.classList.toggle('bottom-gallery__visible')
  galleryPostImpressionism.classList.remove('bottom-gallery__visible')
  galleryImpressionism.classList.remove('bottom-gallery__visible')
  galleryRealism.classList.remove('bottom-gallery__visible')
  galleryAvangard.classList.remove('bottom-gallery__visible')
});

let headerTop = document.querySelector('.header-top');
let headerNav = document.querySelector('.header-nav');
let body = document.body;

let bLineOne = document.querySelector('.line-one');
let bLineTwo = document.querySelector('.line-two');
let bLineThree = document.querySelector('.line-three');

let mainZ = document.querySelector('.main');
let mainBurger = document.querySelector('.header-burger');

mainBurger.addEventListener('click', ()=> {
  headerTop.classList.toggle('header-top--active');
  headerNav.classList.toggle('header-nav--active');
  body.classList.add('overflow');
  bLineOne.classList.toggle('line-one--active');
  bLineTwo.classList.toggle('line-two--active');
  bLineThree.classList.toggle('line-three--active');
  mainZ.classList.toggle('main-z');
});

document.querySelector('.list-close').addEventListener('click', function() {
  headerTop.classList.remove('header-top--active');
  headerNav.classList.remove('header-nav--active');
  body.classList.remove('overflow');
  bLineOne.classList.remove('line-one--active');
  bLineTwo.classList.remove('line-two--active');
  bLineThree.classList.remove('line-three--active');
  mainZ.classList.remove('main-z');
});

let searchHidden = document.querySelector('.header-search__hidden');
let searchBtn = document.querySelector('.header-search__button');
let searchClose = document.querySelector('.header-search__close');
let searchinput = document.querySelector('.header-search__input');
let headerLogo = document.querySelector('.header-logo');

searchBtn.addEventListener('click', ()=> {
  searchHidden.classList.add('header-search__hidden--active', 'search-hidden');
  searchBtn.classList.add('header-search__button--active');
  headerLogo.classList.add('logo-hidden');
  mainBurger.classList.add('burger-hidden');
  searchinput.classList.add('search-input');
});
searchClose.addEventListener('click', ()=> {
  searchHidden.classList.remove('header-search__hidden--active', 'search-hidden');
  searchBtn.classList.remove('header-search__button--active');
  headerLogo.classList.remove('logo-hidden');
  mainBurger.classList.remove('burger-hidden');
  searchinput.classList.remove('search-input');
});

let heroBlock = document.querySelector('.hero');

function heroBg () {
  if (heroBlock.classList.contains('hero')) {
    heroBlock.className = "hero-two"
  } else if (heroBlock.classList.contains('hero-two')) {
    heroBlock.className = "hero-three"
  } else if (heroBlock.classList.contains('hero-three')) {
    heroBlock.className = "hero"
  }
};
setInterval(heroBg, 2000);

heroBlock.addEventListener('click', function() {
  galleryPostImpressionism.classList.remove('bottom-gallery__visible');
  galleryImpressionism.classList.remove('bottom-gallery__visible');
  galleryRealism.classList.remove('bottom-gallery__visible');
  galleryAvangard.classList.remove('bottom-gallery__visible');
  galleryFuturism.classList.remove('bottom-gallery__visible');
});

const element = document.querySelector('.filter-select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

let galleryButtons = document.querySelector('.gallery-left__bottom')
document.querySelector('.choices__inner').addEventListener('click', ()=> {
  galleryButtons.classList.toggle('gallery-bottom--active')
})

let swiperGallery = new Swiper('.gallery-swiper', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1000: {
        slidesPerView: 2,
        spaceBetween: 24
    },
    1400: {
        slidesPerView: 3,
        spaceBetweenSlides: 50
    }
  }
});

document.querySelector('.btnpop-one').addEventListener('click', () => {
  popOne.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});
document.querySelector('.btnpop-two').addEventListener('click', () => {
  popTwo.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});
document.querySelector('.btnpop-three').addEventListener('click', () => {
  popThree.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});
document.querySelector('.btnpop-four').addEventListener('click', () => {
  popFour.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});
document.querySelector('.btnpop-five').addEventListener('click', () => {
  popFive.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});
document.querySelector('.btnpop-six').addEventListener('click', () => {
  popSix.classList.remove('popup-visible');
  document.body.classList.remove('popup-hidden');
});

let popOne = document.querySelector('.popup-one');
let popTwo = document.querySelector('.popup-two');
let popThree = document.querySelector('.popup-three');
let popFour = document.querySelector('.popup-four');
let popFive = document.querySelector('.popup-five');
let popSix = document.querySelector('.popup-six');

let searchOne = document.querySelector('.search-one');
if(searchOne) {
  searchOne.addEventListener('click', () => {
    popOne.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
};
searchTwo = document.querySelector('.search-two');
if(searchTwo) {
  searchTwo.addEventListener('click', () => {
    popTwo.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
};
searchThree = document.querySelector('.search-three');
if(searchThree) {
  searchThree.addEventListener('click', () => {
    popThree.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
};
searchFour = document.querySelector('.search-four');
if(searchFour) {
  searchFour.addEventListener('click', () => {
    popFour.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
};

searchFive = document.querySelector('.search-five');
if(searchFive) {
  searchFive.addEventListener('click', () => {
    popFive.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
};

searchSix = document.querySelector('.search-six');
if(searchSix) {
  searchSix.addEventListener('click', () => {
    popSix.classList.toggle('popup-visible')
    document.body.classList.add('popup-hidden')
  })
}

new Accordion('.accordion');

let swiperEvents = new Swiper('.events-swiper', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 2,
  navigation: {
    nextEl: '.events-button-next',
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      pagination: {
        el: '.events-pagination',
      },
    },
    640: {
      spaceBetween: 36,
      slidesPerView: 2,
      pagination: {
        el: '.events-pagination',
      },
    },
    1000: {
        spaceBetween: 27,
        pagination: {
          el: '.events-pagination',
        },
    },
    1400: {
      loop: true,
        slidesPerView: 3,
        spaceBetweenSlides: 50
    }
  }
});

let swiperProjects = new Swiper('.projects-swiper', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1400: {
      slidesPerView: 2,
      slidesPerView: 3,
    }
  }
});

let tabBtn = document.querySelectorAll('.ac-panel__link');
let tabItem = document.querySelectorAll('.catalog-person');

tabBtn.forEach(function(element){
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function(btn){
      btn.classList.remove('ac-panel__link--active')
    });
    e.currentTarget.classList.add('ac-panel__link--active');

    tabItem.forEach(function(element) {
      element.classList.remove('catalog-person--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-person--active');
  })
})

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("myMap1", {
        center: [55.76035487616931,37.614775094834854],
        zoom: 14,
        controls: []
    });
    var myPlacemark = new ymaps.Placemark([55.76035487616931,37.614775094834854], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-point.svg',
        iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);
}
