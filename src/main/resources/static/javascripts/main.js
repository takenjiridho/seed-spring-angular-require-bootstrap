'use strict';

requirejs.config({

    baseUrl: '/javascripts',

    paths: {
        'jquery': '/webjars/jquery/2.1.1/jquery',
        'angular': '/webjars/angularjs/1.3.1/angular',
        'bootstrap': '/webjars/bootstrap/3.3.0/js/bootstrap.min',
        'metisMenu': '/webjars/metisMenu/1.1.2/metisMenu.min'
    },

    packages: ['home'],

    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'metisMenu': {
            deps: ['jquery', 'bootstrap']
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'app': {
            deps: ['angular']
        }
    }
});

requirejs([
        'jquery',
        'bootstrap',
        'angular',
        'metisMenu',
        'app'
    ],

    function ($, angular) {

        // Metis menu.
        $('#side-menu').metisMenu();

        //Loads the correct sidebar on window load,
        //collapses the sidebar on window resize.
        // Sets the min-height of #page-wrapper to window size
        $(window).bind("load resize", function() {
            var topOffset = 50;
            var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                $('div.navbar-collapse').addClass('collapse')
                topOffset = 100; // 2-row-menu
            } else {
                $('div.navbar-collapse').removeClass('collapse')
            }

            var height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $("#page-wrapper").css("min-height", (height) + "px");
            }
        })

        console.log("in main.js");
    }
);