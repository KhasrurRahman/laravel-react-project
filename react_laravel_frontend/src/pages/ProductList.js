import { Table } from 'react-bootstrap';
import Header from '../Component/Header';
import { React, useState, useEffect } from 'react';


function ProductList() {

    const [data, setData] = useState([])

    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/listProduct')
        result = await result.json();
        setData(result)
    }, [])
    console.log(data)


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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,key) =>
                                <tr>
                                    <td>{key+1}</td>
                                    <td>{item.name}</td>
                                    <td><img style={{ height:100,width:140 }} src={'http://127.0.0.1:8000/'+item.image}/></td>
                                    <td>{item.price}</td>
                                    <td>{item.desc}</td>
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