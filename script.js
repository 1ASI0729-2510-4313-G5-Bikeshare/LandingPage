document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburguesa
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('navMenu');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  // Carrusel de reseñas
  const container = document.getElementById('clientReviews');
  if (container) {
    const slides = [...container.querySelectorAll('.testimonial-slide')];
    const dots = container.querySelector('.carousel-dots');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    let index = 0, interval;

    if (!slides.length) {
      container.style.display = 'none';
      document.querySelector('.no-reviews-message').style.display = 'block';
    } else {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('aria-label', `Ir a reseña ${i+1}`);
        dot.onclick = () => { show(i); reset(); };
        dots.append(dot);
      });
      const dotElems = dots.querySelectorAll('.dot');
      function show(i) {
        slides.forEach(s => s.classList.remove('active'));
        dotElems.forEach(d => d.classList.remove('active'));
        slides[(index = (i + slides.length) % slides.length)].classList.add('active');
        dotElems[index].classList.add('active');
      }
      function reset() {
        clearInterval(interval);
        interval = setInterval(() => show(index+1), 5000);
      }
      prev.onclick = () => { show(index-1); reset(); };
      next.onclick = () => { show(index+1); reset(); };
      show(0); reset();
    }
  }

    /*SISTEMA DE TRADUCCIÓN*/
    const translations = {
        es: {
            navHowItWorks: '¿Cómo Funciona?', navAbout: 'Nosotros', navReviews: 'Reseñas', navContact: 'Contacto', navLogin: 'Ingresar a la App',
            heroTitle: 'Tu ciudad, a tu ritmo.', heroSubtitle: 'Conectamos personas para el alquiler seguro y flexible de bicicletas. Muévete de forma sostenible, ahorra dinero y redescubre tu entorno.',
            heroStart: 'Descubre Cómo Funciona',
            pillRenter: 'PARA ARRENDATARIOS', renterTitle: 'Alquila una Bici en 3 Simples Pasos',
            renterStep1_1: 'Encuentra:', renterStep1_2: 'Reserva:', renterStep1_3: 'Disfruta:',
            renterCTA: 'Comenzar a Alquilar',
            pillPartner: 'PARA ARRENDADORES', partnerTitle: 'Genera Ingresos con tu Bicicleta',
            partnerDesc: '¿Tienes una bici que no usas siempre? Conviértela en un activo. Ofrecerla en BikeShare es gratis, seguro y rentable.',
            partnerBenefit1: 'Tú pones el precio y la disponibilidad.', partnerBenefit2: 'Comunidad basada en confianza y reseñas.', partnerBenefit3: 'Pagos seguros directamente a tu cuenta.',
            partnerCTA: 'Empieza a Alquilar tu Bici',
            missionTitle: 'Nuestra Misión', missionText: 'Promover una movilidad urbana sostenible, accesible y colaborativa a través de una plataforma digital que conecta personas para el alquiler seguro y flexible de bicicletas, garantizando confianza y transparencia en cada viaje.',
            visionTitle: 'Nuestra Visión', visionText: 'Convertirnos en la solución líder de micromovilidad compartida en el Perú, transformando la forma en que las personas se desplazan y fomentando una cultura de transporte responsable y ecológico.',
            teamTitle: 'El equipo detrás de BikeShare',
            reviewsTitle: 'Qué dice nuestra comunidad',
            review1: '"BikeShare transformó mi manera de desplazarme. Las bicis siempre en excelente estado y la app es súper fácil de usar."',
            review2: '"Puse mi bicicleta en alquiler y en una semana ya había cubierto su mantenimiento. ¡Plataforma segura y muy rentable!"',
            review3: '"Gran concepto y muy bien ejecutado. Me encanta la flexibilidad que me da para moverme por la ciudad sin preocuparme del tráfico."',
            noReviews: 'Aún no hay reseñas disponibles. ¡Sé el primero en compartir tu experiencia!',
    contactTitle: '¿Hablamos?',
    contactSubtitle: 'Si tienes preguntas o quieres colaborar, no dudes en escribirnos.',
    contactName: 'Tu nombre',
    contactEmail: 'Tu correo electrónico',
    contactMessage: 'Tu mensaje',
    contactSend: 'Enviar Mensaje',
    footerDesc: 'Reinventando la movilidad urbana, un viaje a la vez.',
    footerCompany: 'Compañía',
    navPartner: 'Sé un Socio',
    footerSupport: 'Soporte',
    footerHelp: 'Ayuda',
    footerFollow: 'Síguenos',
    footerRights: 'Todos los derechos reservados.'
        },
        en: {
            navHowItWorks: 'How It Works', navAbout: 'About Us', navReviews: 'Reviews', navContact: 'Contact', navLogin: 'Sign In',
            heroTitle: 'Your city, at your own pace.', heroSubtitle: 'We connect people for the safe and flexible rental of bicycles. Move sustainably, save money, and rediscover your surroundings.',
            heroStart: 'Discover How It Works',
            pillRenter: 'FOR RENTERS', renterTitle: 'Rent a Bike in 3 Simple Steps',
            renterStep1_1: 'Find:', renterStep1_2: 'Book:', renterStep1_3: 'Enjoy:',
            renterCTA: 'Start Renting',
            pillPartner: 'FOR PARTNERS', partnerTitle: 'Generate Income with Your Bike',
            partnerDesc: 'Have a bike you don’t always use? Turn it into an asset. Listing it on BikeShare is free, safe, and profitable.',
            partnerBenefit1: 'You set the price and availability.', partnerBenefit2: 'Community based on trust and reviews.', partnerBenefit3: 'Secure payments directly to your account.',
            partnerCTA: 'Start Listing Your Bike',
            missionTitle: 'Our Mission', missionText: 'To promote sustainable, accessible, and collaborative urban mobility through a digital platform that connects people for the safe and flexible rental of bicycles, ensuring trust and transparency in every journey.',
            visionTitle: 'Our Vision', visionText: 'To become the leading shared micromobility solution in Peru, transforming the way people move and fostering a culture of responsible and ecological transport.',
            teamTitle: 'The Team Behind BikeShare',
            reviewsTitle: 'What our community says',
            review1: '"BikeShare transformed my commute. The bikes are always in excellent condition, and the app is super easy to use."',
            review2: '"I listed my bike for rent, and within a week, it had already paid for its maintenance. A safe and very profitable platform!"',
            review3: '"Great concept and very well executed. I love the flexibility it gives me to get around the city without worrying about traffic."',
            noReviews: 'No reviews available yet. Be the first to share your experience!',
            contactTitle: 'Let\'s talk',
    contactSubtitle: 'If you have questions or want to collaborate, feel free to write to us.',
    contactName: 'Your name',
    contactEmail: 'Your email address',
    contactMessage: 'Your message',
    contactSend: 'Send Message',
    footerDesc: 'Reinventing urban mobility, one trip at a time.',
    footerCompany: 'Company',
    navPartner: 'Become a Partner',
    footerSupport: 'Support',
    footerHelp: 'Help Center',
    footerFollow: 'Follow Us',
    footerRights: 'All rights reserved.'
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const translatablePlaceholders = document.querySelectorAll('[data-translate-placeholder]');

    const translatePage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        translatablePlaceholders.forEach(el => {
            const key = el.dataset.translatePlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            translatePage(button.dataset.lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    translatePage(savedLang);

});