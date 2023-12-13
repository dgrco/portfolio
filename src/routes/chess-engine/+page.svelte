<script>
	import chess_engine_1 from '$lib/assets/chess_engine_1.png';
</script>

<div class="showcase">
	<div class="image">
		<img src={chess_engine_1} alt="" />
	</div>
	<div class="content">
		<p class="title">Chess Engine</p>
		<p>A chess engine built into an interactable 2D chess game.</p>
		<p><strong>How It Works:</strong></p>
		<ul>
			<li>
				This software was written entirely using the <strong>C++</strong> programming language.
			</li>
			<li>
				For the graphical interface, I used the <strong>SFML</strong> library.
			</li>
			<li>
				The chess engine uses the <strong>minimax algorithm</strong> with
				<strong>alpha-beta pruning</strong>.
			</li>
		</ul>
		<p><strong>Lessons Learned:</strong></p>
		<ul>
			<li>Data structures and algorithms surrounding chess.</li>
			<li>How to create effective evaluation functions.</li>
			<li>How to make GUI applications and game loops in C++.</li>
		</ul>
		<p><strong>Want To Check It Out?</strong></p>
		<p>
			You can install the project from my <a href="https://github.com/dgrco/yace">Github Repo</a>.
			To install it, you must have <a href="https://www.sfml-dev.org/">SFML</a> installed and ready for
			building with <a href="https://cmake.org/">CMake</a>.
		</p>
	</div>
</div>

<style>
	.showcase {
		display: flex;
		height: 98vh;
		margin-left: 1rem;
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
            margin: 1rem 2rem;
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
