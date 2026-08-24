<script lang="js">
	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<title>Ronald Chiang | Logic & Theoretical Computer Science</title>
	<meta
		name="description"
		content="Ronald Chiang is an MPhil researcher at the University of Sydney working on logic and theoretical computer science, including model comparison games and strategy synthesis for games on graphs."
	/>
	<link rel="canonical" href="https://ronaldchia.ng/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ronald Chiang" />
	<meta property="og:title" content="Ronald Chiang | Logic & Theoretical Computer Science" />
	<meta
		property="og:description"
		content="MPhil researcher at the University of Sydney working on logic and theoretical computer science, including model comparison games and strategy synthesis for games on graphs."
	/>
	<meta property="og:url" content="https://ronaldchia.ng/" />
	<meta property="og:locale" content="en_AU" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ronald Chiang | Logic & Theoretical Computer Science" />
	<meta
		name="twitter:description"
		content="MPhil researcher at the University of Sydney working on logic and theoretical computer science."
	/>

	<meta name="theme-color" content="#0f1210" />
</svelte:head>

<div class="flex justify-center">
	{@render children()}
</div>