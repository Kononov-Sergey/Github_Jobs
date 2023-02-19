<script lang="ts">
	import LocationInput from '$lib/input/location-input.svelte';
	import SearchInput from '$lib/input/search-input.svelte';
	import Checkbox from '$lib/select/checkbox.svelte';
	import TitleCard from '$lib/wrapper/TitleCard.svelte';

	let isFullTime: boolean = false;
	let locationInputValue: string = '';
</script>

<section class="search-section"><SearchInput /></section>
<div class="wrapper">
	<aside class="filter-aside">
		<Checkbox title="Full time" bind:value={isFullTime} />
		<TitleCard title="Location">hi</TitleCard>
		<LocationInput bind:value={locationInputValue} />
		{locationInputValue}
	</aside>
	<main>
		<li>1</li>
		<li>2</li>
	</main>
</div>

<style>
	.wrapper {
		width: 100%;
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr 2fr;
	}
	.filter-aside {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	.search-section {
		background-image: url('/images/backgroundImg.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 138px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 42px;
	}
</style>
