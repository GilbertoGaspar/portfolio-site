import React from 'react';
import { motion } from 'framer-motion';

import CardInfo from './CardInfo';

export default function Card({ item, click }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, scale: { delay: 0 } }}
      className='d-inline-block g-card'
    >
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
