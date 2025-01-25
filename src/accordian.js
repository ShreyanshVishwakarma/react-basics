import React, { useState } from 'react';

const data = [
    { title: "Section 1", content: "Content for section 1" ,id:1 },
    { title: "Section 2", content: "Content for section 2" ,id:2 },
    { title: "Section 3", content: "Content for section 3" ,id:3 },
];

function Accordion() {
   const [selected, setSelected] = useState(null);
    return (
        <div className="p-4">
            {data.length > 0 ? (
                data.map((dataItem, index) => (
                    <div className="accordion mb-4 flex-col align-middle justify-self-center" key={index}>
                        <div className="title font-bold text-lg">{dataItem.title}</div>
                        {dataItem.id === selected && (
                            <div className="content mt-2">{dataItem.content}</div>
                        )}
                        {!(selected === dataItem.id) ? (
                            <button className="mt-2 text-white justify-self-center bg-sky-700" onClick={() => setSelected(dataItem.id)}>show more</button>
                        ) : (
                            <button className="mt-2 bg-gray-300 text-blue-500" onClick={() => setSelected(null)}>show less</button>
                        )}
                    </div>
                ))
            ) : (
                <div>No data present</div>
            )}
        </div>
    );
}

export default Accordion;
