<?php

use App\Http\Controllers\ProductController;
use App\Models\Product;
use App\Models\Variation;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	// return Variation::inRandomOrder()->limit(1)->pluck('id')->first();
	return Inertia::render('Home/Index', [
		'products' => Product::with('weightVariations')->latest()->limit(4)->get()
	]);
})->name('home');

Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
