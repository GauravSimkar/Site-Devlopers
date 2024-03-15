import Layout from "../components/layout/layout";
import {useContext} from 'react'
import { Authcontext } from "../components/contextAPI/Authcontext";

const Home=()=>{
    let obj=useContext(Authcontext);
    return(
    <Layout>
       <h1>HomePage</h1>
    </Layout>
    );
}
export default Home;