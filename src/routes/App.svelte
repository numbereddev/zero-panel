<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Progress from "$lib/components/Progress.svelte";

	type Props = {
		user: NonNullable<App.Locals["user"]>;
	};

	const { user }: Props = $props();
</script>

<h1 class="text-3xl">Welcome back, {user.username}</h1>
<section id="groups">
	<h1 class="mono uppercase">Groups</h1>
</section>

<section id="instances" class="@container">
	<div class="grid grid-cols-1 gap-4 @min-2xl:grid-cols-2 @min-5xl:grid-cols-3">
		{#each { length: 3 } as _, i (i)}
			<Card>
				{#snippet header()}
					<h2 class="font-medium">Website</h2>
					<span class="font-mono text-green-500" role="status">[ONLINE]</span>
				{/snippet}

				<ul
					class="flex w-full flex-col gap-4 font-mono [&_li]:grid [&_li]:grid-cols-[8ch_1fr_4ch] [&_li]:gap-2"
				>
					<li>
						<Progress name="CPU" progress={0.3} />
					</li>
					<li class="text-red-600">
						<Progress name="RAM" progress={1} warning />
					</li>
					<li>
						<Progress name="Disk" progress={0.5} />
					</li>
				</ul>

				{#snippet footer()}
					<Button class="w-full">Restart</Button>
					<Button class="w-full">Manage</Button>
				{/snippet}
			</Card>
		{/each}
	</div>
</section>
