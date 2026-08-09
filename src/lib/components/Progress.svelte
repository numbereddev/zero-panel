<script lang="ts">
	import { cn } from "$lib/utils";

	type Props = {
		name?: string;
		progress: number;
		warning?: boolean;
		class?: string;
	};

	let { name, progress, warning, class: className }: Props = $props();
</script>

<div class={cn("contents", className)}>
	{#if name}
		<span class={cn("uppercase", warning ? "text-red-600" : "")}>{name} {warning ? "(!)" : ""}</span
		>
	{/if}
	<!-- TODO: organize this and make it so that we have the dotted pattern for the unfilled area -->
	<div class="flex items-stretch">
		<span>[</span>
		<div class={cn("grow", warning ? "bg-red-600/15" : "bg-black/15")}>
			<div
				style={`width: ${progress * 100}%;`}
				class={cn("h-full", warning ? "bg-red-600" : "bg-black")}
			></div>
		</div>
		<span>]</span>
	</div>
	<span class="text-right">{progress * 100}%</span>
</div>
