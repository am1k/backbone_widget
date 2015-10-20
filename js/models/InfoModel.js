define(['../lib/backbone'], function(Backbone){
    var MainInfoModel = Backbone.Model.extend({

        defaults: {
            sell: 0,
            buy: 0,
            ratio: 0,
            max: 0,
            min: 0,
            name: '',
            sellRatio: 0,
            buyRatio: 0
        },

        initialize: function(max, min) {
            this.updateInfo();
        },

        updateInfo: function(){
            var buyRatio = this.generateBuyRatio();
            this.set({
                sell: this.generateNumber(),
                buy: this.generateNumber(),
                ratio: this.generateBuyRatio(),
                sellRatio: 100 - buyRatio,
                buyRatio: buyRatio
            });
            setTimeout(this.updateInfo.bind(this),3000);
        },

        generateBuyRatio: function(){
            var ratio = Math.random() * (0, 100);
            return ratio.toFixed();
        },

        generateNumber: function(min, max){
            return (Math.random() * (this.get('min'), this.get('max'))).toFixed(4);
        }
    });

    return MainInfoModel;

});

