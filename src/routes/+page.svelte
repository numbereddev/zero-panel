<script lang="ts">
	import App from "./App.svelte";
	import Home from "./Home.svelte";

	let { data } = $props();
</script>

{#if data.user}
	<App user={data.user} />
{:else}
	<Home />
{/if}
