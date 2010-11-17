<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header(); ?>

<div id="navigation" class="left col-1">
  <div id="collection-desc">
		<h6>Blog</h6>		
	</div>

  <ul class="categories">
    <?php wp_list_categories() ?>
	</ul>
	
  <div id="searchbox">
    <h6>Search</h6>
		<form action="/search" method="get">
			<input class="text" type="text" name="q" /> 
			<input class="link button greenb rounded" type="submit" value="Go"  />
		</form>
	</div>
  
  <div id="tags">
    <h6>Tags</h6>
    <ul>
      <?php wp_tag_cloud(); ?>
    </ul>
  </div>  
</div>

<div id="items" class="right col-2">
  <?php include "normals.php" ?>
</div>

	
<?php get_footer(); ?>
