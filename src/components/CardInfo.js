import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function CardInfo({
  title,
  subTitle,
  link,
  linkText,
  subLink,
  subLinkText,
  isWithInSite = false,
}) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className='g-card-info' style={style}>
      <p className='g-card-title'>{title}</p>
      <p className='g-card-sub-title'>{subTitle}</p>
      {isWithInSite ? (
        <Link className='mr-2' to={link}>
          <i className='fas fa-external-link-alt'></i> {linkText}
        </Link>
      ) : (
        <a
          className='mr-2'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-external-link-alt'></i> {linkText}
        </a>
      )}{' '}
      {subLink && (
        <a
          className='mr-2'
          href={subLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github'></i> {subLinkText}
        </a>
      )}
    </animated.div>
  );
}
