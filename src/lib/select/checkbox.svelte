<script lang="ts">
	export let title: string, value: boolean;
</script>

<label for={title}
	><span class="box-square" data-checked={value}>
		<img class="check" src="/icons/check.svg" alt="check" data-checked={value} />
	</span>Full time</label
>
<input id={title} type="checkbox" bind:checked={value} />

<style lang="scss">
	.box-square {
		display: block;
		border: 1px solid #b9bdcf;
		border-radius: 2px;
		width: 18px;
		height: 18px;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s ease;
		&[data-checked='true'] {
			background-color: #1e86ff;
			border-color: #1e86ff;
		}
	}
	.check {
		transition: all 0.3s ease;
		opacity: 0;
		width: 26px;
		filter: invert(94%) sepia(75%) saturate(397%) hue-rotate(202deg) brightness(114%) contrast(101%);
		&[data-checked='true'] {
			opacity: 1;
		}
	}
	label {
		color: #334680;
		font-size: 14px;
		font-weight: 500;
		line-height: 21px;
		font-family: 'Poppins';
		display: flex;
		gap: 12px;
		user-select: none;
		align-items: center;
		cursor: pointer;
	}
	input {
		display: none;
	}
</style>
