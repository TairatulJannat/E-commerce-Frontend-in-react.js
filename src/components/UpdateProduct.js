import Header from "./Header";
import { withRouter } from "react-router-dom";
import { useState,useEffect } from 'react'
function UpdateProduct(props){
    const[data,setData]= useState("");
    const [p_name,setp_name]=useState("")
    const [file_path,setFile_path]=useState("")
    const [description,seDescription]=useState("")
    const [price,setPrice]=useState("")
    
//console.log(props.match.params.id)
    useEffect(async()=>{
        let resul = await fetch("http://127.0.0.1:8000/api/product/"+props.match.params.id)
        let result = await resul.json();
 
        setData(result)
        setp_name(result.p_name)
        setFile_path(result.file_path)
        seDescription(result.description)
        setPrice(result.price)
        // console.log(p_name)
    },[])

    async function editProduct(id){
     const formData = new FormData()
      formData.append('p_name',p_name);
      formData.append('file_path',file_path);
      formData.append('description',description);
      formData.append('price',price);
      for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
         }
    //   console.log(formData)
      let result = await fetch('http://127.0.0.1:8000/api/product-update/'+id,{
          method: "POST",
        //   headers: {
              
        //     "Content-Type":" multipart/form-data",
        //     "Accept":"application/json",
        //     "Content-Disposition": "form-data", "name":"image",
        //    " Content-Type": "image/png"
           
        //   },
          body: formData

      });
    }

    return(
        <div>
            <Header />
        <h1>UpdateProduct page</h1>
        <input type="text" onChange={(e)=>setp_name(e.target.value)}  defaultValue={data.p_name}/> <br /> <br />
        <input type="text" onChange={(e)=>seDescription(e.target.value)} defaultValue={data.description}/> <br /> <br />
        <input type="text" onChange={(e)=>setPrice(e.target.value)}  defaultValue={data.price}/> <br /> <br />
        <input type="file" onChange={(e)=>setFile_path(e.target.files[0])} defaultValue={data.file_path}/> <br /> <br />
        <img style={{ width:100 }} src={"http://127.0.0.1:8000/storage/"+data.file_path}/> <br /> <br />
         <button onClick={()=>editProduct(data.id)} >Update Product</button>
        </div>
    )
}
export default withRouter(UpdateProduct);