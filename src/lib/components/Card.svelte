<script lang="ts">
    export let url: string; // the page url
	export let img: string; // image url as svelte import
	export let label: string; // the title of the project
	export let tags: Array<string>; // descriptors of the project
</script>

<a href={url}>
	<div class="card flexcol">
		<img src={img} alt={label} />
		<div class="description">
			<p class="label">{label}</p>
			<div class="tags">
				{#each tags as tag}
					<div class="tag">
						{tag}
					</div>
				{/each}
			</div>
		</div>
	</div>
</a>

<style>
	a {
		text-align: center;
		display: block;
		text-decoration: none;
        max-width: 30%;
        flex: 1;
		color: #040d12;
        margin: 1rem;
	}

	.description {
		display: flex;
		justify-content: space-between;
	}

	.tags {
		display: flex;
		align-items: center;
	}

	.tag {
		font-family: 'Space Mono', monospace;
		background-color: #171717;
		color: white;
		border: 2px solid transparent;
		border-radius: 10px;
		margin: 2px;
		padding: 0 2px;
		font-size: 0.7rem;
	}

	.flexcol {
		display: flex;
		flex-direction: column;
	}

	.card {
		transition: ease-in-out 200ms;
		max-width: 100%;
		border: 2px solid #040d12;
		border-radius: 7px;
	}

	.card:hover {
		scale: 1.07;
		transition: ease-in-out 200ms;
	}

	img {
		width: 100%;
		height: 100%;
        aspect-ratio: 1/1;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom: 2px solid #040d12;
	}

	.label {
		font-family: 'Space Mono', monospace;
		font-weight: 400;
		margin: 0.25rem 1rem;
	}

	@media (max-width: 600px) {
		a {
			max-width: 75%;
		}
	}

    @media (min-width: 601px) and (max-width: 1024px) {
        a {
            max-width: 50%;
        }
    }
</style>
