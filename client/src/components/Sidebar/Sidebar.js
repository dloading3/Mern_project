import apna from "./apna.jpg"

import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About us</h2>
        </div>

        <img src={apna} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">3 engineering students came up with an idea to create a blog website where everyone can express what they feel</p>
    </div>;
}

export default Sidebar;