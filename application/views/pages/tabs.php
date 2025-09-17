<body>
<div class="loader"></div>

<header class="text--color fs-8">Pilot page</header>
<main class="page">
	<div class="one text--color">
	<header class="container top">Lessons</header>
	<p>Lessons I have learned about my diabetes</p>
	<?php $this->load->view("menu/menu");?>
	<h3 class="hello bold-7"></h3>
</div>
<div class="full text--color">
	<section>
		<header class="container top">
			<ul class="inline">
				<button class="tablinks fs-3">Fruit</button>
				<button class="tablinks fs-3">Meat</button>
				<button class="tablinks fs-3">Vegtable</button>
				<button class="tablinks fs-3">Oils</button>
				<button class="tablinks fs-3">Nuts</button>
			</ul>
		</header>
	</section>
	<section class="medicine">
		<table>
			<tr>
				<th class="med-header">Start Date</th>
				<th class="med-header">Medicine</th>
				<th class="med-header">Dose</th>
				<th class="med-header">End Date</th>
			</tr>
			<tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
			</tr>
		</table>
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