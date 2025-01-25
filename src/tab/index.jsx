
export default function Tab(){
    return(
        <div className="tab-container">
            <div className="tab-header">
                <div className="tab-item">Tab 1</div>
                <div className="tab-item">Tab 2</div>
                <div className="tab-item">Tab 3</div>
            </div>
            <div className="tab-content">
                <div className="tab-content-item">
                    <p>Tab 1 Content</p>
                </div>
                <div className="tab-content-item">
                    <p>Tab 2 Content</p>
                </div>
                <div className="tab-content-item">
                    <p>Tab 3 Content</p>
                </div>
            </div>
        </div>
    )
}