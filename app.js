new Vue ({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false, 
        playerHeath: 100
       
    },
    methods: {
        attack: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            }
            this.monsterAttacks()
        },
        superAttack: function(){
            this.health -= 25;
            if ( this.health <= 0 ){
                this.ended = true;
            }
            this.monsterAttacks()
        },
        restart: function(){
            this.playerHealth$ = 100;
            this.health = 100;
            this.ended = false;
        }, 
        heal: function(){
            this.health=100;
        },
        monsterAttacks: function(){
            this.playerHealth-=15;
        }
    }
        
});