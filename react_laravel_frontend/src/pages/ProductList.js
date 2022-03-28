import { Table } from 'react-bootstrap';
import Header from '../Component/Header';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProductList() {
    const [data, setData] = useState([])
    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/listProduct')
        result = await result.json();
        setData(result)
    }, [])
    
    async function deleteItem(productId) {
        let result = await fetch('http://127.0.0.1:8000/api/deleteProduct/'+productId,{
            method: "delete",
        });

        result = await result.json()
        getData()
    }

    async function getData() {
        let result = await fetch('http://127.0.0.1:8000/api/listProduct')
        result = await result.json();
        setData(result)
    }


    return (
        <>
            <Header />
            <h1>product List</h1>

            <div className='col-md-8 offset-2'>
                <Table striped bordered hover className='bg-white'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,key) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img style={{ height:100,width:140 }} src={'http://127.0.0.1:8000/'+item.image}/></td>
                                    <td>{item.price}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <button onClick={()=>{deleteItem(item.id)}} className='btn btn-danger btn-sm'>Delete</button> 
                                        ̥̥<Link to={'update/'+item.id} className='btn btn-info btn-sm'>Edit</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default ProductList