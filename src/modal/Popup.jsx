export default function Popup({id , header , body , footer , onClose}){
    return (
        <div id = {id || "popup"} className = "popup">
            <div className = "header">{header ? header : "Header"}</div>
            <div className = "body">{body?body:"BODY"}</div>
            <div className = "footer">{footer?footer:"footer"}</div>
        </div>
    )
}