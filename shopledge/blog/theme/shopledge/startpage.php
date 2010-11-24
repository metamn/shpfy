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
  <div class="box">
    <p>
      <?php echo page_excerpt('about');  ?>
    </p>  
    <span class="more link">&rarr;</span>	
    <div id="excerpt" class="hidden after-more">
	    <?php echo page('about'); ?>
    </div>
  </div> 
	 
  
  <div id="featured" class="box">
	  <ul>
	    <?php 
	    if ($news) {
        while ($news->have_posts()) : $news->the_post(); update_post_caches($news); 
          $imgs = post_attachements($post->ID);
          $img = $imgs[0];
          $medium = wp_get_attachment_image_src($img->ID, 'medium');
        ?>    
	     <li>
		      <a class="image" href="<?php the_permalink(); ?>">
		        <img class="thumb" src="<?php echo $medium[0] ?>" alt="<?php the_title(); ?>" />
		      </a>	
		      <a class="info" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		      <div class="clear"></div>	   
		  </li>
		  <?php endwhile; } ?>		  
		  <li class="last">
		    <a class="image more" href="<?php the_permalink(); ?>">&nbsp;</a>	
	      <a class="info" href="<?php bloginfo( 'home' ) ?>/blog">Get more recent News</a>	        	          		      		          		        
	      <div class="clear"></div>	   
		  </li>  
	  </ul>	  
	</div>		
</div>


<div id="featured" class="right col-2">
  <?php
    if ($featured) {
    while ($featured->have_posts()) : $featured->the_post(); update_post_caches($posts); 
      $imgs = post_attachements($post->ID);
      $img = $imgs[0];
      $large = wp_get_attachment_image_src($img->ID, 'large');
    ?>    
      <div id="item">	    
	      <div class="info">
	        <h6 class="title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h6>
	      </div>
	      <div class="image">
	        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">	    
	         <img src="<?php echo $large[0]; ?>" alt="<?php the_title(); ?>" />
	       </a>	        
	      </div>	      
	    </div>
  <?php endwhile; } ?>  
  
  <div class="clear"></div>
  
  <div id="sale">  
    <div id="item" class="sale"><h1>HOT!</h1></div>
    <?php 
	     $to_display = $hot; 
	     include "thumbs.php";
	   ?>	
  </div>
</div>




<?php get_footer() ?>
