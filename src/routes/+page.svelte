<script lang="ts">
	import type { VacancyInfo } from '$lib/fetchers/get-vacancies';
	import getVacancies from '$lib/fetchers/get-vacancies';
	import LocationInput from '$lib/input/location-input.svelte';
	import SearchInput from '$lib/input/search-input.svelte';
	import Checkbox from '$lib/select/checkbox.svelte';
	import TitleCard from '$lib/wrapper/TitleCard.svelte';
	import VacancyCard from '$lib/wrapper/VacancyCard.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isFullTime: boolean = false;
	let locationInputValue: string = '';

	let vacancies: VacancyInfo[] | null = null;

	onMount(() => {
		getVacancies('').then((result) => (vacancies = result.items));
	});
</script>

<section class="search-section"><SearchInput /></section>
<div class="wrapper">
	<div>
		<aside class="filter-aside">
			<Checkbox title="Full time" bind:value={isFullTime} />
			<TitleCard title="Location">hi</TitleCard>
			<LocationInput bind:value={locationInputValue} />
		</aside>
	</div>
	<main>
		{#if vacancies !== null}
			<h1 out:fade={{ duration: 500 }}>Please wait...</h1>
		{/if}
		<!-- {#if vacancies !== null}
			<ul class="vacancies">
				{#each vacancies as { id, address, name, employer, published_at, schedule, area }, index (id)}
					<VacancyCard
						{id}
						{address}
						title={name}
						companyInfo={employer}
						publishedAt={published_at}
						{schedule}
						{area}
						{index}
					/>
				{/each}
			</ul>
		{/if} -->
		{#if vacancies !== null && vacancies.length === 0}
			<h1 transition:fade>No such vacancies</h1>
		{/if}
	</main>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr 2fr;
	}
	.filter-aside {
		top: 30px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		position: sticky;
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
	.vacancies {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	h1 {
		text-align: center;
		font-family: 'Poppins';
		font-weight: 300;
		color: #b9bdcf;
	}
</style>
