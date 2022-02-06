<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
		rel="stylesheet">

	<!-- Styles -->
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">

	<!-- Scripts -->
	@routes
	<script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body class="font-sans antialiased">
	@inertia

	@env ('local')
	<script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
	@endenv
	@env('production')
	<!-- Fathom - beautiful, simple website analytics -->
	<script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="ABBLHAHM" defer></script>
	<!-- / Fathom -->
	@endenv
</body>

</html>