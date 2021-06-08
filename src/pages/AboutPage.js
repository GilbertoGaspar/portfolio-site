import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function AboutPage({ title }) {
  return (
    <div>
      <Hero title={title}></Hero>
      <Content>
        <p>
          Hello, my name is Gilberto Gaspar. I'm a front-end web developer with
          experience in JavaScript, React, Redux, HTML, CSS, SCSS, Node JS,
          Express JS, MySQL, and MongoDB.
        </p>{' '}
        <p>
          I grew up in the South Florida area and currently live in Miami, FL.
          As a child, I've always had a fascination with computers and how they
          worked.
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
