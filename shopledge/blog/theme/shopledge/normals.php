<?php 
  if (have_posts()) {
    while (have_posts()) : the_post();
      $imgs = post_attachements($post->ID);
      $img = $imgs[0];
      $large = wp_get_attachment_image_src($img->ID, 'large');
    ?>    
      <div id="item">
        <div class="left col-1">	        
	        <div id="main-image">
	          <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="thickbox" rel="collection-featured">	    
	            <img src="<?php echo $large[0] ?>" alt=""<?php the_title(); ?>" />
	          </a>
	        </div>	   	        
	      </div>
        
        <div class="right col-2">
	        <h6 class="title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h6>	        
	        
	        <?php if (count($imgs) > 0) { 
	          $i = 0;?>
            <div id="images">	
              <?php foreach ($imgs as $img) {
                if ($i > 0) {
                  $thumb = wp_get_attachment_image_src($img->ID, 'thumbnail'); 
                  $large = wp_get_attachment_image_src($img->ID, 'large'); 
                  if ($thumb[0]) { ?>
                    <img class="link" src="<?php echo $thumb[0] ?>" alt="<?php the_title(); ?>" rev="<?php echo $large[0] ?>" />                    
                  <?php }                
                }
                $i += 1;
              } ?> 
            </div>
          <?php } ?>           
	        
	        	        	        
	        <div id="description">
			      <p><?php the_content('<span class="more link">&rarr;</span>'); ?></p>
			      
		      </div>
	      </div>
        
	    </div>      
    <?php endwhile;
  }
?>

    
