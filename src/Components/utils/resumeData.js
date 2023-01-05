import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';

import CV from '../../Assets/CV Yigal-Web.pdf';

import diplom1 from '../../Assets/Img/Diploms/java+react.jpg';
import diplom2 from '../../Assets/Img/Diploms/java_practic.jpg';
import diplom3 from '../../Assets/Img/Diploms/nodejs&react.jpg';
import diplom4 from '../../Assets/Img/Diploms/nodejs.jpg';
import reactNative from '../../Assets/Img/Diploms/react-native.jpg';
import foodDeliveryApp from '../../Assets/Img/Works/reactnative/foodDeliveryApp.jpg';
import countDownjs from '../../Assets/Img/Works/js/countDown-js.jpg';
import validationjs from '../../Assets/Img/Works/js/validationjs.jpg';
import weatherjs from '../../Assets/Img/Works/js/weatherjs.jpg';
import dicegame from '../../Assets/Img/Works/js/dicegame.jpg';
import firstapp from '../../Assets/Img/Works/reactnative/firstapp.png';
import tourMERN from '../../Assets/Img/Works/reactjs/tourMERN.jpg';
import rentNative from '../../Assets/Img/Works/reactnative/rent-native.jpg';
import movie from '../../Assets/Img/Works/reactnative/movie.jpg';

