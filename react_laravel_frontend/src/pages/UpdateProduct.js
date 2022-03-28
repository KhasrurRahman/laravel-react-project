import Header from '../Component/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function UpdateProduct() {
    let prams = useParams().id;
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/getProduct/' + prams)
        result = await result.json()
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setDesc(result.desc)
        setImage(result.image)
    }, [])

    async function editProduct(product_id) {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('desc', desc)
        formData.append('image', image)

        let result = await fetch('http://127.0.0.1:8000/api/updateProduct/' + product_id, {
            method: "POST",
            body: formData,
        })

        alert("Product Added Successfully");
    }

    return (
        <>
            <Header />
            <div className='col-md-8 offset-2'>
                <h1>UpdateProduct</h1>
                <input type="text" className='form-control' defaultValue={data.name}></input>
                <br />
                <input type="number" className='form-control' defaultValue={data.price}></input>
                <br />
                <input type="file" className='form-control'></input>
                <img style={{ width: 90 }} src={'http://127.0.0.1:8000/' + data.image} />
                <br />
                <input type="text" className='form-control' defaultValue={data.desc}></input>
                <br />
                <button className="btn btn-success" onClick={() => editProduct(data.id)}>Update Product</button>
            </div>
        </>
    )
}

export default UpdateProduct