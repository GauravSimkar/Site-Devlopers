import Layout from "../../components/layout/layout.jsx";
import { useContext } from "react";
import { Authcontext } from "../../components/contextAPI/Authcontext";

const Dashboard=()=>{
    const [auth]=useContext(Authcontext);
    return(
        <Layout>
            <div className="row">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
                <div className="col-md-9">
                   <h3>{auth?.user?.name}</h3>
                   <h3>{auth?.user?.address}</h3>
                </div>
            </div>
        </Layout>
    ); 
}
export default Dashboard;