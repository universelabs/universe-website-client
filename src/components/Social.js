import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = styled.li`
  line-height: 25px;
`;

function Social(listAlign, className, items) {
  return (
    items &&
    items.map((item, i) => (
      <ListItem key={i} className={`${listAlign} mx-2`}>
        <a href={items.href} alt={items.alt} className={`${className}`}>
          <FontAwesomeIcon className="mr-1" icon={[`fab`, `${items.icon}`]} />
        </a>
      </ListItem>
    ))
  );
}

export default Social;
