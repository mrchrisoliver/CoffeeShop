<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;


class Product extends Model
{
    use HasFactory;
	use Searchable;
	protected $guarded = ['id'];

	public function getRouteKeyName()
	{
		return 'slug';
	}

	public function toSearchableArray()
	{
		$array = $this->only('title');

		return $array;
	}

	public function variations() {
		return $this->hasMany(Variation::class);
	}
	public function weightVariations() {
		return $this->hasMany(Variation::class)->where('type_id', 1);
	}
	public function brewVariations() {
		return $this->hasMany(Variation::class)->where('type_id', 2);
	}
}
