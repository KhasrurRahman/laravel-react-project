<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addProduct(Request $request)
    {

        $product = new ProductModel();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        $product->image = $file_path = $request->file('image')->store('products');
        $product->save();

        return $product;
    }

    function listProduct()
    {
        return ProductModel::all();
    }
}
