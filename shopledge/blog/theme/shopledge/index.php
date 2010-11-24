<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header(); ?>



<div id="items" class="right col-2">
  <?php include "normals.php" ?>
</div>

<div id="navigation" class="left col-1"> 
  <?php
    if (is_home()) {
      $title = "Blog";
    } elseif (is_category()) {
      $title = "Archive for " . single_cat_title( '', false );
    } elseif (is_tag()) {
      $title = "Archive for " . single_tag_title( '', false );
    } elseif (is_day()) {
      $title = "Archive for " . get_the_date();    
    } elseif (is_month()) {
      $title = "Archive for " . get_the_date('F Y');      
    } elseif (is_year()){
      $title = "Archive for " . get_the_date('Y');      
    } elseif (is_search()) {
      $title = "Search results for " . get_search_query();
    } else {
      $title = "";
    }
   
    if ($title) {
      echo '<h3>'. $title . '</h3>';
    }
   
    get_sidebar();
  ?>    
</div>
	
<?php get_footer(); ?>
