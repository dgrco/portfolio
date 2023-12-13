<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

{#key data.url}
	<div in:fade={{ duration: 150, delay: 200 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}
