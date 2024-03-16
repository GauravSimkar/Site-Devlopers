import { useContext } from "react";
import { Authcontext } from "../../components/contextAPI/Authcontext";

const AdminProfile=()=>{
    const [auth]=useContext(Authcontext);
    return(       
        <div className="profile-main">
        <div> 
            <h4>Admine Name: {auth?.user?.name}</h4>
            <h4>Admin Email: admin123@gmail.com</h4>
            <h4>Admin Phone no.: 123456789</h4>
        </div>
        </div>
    );
}

export default AdminProfile;