import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

export default function ContactPage({ title }) {
  return (
    <div>
      <Hero title={title} />
      <Content>
      <p>
        You can reach me {' '}
        <a 
            href='mailto:gilbertogaspar1996@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            here!
          </a>
      </p>
      </Content>
    </div>
  );
}
