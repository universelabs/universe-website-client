import React from 'react';
import footerDataCenter from '../data/footerDataCenter.json';

function FooterColCenter( className ) {
  return footerDataCenter.map(item => (
    <li key={item.id} className="text-white-20 mb-2">
      {/* <a 
        href={item.url} 
        alt={item.alt}
        className={this.props.className}>
      */}
      {item.text}
      {/*</a>*/}
    </li>
  ));
}

export default FooterColCenter;
