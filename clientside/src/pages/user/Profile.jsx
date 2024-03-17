import Usermenu from "../../components/layout/Usermenu";
import Layout from "../../components/layout/layout";

const Profile=()=>{
        return(
        <Layout>
            <div className="row">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
                <div className="col-md-9">
                   <h3>Your Profile</h3>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;