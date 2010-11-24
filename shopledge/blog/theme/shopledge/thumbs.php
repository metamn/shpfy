<?php 
  if ($to_display) {
    while ($to_display->have_posts()) : $to_display->the_post(); update_post_caches($posts); 
      $imgs = post_attachements($post->ID);
      $img = $imgs[0];
      $medium = wp_get_attachment_image_src($img->ID, 'medium');
    ?>    
      <div id="item">
        <?php if ($medium[0]) { ?>
          <div class="left col-1">
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
              <img class="thumb" src="<?php echo $medium[0] ?>" alt="<?php the_title(); ?>" />
            </a>
          </div>
          <div class="right col-2">		        
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
	        </div>
	      <?php } else { ?>
	        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
          <br/>
          <span class="excerpt"><?php the_excerpt(); ?></span>
        <?php } ?>
	    </div>      
    <?php endwhile;
  }
?>
  
