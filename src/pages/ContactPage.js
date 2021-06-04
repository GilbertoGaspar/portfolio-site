import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function ContactPage({ title }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    axios
      .post(
        'https://ecstatic-kepler-e36fcf.netlify.app/.netlify/functions/email',
        {
          name,
          email,
          message,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          setEmailSent(true);
          setDisabled(false);
        } else {
          setEmailSent(false);
          setDisabled(false);
        }
      })
      .catch(() => {
        setEmailSent(false);
        setDisabled(false);
      });
  };

  return (
    <div>
      <Hero title={title} />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
            <Form.Control
              id='full-name'
              name='name'
              type='text'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              id='email'
              name='email'
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control
              id='message'
              name='message'
              as='textarea'
              value={message}
              rows='3'
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button className='d-inline-block' type='submit' disabled={disabled}>
            Send
          </Button>
          {emailSent === true && (
            <p className='d-inline success-msg'>Email Sent</p>
          )}
          {emailSent === false && (
            <p className='d-inline error-msg'>Email Not Sent</p>
          )}{' '}
          or{' '}
          <a
            href='mailto:gilbertogaspar1996@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email me!
          </a>
        </Form>
      </Content>
    </div>
  );
}
