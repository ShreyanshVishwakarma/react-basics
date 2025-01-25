import { useState, useEffect } from "react";
import { sideMenu } from "./data";
import MenuList from "./menu-list";

export default function NestedMenu({data = sideMenu}) {
    const [menu,setMenu] = useState(data);

    useEffect(() => {
        setMenu(data);
    }, [data]);

    return (
    <div className="side-menu-container p-4 bg-gray-100 inline-block">
            <h1 className="text-lg font-bold mb-4">Menu</h1>
            <MenuList items={menu} />
        </div>
    )
}
