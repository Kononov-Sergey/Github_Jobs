<div class="container">
	<header class="logo"><h1><span>hh</span> jobs</h1></header>
	<slot />
</div>

<style lang="scss">
	:global(body) {
		background-color: #f6f7fb;
	}
	.container {
		max-width: 1200px;
		margin: auto;
		color: #282538;
	}
	.logo {
		margin-bottom: 32px;
		margin-top: 32px;
		h1 {
			margin: 0;
			font-family: 'Poppins';
			font-weight: 300;
			span {
				font-weight: 700;
				background-color: #d6001c;
				border-radius: 50px;
				padding: 10px;
				color: white;
			}
		}
	}
</style>
