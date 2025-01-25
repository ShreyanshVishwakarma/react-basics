import React from 'react';
import MenuListItem from './menu-list-item';

const MenuList = ({ items }) => {
  return (
    <ul className="list-none pl-7">
      {items.map((item, index) => (
        <MenuListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default MenuList;
