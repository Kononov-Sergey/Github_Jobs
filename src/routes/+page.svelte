<script>
	import SearchInput from '$lib/input/search-input.svelte';
</script>

<div class="search-section"><SearchInput /></div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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
