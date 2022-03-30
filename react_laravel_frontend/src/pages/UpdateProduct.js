import Header from '../Component/Header';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function UpdateProduct() {
    let prams = useParams().id;
    let history = useNavigate();
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

        history('/')
    }

    return (
        <>
            <Header />
            <div className='col-md-8 offset-2'>
                <h1>UpdateProduct</h1>
                <input type="text" className='form-control' defaultValue={data.name} onChange={(e)=>setName(e.target.value)}></input>
                <br />
                <input type="number" className='form-control' defaultValue={data.price} onChange={(e)=>setPrice(e.target.value)}></input>
                <br />
                <input type="file" className='form-control'></input>
                <img style={{ width: 90 }} src={'http://127.0.0.1:8000/' + data.image} onChange={(e)=>setImage(e.target.value)}/>
                <br />
                <input type="text" className='form-control' defaultValue={data.desc} onChange={(e)=>setDesc(e.target.value)}></input>
                <br />
                <button className="btn btn-success" onClick={() => editProduct(data.id)}>Update Product</button>
            </div>
        </>
    )
}

export default UpdateProduct