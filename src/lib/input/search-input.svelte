<script>
	import { searchInputValue } from '$lib/store/search-input-state';
	import SearchButton from '../button/search-button.svelte';
</script>

<div class="wrapper">
	<img class="briefcase" src="/icons/briefcase.svg" alt="briefcase" />
	<input
		class="search-input"
		bind:value={$searchInputValue}
		type="text"
		placeholder="Title, companies, expertise or benefits"
	/>
	<SearchButton />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		gap: 8px;
		background-color: #fff;
		width: 100%;
		max-width: 790px;
		border-radius: 4px;
		padding: 4px 4px 4px 16px;
	}
	.briefcase {
		width: 20px;
		filter: invert(90%) sepia(3%) saturate(1357%) hue-rotate(194deg) brightness(86%) contrast(87%);
	}
	.search-input {
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
