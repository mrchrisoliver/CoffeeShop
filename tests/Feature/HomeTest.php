<?php

use App\Models\Product;
use Inertia\Testing\Assert;

test('can load', function () {
	$this->get('/')->assertStatus(200);
});

test('can see products', function () {
	
	Product::factory(4)->create();

	$this->get('/')
		->assertInertia(fn (Assert $page) => $page
		->component('Home/Index'))
		->assertInertia(fn (Assert $page) => $page
		->has('products', 4));
});
?>