export default {
  name: 'Yigal Igor Maksimov',
  title: 'Full stack developer',
  languages: 'ENG, HEB, RUS',
  email: 'maksylfd@gmail.com',
  location: ' Athens, Greece',
  phone: '+30 694 381 1801',
  job: 'Full stack developer',

  social: {
    // Facebook: {
    //   link: 'https://www.facebook.com/MaksyDev',
    //   text: 'Facebook',
    //   icon: <FacebookIcon />,
    // },
    GitHub: {
      link: 'https://github.com/MaksYig',
      text: 'GitHub',
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/yigal-igor-maksimov-0572021b3/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
    Telegram: {
      link: 'https://msng.link/o/?yig_ma=tg',
      text: 'Telegram',
      icon: <TelegramIcon />,
    },
  },
  about:
    "I'm a Front-End & Back-End Developer who is excited about being a strategic partner and an awesome product provider. I like to create, and I like to comprehend new knowledge in web and mobile development. I'll be delighted to bring your new project to reality. Will join a team to create something beautiful or will take remote orders.",

  experiences: [
    {
      title: 'Freelancer',
      date: '2020 - to Present',
      description:
        'Creation of several projects through a freelance exchange. On such platforms as: Upwork, Fiverr. Website development for acquaintances to improve their own qualifications.',
    },
    {
      title: 'Teleperformance (Greece)',
      date: 'November 2019 - September 2021',
      description:
        "Technical Support M**** Project.Solutions of customer's technical problems related to Programs Office and Windows via remote connection to the client's personal computer.",
    },
    {
      title: 'Ltd. Koncept-Product (Minsk, Belarus)',
      date: ' 2015 - 2018',
      description:
        'Calculation of profitability of production, negotiations with the clients for the supply of products, drawing up a financial plan. Control of the technical production process from order to shipment of finished products.',
    },
    {
      title: 'Flextronics Israel',
      date: '2013 - 2015',
      description:
        'Production management for antennas collection for cellular. Management of a team of 100 people in two shifts. The responsibility for the production, shipment and quality of QA.',
    },
    {
      title: 'Military service',
      date: '2005 - 2013',
      description: '',
    },
  ],

  educations: [
    {
      title: 'Python + Django Couгse',
      date: '2022',
      description: ' Python (Django) web aplications - The practical course',
    },
    {
      title: 'React Native Couгse',
      date: '2021',
      description: ' React Native - The practical course',
    },
    {
      title: 'MERN Couгse ',
      date: '2021',
      description:
        'Intensive practical advanced course of MERN ( MongoDB,ExpressJS,ReactJS,NodeJS)',
    },
    {
      title: 'Back-End Couгse',
      date: '2020',
      description:
        'Intensive practical advanced course of (NodeJS , ExpressJS, MongoDB)',
    },
    {
      title: 'Javascript Couгse ',
      date: '2020',
      description: 'Intensive practical advanced course of Javascript (ES6)',
    },
    {
      title: 'Javascript Couгse',
      date: ' 2020',
      description: 'Intensive online course of Javascript (ES6) and ReactJs',
    },
    {
      title: 'Web Development Course',
      date: '2020',
      description:
        'Intensive online course for web developers (HTML5, CSS3, JQuery) ',
    },
  ],
  services: [
    {
      title: 'Web Development',
      description: 'Creating responsive web Application',
      icon: <WebIcon />,
    },
    {
      title: 'Mobile Application',
      description: 'Creating mobile Application (Android)',
      icon: <MobileFriendlyIcon />,
    },
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: [
        'JavaScript',
        'ReactJS',
        'React Native',
        'Django',
        'MaterialUI',
        'Native Base',
      ],
    },
    {
      title: 'BACK-END',
      description: ['NodeJS', 'Python'],
    },
    {
      title: 'DATABASES',
      description: ['Firebase', 'MongoDB', 'MySQL'],
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub'],
    },
  ],

  diploms: [
    {
      title: 'Full course JavaScript + React - from Zero to result',
      img: diplom1,
    },
    {
      title: 'Full course practical JavaScript (Advanced level)',
      img: diplom2,
    },
    {
      title: 'Full Stack React, Redux & Node.js',

      img: diplom3,
    },
    {
      title: 'Full course practical Node.js,Express,MongoDb',
      img: diplom4,
    },
    {
      title: 'React Native - The practical Guide',
      img: reactNative,
    },
  ],
  portfolio: [
    {
      tag: 'ReactJS',
      image: tourMERN,
      title: 'MERN Tour App',
      description:
        'Tours MERN (MongoDB, ExpressJS, ReactJS, NodeJS) App. With user and admin settings panel, option to order tours.Auth users with JWT cookie. Used MaterialUI for User Interface.',
      caption: 'TOUR MERN APP',
      links: [{ link: 'https://tpservice.netlify.app/', icon: <GitHubIcon /> }],
    },
    {
      tag: 'React Native',
      image: firstapp,
      title: 'React Native App (Android)',
      caption: 'React Native App (Android)',
      description:
        'React Native App for Android with API. BackEnd part work with NodeJs and MongoDB. App with option to order Tours, see adds with apartment rents and Swipe Dating. With Sign in and Sign up option and Admin Menu to manage Users, Tours, Rents and Bookings.',
      links: [],
    },
    {
      tag: 'React Native',
      image: foodDeliveryApp,
      title: 'React Native App (Android)',
      caption: 'Food Delivery App (Android)',
      description:
        'React Native App for Android. Food delivery app. Only Front-End part.Drawer menu, filter settings.',
      links: [
        {
          link: 'https://github.com/MaksYig/foodDeliveryApp',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React Native',
      image: movie,
      title: 'React Native Movie App (Android)',
      caption: 'React Native Movie App (Android)',
      description:
        'React Native App for Android with API. Movie app that you can see the movies categories. Also can looking for movies and see movie description and movie trailer.',
      links: [
        { link: 'https://github.com/MaksYig/movie', icon: <GitHubIcon /> },
      ],
    },
    {
      tag: 'React Native',
      image: rentNative,
      title: 'Rent apartment Android App',
      caption: 'Rent apartment Android App',
      description:
        'React Native App for Android. Back-End part work with Firebase. App with option to find apartment in area and contact directly with owner.',
      links: [],
    },
    {
      tag: 'JavaScript',
      image: countDownjs,
      caption: 'Countdown script for web site',
      title: 'Javascript-Countdown vanila ',
      description:
        'Countdown script for web site on clear Javascript code (ES6). With automatic year change on the background. Easy add to your project and customize as you need.',
      links: [
        {
          link: 'https://maksyig.github.io/timeCounter/dist/',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'JavaScript',
      image: validationjs,
      caption: 'SingUp modal with validation for web site',
      title: 'JavaScript-SingUp modal with validation',
      description:
        'Singup modal with validation for web site on clear Javascript code (ES6). Validates input rows for text, numbers, email. Submit button is not active till all inputs are not filled. Sending Fetch POST object with user information. Easy add to your project and customize as you need.',
      links: [
        {
          link: 'https://maksyig.github.io/signup_modal/dist/',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'JavaScript',
      image: weatherjs,
      caption: 'Weather App with API requests',
      title: 'JavaScript-Weather App with API requests',
      description:
        'Web App showing the current weather in the city and general information about the country Created with Use Strict mode (ES6+). With two diferent API Fetch requests. With option to show wheather for 7 days forward. With random background pictures. Location option is not working because of subdomain.',
      links: [
        {
          link: 'http://weatherapiapp.maksydev.site/',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'JavaScript',
      image: dicegame,
      caption: 'Javascript Dice Game',
      title: 'Javascript Dice Game',
      description:
        'Simple Javascript game on native JAVAScript. Both Desktop and mobile version of game. For two players. Who get first 100 points - WINs.',
      links: [
        {
          link: 'https://maksyig.github.io/diceGame/dist/index.html',
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
  cv: {
    name: 'Yigal CV',
    path: CV,
  },
};
