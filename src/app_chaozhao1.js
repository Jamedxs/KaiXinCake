/**
 * Created by Administrator on 2016/11/24 0024.
 */


//---------------------判断游戏场景开始----------------------
var SellScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        if(state==1){
            var layer = new SellLayer1();
            this.addChild(layer);
        }
        else if(state==2){
            var layer = new SellLayer2();
            this.addChild(layer);
        }
        else if(state==3){
            var layer = new SellLayer3();
            this.addChild(layer);
        }
    }
});
//---------------------判断游戏场景结束----------------------

//---------------------销售游戏场景1开始----------------------
var SellLayer1 = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //欢呼
        cc.audioEngine.playEffect(res.Huanhu_mp3,false);
        //背景
        var bg=new cc.Sprite(res.BackgroundRed_png);
        bg.scaleX=0.719640179910045;
        bg.scaleY=0.8533333333333333;
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg,1);

        //底部人群图片
        var bdPeople = new cc.Sprite(res.GEPeople_png);
        bdPeople.scaleX=0.719640179910045;
        bdPeople.scaleY=0.8533333333333333;
        bdPeople.x = size.width / 2;
        bdPeople.y = size.height / 2;
        this.addChild(bdPeople, 3);

        //中心蛋糕图片
        var cake = new cc.Sprite(res.CakeFruit_png);
        cake.scaleX=0.719640179910045*0.75;
        cake.scaleY=0.8533333333333333*0.75;
        cake.x = size.width / 2;
        cake.y = size.height / 2;
        this.addChild(cake, 3);
        //中心蛋糕座位置
        var cakeZ = new cc.Sprite(res.CakeZ_png);
        cakeZ.scaleX=0.719640179910045*0.75;
        cakeZ.scaleY=0.8533333333333333*0.75;
        cakeZ.x = size.width / 2;
        cakeZ.y = size.height / 2-170;
        this.addChild(cakeZ, 2);


        //男孩图片
        var cb1 = new cc.Sprite(res.SM1_png);
        cb1.scaleX=0.65;
        cb1.scaleY=0.65;
        cb1.x = size.width / 2-160 ;
        cb1.y = size.height / 2+10;
        this.addChild(cb1, 5);
        //男孩repeat动作
        var stateAction0= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction0.addSpriteFrameWithFile("res/SM"+i+".png");
        }
        stateAction0.setDelayPerUnit(1/2);
        var action0=cc.animate(stateAction0);
        action0.repeatForever();
        cb1.runAction(action0);


        //女孩图片
        var cg1 = new cc.Sprite(res.CardGirl1_png);
        cg1.scaleX=0.7;
        cg1.scaleY=0.7;
        cg1.x = size.width / 2+180 ;
        cg1.y = size.height / 2;
        this.addChild(cg1, 5);
        //女孩repeat动作
        var stateAction1= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction1.addSpriteFrameWithFile("res/cg"+i+".png");
        }
        stateAction1.setDelayPerUnit(1/2);
        var action1=cc.animate(stateAction1);
        action1.repeatForever();
        cg1.runAction(action1);


        //淡入文字显示-先显示
        var desStr0 = "堪称完美！";
        var desLabel0 = new cc.LabelBMFont(desStr0,res.kaixin_chaozhao1_fnt,  500, cc.TEXT_ALIGNMENT_LEFT);
        desLabel0.scaleX=1.5;
        desLabel0.scaleY=1.5;
        desLabel0.x = size.width / 2+10;
        desLabel0.y = size.height / 2 + 150;
        desLabel0.opacity=0;
        var textAction0=cc.fadeTo(1,255);
        desLabel0.runAction(textAction0);
        this.addChild(desLabel0, 5);


        //结局文字显示-后显示
        var desStr = "蛋糕质量上乘，大家对蛋糕十分满意，邻里口口相传。\n";
        desStr += "销售人员推广十分顺利，多位顾客表示会再来购买！";
        var desLabel1 = new cc.LabelBMFont(desStr,res.kaixin_chaozhao1_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        desLabel1.scaleX=1.1;
        desLabel1.scaleY=1.1;
        desLabel1.x = size.width / 2;
        desLabel1.y = size.height / 2 + 240;
        desLabel1.opacity=0;
        var textAction=cc.fadeTo(4,255);
        desLabel1.runAction(textAction);
        this.addChild(desLabel1, 5);

        //买字1
        var buy1 = new cc.Sprite(res.Buy1_png);
        buy1.x = size.width / 2 +90;
        buy1.y = size.height/2-90;
        this.addChild(buy1, 6);
        var buyAction1=cc.blink(1.4,1);
        var buyRepeatAction1 = cc.repeatForever(buyAction1);
        buy1.runAction(buyRepeatAction1);
        //买字2
        var buy2 = new cc.Sprite(res.Buy1_png);
        buy2.scaleX=0.8;
        buy2.scaleY=0.8;
        buy2.x = size.width / 2 +280;
        buy2.y = size.height/2-110;
        this.addChild(buy2, 6);
        var buyAction2=cc.blink(1.3,1);
        var buyRepeatAction2 = cc.repeatForever(buyAction2);
        buy2.runAction(buyRepeatAction2);
        //买字3
        var buy3 = new cc.Sprite(res.Buy2_png);
        buy3.scaleX=0.75;
        buy3.scaleY=0.75;
        buy3.x = size.width / 2 -280;
        buy3.y = size.height/2-110;
        this.addChild(buy3, 6);
        var buyAction3=cc.blink(1.2,1);
        var buyRepeatAction3 = cc.repeatForever(buyAction3);
        buy3.runAction(buyRepeatAction3);


        //布置气球1
        var cg1 = new cc.Sprite(res.Q1_png);
        cg1.scaleX=0.6;
        cg1.scaleY=0.6;
        cg1.x = size.width / 2+400 ;
        cg1.y = -100;
        cg1.opacity=255;
        this.addChild(cg1, 2);
        var q1Action1 = cc.moveTo(4,size.width/2+420 , size.height+100);
        var q1Action2=cc.fadeTo(0.1,0);
        var q1Action3 = cc.moveTo(0.1,size.width/2+90 ,-200);
        var q1Action4=cc.fadeTo(0.1,255);
        var q1Sequence1=cc.sequence(q1Action1,q1Action2,q1Action3,q1Action4);
        var q1RepeatAction1 = cc.repeatForever(q1Sequence1);
        cg1.runAction(q1RepeatAction1);
        //布置气球2
        var cg2 = new cc.Sprite(res.Q2_png);
        cg2.scaleX=0.4;
        cg2.scaleY=0.4;
        cg2.x = size.width / 2-400 ;
        cg2.y = -100;
        cg2.opacity=255;
        this.addChild(cg2, 2);
        var q1Action5 = cc.moveTo(3,size.width/2-410 , size.height+100);
        var q1Action6=cc.fadeTo(0.1,0);
        var q1Action7 = cc.moveTo(0.1,size.width/2-40 ,-300);
        var q1Action8=cc.fadeTo(0.1,255);
        var q1Sequence2=cc.sequence(q1Action5,q1Action6,q1Action7,q1Action8);
        var q1RepeatAction2 = cc.repeatForever(q1Sequence2);
        cg2.runAction(q1RepeatAction2);
        //布置气球3
        var cg3 = new cc.Sprite(res.Q3_png);
        cg3.scaleX=0.9;
        cg3.scaleY=0.9;
        cg3.x = size.width / 2-320 ;
        cg3.y = -500;
        cg3.opacity=255;
        this.addChild(cg3, 2);
        var q1Action9 = cc.moveTo(5,size.width/2-400 , size.height+100);
        var q1Action10=cc.fadeTo(0.1,0);
        var q1Action11 = cc.moveTo(0.1,size.width/2-120 ,-400);
        var q1Action12=cc.fadeTo(0.1,255);
        var q1Sequence3=cc.sequence(q1Action9,q1Action10,q1Action11,q1Action12);
        var q1RepeatAction3 = cc.repeatForever(q1Sequence3);
        cg3.runAction(q1RepeatAction3);
        //布置气球4
        var cg4 = new cc.Sprite(res.Q4_png);
        cg4.scaleX=0.5;
        cg4.scaleY=0.5;
        cg4.x = size.width / 2+360 ;
        cg4.y = -500;
        cg4.opacity=255;
        this.addChild(cg4, 2);
        var q1Action13 = cc.moveTo(6,size.width/2+360 , size.height+100);
        var q1Action14=cc.fadeTo(0.1,0);
        var q1Action15 = cc.moveTo(0.1,size.width/2+160 ,-700);
        var q1Action16=cc.fadeTo(0.1,255);
        var q1Sequence4=cc.sequence(q1Action13,q1Action14,q1Action15,q1Action16);
        var q1RepeatAction4 = cc.repeatForever(q1Sequence4);
        cg4.runAction(q1RepeatAction4);
        //布置气球5
        var cg5 = new cc.Sprite(res.Q4_png);
        cg5.scaleX=1.1;
        cg5.scaleY=1.1;
        cg5.x = size.width / 2+160 ;
        cg5.y = -500;
        cg5.opacity=255;
        this.addChild(cg5, 2);
        var q1Action17 = cc.moveTo(4.5,size.width/2+320 , size.height+100);
        var q1Action18=cc.fadeTo(0.1,0);
        var q1Action19 = cc.moveTo(0.1,size.width/2+160 ,-600);
        var q1Action20=cc.fadeTo(0.1,255);
        var q1Sequence5=cc.sequence(q1Action17,q1Action18,q1Action19,q1Action20);
        var q1RepeatAction5 = cc.repeatForever(q1Sequence5);
        cg5.runAction(q1RepeatAction5);
        //布置气球6
        var cg6 = new cc.Sprite(res.Q1_png);
        cg6.scaleX=0.9;
        cg6.scaleY=0.9;
        cg6.x = size.width / 2-140 ;
        cg6.y = -500;
        cg6.opacity=255;
        this.addChild(cg6, 2);
        var q1Action21 = cc.moveTo(5.2,size.width/2+260 , size.height+100);
        var q1Action22=cc.fadeTo(0.1,0);
        var q1Action23 = cc.moveTo(0.1,size.width/2+160 ,-350);
        var q1Action24=cc.fadeTo(0.1,255);
        var q1Sequence6=cc.sequence(q1Action21,q1Action22,q1Action23,q1Action24);
        var q1RepeatAction6 = cc.repeatForever(q1Sequence6);
        cg6.runAction(q1RepeatAction6);




        //----------底部button
        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.sellStep, this);
        menuImage.scaleX=0.8;
        menuImage.scaleY=0.8;
        var menu = new cc.Menu(menuImage);
        menu.x = size.width -size.width/8;
        menu.y = size.height/6;
        this.addChild(menu,4);

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX=0.2;
        menuImage1.scaleY=0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width -size.width/12;
        menu1.y = size.height*5/6;
        this.addChild(menu1,4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);


        return true;
    },



    sellStep: function () {
        trace("Sell  clicked");
        cc.director.runScene(new CountScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});
