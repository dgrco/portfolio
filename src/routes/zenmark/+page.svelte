<script>
	import visualizer from '$lib/assets/zenmark.png';
</script>

<div class="showcase">
	<div class="image">
		<img src={visualizer} alt="" />
	</div>
	<div class="content">
		<p class="title">Zenmark: A Focus-Focused Markdown Editor</p>
        <a class="try" href="https://zenmark.netlify.app/">Try Now!</a>
		<p>A simple client-side-only markdown editor that provides live in-place markdown
        preview. Markdown blocks can be created (Shift+Enter inserts below the current
        block) to separate sections of a document.</p>
		<p><strong>How It Works:</strong></p>
		<ul>
			<li>
				This website was made using <strong>TypeScript</strong> using the <strong>Svelte</strong> frontend framework.
			</li>
			<li>
				You can import and export markdown code to continue working on a document after the browser is closed.
			</li>
			<li>
				The markdown code is converted into rendered HTML as the user types.
			</li>
			<li>
				"Zen Mode" is a feature that focuses on the current block only, and keeps the focused block centered.
			</li>
		</ul>
		<p><strong>Lessons Learned:</strong></p>
		<ul>
			<li>State management between various components.</li>
			<li>How to optimize an in-place live preview to avoid splitting the screen.</li>
			<li>How to import and export markdown code in a standard format.</li>
		</ul>
		<p><strong>Want To Check It Out?</strong></p>
		<p>
			Check out the live website <a class="try" href="https://zenmark.netlify.app/">here</a>. 		</p>
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
