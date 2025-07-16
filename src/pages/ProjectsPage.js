import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

import apbTrader from '../assets/images/apbTrader.png';
import ggMovieDb from '../assets/images/gg-movie-db.png';
import youtubeMap from '../assets/images/youtubeMap.png';
import reduxTwitter from '../assets/images/reduxTwitter.png';
import ggHabitTracker from '../assets/images/gg-habit-tracker.png';

function ProjectsPage({ title, subTitle, text }) {
  const items = [
    {
      id: 0,
      title: 'GG Habit Tracker',
      subTitle: 'Next.js',
      imgSrc: ggHabitTracker,
      link: 'https://gg-habit-tracker.vercel.app/',
      linkText: 'Demo',
      subLink: 'https://github.com/GilbertoGaspar/gg-habit-tracker',
      subLinkText: 'Source',
      selected: false
    },
    {
      id: 1,
      title: 'APB Trader',
      subTitle: 'React, React router, and Bootstrap',
      imgSrc: apbTrader,
      link: 'https://apb-trader.netlify.app/',
      linkText: 'Demo',
      subLink: 'https://github.com/GilbertoGaspar/APB-Trader-React',
      subLinkText: 'Source',
      selected: false
    },
    {
      id: 2,
      title: 'Movies DB',
      subTitle: 'React, React router, and Material-UI',
      imgSrc: ggMovieDb,
      link: 'https://gg-movie-db.netlify.app/',
      linkText: 'Demo',
      subLink: 'https://github.com/GilbertoGaspar/Movies-DB',
      subLinkText: 'Source',
      selected: false
    },
    {
      id: 3,
      title: 'Redux Twitter',
      subTitle: 'React, Redux, and React router',
      imgSrc: reduxTwitter,
      link: 'https://redux-twitter.netlify.app/',
      linkText: 'Demo',
      subLink: 'https://github.com/GilbertoGaspar/Redux-Twitter',
      subLinkText: 'Source',
      selected: false
    }
  ];

  return (
    <div>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel items={items} />
    </div>
  );
}

export default ProjectsPage;
