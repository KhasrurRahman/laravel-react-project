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
