<script lang="js">
	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<title>Ronald Chiang</title>
	<meta
		name="description"
		content="Ronald Chiang — research in logic and theoretical computer science, formal verification, and model comparison games."
	/>
</svelte:head>

<div class="flex justify-center">
	{@render children()}
</div>