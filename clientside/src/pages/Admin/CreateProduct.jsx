import Adminmenu from "../../components/layout/Adminmenu";

let CreateProduct=()=>{
  

    return(
        <Layout>
        <div className="row">
          <div className="col-md-3">
             <Adminmenu/>
          </div>
          <div className="col-md-9">
            Create Product
          </div>
        </div>
    </Layout>

    );
}
export default CreateProduct;
