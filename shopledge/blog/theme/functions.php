<?php


define("FEATURED", 3);
define("HOT", 4);

// Returns the excerpt of a page
// - $page is the page slug
function page_excerpt($page) {
    $p = get_page_by_path($page);   
    return $p->post_excerpt;
}

// Returns the content of a page
// - $page is the page slug
function page($page) {
    $p = get_page_by_path($page);   
    return $p->post_content;
}

// Query for multiple posts
// - the query string has the syntax of the query_posts WP function
function query_posts2($query_string) {
  $q = new WP_Query($query_string);
  return $q;
}

// Get post attachements
function post_attachements($post_id) {  
  $args = array(
	  'post_type' => 'attachment',
	  'numberposts' => -1,
	  'post_status' => null,
	  'post_parent' => $post_id,
	  'orderby' => 'menu_order',
	  'order' => 'ASC'
  ); 
  $attachments = get_posts($args);
  return $attachments;
}

?>
