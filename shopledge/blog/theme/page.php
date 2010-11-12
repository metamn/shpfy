<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

<?php 
  $featured = query_posts2("posts_per_page=3&cat=".FEATURED);
  $hot = query_posts2("posts_per_page=6&cat=".HOT);
?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>	
	<h2><?php the_title(); ?></h2>
	<div id="contents" class="col-1 left">
    <?php the_content(); ?>
    <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'twentyten' ), 'after' => '</div>' ) ); ?>
		<?php edit_post_link( __( 'Edit', 'twentyten' ), '<span class="edit-link">', '</span>' ); ?>
		<?php comments_template( '', true ); ?>
  </div>
<?php endwhile; ?>

<div id="navigation" class="right col-2">  
   
  <div id="searchbox">
    <form action="/search" method="get">
      <table><tr>
			<td><input class="text" type="text" name="q" /></td> 
			<td><input class="button" type="submit" value="Search" /></td>
			</tr></table>
		</form>
	</div>
	
	<div id="featured">  
    <h6 class="link"><span class="more blueb">&rarr;</span> Featured articles</h6>
    <div id="items">
      <?php 
        $to_display = $featured; 
        include "thumbs.php";
      ?>	
    </div>
  </div>   
  <div class="clear"></div>
  
  <div id="sale">  
    <h6 class="link"><span class="more redb">&rarr;</span> Hot on Shopledge</h6>
    <div id="items">
      <?php 
        $to_display = $hot; 
        include "thumbs.php";
      ?>
    </div>	
  </div>   
  <div class="clear"></div>  	  
</div>

		
<?php get_footer(); ?>
