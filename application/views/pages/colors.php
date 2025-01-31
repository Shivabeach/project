<body>
<header class="text--color fs-8">Pilot page</header>
<main class="page">
	<div class="one text--color">
	<header class="container top">Lessons</header>
	<p>Lessons I have learned about my diabetes</p>
	<ul>
		<li><?php echo anchor("pages/", "Home");?></li>
		<li><?php echo anchor("pages/forms", "Forms");?></li>
		<li><?php echo anchor("pages/colors", "Colors");?></li>
	</ul>
	<h3 class="hello bold-7"></h3>
</div>
<div class="two text--color">
	<section>
	<header class="container top">Color Picker</header>
	<form action="" id="color">
		<input type="color" class="color1"><br/>
		<input type="color" class="color2">
		<p>
		<button type="submit" class="submit">Submit</button>&nbsp;<button type="reset" class="reset">Reset</button></p>
	</form>
</div>
</section>
</div>
<div class="three">
<header class="container top">Categories</header>
<section>
<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Impedit doloribus obcaecati voluptatum, praesentium quo. Molestiae rerum est officia veniam iure dolorum aliquid sapiente! Libero, neque.</p>
</section>
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