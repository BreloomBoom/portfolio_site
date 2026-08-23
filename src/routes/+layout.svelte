<script lang="js">
	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<title>Ronald Chiang</title>
	<meta
		name="description"
		content="Ronald Chiang — research in logic and theoretical computer science."
	/>
</svelte:head>

<div class="flex justify-center">
	{@render children()}
</div>