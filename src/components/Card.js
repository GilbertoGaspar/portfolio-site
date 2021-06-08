import React from 'react';
import { motion } from 'framer-motion';

import CardInfo from './CardInfo';

export default function Card({ item, click }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className='d-inline-block g-card'>
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
    </motion.div>
  );
}
