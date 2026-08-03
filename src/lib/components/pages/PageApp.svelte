<script lang="ts">
	import Button from "../Button.svelte";
	import Card from "../Card.svelte";

	type Props = {
		user: NonNullable<App.Locals["user"]>;
	};

	const { user }: Props = $props();
</script>

<div class="@container">
	<h1 class="text-3xl">Welcome back, {user.username}</h1>

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
						<span>CPU</span>
						<!-- TODO: organize this and make it so that we have the dotted pattern for the unfilled area -->
						<div class="flex items-stretch">
							<span>[</span>
							<div class="grow bg-black/15">
								<div class="h-full w-1/3 bg-black"></div>
							</div>
							<span>]</span>
						</div>
						<span class="text-right">30%</span>
					</li>
					<li class="text-red-600">
						<span>RAM (!)</span>
						<div class="flex items-stretch">
							<span>[</span>
							<div class="grow bg-black/15">
								<div class="h-full w-full bg-red-600"></div>
							</div>
							<span>]</span>
						</div>
						<span class="text-right">100%</span>
					</li>
					<li>
						<span>DISK</span>
						<span class="flex items-stretch">
							<span>[</span>
							<div class="grow bg-black/15">
								<div class="h-full w-1/2 bg-black"></div>
							</div>
							<span>]</span>
						</span>
						<span class="text-right">50%</span>
					</li>
				</ul>

				{#snippet footer()}
					<Button class="w-full">Restart</Button>
					<Button class="w-full">Manage</Button>
				{/snippet}
			</Card>
		{/each}
	</div>
</div>
