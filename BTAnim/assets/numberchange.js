// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _obj:0,
        money:cc.Label,
        title:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    changeNumber(){
        cc.tween(this)
        // .to(1, { scale: 2 }, { easing: 'sineOutIn'})
        .to(5, { _obj: 1000000 })
        .call(()=>{
            this.effectCoin()})
        .start()
    },

    effectCoin(){
        cc.tween(this.money.node)
        .to(1,{scale:2, color: new cc.Color(214,255,0)})
        .start()
    },

    createParticle(){
        
    },

    aniTitle(){
        let t = cc.tween;
        t(this.title.node)
        .parallel(
            t().to(1, { scale: 1.5 }),
            t().to(2,{ opacity: 255})
        )
        .start()
    },
    // aniLetter(){
    //     for(let i=0;i<this.title.string.length;i++){
    //         cc.tween(this.title.string[i])
    //             .to(1,{scale:1.5})
    //             .start()
    //     }
    // },

    aniNode(){
        cc.tween(this.node)
        .to(1,{opacity:255, scale: 1})
        .call(()=>{
            this.aniTitle();
            this.changeNumber();
        })
        .start()
    },

    onLoad () {
        // let obj = 0
        this.aniNode();
        // this.changeNumber();
        // this.aniLetter();
        // this.effectCoin();
        // cc.log(this.title.string.length);
        // cc.log(this.title.string[0]);
    },

    start () {

    },

    update (dt) {
        this.money.string = Math.floor(this._obj)
    },
});
