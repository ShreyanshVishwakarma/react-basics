import React, { useEffect, useState } from 'react';    
import QRcode from "react-qr-code";

export default function OR() {
    const [qrCode, setQrCode] = useState(""); 
    const [input,setInput] = useState("");
    useEffect(()=>{
        setQrCode(input);
    },[input]) 

    return (

        <div className="qr-wrapper flex flex-col items-center justify-center space-y-8">
            <h1 className='font-bold mt-10'>QR Code Generator</h1>
            <div className="qr-form">
                <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder="Enter URL" />

            </div>
            <div>
                <QRcode
                    value={qrCode}
                    id='qr-code'
                />
            </div>
        </div>
    )
}