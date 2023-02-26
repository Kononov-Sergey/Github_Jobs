<script lang="ts">
	import type { VacancyInfo } from '$lib/fetchers/get-vacancies';
	import GetVacancies from '$lib/fetchers/get-vacancies';
	import LocationInput from '$lib/input/location-input.svelte';
	import SearchInput from '$lib/input/search-input.svelte';
	import Checkbox from '$lib/select/checkbox.svelte';
	import TitleCard from '$lib/wrapper/TitleCard.svelte';
	import VacancyCard from '$lib/wrapper/VacancyCard.svelte';
	import { onMount } from 'svelte';

	let isFullTime: boolean = false;
	let locationInputValue: string = '';

	let vacancies: VacancyInfo[] | null = null;

	onMount(() => {
		GetVacancies('').then((result) => (vacancies = result.items));
	});
</script>

<section class="search-section"><SearchInput /></section>
<div class="wrapper">
	<aside class="filter-aside">
		<Checkbox title="Full time" bind:value={isFullTime} />
		<TitleCard title="Location">hi</TitleCard>
		<LocationInput bind:value={locationInputValue} />
	</aside>
	<main>
		{#if vacancies && vacancies.length > 0}
			<ul class="vacancies">
				{#each vacancies as { id, address, name, employer, published_at, schedule } (id)}
					<VacancyCard
						{id}
						{address}
						title={name}
						companyInfo={employer}
						publishedAt={published_at}
						{schedule}
					/>
				{/each}
			</ul>
		{:else}
			<h1>No such vacancies</h1>
		{/if}
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
		top: 0px;
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
	.vacancies {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
