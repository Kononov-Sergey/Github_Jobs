<script lang="ts">
	import type { VacancySchedule } from '$lib/fetchers/get-vacancies';

	export let titleId: VacancySchedule['id'];

	type VacancyScheduleReferenceMapType = { [key in VacancySchedule['id']]: string };

	const referenceMap: VacancyScheduleReferenceMapType = {
		flexible: 'Flexible',
		flyInFlyOut: 'Fly-in Fly-out',
		fullDay: 'Full day',
		remote: 'Remote',
		shift: 'Shift'
	};
</script>

<p>{referenceMap[titleId]}</p>

<style lang="scss">
	p {
		font-family: 'Roboto';
		font-weight: 700;
		font-size: 12px;
		color: #334680;
		padding: 6px 8px;
		border: 1px solid #334680;
		border-radius: 4px;
		width: fit-content;
	}
</style>
