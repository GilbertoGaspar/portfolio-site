import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function AboutPage({ title }) {
  return (
    <div>
      <Hero title={title}></Hero>
      <Content>
        <p>
          Hello,
        </p>{' '}
        <p>
          I'm a Software Developer with a passion for crafting responsive, accessible, and scalable web applications using ReactJS and modern JavaScript frameworks. Adept at collaborating in agile environments, integrating innovative features, and delivering intuitive user experiences. Continuously learning and building to stay at the forefront of web technologies.
        </p>{' '}
        <p>
          My goal is to provide value to the companies I work for by creating a
          great user experience. I'm constantly learning new things to improve
          myself as a developer in all aspects of the field.
        </p>
      </Content>
    </div>
  );
}
