

const CategoryForm=({handleonSubmit,value,setvalue})=>{
    return(
    <form onSubmit={
      handleonSubmit
      }>
    <div class="mb-3">
       <input type="text" class="form-control"  placeholder="Enter category name" value={value}
       onChange={(event)=>setvalue(event.target.value)}/>
    </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
   </form>
    );
}

export default CategoryForm;
