import React from "react";
import footerDataLeft from "../data/footerDataLeft.json";

function FooterColLeft(className) {
  return footerDataLeft.map(item => (
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

export default FooterColLeft;
