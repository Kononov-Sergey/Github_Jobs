<script>
	import BackButton from '$lib/button/back-button.svelte';
</script>

<div class="wrapper">
	<aside><BackButton /></aside>
	<main>main</main>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr 2fr;
	}
</style>
