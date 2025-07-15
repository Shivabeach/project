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
		<li><?php echo anchor("pages/tabs", "Tabs");?></li>
	</ul>
	<h3 class="hello bold-7"></h3>

	<div class="category-count">
	</div>
</div>
<div class="two text--color counter">
	<section>
	<header class="container top">Observations</header>
	<div class="comment-container">

</div>

</section>
</div>

<div class="three text--color art-counter">
<header class="container top">Search Categories</header>
<section>
	<article class="quiz">
		<form id="forms">
		<select name="gat" id="gat" class="gat">
			<option value="">Pick One</option>
			<option value="Health">Health</option>
			<option value="Foods">Foods</option>
			<option value="Medicine">Medicine</option>
			<option value="Habits">Habits</option>
			<option value="Daily">Daily</option>
		</select>
		<button type="submit" class="submit">Submit</button>&nbsp
		<button type="reset" class="reset">Reset</button>
	</form>
	</article>

<div class="comments-container"></div>
</section>
</div>



<div class="four text--color">
<header class="container top">TBD</header>
<div class="circle">Diabetes</div>
	<p> mellitus, often known simply as diabetes, is a group of common endocrine diseases characterized by sustained high blood sugar levels. Diabetes is due to either the pancreas not producing enough insulin, or the cells of the body becoming unresponsive to the hormone's effects. Classic symptoms include polydipsia (excessive thirst), polyuria (excessive urination), weight loss, and blurred vision. If left untreated, the disease can lead to various health complications, including disorders of the cardiovascular system, eye, kidney, and nerves.</p>
</div>
<footer class="text--color">
<p class="datey"></p>
<p class="copyr"></p>
</footer>
</main>
<script type="text/javascript" src="<?php echo base_url('assets/dist/js/script-dist.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/dist/js/form-dist.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/dist/js/recieve-dist.js');?>"></script>
</body>
</html>