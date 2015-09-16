Image Slider
The aim behind this Image Slider is to create a slider which has just the right amount of features, with no bloat and be easy to extend so that more features can be added as "extensions". Here are the ideals and core features I wanted to include:

HTML5 (SEO optimised)
CSS3 transitions (a few simple transitions like slide/fade)
Left/Right navigation (including touch/swipe support)
Extremely simple to setup (no dependencies)
Very extensible
Uses progressive enhancement
Open source (goes without saying)

-> Requirements

None
Ideal Image Slider is written in simple HTML and JS and has no other dependencies.

Getting Started
you need to include the CSS file in the <head> section of your HTML and you need to include the script before the </body> tag in your HTML. Note you can optionally include a theme CSS file in the <head> too.

<html>
<head>
    ...
    
	<link rel="stylesheet" href="/path/to/slider_style.css" />

    ...
</head>
<body>
    ...
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="/path/to/slider.js"></script>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</body>
</html>

Next you need to set up your slider HTML where you want it to appear in your page. It should look something like this:

<div id="slider">
    <img src="img/1.jpg" alt="Minimum required attributes">
    <img data-src="img/2.jpg" src="" alt="Use data-src for on-demand loading">
    <img data-src="img/3.jpg" data-src-2x="img/3@2x.jpg" src="" alt="Use data-src-2x for HiDPI devices">
    <a href="http://example.com"><img data-src="img/4.jpg" src="" alt="Links work too"></a>
    ...
</div>

Next you need to set up your slider HTML where you want it to appear in your page. It should look something like this:

<div id="main">
	<div id="img-container">
		<div id="prev"> <i class="fa fa-angle-left fa-5x"></i> </div>
		<div id="next"> <i class="fa fa-angle-right fa-5x"></i> </div>
			<ul id="img-list">
				<li class="list-slider"><img alt="" src="images/1.jpg"  /></li>
				<li class="list-slider"><img alt="" src="images/2.jpg" /></li>
				<li class="list-slider"><img alt="" src="images/3.jpg" /></li>
				<li class="list-slider"><img alt="" src="images/4.jpg" /></li>
				<li class="list-slider"><img alt="" src="images/5.jpg" /></li>
			</ul>
		</div>
	<div id="thumbs-nail">
			<ul id="thumb-list">
				<li class="thumb-slider"><img  alt="" src="images/1.jpg"  /></li>
				<li class="thumb-slider"><img alt="" src="images/2.jpg" /></li>
				<li class="thumb-slider"><img alt="" src="images/3.jpg" /></li>
				<li class="thumb-slider"><img alt="" src="images/4.jpg" /></li>
				<li class="thumb-slider"><img alt="" src="images/5.jpg" /></li>
			</ul
	</div>
</div>

You just need to put your images and your slider will be up.

Browsers

This Image Slider has been tested on:

Chrome
Firefox
Safari (Desktop + Mobile)
Opera
IE9+	