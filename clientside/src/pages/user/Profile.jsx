import { useContext ,useState} from "react";
import Usermenu from "../../components/layout/Usermenu";
import Layout from "../../components/layout/layout";
import './profile.css'
import { Authcontext } from "../../components/contextAPI/Authcontext";
const Profile=()=>{
    const [auth]=useContext(Authcontext);
    const [phone, setPhone] = useState(auth?.user?.phone || '');
    const [address, setAddress] = useState(auth?.user?.address || '');

 

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange=(event)=>{
        setAddress(event.target.value);
    }

        return(
        <Layout>
            
            <div className="row">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
        {/* <div className="col-md-9">
        <h2>User Profile</h2>
        <form class="profile-form">
            <input type="text" id="username" placeholder="Username"/>
            <input type="email" id="email" placeholder="Email Address"/>
            <input type="password" id="password" placeholder="Password"/>
            <input type="tel" id="phone" placeholder="Phone Number"/>
            <input type="text" id="address" placeholder="Address"/>
            <button type="submit" class="update-button">Update</button>
        </form>
    </div> */}
    <div className="col-md-9 mt-5">
    <form className="profile-form">
        <input type="text" className="hello"  id="username" value={auth?.user?.name} readOnly/>
        <input type="email"  className="hello" id="email" value={auth?.user?.email} disabled/>
        <input type="password" className="hello"  id="password" placeholder="..........." disabled/>
        <input type="text"  className="hello" id="phone" value={phone}  onChange={handlePhoneChange}/>
        <input type="text" className="hello"  id="address" value={address} onChange={handleAddressChange}/>
        <button type="submit" className="update-button">Update</button>
    </form>
</div>

           </div>
            
        </Layout>
    );
}

export default Profile;