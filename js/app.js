requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        jquery: 'jquery-2.1.4.min',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text',
        stickit: 'backbone.stickit',
        moment: 'moment'
    }
});

require([
        '../main',
        'stickit'
    ],
    function(App) {
        new App();
        //(new App()).$el.appendTo('body');
    }
);