<?php require('blog/wp/wp-blog-header.php');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .events
        {
            margin: 10px 0;
        }
        .events p
        {
            font-size: 0.9em;
            padding-top: 3px;
        }
    </style>

</head>
<body>

<?php
// Get the last 3 posts.
global $post;
$args = array( 'posts_per_page' => 3 );
$myposts = get_posts( $args );

foreach( $myposts as $post ) :	setup_postdata($post); ?>
<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a><br />
<?php endforeach; ?>

</body>
</html>