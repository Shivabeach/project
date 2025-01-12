<body>
<header class="text--color fs-8">Forms Page</header>
<main class="page">
	<div class="one text--color">
	<header class="container top">Lessons</header>
	<p>Lessons I have learned about my diabetes</p>
	<ul>
	<li><?php echo anchor("pages/", "Home", 'class="links"');?><span class="linker"></span></li>
	<li><?php echo anchor("pages/forms", "Forms");?></li>
	</ul>
	<div class="hello"></div>
</div>
<div class="two text--color">
	<section>
	<header class="container top">Forms &#128509;</header>
	<fieldset><legend>Data form</legend>
	<form action="forms/project" id="form_update">
		<p>Thought: <textarea name="think" class="think input-large" id="thought" required></textarea></p>
		<select name="select" id="select" class="select" required>
			<option value="">Selector</option>
			<option value="Foods">Foods</option>
			<option value="Medicine">Medicine</option>
			<option value="Health">Health</option>
			<option value="Habits">Habits</option>
			<option value="Daily">Daily</option>
		</select>
		<p>
		<button type="submit" class="submit">Submit</button></p>
		<p><button type="reset" class="reset">Reset</button></p>
	</fieldset></form>
</section>
</div>
<div class="three text--color article-counter">
<header class="container top">Exercise</header>
<section>

<article class="article-counter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aliquid.</article>

</section>
</div>
<div class="four text--color">
<header class="container top">TBD</header>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aliquid.</p>
<p class="show"></p>
</div>
<footer class="text--color">
<p class="datey"></p>
<p class="copyr"></p>
</footer>
</main>
<script type="module" src="<?php echo base_url('assets/dist/js/script-dist.js');?>"></script>
<script src="<?php echo base_url('assets/dist/js/form-dist.js');?>"></script>
</body>
</html>