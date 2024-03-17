import Usermenu from "../../components/layout/Usermenu";
import Layout from "../../components/layout/layout";

const Profile=()=>{
        return(
        <Layout>
            <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
                <div className="col-md-9">
                   <h3>Your Profile</h3>
                </div>
            </div>

            </div>
           
        </Layout>
    );
}

export default Profile;