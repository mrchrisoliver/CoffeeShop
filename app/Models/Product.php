<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;


class Product extends Model
{
    use HasFactory;
	// use Searchable;
	protected $guarded = ['id'];

	public function getRouteKeyName()
	{
		return 'slug';
	}
}
