import { useState } from 'react';
import Header from '../Component/Header';
function AddProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')


    async function addProduct() {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('desc', desc)
        formData.append('image', image)

        let result = await fetch('http://127.0.0.1:8000/api/addProduct', {
            method: "POST",
            body: formData,
        })

        alert("Product Added Successfully");
    }

    return (
        <>
            <Header />
            <div className='col-md-6 offset-3'>
                <h1>Add Product</h1>
                <input type="text" className='form-control' placeholder='Product Name' onChange={(e) => setName(e.target.value)}></input>
                <br />
                <input type="number" className='form-control' placeholder='Product Price' onChange={(e) => setPrice(e.target.value)}></input>
                <br />
                <input type="file" className='form-control' placeholder='Product Image' onChange={(e) => setImage(e.target.files[0])}></input>
                <br />
                <input type="text" className='form-control' placeholder='Product description' onChange={(e) => setDesc(e.target.value)}></input>
                <br />
                <button className="btn btn-success" onClick={addProduct}>Create Product</button>
            </div>
        </>
    )
}

export default AddProduct