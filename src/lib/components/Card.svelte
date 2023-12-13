<div class="card flexcol">
    <img src={img} alt="Chess Engine">
    <p class="label">Chess Engine</p>
</div>

<style>
    .flexcol {
        display: flex;
        flex-direction: column;
    }

    .card {
        max-width: 33%;
        border: 2px solid #040D12;
        border-radius: 7px;
    }

    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 7;
        border-top-right-radius: 7;
        border-bottom: 2px solid #040D12;
    }

    .label {
        font-family: 'Space Mono', monospace;
        font-weight: 400;
        margin: 0.25rem 1rem;
    }
</style>

<script lang="ts">
	import { fade } from "svelte/transition";

    export let img: string;
</script>
