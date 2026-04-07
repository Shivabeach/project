<body>
	<div class="loader"></div>

	<header class="text--color fs-8">Pilot page</header>
	<main class="page">
		<div class="one text--color">
			<header class="container top">Lessons</header>
			<p>Lessons I have learned about my diabetes</p>
			<?php $this->load->view("menu/menu"); ?>
			<h3 class="hello bold-7"></h3>
		</div>
		<div class="full text--color">
			<section>
				<ul class="inline">
					<button class="tablink" onclick="openPage('Fruit', this, 'purple' )">Fruit</button>
					<button class="tablink" onclick="openPage('Meat', this, '#6868AC' )" id="defaultOpen">Meat</button>
					<button class="tablink" onclick="openPage('Vegetable', this, 'green' )">Vegetable</button>
					<button class="tablink" onclick="openPage('Oils', this, 'blue' )">Oils</button>
					<button class="tablink" onclick="openPage('Nuts', this, 'orange' )">Nuts</button>
				</ul>

				<div id="Fruit" class="tabcontent">
					<h3>Fruits</h3>
					<p>Apples, Oranges and lollipops</p>
				</div>
				<div id="Meat" class="tabcontent">
					<h3>Meat</h3>
					<p>Pork, Ham and Grits</p>
				</div>
				<div id="Vegetable" class="tabcontent">
					<h3>Vegetables</h3>
					<p>Beans, Carrots and More Carrots</p>
				</div>
				<div id="Oils" class="tabcontent">
					<h3>Oils</h3>
					<p>Olives and rapeseed</p>
				</div>
				<div id="Nuts" class="tabcontent">
					<h3>Nuts</h3>
					<p>Walnuts Pecans and brazil nuts</p>
				</div>

			</section>

		</div>

		<div class="four text--color">
			<header class="container top">TBD</header>
			<div class="circle">A Circle</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam officiis error odio vel animi, soluta,
				quibusdam impedit aliquam doloribus?</p>
		</div>
		<footer class="text--color">
			<p class="datey"></p>
			<p class="copyr"></p>
		</footer>
	</main>
	<script type="text/javascript" src="<?php echo base_url('assets/dist/js/script-dist.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/js/tabs.js'); ?>"></script>
</body>

</html>