//---------------------销售游戏场景1结束----------------------


//---------------------销售游戏场景2开始----------------------
var SellLayer2 = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //欢呼
        cc.audioEngine.playEffect(res.Huanhu_mp3,false);
        //背景
        var bg=new cc.Sprite(res.BackgroundRed_png);
        bg.scaleX=0.719640179910045;
        bg.scaleY=0.8533333333333333;
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg,1);

        //底部人群图片
        var bdPeople = new cc.Sprite(res.MEPeople_png);
        bdPeople.scaleX=0.719640179910045;
        bdPeople.scaleY=0.8533333333333333;
        bdPeople.x = size.width / 2;
        bdPeople.y = size.height / 2;
        this.addChild(bdPeople, 3);

        //中心蛋糕图片
        var cake = new cc.Sprite(res.CakeFruit1_png);
        cake.scaleX=0.719640179910045*0.75;
        cake.scaleY=0.8533333333333333*0.75;
        cake.x = size.width / 2;
        cake.y = size.height / 2;
        this.addChild(cake, 3);

        //中心蛋糕座位置
        var cakeZ = new cc.Sprite(res.CakeZ_png);
        cakeZ.scaleX=0.719640179910045*0.75;
        cakeZ.scaleY=0.8533333333333333*0.75;
        cakeZ.x = size.width / 2;
        cakeZ.y = size.height / 2-173;
        this.addChild(cakeZ, 2);

        //男孩图片
        var cb1 = new cc.Sprite(res.CardBoy1_png);
        cb1.scaleX=0.65;
        cb1.scaleY=0.65;
        cb1.x = size.width / 2-160 ;
        cb1.y = size.height / 2+10;
        this.addChild(cb1, 5);
        //男孩repeat动作
        var stateAction0= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction0.addSpriteFrameWithFile("res/SM"+i+".png");
        }
        stateAction0.setDelayPerUnit(1/2);
        var action0=cc.animate(stateAction0);
        action0.repeatForever();
        cb1.runAction(action0);


        //女孩图片
        var cg1 = new cc.Sprite(res.CardGirl1_png);
        cg1.scaleX=0.7;
        cg1.scaleY=0.7;
        cg1.x = size.width / 2+180 ;
        cg1.y = size.height / 2;
        this.addChild(cg1, 5);
        //女孩repeat动作
        var stateAction1= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction1.addSpriteFrameWithFile("res/cg"+i+".png");
        }
        stateAction1.setDelayPerUnit(1/2);
        var action1=cc.animate(stateAction1);
        action1.repeatForever();
        cg1.runAction(action1);

        //云彩图片载入
        var cloud1 = new cc.Sprite(res.Cloud_png);
        cloud1.scaleX=0.7;
        cloud1.scaleY=0.7;
        cloud1.x = size.width / 2+380 ;
        cloud1.y = size.height / 2+50;
        this.addChild(cloud1, 2);

        var cloud2 = new cc.Sprite(res.Cloud_png);
        cloud2.scaleX=1;
        cloud2.scaleY=1;
        cloud2.opacity=150;
        cloud2.x = size.width / 2-170 ;
        cloud2.y = size.height / 2-30;
        this.addChild(cloud2, 2);

        var cloud3 = new cc.Sprite(res.Cloud_png);
        cloud3.scaleX=0.8;
        cloud3.scaleY=0.8;
        cloud3.x = size.width / 2-370 ;
        cloud3.y = size.height / 2+150;
        this.addChild(cloud3, 2);


        //云彩动作循环
        var cAction1 = cc.moveTo(2,size.width / 2+360 , size.height / 2+50);
        var cAction2 = cc.moveTo(2,size.width / 2+380 , size.height / 2+50);
        var cSequence1=cc.sequence(cAction1,cAction2);
        var cRepeatAction1 = cc.repeatForever(cSequence1);
        cloud1.runAction(cRepeatAction1);

        var cAction3 = cc.moveTo(2.6,size.width / 2-200 , size.height / 2-30);
        var cAction4 = cc.moveTo(2.6,size.width / 2-150 , size.height / 2-30 );
        var cSequence2=cc.sequence(cAction3,cAction4);
        var cRepeatAction2 = cc.repeatForever(cSequence2);
        cloud2.runAction(cRepeatAction2);

        var cAction5 = cc.moveTo(4,size.width / 2-300 , size.height / 2+150);
        var cAction6 = cc.moveTo(4,size.width / 2-370 , size.height / 2+150 );
        var cSequence3=cc.sequence(cAction5,cAction6);
        var cRepeatAction3 = cc.repeatForever(cSequence3);
        cloud3.runAction(cRepeatAction3);

        //买字1
        var buy1 = new cc.Sprite(res.Buy1_png);
        buy1.x = size.width / 2 +138;
        buy1.y = size.height/2-138;
        this.addChild(buy1, 6);
        var buyAction1=cc.blink(2.1,1);
        var buyRepeatAction1 = cc.repeatForever(buyAction1);
        buy1.runAction(buyRepeatAction1);

        //买字2
        var buy2 = new cc.Sprite(res.Buy2_png);
        buy2.scaleX=0.75;
        buy2.scaleY=0.75;
        buy2.x = size.width / 2 -280;
        buy2.y = size.height/2-110;
        this.addChild(buy2, 6);
        var buyAction2=cc.blink(1.6,1);
        var buyRepeatAction2 = cc.repeatForever(buyAction2);
        buy2.runAction(buyRepeatAction2);

        //淡入文字显示-先显示
        var desStr0 = "Good Job!";
        var desLabel0 = new cc.LabelBMFont(desStr0,res.kaixin_chaozhao1_fnt,  500, cc.TEXT_ALIGNMENT_LEFT);
        desLabel0.scaleX=1.5;
        desLabel0.scaleY=1.5;
        desLabel0.x = size.width / 2+10;
        desLabel0.y = size.height / 2 + 150;
        desLabel0.opacity=0;
        var textAction0=cc.fadeTo(1,255);
        desLabel0.runAction(textAction0);
        this.addChild(desLabel0, 5);


        //结局文字显示-后显示
        var desStr = "蛋糕口味独特，制作用心，价格亲民，受到欢迎，\n";
        desStr += "达到预计销量。销售人员推广顺利，顾客表示满意！";
        var desLabel1 = new cc.LabelBMFont(desStr,res.kaixin_chaozhao1_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        desLabel1.scaleX=1.1;
        desLabel1.scaleY=1.1;
        desLabel1.x = size.width / 2;
        desLabel1.y = size.height / 2 + 240;
        desLabel1.opacity=0;
        var textAction=cc.fadeTo(4,255);
        desLabel1.runAction(textAction);
        this.addChild(desLabel1, 5);



        //----------底部button
        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.sellStep, this);
        menuImage.scaleX=0.8;
        menuImage.scaleY=0.8;
        var menu = new cc.Menu(menuImage);
        menu.x = size.width -size.width/8;
        menu.y = size.height/6;
        this.addChild(menu,4);

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX=0.2;
        menuImage1.scaleY=0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width -size.width/12;
        menu1.y = size.height*5/6;
        this.addChild(menu1,4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        return true;
    },

    sellStep: function () {
        trace("Sell  clicked");
        cc.director.runScene(new CountScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});
