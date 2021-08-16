import '../scss/main.scss';
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade]);

document.addEventListener('DOMContentLoaded', () => {
  const selectCity = document.querySelector('.select-city');
  const headerSlider = document.querySelector('.header-slider');
  const tabs = document.querySelector('.terms .tabs');
  const burgerMenu = document.querySelector('.burger-menu');
  const iconBurger = document.querySelector('.header-btn .icon-btn');

  if (selectCity) {
    selectCity.addEventListener('click', cityClickHandler);
  }
  if (headerSlider) {
    const sliderHome = new Swiper(headerSlider, {
      speed: 1300,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.header-pagination',
        clickable: true,
      },
    });
  }
  if (tabs) {
    tabs.addEventListener('click', tabClickHandler);
  }
  if (burgerMenu) {
    burgerMenu.addEventListener('click', burgerClickHandler);
  }
  if (iconBurger) {
    iconBurger.addEventListener('click', iconBurgerClickHandler)
  }

  function cityClickHandler(event) {
    const cityOptions = event.currentTarget.querySelector('.select-city_options');
    const backdrop = document.querySelector('.city-backdrop');
    if (cityOptions.classList.contains('hidden')) {
      cityOptions.classList.remove('hidden');
      backdrop.classList.remove('hidden');
    } else {
      cityOptions.classList.add('hidden');
      backdrop.classList.add('hidden');
    }
    if (event.target.dataset.city) {
      const cityName = document.querySelector('.select-city_name .name');
      cityName.innerHTML = event.target.dataset.city;
    }
  }
  function tabClickHandler(event) {
    if (event.target.classList.contains('tabs-item')) {
      document.querySelectorAll('.terms .tabs-item').forEach(tab => {
        tab.classList.remove('active');
      })
      document.querySelectorAll('.terms .tabs-item_content').forEach(tab => {
        if(!tab.classList.contains('hidden')) {
          tab.classList.add('hidden');
        }
      })
      event.target.classList.add('active');
      const tabId = document.querySelector(`#${event.target.dataset.link}`);
      tabId.classList.remove('hidden');
    }
  }
  function burgerClickHandler(event) {
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerMenu.classList.toggle('open');

    if (mobileMenu.classList.contains('none')) {
      mobileMenu.classList.remove('none');
    } else {
      mobileMenu.classList.add('none');
    }
  }
  function iconBurgerClickHandler(event) {
    event.target.closest('.header').classList.toggle('open');
  }
});
