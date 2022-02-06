<?php
test('homepage can load', function () {
	$this->get('/')->assertStatus(200);
});
?>