//---------------------销售游戏场景2结束----------------------


//---------------------销售游戏场景3开始----------------------
var SellLayer3 = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //乌鸦
        cc.audioEngine.playEffect(res.Wuya_mp3,false);
        //背景
        var bg=new cc.Sprite(res.BackgroundRed_png);
        bg.scaleX=0.719640179910045;
        bg.scaleY=0.8533333333333333;
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg,1);

        //底部人群图片
        var bdPeople = new cc.Sprite(res.BEPeople_png);
        bdPeople.scaleX=0.719640179910045;
        bdPeople.scaleY=0.8533333333333333;
        bdPeople.x = size.width / 2;
        bdPeople.y = size.height / 2;
        this.addChild(bdPeople, 3);

        //中心蛋糕图片
        var cake = new cc.Sprite(res.CakeSugar_png);
        cake.scaleX=0.719640179910045;
        cake.scaleY=0.8533333333333333;
        cake.x = size.width / 2;
        cake.y = size.height / 2;
        this.addChild(cake, 3);
        //中心蛋糕座位置
        var cakeZ = new cc.Sprite(res.CakeZ_png);
        cakeZ.scaleX=0.719640179910045;
        cakeZ.scaleY=0.8533333333333333;
        cakeZ.x = size.width / 2;
        cakeZ.y = size.height / 2-219;
        this.addChild(cakeZ, 2);

        //男孩图片
        var cb1 = new cc.Sprite(res.CardBoy1_png);
        cb1.scaleX=0.65;
        cb1.scaleY=0.65;
        cb1.x = size.width / 2-150 ;
        cb1.y = size.height / 2+10;
        this.addChild(cb1, 5);
        //男孩repeat动作
        var stateAction0= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction0.addSpriteFrameWithFile("res/SM"+i+".png");
        }
        stateAction0.setDelayPerUnit(1/2);
        var action0=cc.animate(stateAction0);
        action0.repeatForever();
        cb1.runAction(action0);
        //不买字
        var buy1 = new cc.Sprite(res.Buy3_png);
        buy1.scaleX=0.7;
        buy1.scaleY=0.7;
        buy1.x = size.width / 2 -130;
        buy1.y = size.height/2-130;
        this.addChild(buy1, 6);
        var buyAction1=cc.blink(1.4,1);
        var buyRepeatAction1 = cc.repeatForever(buyAction1);
        buy1.runAction(buyRepeatAction1);
        //买字
        var buy2 = new cc.Sprite(res.Buy1_png);
        buy2.scaleX=0.9;
        buy2.scaleY=0.9;
        buy2.x = size.width / 2 +160;
        buy2.y = size.height/2-130;
        this.addChild(buy2, 6);
        var buyAction2=cc.blink(1.6,1);
        var buyRepeatAction2 = cc.repeatForever(buyAction2);
        buy2.runAction(buyRepeatAction2);


        //鸟图片
        var bird1 = new cc.Sprite(res.Bird1_png);
        bird1.scaleX=0.8;
        bird1.scaleY=0.8;
        bird1.x = size.width+100 ;
        bird1.y = size.height / 2-90;
        this.addChild(bird1, 2);

        var bird2 = new cc.Sprite(res.Bird1_png);
        bird2.scaleX=0.8;
        bird2.scaleY=0.8;
        bird2.x = size.width+200 ;
        bird2.y = size.height / 2-30;
        this.addChild(bird2, 2);

        var bird3 = new cc.Sprite(res.Bird1_png);
        bird3.scaleX=0.8;
        bird3.scaleY=0.8;
        bird3.x = size.width+150 ;
        bird3.y = size.height / 2+70;
        this.addChild(bird3, 2);
        //鸟动作
        var stateAction1= new cc.Animation();
        for(var i=1;i<4;i++){
            stateAction1.addSpriteFrameWithFile("res/N"+i+".png");
        }
        stateAction1.setDelayPerUnit(1/9);
        var action1=cc.animate(stateAction1);
        action1.repeatForever();
        bird1.runAction(action1);
        var b1Action1 = cc.moveTo(4.1,-200 , size.height/2-90);
        var b1Action2=cc.fadeTo(0.1,0);
        var b1Action3 = cc.moveTo(0.1,size.width +200 , size.height/2-90);
        var b1Action4=cc.fadeTo(0.1,255);
        var b1Sequence1=cc.sequence(b1Action1,b1Action2,b1Action3,b1Action4);
        var b1RepeatAction1 = cc.repeatForever(b1Sequence1);
        bird1.runAction(b1RepeatAction1);

        var stateAction2= new cc.Animation();
        for(var i=1;i<4;i++){
            stateAction2.addSpriteFrameWithFile("res/N"+i+".png");
        }
        stateAction2.setDelayPerUnit(1/9);
        var action2=cc.animate(stateAction2);
        action2.repeatForever();
        bird2.runAction(action2);
        var b1Action5 = cc.moveTo(5,-100 , size.height/2-30);
        var b1Action6=cc.fadeTo(0.1,0);
        var b1Action7 = cc.moveTo(0.1,size.width +100 , size.height/2-30);
        var b1Action8=cc.fadeTo(0.1,255);
        var b1Sequence2=cc.sequence(b1Action5,b1Action6,b1Action7,b1Action8);
        var b1RepeatAction2 = cc.repeatForever(b1Sequence2);
        bird2.runAction(b1RepeatAction2);

        var stateAction3= new cc.Animation();
        for(var i=1;i<4;i++){
            stateAction3.addSpriteFrameWithFile("res/N"+i+".png");
        }
        stateAction3.setDelayPerUnit(1/9);
        var action3=cc.animate(stateAction3);
        action3.repeatForever();
        bird3.runAction(action3);
        var b1Action9 = cc.moveTo(3.5,-150 , size.height/2+70);
        var b1Action10=cc.fadeTo(0.1,0);
        var b1Action11 = cc.moveTo(0.1,size.width +150 , size.height/2+70);
        var b1Action12=cc.fadeTo(0.1,255);
        var b1Sequence3=cc.sequence(b1Action9,b1Action10,b1Action11,b1Action12);
        var b1RepeatAction3 = cc.repeatForever(b1Sequence3);
        bird3.runAction(b1RepeatAction3);


        //淡入文字显示-先显示
        var desStr0 = "还需努力！";
        var desLabel0 = new cc.LabelBMFont(desStr0,res.kaixin_chaozhao1_fnt,  500, cc.TEXT_ALIGNMENT_LEFT);
        desLabel0.scaleX=1.5;
        desLabel0.scaleY=1.5;
        desLabel0.x = size.width / 2+10;
        desLabel0.y = size.height / 2 + 150;
        desLabel0.opacity=0;
        var textAction0=cc.fadeTo(1,255);
        desLabel0.runAction(textAction0);
        this.addChild(desLabel0, 5);


        //结局文字显示-后显示
        var desStr = "蛋糕质量欠佳，部分顾客取消了订单。总体订单数\n";
        desStr += "有轻微浮动。有顾客反馈不会再购买类似蛋糕...";
        var desLabel1 = new cc.LabelBMFont(desStr,res.kaixin_chaozhao1_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        desLabel1.scaleX=1.1;
        desLabel1.scaleY=1.1;
        desLabel1.x = size.width / 2;
        desLabel1.y = size.height / 2 + 240;
        desLabel1.opacity=0;
        var textAction=cc.fadeTo(4,255);
        desLabel1.runAction(textAction);
        this.addChild(desLabel1, 5);



        //----------底部button
        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.sellStep, this);
        menuImage.scaleX=0.8;
        menuImage.scaleY=0.8;
        var menu = new cc.Menu(menuImage);
        menu.x = size.width -size.width/8;
        menu.y = size.height/6;
        this.addChild(menu,4);

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX=0.2;
        menuImage1.scaleY=0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width -size.width/12;
        menu1.y = size.height*5/6;
        this.addChild(menu1,4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        return true;
    },

    sellStep: function () {
        trace("Sell  clicked");
        cc.director.runScene(new CountScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});
