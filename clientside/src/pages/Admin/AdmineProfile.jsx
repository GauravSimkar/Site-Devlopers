import { useContext } from "react";
import { Authcontext } from "../../components/contextAPI/Authcontext";
import Layout from "../../components/layout/layout";
import Adminmenu from "../../components/layout/Adminmenu";
const AdminProfile=()=>{
    const [auth]=useContext(Authcontext);
    return(  
    <Layout>        
          <div className="row">
           <div className="col-md-3">
           <Adminmenu/>
        </div>
        <div className="col-md-9">
        <div className="profile-main">
        <div> 
            <h4>Admine Name: {auth?.user?.name}</h4>
            <h4>Admin Email: admin123@gmail.com</h4>
            <h4>Admin Phone no.: 123456789</h4>
        </div>
        </div>
        </div>
      </div>
    </Layout>
        );
}

export default AdminProfile;