<script lang="ts">
	import type { GetLocationSuggestsRes } from '$lib/fetchers/get-location-suggests';
	import GetLocationSuggests from '$lib/fetchers/get-location-suggests';
	import { makeDebounceFunction } from '$lib/helpers/debounce';

	export let value: string;

	let data: GetLocationSuggestsRes;

	const debounce = makeDebounceFunction();

	const handleInput: svelte.JSX.EventHandler<Event, HTMLInputElement> = (event) => {
		const newInputValue = event.currentTarget.value;
		debounce(() => {
			value = newInputValue;
		}, 400);
	};

	$: {
		if (value.length > 2) {
			GetLocationSuggests(value)
				.then((result) => (data = result))
				.catch((error) => console.log(error));
		}
	}
</script>

<div class="wrapper">
	<img class="earth" src="/icons/earth.svg" alt="earth" />
	<input
		class="location-input"
		on:input={handleInput}
		type="text"
		placeholder="City, state or country"
	/>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		gap: 8px;
		background-color: #fff;
		width: 100%;
		border-radius: 4px;
		padding: 4px 4px 4px 16px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
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
</style>
