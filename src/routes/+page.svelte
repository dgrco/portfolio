<script>
	import Card from '$lib/components/Card.svelte';
	import chess_engine_1 from '$lib/assets/chess_engine_1.png';
</script>

<div class="showcase flex flexcol colhcenter">
	<span class="welcome flex">
		<p class="welcome-msg typing">Hello, I'm Dante.</p>
	</span>
	<span class="welcome-subtitle">
		<p class="subtitle typing-delayed">I like to make cool things.</p>
	</span>
	<div class="latest flex flexcol colhcenter fadeIn">
		<p class="latest-projects">Latest Projects</p>
		<div class="flex hcenter">
			<Card img={chess_engine_1} label="Chess Engine" tags={['C++', 'SDL2']} />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

	.showcase {
		display: flex;
		width: 100%;
		min-height: 100%;
	}

	.flex {
		display: flex;
	}

	.colhcenter {
		align-items: center;
	}

	.hcenter {
		justify-content: center;
	}

	.welcome {
		max-width: 81%;
		margin: 5rem 0 auto;
	}

	.welcome-subtitle {
		max-width: 75%;
		margin: -3rem auto;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-family: 'Space Mono', monospace;
		font-size: 1.1rem;
	}

	.fadeIn {
		animation-duration: 400ms;
		animation-name: fadeIn;
	}

	.typing-delayed {
		overflow: hidden;
		white-space: nowrap;
		border-right: 3px solid transparent;
		width: 0;
		animation:
			typing-anim 1.75s steps(25, end) 1.75s forwards,
			cursor-blink 0.5s 4 1.75s forwards;
	}

	.welcome-msg {
		font-family: 'Space Mono', monospace;
		font-size: 3rem;
	}

	.typing {
		overflow: hidden;
		white-space: nowrap;
		border-right: 5px solid;
		width: 0;
		animation:
			typing-anim 1.75s steps(25, end) forwards,
			cursor-blink 0.5s 4 forwards;
	}

	.flexcol {
		flex-direction: column;
	}

	.latest-projects {
		font-family: 'Space Mono', monospace;
		font-size: 1.7em;
	}

	@media (min-width: 769px) and (max-width: 1026px) {
		.welcome-msg {
			font-size: 2.5rem;
		}
		.latest {
			align-items: center;
		}
	}

	@media only screen and (max-width: 768px) {
		.welcome-msg {
			font-size: 1.75em;
		}
		.latest-projects {
			font-size: 1em;
		}
        .subtitle {
            margin-top: 1rem;
            font-size: 1rem;
        }
	}

	@keyframes typing-anim {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes cursor-blink {
		0% {
			border-right-color: transparent;
		}
		50% {
			border-right-color: black;
		}
		100% {
			border-right-color: transparent;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 100%;
		}
	}
</style>
