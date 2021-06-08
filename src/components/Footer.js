import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

function Footer({ owner, socials }) {
  return (
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className='border-top justify-content-between p-3'>
          <Col className='p-0' md={3} sm={12}>
            {owner}{' '}
            <a
              className='footer__link'
              href={socials.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare size='1.5rem' />
            </a>{' '}
            <a
              className='footer__link'
              href={socials.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size='1.5rem' />
            </a>{' '}
            <a
              className='footer__link'
              href={`mailto:${socials.email}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ImMail size='1.4rem' />
            </a>
          </Col>
          <Col className='p-0 d-flex justify-content-end' md={3}>
            Copyright © 2021 - {owner}. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