//---------------------销售游戏场景3结束----------------------


//---------------------统计页面开始----------------------
var CountScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new CountLayer();
        this.addChild(layer);
    }
});

var CountLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;

        //红色背景
        var bg1=new cc.Sprite(res.BackgroundRed_png);
        bg1.scaleX=0.719640179910045;
        bg1.scaleY=0.8533333333333333;
        bg1.x = size.width / 2;
        bg1.y = size.height / 2;
        this.addChild(bg1,1);



        //签购单-白色背景
        var bf=new cc.Sprite(res.BlankFinal_png);
        bf.scaleX=0.3598200899550225;
        bf.scaleY=0.4266666666666667;
        bf.x = size.width / 2;
        bf.y = 320;
        this.addChild(bf,2);


        var titleLabel0 = new cc.LabelBMFont("统计账单",res.kaixin_bigger_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        titleLabel0.scaleX=0.6;
        titleLabel0.scaleY=0.6;
        titleLabel0.x = size.width / 2 ;
        titleLabel0.y = size.height / 2 + 230;
        titleLabel0.opacity=0;
        var textAction=cc.fadeTo(2,255);
        titleLabel0.runAction(textAction);
        this.addChild(titleLabel0, 5);


        //------------结果统计
        var finalTxt="";
        if(state==1){
            finalTxt+= "优秀的蛋糕经理！";
        }
        else if(state==2){
            finalTxt+= "称职的蛋糕经理！";
        }
        else if(state==3){
            finalTxt+= "糟糕的蛋糕经理！";
        }
        var titleLabel = new cc.LabelBMFont(finalTxt,res.kaixin_chaozhao1_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        titleLabel.scaleX=1.2;
        titleLabel.scaleY=1.2;
        titleLabel.x = size.width / 2 +10;
        titleLabel.y = size.height / 2 + 130;
        titleLabel.color=cc.color(255,0,92);
        titleLabel.opacity=0;
        var textAction0=cc.fadeTo(2,255);
        titleLabel.runAction(textAction0);
        this.addChild(titleLabel, 5);

        //-------------单个利润
        var desStr1 = "单个利润：";
        var desLabel1 = new cc.LabelBMFont(desStr1,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel1.scaleX=0.9;
        desLabel1.scaleY=0.9;
        desLabel1.x = size.width / 2-60;
        desLabel1.y = size.height / 2+75;
        desLabel1.color=cc.color(255,0,92);
        desLabel1.opacity=0;
        var textAction1=cc.fadeTo(2.5,255);
        desLabel1.runAction(textAction1);
        this.addChild(desLabel1, 5);

        var desLabel2 = new cc.LabelBMFont(cakeProfit,res.kaixin_nandl_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel2.scaleX=0.9;
        desLabel2.scaleY=0.9;
        desLabel2.x = size.width / 2+30;
        desLabel2.y = size.height / 2+75;
        desLabel2.color=cc.color(255,0,92);
        desLabel2.opacity=0;
        var textAction2=cc.fadeTo(2.5,255);
        desLabel2.runAction(textAction2);
        this.addChild(desLabel2, 5);

        var desStr3 = "元";
        var desLabel3 = new cc.LabelBMFont(desStr3,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel3.scaleX=0.9;
        desLabel3.scaleY=0.9;
        desLabel3.x = size.width / 2+90;
        desLabel3.y = size.height / 2+75;
        desLabel3.color=cc.color(255,0,92);
        desLabel3.opacity=0;
        var textAction3=cc.fadeTo(2.5,255);
        desLabel3.runAction(textAction3);
        this.addChild(desLabel3, 5);

        //-------------销售数量
        var desStr4 = "销售数量：";
        var desLabel4 = new cc.LabelBMFont(desStr4,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel4.scaleX=0.9;
        desLabel4.scaleY=0.9;
        desLabel4.x = size.width / 2-60;
        desLabel4.y = size.height / 2+35 ;
        desLabel4.color=cc.color(255,0,92);
        desLabel4.opacity=0;
        var textAction4=cc.fadeTo(2.5,255);
        desLabel4.runAction(textAction4);
        this.addChild(desLabel4, 5);

        var desLabel5 = new cc.LabelBMFont(cakeNum,res.kaixin_nandl_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel2.scaleX=0.9;
        desLabel2.scaleY=0.9;
        desLabel5.x = size.width / 2+30;
        desLabel5.y = size.height / 2+35 ;
        desLabel5.color=cc.color(255,0,92);
        desLabel5.opacity=0;
        var textAction5=cc.fadeTo(2.5,255);
        desLabel5.runAction(textAction5);
        this.addChild(desLabel5, 5);

        var desStr6 = "个";
        var desLabel6 = new cc.LabelBMFont(desStr6,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel6.scaleX=0.9;
        desLabel6.scaleY=0.9;
        desLabel6.x = size.width / 2+90;
        desLabel6.y = size.height / 2+35 ;
        desLabel6.color=cc.color(255,0,92);
        desLabel6.opacity=0;
        var textAction6=cc.fadeTo(2.5,255);
        desLabel6.runAction(textAction6);
        this.addChild(desLabel6, 5);

        //-------------总利润
        var desStr7 = "总利润：";
        var desLabel7 = new cc.LabelBMFont(desStr7,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel7.scaleX=0.9;
        desLabel7.scaleY=0.9;
        desLabel7.x = size.width / 2-60;
        desLabel7.y = size.height / 2-5 ;
        desLabel7.color=cc.color(255,0,92);
        desLabel7.opacity=0;
        var textAction7=cc.fadeTo(2.5,255);
        desLabel7.runAction(textAction7);
        this.addChild(desLabel7, 5);

        var desLabel8 = new cc.LabelBMFont(cakeNum*cakeProfit,res.kaixin_nandl_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel8.scaleX=0.9;
        desLabel8.scaleY=0.9;
        desLabel8.x = size.width / 2+30;
        desLabel8.y = size.height / 2-5 ;
        desLabel8.color=cc.color(255,0,92);
        desLabel8.opacity=0;
        var textAction8=cc.fadeTo(2.5,255);
        desLabel8.runAction(textAction8);
        this.addChild(desLabel8, 5);

        var desStr9 = "元";
        var desLabel9 = new cc.LabelBMFont(desStr9,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel9.scaleX=0.9;
        desLabel9.scaleY=0.9;
        desLabel9.x = size.width / 2+90;
        desLabel9.y = size.height / 2-5 ;
        desLabel9.color=cc.color(255,0,92);
        desLabel9.opacity=0;
        var textAction9=cc.fadeTo(2.5,255);
        desLabel9.runAction(textAction9);
        this.addChild(desLabel9, 5);

        //-------------制作周期
        var desStr10 = "制作周期：";
        var desLabel10 = new cc.LabelBMFont(desStr10,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel10.scaleX=0.9;
        desLabel10.scaleY=0.9;
        desLabel10.x = size.width / 2-60;
        desLabel10.y = size.height / 2-45 ;
        desLabel10.color=cc.color(255,0,92);
        desLabel10.opacity=0;
        var textAction10=cc.fadeTo(2.5,255);
        desLabel10.runAction(textAction10);
        this.addChild(desLabel10, 5);

        var desLabel11 = new cc.LabelBMFont(cakeTime,res.kaixin_nandl_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel11.scaleX=0.9;
        desLabel11.scaleY=0.9;
        desLabel11.x = size.width / 2+30;
        desLabel11.y = size.height / 2-45 ;
        desLabel11.color=cc.color(255,0,92);
        desLabel11.opacity=0;
        var textAction11=cc.fadeTo(2.5,255);
        desLabel11.runAction(textAction11);
        this.addChild(desLabel11, 5);

        var desStr12 = "天";
        var desLabel12 = new cc.LabelBMFont(desStr12,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel12.scaleX=0.9;
        desLabel12.scaleY=0.9;
        desLabel12.x = size.width / 2+90;
        desLabel12.y = size.height / 2-45 ;
        desLabel12.color=cc.color(255,0,92);
        desLabel12.opacity=0;
        var textAction12=cc.fadeTo(2.5,255);
        desLabel12.runAction(textAction12);
        this.addChild(desLabel12, 5);

        //-------------员工数量
        var desStr13 = "员工数量：";
        var desLabel13 = new cc.LabelBMFont(desStr13,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel13.scaleX=0.9;
        desLabel13.scaleY=0.9;
        desLabel13.x = size.width / 2-60;
        desLabel13.y = size.height / 2-85 ;
        desLabel13.color=cc.color(255,0,92);
        desLabel13.opacity=0;
        var textAction13=cc.fadeTo(2.5,255);
        desLabel13.runAction(textAction13);
        this.addChild(desLabel13, 5);

        var desLabel14 = new  cc.LabelBMFont(totalEmployee,res.kaixin_nandl_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel14.scaleX=0.9;
        desLabel14.scaleY=0.9;
        desLabel14.x = size.width / 2+30;
        desLabel14.y = size.height / 2-85 ;
        desLabel14.color=cc.color(255,0,92);
        desLabel14.opacity=0;
        var textAction14=cc.fadeTo(2.5,255);
        desLabel14.runAction(textAction14);
        this.addChild(desLabel14, 5);

        var desStr15 = "人";
        var desLabel15 =  new cc.LabelBMFont(desStr15,res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        desLabel15.scaleX=0.9;
        desLabel15.scaleY=0.9;
        desLabel15.x = size.width / 2+90;
        desLabel15.y = size.height / 2-85 ;
        desLabel15.color=cc.color(255,0,92);
        desLabel15.opacity=0;
        var textAction15=cc.fadeTo(2.5,255);
        desLabel15.runAction(textAction15);
        this.addChild(desLabel15, 5);


        //左右两个小人
        var man = new cc.Sprite(res.BoyDance_png);
        man.scaleX=0.8;
        man.scaleY=0.8;
        man.x =  size.width/2-350;
        man.y = size.height / 2-50;
        this.addChild(man, 5);

        var woman = new cc.Sprite(res.GirlDance_png);
        woman.scaleX=0.8;
        woman.scaleY=0.8;
        woman.x = size.width/2+350;
        woman.y = size.height / 2-50;
        this.addChild(woman, 5);

        var action1=cc.moveTo(1.5,cc.p(size.width / 2 +250,size.height / 2 -50))
        woman.runAction(action1);

        var action2=cc.moveTo(1.5,cc.p(size.width / 2 -250,size.height / 2 -50))
        man.runAction(action2);

        //蛋糕浮现
        //cake1-水果蛋糕
        var cake1 = new cc.Sprite(res.CakeFruit_png);
        cake1.scaleX=0.4;
        cake1.scaleY=0.4;
        cake1.x = size.width/2;
        cake1.y = size.height / 2 -170;
        //cake2-翻糖蛋糕
        var cake2 = new cc.Sprite(res.CakeSugar_png);
        cake2.scaleX=0.4;
        cake2.scaleY=0.4;
        cake2.x = size.width/2;
        cake2.y = size.height / 2 -170;
        //cake3-水果蛋糕2
        var cake3 = new cc.Sprite(res.CakeFruit1_png);
        cake3.scaleX=0.4;
        cake3.scaleY=0.4;
        cake3.x = size.width/2;
        cake3.y = size.height / 2 -170;

        cake1.opacity=0;
        cake2.opacity=0;
        cake3.opacity=0;
        var action5 =cc.fadeIn(2.5);
        //中央蛋糕浮现判断
        if(state==3){
            this.addChild(cake2, 5);
            cake2.runAction(action5);
        }else  if(state==2){
            this.addChild(cake3, 5);
            cake3.runAction(action5);
        }
        else{
            this.addChild(cake1, 5);
            cake1.runAction(action5);
        }


        //----------底部button
        var menuImage = new cc.MenuItemImage(res.DeskWhileLittle_png, res.DeskWhileLittle_png, res.DeskWhileLittle_png, this.finalStep, this);
        menuImage.scaleX=0.8;
        menuImage.scaleY=0.8;
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2;
        menu.y = 40;
        this.addChild(menu,4);
        var menuLabel1 = new cc.LabelBMFont("更多精彩",res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        menuLabel1.scaleX=1;
        menuLabel1.scaleY=1;
        menuLabel1.color=cc.color(255,0,92);
        menuLabel1.x = size.width / 2;
        menuLabel1.y = 40;
        this.addChild(menuLabel1, 5);

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX=0.2;
        menuImage1.scaleY=0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width -size.width/12;
        menu1.y = size.height*5/6;
        this.addChild(menu1,4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        return true;
    },
    finalStep: function () {
        trace("Count  clicked");
        cc.director.runScene(new FinalScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }

});
//---------------------统计页面结束----------------------


//---------------------更多精彩页面开始----------------------
var FinalLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //背景
        var bg=new cc.Sprite(res.BackgroundRed_png);
        bg.scaleX=0.719640179910045;
        bg.scaleY=0.8533333333333333;
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg,1);

        //淡入文字显示
        var desStr1 = "更多精彩，敬请期待~";
        var desLabel1 =  new cc.LabelBMFont(desStr1,res.kaixin_bigger_fnt,  1000, cc.TEXT_ALIGNMENT_CENTER);
        desLabel1.scaleX=0.6;
        desLabel1.scaleY=0.6;
        desLabel1.x = size.width / 2;
        desLabel1.y = size.height / 2 + 130;
        desLabel1.color=cc.color(255,255,255);
        desLabel1.opacity=0;
        var textAction=cc.fadeTo(3,255);
        desLabel1.runAction(textAction);
        this.addChild(desLabel1, 5);


        //底部小狮子-定位
        var lion1 = new cc.Sprite(res.Shizi0_png);
        lion1.scaleX=0.6;
        lion1.scaleY=0.6;
        lion1.x = size.width / 2 -75;
        lion1.y = size.height / 2-60;
        this.addChild(lion1, 5);

        var lion2 = new cc.Sprite(res.Shizi1_png);
        lion2.scaleX=0.6;
        lion2.scaleY=0.6;
        lion2.x = size.width / 2+75 ;
        lion2.y = size.height / 2-60;
        this.addChild(lion2, 5);

        var lion3 = new cc.Sprite(res.Shizi1_png);
        lion3.scaleX=0.6;
        lion3.scaleY=0.6;
        lion3.x = size.width / 2-225 ;
        lion3.y = size.height / 2-60;
        this.addChild(lion3, 5);

        var lion4 = new cc.Sprite(res.Shizi0_png);
        lion4.scaleX=0.6;
        lion4.scaleY=0.6;
        lion4.x = size.width / 2+225 ;
        lion4.y = size.height / 2-60;
        this.addChild(lion4, 5);

        var lion5 = new cc.Sprite(res.Shizi0_png);
        lion5.scaleX=0.6;
        lion5.scaleY=0.6;
        lion5.x = size.width / 2-375 ;
        lion5.y = size.height / 2-60;
        this.addChild(lion5, 5);

        var lion6 = new cc.Sprite(res.Shizi1_png);
        lion6.scaleX=0.6;
        lion6.scaleY=0.6;
        lion6.x = size.width / 2+375 ;
        lion6.y = size.height / 2-60;
        this.addChild(lion6, 5);
        //底部小狮子动作
        var stateAction1= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction1.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction1.setDelayPerUnit(1/2);
        var action1=cc.animate(stateAction1);
        action1.repeatForever();
        lion1.runAction(action1);

        var stateAction2= new cc.Animation();
        for(var i=0;i<2;i++){
            stateAction2.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction2.setDelayPerUnit(1/2);
        var action2=cc.animate(stateAction2);
        action2.repeatForever();
        lion2.runAction(action2);

        var stateAction3= new cc.Animation();
        for(var i=0;i<2;i++){
            stateAction3.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction3.setDelayPerUnit(1/2);
        var action3=cc.animate(stateAction3);
        action3.repeatForever();
        lion3.runAction(action3);

        var stateAction4= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction4.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction4.setDelayPerUnit(1/2);
        var action4=cc.animate(stateAction4);
        action4.repeatForever();
        lion4.runAction(action4);

        var stateAction5= new cc.Animation();
        for(var i=1;i<3;i++){
            stateAction5.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction5.setDelayPerUnit(1/2);
        var action5=cc.animate(stateAction5);
        action5.repeatForever();
        lion5.runAction(action5);

        var stateAction6= new cc.Animation();
        for(var i=0;i<2;i++){
            stateAction6.addSpriteFrameWithFile("res/LS"+i+".png");
        }
        stateAction6.setDelayPerUnit(1/2);
        var action6=cc.animate(stateAction6);
        action6.repeatForever();
        lion6.runAction(action6);
        //底部按钮的文字及图片
        var menuImage = new cc.MenuItemImage(res.DeskWhileLittle_png, res.DeskWhileLittle_png, res.DeskWhileLittle_png, this.startStep, this);
        menuImage.scaleX=1.2;
        menuImage.scaleY=1.2;
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2;
        menu.y = 60;
        this.addChild(menu,2);
        var menuLabel1 = new cc.LabelBMFont("重新开始",res.kaixin_chaozhao2_fnt,  200, cc.TEXT_ALIGNMENT_CENTER);
        menuLabel1.scaleX=1.5;
        menuLabel1.scaleY=1.5;
        menuLabel1.color=cc.color(255,0,92);
        menuLabel1.x = size.width / 2;
        menuLabel1.y = 60;
        this.addChild(menuLabel1, 5);

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX=0.2;
        menuImage1.scaleY=0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width -size.width/12;
        menu1.y = size.height*5/6;
        this.addChild(menu1,4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        return true;
    },

    startStep: function () {
        trace("Final  clicked");
        //变量恢复
        state = 1;
        scenceRoute = 1;
        totalTime = 10;
        totalEmployee = 20;
        randomEventOne = false;
        randomEventTwo = false;
        randomEventThree = false;
        silence=false;
        cakeNum = 100;
        cakeProfit=100;
        empNum=12;
        cakeTime=10;
        lastDglr = cakeProfit;
        lastDgSl = cakeNum;
        lastEmply = totalEmployee;
        hasShowZhifugou=false;
        //跳回初始页面
        cc.director.runScene(new StartScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});

var FinalScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new FinalLayer();
        this.addChild(layer);
    }
});
//---------------------更多精彩页面结束----------------------


//---------------------声音统一管理开始----------------------

//shutBGM-调节BGM
var shutBGM = function () {
    if(!silence){
        trace("BGMShut  clicked");
        cc.audioEngine.pauseMusic();
        silence=true;
    }
    else{
        trace("BGMOn  clicked");
        cc.audioEngine.resumeMusic();
        silence=false;
    }
}
//---------------------声音统一管理结束----------------------