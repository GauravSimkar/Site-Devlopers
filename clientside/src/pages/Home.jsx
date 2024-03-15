import Layout from "../components/layout/layout";
import Homefile from "./Homefile.jsx";
import Popular from "./Popular";
import Offer from "./Offer"
import NewCollections from "./NewCollections";
import NewsLetter from "./NewsLetter";

const Home=()=>{
    return(
    <Layout>
<Homefile/>

<Popular/>
<Offer/>
<NewCollections/>
<NewsLetter/>
    </Layout>
    );
}
export default Home;