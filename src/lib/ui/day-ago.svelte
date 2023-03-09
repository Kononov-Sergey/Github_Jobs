<script lang="ts">
	export let publishedAt: string;

	$: formatedTime = Math.ceil(
		new Date(new Date().getTime() - new Date(publishedAt).getTime()).getTime() / 1000 / 60 / 60 / 24
	);
</script>

<time datetime={publishedAt}
	><img src="/icons/clock.svg" alt="earth" />{formatedTime}
	{formatedTime === 1 ? 'day' : 'days'} ago</time
>

<style lang="scss">
	time {
		white-space: nowrap;
		color: #b7bcce;
		font-family: 'Roboto';
		font-weight: 500;
		font-size: 12px;
		display: flex;
		align-items: center;
		gap: 8.5px;
	}
	img {
		width: 18px;
		height: 18px;
		filter: invert(90%) sepia(6%) saturate(669%) hue-rotate(191deg) brightness(84%) contrast(91%);
	}
</style>
