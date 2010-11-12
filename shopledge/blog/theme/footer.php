<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>
	
</div> <!-- opened in header -->	
</div> <!-- opened in header -->	

<div id="footer" class="block">
  <div class="container">
		<div class="left">
		  &copy; 2010 <a href="<?php bloginfo( 'home' ) ?>"><?php bloginfo( 'name' ) ?></a>. 
		</div>
		<div class="right">
		  Powered by <a href="http://wordpress.org/">Wordpress</a>. 			  
		</div>
	</div>
</div><!-- #footer -->



<?php
	wp_footer();
?>
</body>
</html>
