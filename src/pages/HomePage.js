import React, { useState } from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

import linkedin from '../assets/images/linkedin.jpg';
import github from '../assets/images/github.jpg';
import projects from '../assets/images/projects.jpg';

function HomePage({ title, subTitle, text }) {
  const [items] = useState([
    {
      id: 0,
      title: 'Projects',
      subTitle: 'These are my projects',
      imgSrc: projects,
      link: '/projects',
      linkText: 'View',
      selected: false,
      isWithInSite: true
    },
    {
      id: 1,
      title: 'GitHub',
      subTitle: 'My personal Github',
      imgSrc: github,
      link: 'https://github.com/GilbertoGaspar',
      linkText: 'View',
      selected: false
    },
    {
      id: 2,
      title: 'Linkedin',
      subTitle: 'My personal Linkedin',
      imgSrc: linkedin,
      link: 'https://www.linkedin.com/in/gilberto-gaspar-60a391136/',
      linkText: 'View',
      selected: false
    }
  ]);

  return (
    <div>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel items={items} />
    </div>
  );
}

export default HomePage;
