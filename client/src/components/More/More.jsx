import "./More.css"
import more from "../../assets/more.jpg"
import { FaSearch } from "react-icons/fa";
function More (){
    return (
        <div className="more-section">
            <div className="search-section">
                <form className="form-search">
                    <div>
                    <input type="text" placeholder="Type your search" className="search" /> 
                        <button type="submit" className="search-btn"><FaSearch/></button>
                        </div>
                    <p className="types-search">/breakfast/dessert/brunch/lunch</p>
                </form>
            </div>
            <div className="more-delicacies-section">
                <div className="delicacies1">
                    <img src={more} alt="" className="more-image" />
                    <h3>Appetizer</h3>
                    </div>
                    <div className="delicacies1">
                    <img src={more} alt="" className="more-image"/>
                    <h3>Appetizer</h3>
                    </div>
                        <div className="delicacies1">
                    <img src={more} alt="" className="more-image"/>
                    <h3>Appetizer</h3>
                    </div>
                            <div className="delicacies1">
                    <img src={more} alt="" className="more-image" />
                    <h3>Appetizer</h3>
                </div>
                <div className="delicacies1">
                    <img src={more} alt="" className="more-image" />
                    <h3>Appetizer</h3>
                </div>
                <div className="delicacies1">
                    <img src={more} alt="" className="more-image" />
                    <h3>Appetizer</h3>
                </div>
            </div>
        </div>
    )

}
export default More