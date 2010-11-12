<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <title>
  <?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;
	wp_title( ',', true, 'right' );
	// Add the blog name.
	bloginfo( 'name' );
	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " , $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' , ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );
	?>
	</title>
	
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <?php
	  /* We add some JavaScript to pages with the comment form
	   * to support sites with threaded comments (when in use).
	   */
	  if ( is_singular() && get_option( 'thread_comments' ) )
		  wp_enqueue_script( 'comment-reply' );

	  /* Always have wp_head() just before the closing </head>
	   * tag of your theme, or you will break many plugins, which
	   * generally use this hook to add elements to <head> such
	   * as styles, scripts, and meta tags.
	   */
	?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_directory' ); ?>/css/jqzoom.css" />
	
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script>!window.jQuery && document.write('<script src="/wp-includes/js/jquery/jquery.js"><\/script>')</script>
	<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jqzoom.pack.1.0.1.js"></script>
	<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jquery.init.js"></script>
	
	
<?php
	wp_head();
?>
</head>

<body>
  <div id="header" class="block">
	  <div class="container">
		  <div id="logo" class="left col-1">
			  <h1><a href="<?php bloginfo( 'home' ) ?>" title="<?php bloginfo( 'name' ) ?>"><?php bloginfo( 'name' ) ?></a></h1>
			</div>
			<div id="navigation" class="right col-2">
			  <ul class="inline-list">
	        <?php wp_list_pages('depth=1&exclude=4&title_li='); ?>				
				</ul>
			</div>			
		</div>
	</div>
	
	<?php 
	  $klass = "";
	  if (is_home() || is_category() || is_archive() || is_search() || is_front_page()) {
	    $klass = 'collection';
	  } elseif (is_page() || is_single() || is_404()) {
	    $klass = 'page';
	  }	  
	  if (is_front_page()) {
	    $id = "index";
	  } else {
	    $id = "";
	  }
	?>

  <div id="<?php echo $id ?>" class="block <?php echo $klass ?>"> <!-- closed in footer -->
    <div class="container"> <!-- closed in footer -->



