<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class NewsletterTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function homepage_form_can_submit_an_email_for_newsletter()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
				->type('email', 'example@email.com')
				->press('signup');
        });

		$this->assertDatabaseHas('newsletters', [
			'email' => 'example@email.com',
		]);
    }
}
