new Vue ({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
       
    },
    methods: {
        attack: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        superAttack: function(){
            this.health -= 25;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }, 
        heal: function(){
            this.health=100;
        }
    }
        
});