import { useState } from "react";
import Header from "./Header";
import {Table} from "react-bootstrap"
function SearchProduct(){
    const[data,setData]= useState("");
  
    async function search(key){
      let res = await fetch("http://127.0.0.1:8000/api/search/"+key);
      let result = await res.json();
      setData(result)

    }
   
    return(
        <div>
           <Header /> 
          <div className="col-sm-6 offset-sm-3">
            <h1>Search Product</h1>
            <br/>
            <input className="form-control" type="text" onChange={(e)=>search(e.target.value)}  placeholder="search product" />
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>

                {
                    data.map((item)=>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.p_name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td><img style={{ width:100 }} src={"http://127.0.0.1:8000/storage/"+item.file_path}/></td>
                        </tr>

                    )
  
                    
                } 
            </tbody>
        </Table>

          </div>
        </div>
    )
}
export default SearchProduct;