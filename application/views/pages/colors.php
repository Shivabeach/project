<body class="body">
<header class="text--color fs-8">Pilot page</header>
<main class="page">
	<div class="one text--color">
	<header class="container top">Lessons</header>
	<p>Lessons I have learned about my diabetes</p>
	<?php $this->load->view("menu/menu");?>
	<h3 class="hello bold-7"></h3>
</div>
<div class="two text--color">
	<section>
	<header class="container top">Color Picker</header>
	<form action="" id="color">
		<input type="color" class="color1"><br/>
		<input type="color" class="color2"><br/>
		<input type="color" class="color3"><br/>
		Linear: <input type="checkbox" name="" id="" class="linear"><br/>
		Radial: <input type="checkbox" name="" id="" class="radial">
		<p>
		<button type="submit" class="submit">Submit</button>&nbsp;<button type="reset" class="reset">Reset</button></p>
	</form>
<section class="values"></section>
</div>
</section>
</div>
<div class="three">
<header class="container top">Categories</header>
</div>
<div class="four text--color">
<header class="container top">TBD</header>
<div class="circle">A Circle</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam officiis error odio vel animi, soluta, quibusdam impedit aliquam doloribus?</p>
</div>
<footer class="text--color">
<p class="datey"></p>
<p class="copyr"></p>
</footer>
</main>
<script type="text/javascript" src="<?php echo base_url('assets/dist/js/script-dist.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/dist/js/colors-dist.js');?>"></script>
</body>
</html>