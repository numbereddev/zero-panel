<script lang="ts">
	import App from "./PageApp.svelte";
	import Home from "./PageHome.svelte";

	let { data } = $props();
</script>

{#if data.user}
	<App user={data.user} />
{:else}
	<Home />
{/if}
