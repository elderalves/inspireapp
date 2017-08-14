<?php

add_theme_support( 'post-thumbnails' ); 

// Plaintext Content
add_action('rest_api_init', 'rest_plain_text');
function rest_plain_text() {
    register_rest_field(
        'post',
        'plaintext',
        array(
            'get_callback' => function($object) {
                return strip_tags($object['content']['rendered']);
            }
        )
    );
}

// Thumbnail REST API
add_action('rest_api_init', 'rest_thumbnail');
function rest_thumbnail() {
    register_rest_field(
        'post',
        'thumbnail',
        array(
            'get_callback' => function($object) {
                return get_the_post_thumbnail_url( $object['id'] );
            }
        )
    );
}


