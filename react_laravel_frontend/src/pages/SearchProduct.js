function Search() {

    async function searchProduct(key) {
        let result = await fetch("http://127.0.0.1:8000/api/search/" + key)
        result = await result.json();
        console.log(result)
    }

    return (
        <>
            {/* <Header /> */}
            {/* <h1>Search product</h1> */}

            <br />
            <div className='col-md-6 offset-3'>
                <input type="text" onChange={(e) => searchProduct(e.target.value)} className="form-control col-md-6" placeholder='Search Product' />
            </div>


        </>
    )
}

export default Search