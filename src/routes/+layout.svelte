<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{#if data.user}
	<div class="layout min-h-dvh w-full *:border-gray-300 *:p-4">
		<aside class="team flex items-center border-r border-b bg-gray-50">Sip&apos;s team</aside>
		<header class="head flex items-center justify-between border-b bg-gray-50">
			Navigation 'n stuff
			<span class="font-bold">Logged in</span>
		</header>
		<nav class="nav border-r bg-gray-50">Sidebar 'n stuff</nav>
		<main class="app p-7!">
			{@render children()}
		</main>
	</div>
{:else}
	{@render children()}
{/if}

<style>
	.layout {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: 64px 1fr;
		grid-template-areas:
			"team head"
			"nav main";
	}

	.team {
		grid-area: team;
	}

	.head {
		grid-area: head;
	}

	.nav {
		grid-area: nav;
	}

	.app {
		grid-area: main;
	}
</style>
