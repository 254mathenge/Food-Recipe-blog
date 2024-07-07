import "./Header.css"
import {Link} from "react-router-dom"

function HeaderBottom() {
    return (
        
            <div className="header-nav-list">
            <ul className="header-nav-list-link">
                
                    <li className="nav-list-link-a"><Link to="/">Home</Link></li>
                    <li className="nav-list-link"><Link to="/MenuTracks">MenuTracks</Link></li>
                    <li className="nav-list-link"><Link to="/Blog">Blog</Link></li>
                    <li className="nav-list-link"><Link to="/Create">Create</Link></li>
                    <li className="nav-list-link"><Link to="/GetStarted">GetStarted</Link></li>
                </ul>
            </div>
            
    )
}
export default HeaderBottom;