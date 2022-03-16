import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "./Header";
function AddProduct(){
    const history = useHistory()
    const [p_name,setp_name]=useState("")
    const [file_path,setFile_path]=useState("")
    const [description,seDescription]=useState("")
    const [price,setPrice]=useState("")

  async  function addproduct(){
    const formData = new FormData()
      formData.append('p_name',p_name);
      formData.append('file_path',file_path);
      formData.append('description',description);
      formData.append('price',price);
      for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
         }
    //   console.log(formData)
      let result = await fetch('http://127.0.0.1:8000/api/add-product',{
          method: "POST",
        //   headers: {
              
        //     "Content-Type":" multipart/form-data",
        //     "Accept":"application/json",
        //     "Content-Disposition": "form-data", "name":"image",
        //    " Content-Type": "image/png"
           
        //   },
          body: formData

      });
      console.log(result)
      
        result = await result.json()

       localStorage.setItem("product-info",JSON.stringify(result))
       history.push('/add')

    }
    return(
        <div>
           <Header /> 
        <div className="col-sm-6 offset-sm-3">
        <h1>AddProduct</h1>
        <input className="form-control"  onChange={(e)=>setp_name(e.target.value)} type="text"  name="p_name"  placeholder="product name"/><br/>
        <input className="form-control"  onChange={(e)=>setFile_path(e.target.files[0])} type="file"  name="file_path" placeholder="file_path"/><br/>
        <input className="form-control"  onChange={(e)=>seDescription(e.target.value)} type="text" name="description" placeholder="description"/><br/>
        <input className="form-control"  onChange={(e)=>setPrice(e.target.value)} type="number" name="price" placeholder="price"/><br/>
        <button onClick={addproduct} className="btn btn-primary">ADD</button>
        </div>

        </div>
    )
}
export default AddProduct;