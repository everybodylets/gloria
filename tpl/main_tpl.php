<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<title>Глория</title>

<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<script type="text/javascript" src="js/jquery-1.4.2.js" ></script>

<!--[if lt IE 9]>
	<script type="text/javascript" src="http://info.template-help.com/files/ie6_warning/ie6_script_other.js"></script>
	<script type="text/javascript" src="js/html5.js"></script>
<![endif]-->
</head>
<body id="page1">
<div class="body3"></div>
<div class="body1">

	<div class="main">

<!-- header -->
		<header>

			<div id="logo_box">
				<h1><a href="<?= SiteRoot()?>" id="logo">Gloria Investment ltd.<span></span></a></h1>
			</div>
		<nav>
				<ul id="menu">
					<li id="menu_active"><a href="<?= SiteRoot()?>">Home</a></li>
					<li><a href="<?= SiteRoot("test")?>">О нас</a></li>
					<li><a href="<?= SiteRoot("quality")?>">Качество</a></li>
					<li><a href="<?= SiteRoot("transport")?>">Транспорт</a></li>
					<li class="bg_none"><a href="<?= SiteRoot("Contacts")?>">Контакты</a></li>
				</ul>
		</nav>

		</header>
<!-- / header -->

<!-- Content -->
		<div id="content">
<?= $content?>
			</div>
<!-- /Content -->


</div>
</div>
<footer>
	<div class="under2"></div>
		<div class="pad font_size">
			<p><u><a href="http://m-group.pp.ua" target="_blank">M-group &copy; 2016</a></u></p>
		</div>

</footer>
</body>
</html>