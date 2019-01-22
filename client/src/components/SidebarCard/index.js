import React from "react";
import "./style.css";

// Kid card that shows up in home page sidebar
function SidebarCard({ children }) {
    return (
        <div>
        <div className="card border-0 m-2">
            <img className="card-img-top" src="../images/Bairon2.jpg" alt="Child" />
                <div className="card-body p-1">
                    <h6><strong>Bairon Duban</strong></h6>
                    <div class="small"><i class="fas fa-birthday-cake mr-2"></i>4/23/03<br />
                    <i class="fas fa-globe-americas mr-2"></i>Choluteca, Honduras</div>
                </div>
        </div>
        <div className="card border-0 m-2">
            <img className="card-img-top" src="../images/Solanyi.jpg" alt="Child" />
                <div className="card-body p-1">
                    <h6><strong>Solanyi Nicol</strong></h6>
                    <div class="small"><i class="fas fa-birthday-cake mr-2"></i>2/17/10<br />
                    <i class="fas fa-globe-americas mr-2"></i>Managua, Nicaragua</div>
                </div>
        </div>  
        </div>      
    )
}
                    
export default SidebarCard

