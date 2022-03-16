import Header from "./Header";
import React,{ useState,useEffect } from "react";
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"
function ProductList(){
    const [data,setData]= useState([]);
    
    useEffect(()=>{
        getData();

    },[])
    console.log(data)
    async function deleteoparetion(id){
        let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:"DELETE"
        });
        result = await result.json();
        getData();
    }
    async function getData()
    {
        let res = await fetch("http://127.0.0.1:8000/api/add-product-list");
        let result = await res.json();
        setData(result)

    }
    return(
        <div>
            <Header/>
            <h1>Product List</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Oparetion</th>
                <th>Oparetion</th>
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
                        <td><span  onClick={()=>deleteoparetion(item.id)} className="delete">Delete</span></td>
                        <td>
                            <Link to={"update/"+item.id}>
                            <span className="update">Update</span>
                            </Link>
                        </td>
                        </tr>

                    )
  
                    
                } 
            </tbody>
        </Table>
        </div>

    )
}
export default ProductList;