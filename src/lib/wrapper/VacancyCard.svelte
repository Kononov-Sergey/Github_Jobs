<script lang="ts">
	import type {
		VacancyAddress,
		VacancyEmployer,
		VacancySchedule
	} from '$lib/fetchers/get-vacancies';
	import ScheduleBadge from '$lib/ui/schedule-badge.svelte';

	export let id: string;
	export let companyInfo: VacancyEmployer;
	export let title: string;
	export let publishedAt: string;
	export let address: VacancyAddress | null;
	export let schedule: VacancySchedule;
</script>

<li class="wrapper">
	{#if companyInfo.logo_urls}
		<img src={companyInfo.logo_urls[240]} alt={companyInfo.name} width="90" height="90" />
	{:else}
		<div class="mock-image">not found</div>
	{/if}

	<div class="main-info">
		<button class="company-btn" type="button">{companyInfo.name}</button>
		<a class="title-link" href="/job/{id}">{title}</a>
		<span><ScheduleBadge title={schedule.id} /></span>
	</div>
	<div class="additional-info">
		<address>{address?.city}</address>
		<time datetime={publishedAt}>{schedule.id}</time>
	</div>
</li>

<style lang="scss">
	.wrapper {
		background-color: #fff;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
		display: flex;
		gap: 16px;
		padding: 12px;
		img {
			width: 90px;
			height: 90px;
			border-radius: 4px;
			object-fit: contain;
		}
	}
	.mock-image {
		width: 90px;
		height: 90px;
		background-color: #f2f2f2;
		border-radius: 4px;
		color: #bdbdbd;
		font-family: 'Roboto';
		font-weight: 500;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main-info {
		color: #334680;
		font-family: 'Roboto';
		.company-btn,
		.title-link {
			color: #334680;
			font-family: 'Roboto';
			padding: 0px;
			&:hover {
				text-decoration: underline;
			}
		}
		.company-btn {
			font-weight: 700;
			font-size: 12px;
			margin-bottom: 8px;
		}
		.title-link {
			font-weight: 400;
			font-size: 18px;
			margin-bottom: 12px;
		}
	}
	.additional-info {
		flex-grow: 1;
		display: flex;
		justify-content: end;
	}
</style>
