<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [\App\Http\Controllers\UserController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);

//product route
Route::post('/addProduct', [\App\Http\Controllers\ProductController::class, 'addProduct']);
Route::get('/listProduct', [\App\Http\Controllers\ProductController::class, 'listProduct']);
Route::delete('/deleteProduct/{product_id}', [\App\Http\Controllers\ProductController::class, 'deleteProduct']);
Route::get('/getProduct/{product_id}', [\App\Http\Controllers\ProductController::class, 'getProduct']);
Route::post('/updateProduct/{product_id}', [\App\Http\Controllers\ProductController::class, 'updateProduct']);
Route::get('/search', [\App\Http\Controllers\ProductController::class, 'search']);
