<script>
	import visualizer from '$lib/assets/visualizer.png';
</script>

<div class="showcase">
	<div class="image">
		<img src={visualizer} alt="" />
	</div>
	<div class="content">
		<p class="title">Search Algorithm Visualizer</p>
        <a class="try" href="https://dantegrieco-search-visualizer.netlify.app/">Try Now!</a>
		<p>A search visualizer that shows how nodes in a graph are searched and displays the final path
        from start to end.</p>
		<p><strong>How It Works:</strong></p>
		<ul>
			<li>
				This website was in <strong>TypeScript</strong> using the <strong>Svelte</strong> frontend framework.
			</li>
			<li>
				The graph represents a dynamically-sized table where each table cell represents a graph node.
			</li>
			<li>
				The visualizer allows for placing walls to act as inpenetrable barriers.
			</li>
			<li>
				The visualizer allows for changing the start and end points.
			</li>
			<li>
				The visualizer allows for changing the search algorithm used.
			</li>
		</ul>
		<p><strong>Lessons Learned:</strong></p>
		<ul>
			<li>How to maintain a reactive connection between the data from the frontend representation and the underlying graph structure.</li>
			<li>The observer design pattern and Svelte's writable and re-rendering process.</li>
			<li>Making a priority queue that optimizes for the A* algorithm.</li>
		</ul>
		<p><strong>Want To Check It Out?</strong></p>
		<p>
			Check out the live website <a class="try" href="https://dantegrieco-search-visualizer.netlify.app/">here</a>. Also, 
            the project is on <a href="https://github.com/dgrco/search_visualizer">Github!</a>
		</p>
	</div>
</div>

<style>
	.showcase {
		display: flex;
		height: 98vh;
		margin-left: 1rem;
	}
    
    .try {
        max-width: 5rem;
    }

	.image {
		margin: auto 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 2rem 10rem 0 5rem;
	}

	* {
		font-family: 'Space Mono', monospace;
        line-height: 1.5;
	}

    a {
        color: #342dba;
        text-decoration: none;
        border-radius: 10px;
        padding: 0 5px;
    }

    a:hover {
        background-color: #342dba;
        color: white;
        transition: ease-in-out 300ms;
    }

	.title {
		font-weight: 600;
		font-size: 2rem;
	}

    @media (max-width: 768px) {
        .showcase {
            flex-direction: column;
        }

        img {
            max-width: 75%;
            display: block;
            margin: 20px auto;
        }

        .content {
            margin: 1rem 1rem;
        }

        .image {
            margin: 0 auto;
        }
    }
    
    @media (min-width: 769px) and (max-width: 1300px) {
        .image {
            flex-basis: 50%;
        }
        img {
            width: 100%;
        }
        .content {
            flex-basis: 50%;
        }
    }

</style>
