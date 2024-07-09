import "./Header.css"
import { Link,  } from "react-router-dom"


function HeaderBottom() {
//     const navigate=useNavigate
    const handleLogout =()=>{
        alert('You have been logged out.');

}
    
    return (
        
            <div className="header-nav-list">
            <ul className="header-nav-list-link">
                
                    <li className="nav-list-link-a"><Link to="/">Home</Link></li>
                    <li className="nav-list-link"><Link to="/MenuTracks">MenuTracks</Link></li>
                    <li className="nav-list-link"><Link to="/Blog">Blog</Link></li>
                   
                <li className="nav-list-link"><Link to="/GetStarted">GetStarted</Link></li>
               
            </ul>
            <div >
                  <Link to="/"><button onClick={handleLogout} className="logout-button">
                        Logout
                    </button></Link> 
                
    
            </div>
            </div>
            
    )
}
export default HeaderBottom;