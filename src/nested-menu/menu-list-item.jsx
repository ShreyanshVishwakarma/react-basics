import React from 'react';
import MenuList from './menu-list';
import { useState } from 'react';

const MenuListItem = ({ item }) => {

    const handleClick = () => {
        setShowchild(!showchild);
    }
    
    const [showchild, setShowchild] = useState(false);

  return (
    <li className="mb-2">
      <span className="font-semibold text-gray-800">{item.label}</span>
      {item.children&&item.children.length>0?(
        <span
        className='font-bold text-blue-500 cursor-pointer'
        onClick={handleClick}
        onMouseEnter={()=>setShowchild(true)}>
            {showchild?("-"):("+")}
        </span>):(null)}
      {item.children && showchild &&item.children.length > 0 && (
        <div className="pl-4 border-l-2 border-blue-500 ml-2" onMouseLeave={()=>setShowchild(false)}>
          <MenuList items={item.children} />
        </div>
      )}
    </li>
  );
};

export default MenuListItem;
