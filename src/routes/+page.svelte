<script lang="ts">
	import SearchInput from '$lib/input/search-input.svelte';
	import Checkbox from '$lib/select/checkbox.svelte';

	let isFullTime: boolean = false;
</script>

<div class="search-section"><SearchInput /></div>
<section>
	<aside><Checkbox title="Full time" bind:value={isFullTime} /></aside>
	<main>
		<li>1</li>
		<li>2</li>
	</main>
</section>

<style>
	.search-section {
		background-image: url('/images/backgroundImg.png');
		background-repeat: no-repeat;
		background-size: 100% auto;
		height: 138px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
