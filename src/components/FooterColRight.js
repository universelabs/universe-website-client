import React from 'react';
import footerDataRight from '../data/footerDataRight.json';

function FooterColRight( className ) {
  return footerDataRight.map(item => (
    <li key={item.id} className="text-white-20 mb-2">
      <a href={item.url} alt={item.alt} className="text-white">
        {item.text}
      </a>
    </li>
  ));
}

export default FooterColRight;
