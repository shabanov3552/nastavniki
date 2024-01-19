$(document).ready(function () {
  (function () {
    const fullpageN = document.getElementById('fullpage');
    if (!fullpageN) {
      return;
    }

    var doFullpage = document.documentElement.clientWidth;
    if (doFullpage > 900) {
      $('#fullpage').fullpage({
        licenseKey: 'A385B362-71234D39-8D1BB14D-98723337',
        css3: true,
        scrollingSpeed: 700,
        inject: false,
        responsiveWidth: 700,
      });
    }
  })();

  const swiper = new Swiper('.preview-slider', {
    direction: 'horizontal',
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    navigation: {
      nextEl: '.preview-slider__next',
      prevEl: '.preview-slider__prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      900: {
        autoHeight: false,
      },
    },
  });

  if (swiper.allowSlidePrev == false) {
    document.querySelector('.slider-arrows--preview').style.display = 'none';
    document.querySelector('.slider-arrows--preview-mobi').style.display = 'none';
  }

  const swiperNews = new Swiper('.news-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },
  });

  const swiperReviews = new Swiper('.reviews-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 35,
    navigation: {
      nextEl: '.reviews-slider__next',
      prevEl: '.reviews-slider__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      1441: {
        slidesPerView: 4,
      },
    },
  });

  const swiperPartners = new Swiper('.swiper-partners', {
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiperAbout = new Swiper('.about-slider', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.about-slider__btn--next',
      prevEl: '.about-slider__btn--prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      900: {
        autoHeight: false,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {

        return '<span class="' + className + '">' + (arr[index]) + '</span>';
      },
    },
  });

  (function () {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.header__conatiner');

    burger.addEventListener('click', () => {
      if (header.classList.contains('header--active')) {
        setTimeout(() => {
          nav.style.display = 'none';
        }, 300);
        header.classList.remove('header--active');
        document.body.style.overflow = 'visible';
      } else {
        nav.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.classList.add('header--active');
      }
    });
  })();

  (function () {
    const block = document.querySelectorAll('.js-shows-block');

    block.forEach(function (item) {
      const btn = item.querySelector('.shows-nav-btn');
      const list = item.querySelector('.nav-right__box');
      const listHeight = list.scrollHeight;

      if (localStorage.getItem(item.id) == 'true') {
        list.style.height = listHeight + 'px';
        btn.innerHTML = '—';
        btn.classList.add('active');
      }

      btn.addEventListener('click', (el) => {
        if (btn.classList.contains('active')) {
          list.style.height = 0 + 'px';
          btn.innerHTML = '+';
          btn.classList.remove('active');
          localStorage.setItem(el.target.offsetParent.id, false);
        } else {
          list.style.height = listHeight + 'px';
          btn.innerHTML = '—';
          btn.classList.add('active');
          localStorage.setItem(el.target.offsetParent.id, true);
        }
      });
    });
  })();

  (function () {
    window.addEventListener('resize', handlerNav);

    function handlerNav() {
      let clientWidth = document.documentElement.clientWidth;
      if (clientWidth < 1150) {
        document.querySelectorAll('.nav__item').forEach((event) => {
          const block = event.querySelector('.nav-dropdown');

          if (!block) return;

          const close = event.querySelector('.nav-dropdown__close');

          event.addEventListener('click', () => {
            if (block.classList.contains('nav-dropdown--active')) {
              return;
            }
            block.classList.add('nav-dropdown--active');
            block.style.display = 'block';
            document.querySelector('.burger').style.zIndex = '0';
          });

          close.addEventListener('click', (e) => {
            e.stopPropagation();
            block.classList.remove('nav-dropdown--active');
            document.querySelector('.burger').style.zIndex = '111';
            setTimeout(() => {
              block.style.display = 'none';
            }, 200);
          });
        });
      }
    }
    handlerNav();
  })();

  // маска телефона
  jQuery(function ($) {
    $.mask.definitions['~'] = '[1,2,3,4,5,6,8,9]';
    $('.phone_validate').mask('+7 (~99) 999-99-99');
  });

  // input phone
  $(document).on('keypress', function (evt) {
    if (evt.isDefaultPrevented()) {
      // Assume that's because of maskedInput
      // See https://github.com/guillaumepotier/Parsley.js/issues/1076
      $(evt.target).trigger('input');
    }
  });

  //   placeholder
  $('.input, .textarea').on('focusin', function () {
    $(this).addClass('is-active');
  });
  $('.input, .textarea').on('focusout', function () {
    if (!$(this).val()) {
      $(this).removeClass('is-active');
    }
  });

  (function () {
    function clearInput(clearInput) {
      const input = clearInput.querySelector('.js-input');
      const clearBtn = clearInput.querySelector('.clear-input');

      if (!clearBtn) {
        return;
      }

      clearBtn.addEventListener('click', function (e) {
        input.value = '';
      });
    }
    const label = document.querySelectorAll('.label');
    label.forEach(clearInput);
  })();

  (function () {
    const aboutMap = document.querySelector('.about__svg');
    if (!aboutMap) return;

    const path = aboutMap.querySelectorAll('path');
    const tooltips = document.querySelector('.tooltips');
    const name = tooltips.querySelector('.tooltips__name');
    const mentors = tooltips.querySelector('.tooltips__mentors');
    const school = tooltips.querySelector('.tooltips__school');
    let scrolltop;
    let scrollleft;

    function coordinates(item) {
      scrolltop =
        window.pageYOffset +
        item.getBoundingClientRect().top +
        item.getBoundingClientRect().height / 2;

      scrollleft =
        window.pageXOffset +
        item.getBoundingClientRect().left +
        item.getBoundingClientRect().width / 2;

      tooltips.style.top = scrolltop + 'px';
      tooltips.style.left = scrollleft + 'px';

      if (scrollleft <= 80) {
        tooltips.classList.add('tooltips--left');
      } else if (tooltips.classList.contains('tooltips--left') && scrollleft > 80) {
        tooltips.classList.remove('tooltips--left');
      }
    }

    function text(item) {
      if (item.dataset.name == undefined) {
        name.innerHTML = '';
        tooltips.style.display = 'none';
      } else {
        name.innerHTML = item.dataset.name;
      }

      if (item.dataset.mentors == undefined) {
        mentors.innerHTML = '';
      } else {
        mentors.innerHTML = item.dataset.mentors;
      }

      if (item.dataset.school == undefined) {
        school.innerHTML = '';
      } else {
        school.innerHTML = item.dataset.school;
      }
    }

    path.forEach((item) => {
      item.addEventListener('mouseover', () => {
        tooltips.style.display = 'block';
        item.setAttribute('fill', 'url(#gradient)');
        coordinates(item);
        text(item);
        let offsetHeight = tooltips.offsetHeight;
        tooltips.style.setProperty('--tooltip-height', '-' + offsetHeight + 'px');
      });
      item.addEventListener('mouseout', () => {
        item.setAttribute('fill', '#A8C0D2');
        tooltips.style.display = 'none';
      });
    });
  })();

  (function () {
    const map = document.querySelector('.about__map');
    if (!map) return;

    const btnCloser = document.querySelector('.js-btn-closer');
    const btnFarther = document.querySelector('.js-btn-farther');

    btnCloser.addEventListener('click', () => {
      if (btnCloser.classList.contains('about__btn--active')) return;
      map.classList.remove('active');
      btnCloser.classList.add('about__btn--active');
      btnFarther.classList.remove('about__btn--active');
    });
    btnFarther.addEventListener('click', () => {
      if (btnFarther.classList.contains('about__btn--active')) return;
      map.classList.add('active');
      btnCloser.classList.remove('about__btn--active');
      btnFarther.classList.add('about__btn--active');
    });
  })();

  (function () {
    const btnShowMap = document.querySelector('.js-shows-map');
    if (!btnShowMap) return;

    const map = document.querySelector('.about__wrapper');
    const textBtn = btnShowMap.querySelector('.all-link__text');

    btnShowMap.addEventListener('click', () => {
      if (textBtn.textContent == 'Наставники на карте края') {
        map.style.display = 'block';
        textBtn.textContent = 'Назад';
      } else {
        map.style.display = 'none';
        textBtn.textContent = 'Наставники на карте края';
      }
    });
  })();

  // автовысота textarea
  (function () {
    document.querySelectorAll('textarea').forEach((el) => {
      el.style.height = el.setAttribute(
        'style',
        'height: ' + el.scrollHeight + 'px'
      );
      el.classList.add('auto');
      el.addEventListener('input', (e) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      });
    });
  })();


  (function () {
    const nav = document.querySelector('.mentorship .nav-right');

    if (!nav) return;

    const items = nav.querySelectorAll('.nav-right__block');
    let selectedLink;
    let selectedActive;

    function activeLink(e) {
      if (e.classList.contains('nav-right__link--active')) {
        e.classList.remove('nav-right__link--active');
      }

      if (window.location.href == e.href) {
        e.classList.add('nav-right__link--active');
        selectedActive = e;
      }
    }

    items.forEach((item) => {
      const link = item.querySelector('.nav-right__link');
      activeLink(link);
    });

    nav.onclick = function (event) {
      let target = event.target;

      if (!target.classList.contains('nav-right__link')) return;

      classList(target);
    };

    function classList(a) {
      if (selectedLink) {
        selectedLink.classList.remove('nav-right__link--active');
      }
      if (selectedActive) {
        selectedActive.classList.remove('nav-right__link--active');
      }

      selectedLink = a;
      selectedLink.classList.add('nav-right__link--active');
    }
  })();
});


function messageForm() {
  const box = document.querySelector('.form-contact__box');

  const message = `<div class="message-sent">  
                      <svg class="message-sent__icon">
                        <use xlink:href="./img/svgsprit.svg#form-chek"></use>
                      </svg>
                      <span class="message-sent__text">Сообщение успешно отправлено</span>
                    </div>`;

  const btn = `<button type="submit" class="btn btn__form">Отправить</button>`;

  box.innerHTML = message;

  setTimeout(() => {
    box.innerHTML = btn;
  }, "3000")
}