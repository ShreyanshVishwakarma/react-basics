export default function Popup({id , header , body , footer , onClose}){
    return (
        <div id = {id || "popup"} className = "popup fixed top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <button onClick={onClose} className="absolute top-2 right-2 text-white">
                &times;
            </button>
            <div className = "header">{header ? header : "Header"}</div>
            <div className = "body">{body?body:"BODY"}</div>
            <div className = "footer">{footer?footer:"footer"}</div>
        </div>
    )
}