<script lang="ts">
	import type { GetLocationSuggestsRes } from '$lib/fetchers/get-location-suggests';
	import GetLocationSuggests from '$lib/fetchers/get-location-suggests';
	import { makeDebounceFunction } from '$lib/helpers/debounce';

	export let value: string;

	let locationData: GetLocationSuggestsRes | null = null;

	let locationErrorMessage: string | null = null;

	const debounce = makeDebounceFunction();

	const handleInput: svelte.JSX.EventHandler<Event, HTMLInputElement> = (event) => {
		const newInputValue = event.currentTarget.value;
		debounce(() => {
			value = newInputValue;
		}, 400);
	};

	$: {
		if (value.length > 0 && value.length <= 2) {
			locationErrorMessage = 'Location should contains more than 2 characters';
		}
		if (value.length === 0) {
			locationData = null;
			locationErrorMessage = null;
		}
		if (value.length > 2) {
			GetLocationSuggests(value)
				.then((result) => {
					if (result.items.length === 0) {
						locationErrorMessage = 'No such location';
					}
					locationData = result;
				})
				.catch(() => (locationErrorMessage = 'Network error'));
		}
	}
</script>

<div class="wrapper" data-error={locationErrorMessage}>
	<img class="earth" src="/icons/earth.svg" alt="earth" />
	<input
		class="location-input"
		on:input={handleInput}
		type="text"
		placeholder="City, state or country"
	/>
	{#if locationErrorMessage}
		<p class="error">{locationErrorMessage}</p>
	{/if}
	{#if locationData && locationData.items.length > 0}
		<ul class="suggustions">
			{#each locationData.items as location (location.id)}
				<li>{location.text}</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		display: flex;
		gap: 8px;
		background-color: #fff;
		width: 100%;
		border-radius: 4px;
		padding: 4px 4px 4px 16px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
		border: 1px solid #fff;
		transition: all 0.2s ease;
		&[data-error] {
			border: 1px solid #ff3333;
		}
	}
	.earth {
		width: 15px;
		filter: invert(90%) sepia(3%) saturate(1357%) hue-rotate(194deg) brightness(86%) contrast(87%);
	}
	.location-input {
		padding: 15px 10px;
		outline: none;
		flex-grow: 1;
		overflow-x: hidden;
		font-family: 'Roboto';
		font-weight: 400;
		&::placeholder {
			color: #b9bdcf;
		}
		&:placeholder-shown {
			text-overflow: ellipsis;
		}
	}
	.error {
		font-family: 'Roboto';
		font-size: 12px;
		color: #ff3333;
		position: absolute;
		bottom: -16px;
		left: 0px;
	}
	.suggustions {
		position: absolute;
		top: 58px;
		left: 0px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
		width: 100%;
		max-height: 20vh;
		overflow-y: scroll;
		> li {
			transition: all 0.2s ease;
			font-family: 'Roboto';
			padding: 10px;
			cursor: pointer;
			&:hover {
				background-color: #dfdfdf;
			}
		}
	}
</style>
