import Layout from "../../components/layout/layout.jsx";
import { useContext } from "react";
import { Authcontext } from "../../components/contextAPI/Authcontext";
import Usermenu from "../../components/layout/Usermenu.jsx";
import './Dashboard.css'
const Dashboard=()=>{
    const [auth]=useContext(Authcontext);
    return(
        <Layout>
        
            {/* <div className="row">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
                <div className="col-md-9">
                   <h3>{auth?.user?.name}</h3>
                   <h3>{auth?.user?.email}</h3>
                   <h3>{auth?.user?.address}</h3>

                </div>
            </div>
             */}
             <div className="row">
    <div className="col-md-3">
        <Usermenu />
    </div>
    <div className="col-md-9">
        {/* <h3 className="user-info">{auth?.user?.name}</h3>
        <h3 className="user-info">{auth?.user?.email}</h3>
        <h3 className="user-info">{auth?.user?.address}</h3> */}

<form className="user-form">
    <div className="form-group">
    
        <input type="text" id="name" name="name" className="form-control" value={auth?.user?.name} />
    </div>
    <div className="form-group">
        <input type="email" id="email" name="email" className="form-control" value= {auth?.user?.email}/>
    </div>
    <div className="form-group">
        <textarea id="address" name="address" className="form-control" rows="3" value={auth?.user?.address}></textarea>
    </div>
</form>

        
    </div>
</div>

        </Layout>
    ); 
}
export default Dashboard;