<?php
  /*
  Template Name: Startpage
   * @package WordPress
   * @subpackage Default_Theme
   */

  get_header();
?>

<?php 
  $news = query_posts2("posts_per_page=3");
  $featured = query_posts2("posts_per_page=3&cat=".FEATURED);
  $hot = query_posts2("posts_per_page=6&cat=".HOT);
?>

<div id="info" class="left col-1">
  <p>
    <?php echo page_excerpt('about');  ?>
  </p>  
  <span class="more link">&rarr;</span>	
	<div id="excerpt" class="hidden">
	  <?php echo page('about'); ?>
  </div> 
  
  <div id="news">
	  <?php 
	     $to_display = $news; 
	     include "thumbs.php";
	   ?>	  
	</div>
	
	<div class="clear"></div>
	<p><a class="button rounded greenb" href="<?php bloginfo( 'home' ) ?>/blog">Get more recent News</a></p>   
</div>


<div id="featured" class="right col-2">
  <?php
    if ($featured) {
    while ($featured->have_posts()) : $featured->the_post(); update_post_caches($posts); 
      $imgs = post_attachements($post->ID);
      $img = $imgs[0];
      $medium = wp_get_attachment_image_src($img->ID, 'medium');
    ?>    
      <div id="item">	    
	      <div class="left col-1">
	        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">	    
	         <img src="<?php echo $medium[0]; ?>" alt="<?php the_title(); ?>" />
	       </a>	        
	      </div>
	      <div class="right col-2">
	        <h6 class="title yellowb"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h6>
	      </div>
	    </div>
  <?php endwhile; } ?>  
  
  <div class="clear"></div>
  
  <div id="sale">  
    <div id="item" class="percent"><h1>HOT!</h1></div>
    <?php 
	     $to_display = $hot; 
	     include "thumbs.php";
	   ?>	
  </div>
</div>




<?php get_footer() ?>
