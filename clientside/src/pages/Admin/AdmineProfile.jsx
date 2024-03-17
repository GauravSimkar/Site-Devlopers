import { useContext } from "react";
import { Authcontext } from "../../components/contextAPI/Authcontext";
import Adminmenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import './Adminprofile.css'
const AdminProfile=()=>{
    const [auth]=useContext(Authcontext);
    return( 
    <Layout>        
        <div className="row">
              <div className="col-md-3">
                 <Adminmenu/>
              </div>
        <div class="col-md-9">
        <div class="profile-main">
            <div class="profile-details"> 
            <h4>Admin Name: <span class="profile-info">{auth?.user?.name}</span></h4>
            <h4>Admin Email: <span class="profile-info">admin123@gmail.com</span></h4>
            <h4>Admin Phone no.: <span class="profile-info">123456789</span></h4>
            </div>
          </div>
         </div>
        </div>
    </Layout> 

);
}

export default AdminProfile;