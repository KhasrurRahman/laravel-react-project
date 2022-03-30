<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

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

    function deleteProduct($product_id)
    {
        $delete = ProductModel::where('id', $product_id)->delete();

        if ($delete) {
            return ['message' => 'product has been deleted'];
        } else {
            return ['error' => 'Operation Failed'];
        }
    }

    function getProduct($product_id)
    {
        return ProductModel::find($product_id);

    }

    public function updateProduct(Request $request, $product_id)
    {
        $product = ProductModel::find($product_id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        if ($request->file('image')) {
            $product->image = $file_path = $request->file('image')->store('products');
        }
        $product->update();

        return ['message'=>'product has been updated'];
    }

    public function search(Request $request)
    {
        $key = $request->key;
        return ProductModel::where('name','LIKE',"%$key%")->get();
    }
}
