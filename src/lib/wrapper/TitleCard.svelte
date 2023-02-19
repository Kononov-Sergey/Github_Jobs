<script lang="ts">
	export let title: string;
</script>

<div class="wrapper">
	<h2>{title}</h2>
	<slot />
</div>

<style>
	.wrapper {
		width: 100%;
	}
	h2 {
		font-family: 'Poppins';
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		color: #b9bdcf;
		margin-bottom: 14px;
	}
</style>
