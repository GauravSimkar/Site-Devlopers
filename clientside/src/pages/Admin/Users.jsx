import Adminmenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
const Users=()=>{
    return(
      <Layout>
        <div className="row">
          <div className="col-md-3">
             <Adminmenu/>
          </div>
          <div className="col-md-9">
             <h1>All Users</h1>
          </div>
        </div>
    </Layout>
    ); 
}

export default Users;