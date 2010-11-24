<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>


<div id="content" class="right col-2">    
  <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
  
    <div id="nav-above" class="nav">
		  <div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentyten' ) . '</span> %title' ); ?></div>
		  <div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '</span>' ); ?></div>
	  </div><!-- #nav-above -->
  
	  <div class="article">
		  <h6 class="title"><a href="<?php the_title(); ?>"><?php the_title(); ?></a></h6>
      <p class="post-meta">
		    <?php twentyten_posted_on(); ?>		  
		  </p>
      <p>    
        <?php the_content(); ?>
      </p>
    </div>		
	
  <?php 
    comments_template( '', true ); 
    endwhile;  
  ?>  
  
    <div id="nav-above" class="nav">
		  <div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentyten' ) . '</span> %title' ); ?></div>
		  <div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '</span>' ); ?></div>
	  </div><!-- #nav-above -->  
</div>

<div id="navigation" class="left col-1">
  <?php get_sidebar(); ?>
</div>


<?php get_footer(); ?>
