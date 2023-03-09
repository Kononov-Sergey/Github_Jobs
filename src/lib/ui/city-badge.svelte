<script lang="ts">
	export let city: string | undefined;
	export let country: string;
</script>

<p><img src="/icons/earth.svg" alt="earth" />{city || country}</p>

<style lang="scss">
	p {
		font-family: 'Roboto';
		font-weight: 500;
		font-size: 12px;
		color: #b9bdcf;
		display: flex;
		align-items: center;
		gap: 7.5px;
	}
	img {
		width: 18px;
		height: 18px;
		filter: invert(90%) sepia(6%) saturate(669%) hue-rotate(191deg) brightness(84%) contrast(91%);
	}
</style>
