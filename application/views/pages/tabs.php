<body>
<div class="loader"></div>

<header class="text--color fs-8">Pilot page</header>
<main class="page">
	<div class="one text--color">
	<header class="container top">Lessons</header>
	<p>Lessons I have learned about my diabetes</p>
	<ul>
		<li><?php echo anchor("pages/", "Home");?></li>
		<li><?php echo anchor("pages/forms", "Forms");?></li>
		<li><?php echo anchor("pages/colors", "Colors");?></li>
		<li><?php echo anchor("pages/tabs", "Tabs");?></li>
	</ul>
	<h3 class="hello bold-7"></h3>
</div>
<div class="full text--color">
	<section>
		<header class="container top">
			<ul class="inline">
				<li class="inliner fruit">Fruit</li>
				<li class="inliner meat">Meat</li>
				<li class="inliner veg">Vegtable</li>
				<li class="inliner oils">Oils</li>
				<li class="inliner nuts">Nuts</li>
			</ul>
		</header>
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
</body>
</html>