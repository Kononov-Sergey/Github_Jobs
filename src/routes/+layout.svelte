<div class="container">
	<header class="logo"><h1><span>hh</span> jobs</h1></header>
	<slot />
	<footer>
		created by <a href="https://github.com/Kononov-Sergey">Kononov Sergei</a> - devChallenges.io
	</footer>
</div>

<style lang="scss">
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
	footer {
		text-align: center;
		font-family: 'Roboto';
		font-weight: 500;
		line-height: 17px;
		color: #b9bdcf;
		margin: 30px 44px 24px;
	}
	a {
		color: #b9bdcf;
		border-bottom: 1px solid #b9bdcf;
		font-weight: 700;
		transition: all 0.1s ease;
		&:hover {
			color: #334680;
			border-color: #334680;
		}
	}
</style>
