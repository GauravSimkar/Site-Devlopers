import Adminmenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import AdminProfile from "./AdmineProfile";

const AdminDashboard=()=>{
    return(
        <Layout>
            <div className="row">
              <div className="col-md-3">
                 <Adminmenu/>
              </div>
              <div className="col-md-9">
                 <AdminProfile/>
              </div>
            </div>
        </Layout>
    ); 
};
export default AdminDashboard;