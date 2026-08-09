<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet<[]>;
		class?: string;
	};

	let { children, class: className = "" }: Props = $props();
</script>

<button class={cn(`btn px-5 py-3 font-mono`, className)}>
	<span class="btn__content">
		{@render children()}
	</span>
</button>

<style>
	.btn {
		--animation-duration: 300ms;
		--animation-timing: linear(
			0,
			0.49 7.4%,
			0.864 15.3%,
			1.005 19.4%,
			1.12 23.7%,
			1.206 28.1%,
			1.267 32.8%,
			1.296 36.4%,
			1.311 40.2%,
			1.313 44.2%,
			1.301 48.6%,
			1.252 56.9%,
			1.105 74.4%,
			1.048 82.5%,
			1.011 91.1%,
			1
		);

		position: relative;
		cursor: pointer;
		text-transform: uppercase;
		outline: none;

		transition: font-size var(--animation-duration);
		transition-timing-function: var(--animation-timing);

		isolation: isolate;

		.btn__content {
			position: relative;
			display: inline-block;
			transition: transform var(--animation-duration);
			transition-timing-function: var(--animation-timing);
		}

		&::before {
			content: "";
			background: var(--color-white);
			border: 1px solid var(--color-gray-300);

			z-index: -1;
			position: absolute;
			inset: 0;

			transition:
				transform var(--animation-timing),
				border-color var(--animation-timing),
				background-color;
			transition-duration: var(--animation-duration);
		}

		&:focus-visible::before {
			outline: -webkit-focus-ring-color auto 1px;
		}

		&:hover::before,
		&:hover .btn__content {
			transform: scale(1.04);
		}

		&:hover::before {
			background-color: var(--color-neutral-50);
		}

		&:active::before,
		&:active .btn__content {
			transform: scale(0.97);
			border-color: var(--color-gray-400);
		}
	}
</style>
