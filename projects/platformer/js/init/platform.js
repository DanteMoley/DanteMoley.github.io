(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(400, 620,0.5,0.5);
        platform.create(500, 100);
        platform.create(600,100);
        platform.create(700,100);
        platform.create(300,430,0.5,0.5);
        platform.create(400,450,0.5,0.5);
        platform.create(400,560,1.0,1.0);
        platform.create(700,300,0.5,0.5);
        platform.create(550,500,0.5,0.5);
        platform.create(200,400,0.5,0.5);
        platform.create(500,350,0.5,0.5);
        platform.create(200,120,0.5,0.5);
        platform.create(100,200,0.5,0.5);
        platform.create(150,250,0.5,0.5);
        platform.create(260,320,0.5,0.5);
        platform.create(160,260,0.5,0.5);
        platform.create(400,520,0.5,0.5);
        platform.create(480,450,0.5,0.5)
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);