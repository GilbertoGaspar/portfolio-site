import React from 'react';

import CardInfo from './CardInfo';

export default function Card({ item, click }) {
  return (
    <div className='d-inline-block g-card'>
      <img
        className='g-card-image'
        src={item.imgSrc}
        alt={item.imgSrc}
        onClick={() => click(item.id)}
      />
      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
          linkText={item.linkText}
          subLink={item.subLink}
          subLinkText={item.subLinkText}
          isWithInSite={item.isWithInSite}
        />
      )}
    </div>
  );
}
