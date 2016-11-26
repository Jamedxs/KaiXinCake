/**
 * Created by dengxusheng on 16/11/24.
 */



var specEventOneStr = "隔壁东北菜馆的生意火爆,店主李大壮建议\n你蹭一波热度,尝试'创新'制作小鸡炖蘑菇\n蛋糕!是否接受建议？\n";
var specEventTwoStr = "隔壁蛋糕店生意红火,你也想尝试自家\n不擅长的中式点心,店内烘培师建议先完成\n新品蛋糕再考虑点心制作!是否接受建议？ \n ";
var specEventThreeStr = "蛋糕制作难度大,烘培师建议尝试\n改变策略,制作招牌水果蛋糕!\n是否接受建议？";
var specEventFourStr = "近期店铺客源不断,收入喜人,\n老板决定给员工发放圣诞礼物。 \n ";
var specEventFiveStr = "隔壁老王蛋糕店近期业务繁忙,\n经总店安排批准将从你店内抽调三名员工。 \n ";
var specEventSixStr = "蛋糕基本制作完毕,你提议学习\n隔壁的卤肉饭便当，在每个蛋糕\n内加一颗卤蛋。然而蛋糕制作时间有限,\n烘培师及质检员希望优先制作蛋糕。\n是否接受建议?";

var randomEventOneStr = "为迎接记者开放日,领导巡查,全员搞卫生一天\n";
var randomEventTwoStr = "新店开张,扩展业务需要,新招募员工5名\n";
var randomEventThreeStr = "你去杭州进行了走访,发现水果蛋蛋糕市场\n火爆,蛋糕数量增加。\n";


//随机事件发生至多发生两个
var randomEventNum = 2;

//---------------------开发员工场景One开始------------

//---------------------开发场景One开始------------
var DevelopmentOneLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        var parentNode = this;

        var size = cc.winSize;

        var bg = new cc.Sprite(res.BackgroundBlue_png);

        this.addChild(bg,1);
        bg.x = size.width / 2;
        bg.y = size.height / 2;

        bg.scaleX = 0.8;
        bg.scaleY = 0.9;

        //音乐图标
        musicImage(bg,size);
        //任务头像显示
        headShow(bg,size,role);


        var man = new cc.Sprite(res.Boy_png);
        var desktop = new cc.Sprite(res.DeskDark_png);
        var working1 = new cc.Sprite(res.EngineerUp1_png);
        var working2 = new cc.Sprite(res.Engineer_png1);
        var working3 = new cc.Sprite(res.EngineerUp1_png);
        var working4 = new cc.Sprite(res.Engineer_png1);

        var working5 = new cc.Sprite(res.Engineer_png3);
        var working6 = new cc.Sprite(res.EngineerDown1_png7);
        var working7 = new cc.Sprite(res.Engineer_png3);
        var working8 = new cc.Sprite(res.EngineerDown1_png7);

        var working9 = new cc.Sprite(res.Engineer_png1);
        var working10 = new cc.Sprite(res.Engineer_png1);
        var working11 = new cc.Sprite(res.Engineer_png1);
        var working12 = new cc.Sprite(res.Engineer_png1);
        var working13 = new cc.Sprite(res.Engineer_png1);

        var orange = new cc.Sprite(res.Orange_png);
        var pie = new cc.Sprite(res.Pie_png);
        var sugar = new cc.Sprite(res.Sugar_png);
        var biscuits = new cc.Sprite(res.Biscuits_png);
        var kiwi = new cc.Sprite(res.Kiwi_png);
        var watermelon = new cc.Sprite(res.Watermelon_png);
        var sugarYellow = new cc.Sprite(res.SugarYellow_png);
        var orange1 = new cc.Sprite(res.Orange_png);
        var iceCream1 = new cc.Sprite(res.IceCream1_png);
        var iceCream2 = new cc.Sprite(res.IceCream4_png);
        var iceCream3 = new cc.Sprite(res.IceCream1_png);

        var stand1 = new cc.Sprite(res.stand1_png);
        var stand2 = new cc.Sprite(res.stand1_png);
        var stand3 = new cc.Sprite(res.stand2_png);


        // var labelBoard = new cc.Sprite(res.LabelBoard_png);
        // var talkPig = new cc.Sprite(res.TalkPig_png);
        // var talkBoard = new cc.Sprite(res.TalkBoard_png);




        bg.addChild(desktop,1);
        bg.addChild(working1,2);
        bg.addChild(working2,3);
        bg.addChild(working3,4);
        bg.addChild(working4,5);
        bg.addChild(working5,6);
        bg.addChild(working6,7);
        bg.addChild(working7,8);
        bg.addChild(working8,9);
        bg.addChild(orange,10);
        bg.addChild(pie,11);
        bg.addChild(sugar,12);
        bg.addChild(biscuits,13);
        bg.addChild(kiwi,14);
        bg.addChild(watermelon,15);
        bg.addChild(sugarYellow,16);
        bg.addChild(orange1,17);
        bg.addChild(working9,18);
        bg.addChild(working10,19);
        bg.addChild(working11,20);
        bg.addChild(working12,21);
        bg.addChild(working13,22);
        bg.addChild(iceCream1,23);
        bg.addChild(iceCream2,24);
        bg.addChild(iceCream3,25);

        bg.addChild(stand1,50);
        bg.addChild(stand2,51);
        bg.addChild(stand3,52);



        //------sprite设置位置开始------


        desktop.x = size.width / 2 + 200;
        desktop.y = size.height / 2 + 50;

        working1.x = size.width / 2 - 40;
        working1.y = size.height / 2 - 150;

        working2.x = size.width / 2 + 110;
        working2.y = size.height / 2 - 160;

        working3.x = size.width / 2 + 260;
        working3.y = size.height / 2 - 150;

        working4.x = size.width / 2 + 410;
        working4.y = size.height / 2 - 160;

        working5.x = size.width / 2 - 40;
        working5.y = size.height / 2 + 260;

        working6.x = size.width / 2 + 110;
        working6.y = size.height / 2 + 250;

        working7.x = size.width / 2 + 260;
        working7.y = size.height / 2 + 260;

        working8.x = size.width / 2 + 410;
        working8.y = size.height / 2 + 250;

        working9.x = size.width / 2 - 275;
        working9.y = size.height / 2 + 50;
        working9.setRotation(90);

        working10.x = size.width / 2 + 625;
        working10.y = size.height / 2 + 170;
        working10.setRotation(-120);

        working11.x = size.width / 2 + 625;
        working11.y = size.height / 2 - 70;
        working11.setRotation(-60);

        stand1.x = size.width / 2 + 550;
        stand1.y = size.height / 2 + 320;
        stand1.setRotation(30);

        stand2.x = size.width / 2 + 550;
        stand2.y = size.height / 2 - 200;
        stand2.setRotation(120);

        stand3.x = size.width / 2 + 715;
        stand3.y = size.height / 2 + 50;
        stand3.setRotation(-90);

        //------sprite设置位置结束------

        //设置计时面板
        addStatisticsBoard2(parentNode, 100, size.height - 140);


        //------animation声明开始------

        //工作1
        var animation_work1 = new cc.Animation();
        animation_work1.addSpriteFrameWithFile(res.EngineerUp1_png);
        animation_work1.addSpriteFrameWithFile(res.EngineerUp2_png);

        animation_work1.setDelayPerUnit(9 / 10);
        var workAction1 = cc.animate(animation_work1).repeatForever();

        working1.runAction(workAction1);

        //工作2
        var animation_work2 = new cc.Animation();
        animation_work2.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work2.addSpriteFrameWithFile(res.Engineer_png2);

        animation_work2.setDelayPerUnit(9 / 10);
        var workAction2 = cc.animate(animation_work2).repeatForever();

        working2.runAction(workAction2);

        //工作3
        var animation_work3 = new cc.Animation();
        animation_work3.addSpriteFrameWithFile(res.EngineerUp1_png);
        animation_work3.addSpriteFrameWithFile(res.EngineerUp2_png);

        animation_work3.setDelayPerUnit(9 / 10);
        var workAction3 = cc.animate(animation_work3).repeatForever();

        working3.runAction(workAction3);

        //工作4
        var animation_work4 = new cc.Animation();
        animation_work4.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work4.addSpriteFrameWithFile(res.Engineer_png2);

        animation_work4.setDelayPerUnit(9 / 10);
        var workAction4 = cc.animate(animation_work4).repeatForever();

        working4.runAction(workAction4);

        //工作5
        var animation_work5 = new cc.Animation();
        animation_work5.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work5.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work5.setDelayPerUnit(9 / 10);
        var workAction5 = cc.animate(animation_work5).repeatForever();

        working5.runAction(workAction5);

        //工作6
        var animation_work6 = new cc.Animation();
        animation_work6.addSpriteFrameWithFile(res.EngineerDown1_png7);
        animation_work6.addSpriteFrameWithFile(res.EngineerDown1_png8);

        animation_work6.setDelayPerUnit(9 / 10);
        var workAction6 = cc.animate(animation_work6).repeatForever();

        working6.runAction(workAction6);

        //工作7
        var animation_work7 = new cc.Animation();
        animation_work7.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work7.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work7.setDelayPerUnit(9 / 10);
        var workAction7 = cc.animate(animation_work7).repeatForever();

        working7.runAction(workAction7);

        //工作8
        var animation_work8 = new cc.Animation();
        animation_work8.addSpriteFrameWithFile(res.EngineerDown1_png7);
        animation_work8.addSpriteFrameWithFile(res.EngineerDown1_png8);

        animation_work8.setDelayPerUnit(9 / 10);
        var workAction8 = cc.animate(animation_work8).repeatForever();

        working8.runAction(workAction8);


        //水果1
        var animation1 = new cc.Animation();
        animation1.addSpriteFrameWithFile(res.Orange_png);
        animation1.addSpriteFrameWithFile(res.IceCream4_png);
        animation1.addSpriteFrameWithFile(res.Pie_png);
        animation1.addSpriteFrameWithFile(res.Sugar_png);
        animation1.addSpriteFrameWithFile(res.IceCream1_png);
        animation1.addSpriteFrameWithFile(res.Biscuits_png);
        animation1.addSpriteFrameWithFile(res.Kiwi_png);
        animation1.addSpriteFrameWithFile(res.IceCream4_png);
        animation1.addSpriteFrameWithFile(res.Watermelon_png);
        animation1.addSpriteFrameWithFile(res.SugarYellow_png);
        animation1.addSpriteFrameWithFile(res.IceCream1_png);


        animation1.setDelayPerUnit(9 / 10);
        var lookoutAction1 = cc.animate(animation1).repeatForever();

        orange.runAction(lookoutAction1);

        //水果2
        var animation2 = new cc.Animation();
        animation2.addSpriteFrameWithFile(res.IceCream4_png);
        animation2.addSpriteFrameWithFile(res.Pie_png);
        animation2.addSpriteFrameWithFile(res.Sugar_png);
        animation2.addSpriteFrameWithFile(res.IceCream1_png);
        animation2.addSpriteFrameWithFile(res.Biscuits_png);
        animation2.addSpriteFrameWithFile(res.Kiwi_png);
        animation2.addSpriteFrameWithFile(res.IceCream4_png);
        animation2.addSpriteFrameWithFile(res.Watermelon_png);
        animation2.addSpriteFrameWithFile(res.SugarYellow_png);
        animation2.addSpriteFrameWithFile(res.IceCream1_png);
        animation2.addSpriteFrameWithFile(res.Orange_png);

        animation2.setDelayPerUnit(9 / 10);
        var lookoutAction2 = cc.animate(animation2).repeatForever();

        pie.runAction(lookoutAction2);

        //水果3
        var animation3 = new cc.Animation();
        animation3.addSpriteFrameWithFile(res.Pie_png);
        animation3.addSpriteFrameWithFile(res.Sugar_png);
        animation3.addSpriteFrameWithFile(res.IceCream1_png);
        animation3.addSpriteFrameWithFile(res.Biscuits_png);
        animation3.addSpriteFrameWithFile(res.Kiwi_png);
        animation3.addSpriteFrameWithFile(res.IceCream4_png);
        animation3.addSpriteFrameWithFile(res.Watermelon_png);
        animation3.addSpriteFrameWithFile(res.SugarYellow_png);
        animation3.addSpriteFrameWithFile(res.IceCream1_png);
        animation3.addSpriteFrameWithFile(res.Orange_png);
        animation3.addSpriteFrameWithFile(res.IceCream4_png);

        animation3.setDelayPerUnit(9 / 10);
        var lookoutAction3 = cc.animate(animation3).repeatForever();

        sugar.runAction(lookoutAction3);

        //水果4
        var animation4 = new cc.Animation();

        animation4.addSpriteFrameWithFile(res.Sugar_png);
        animation4.addSpriteFrameWithFile(res.IceCream1_png);
        animation4.addSpriteFrameWithFile(res.Biscuits_png);
        animation4.addSpriteFrameWithFile(res.Kiwi_png);
        animation4.addSpriteFrameWithFile(res.IceCream4_png);
        animation4.addSpriteFrameWithFile(res.Watermelon_png);
        animation4.addSpriteFrameWithFile(res.SugarYellow_png);
        animation4.addSpriteFrameWithFile(res.IceCream1_png);
        animation4.addSpriteFrameWithFile(res.Orange_png);
        animation4.addSpriteFrameWithFile(res.IceCream4_png);
        animation4.addSpriteFrameWithFile(res.Pie_png);

        animation4.setDelayPerUnit(9 / 10);
        var lookoutAction4 = cc.animate(animation4).repeatForever();

        biscuits.runAction(lookoutAction4);

        //水果5
        var animation5 = new cc.Animation();

        animation5.addSpriteFrameWithFile(res.IceCream1_png);
        animation5.addSpriteFrameWithFile(res.Biscuits_png);
        animation5.addSpriteFrameWithFile(res.Kiwi_png);
        animation5.addSpriteFrameWithFile(res.IceCream4_png);
        animation5.addSpriteFrameWithFile(res.Watermelon_png);
        animation5.addSpriteFrameWithFile(res.SugarYellow_png);
        animation5.addSpriteFrameWithFile(res.IceCream1_png);
        animation5.addSpriteFrameWithFile(res.Orange_png);
        animation5.addSpriteFrameWithFile(res.IceCream4_png);
        animation5.addSpriteFrameWithFile(res.Pie_png);
        animation5.addSpriteFrameWithFile(res.Sugar_png);

        animation5.setDelayPerUnit(9 / 10);
        var lookoutAction5 = cc.animate(animation5).repeatForever();

        iceCream3.runAction(lookoutAction5);

        //水果6
        var animation6 = new cc.Animation();
        animation6.addSpriteFrameWithFile(res.Biscuits_png);
        animation6.addSpriteFrameWithFile(res.Kiwi_png);
        animation6.addSpriteFrameWithFile(res.IceCream4_png);
        animation6.addSpriteFrameWithFile(res.Watermelon_png);
        animation6.addSpriteFrameWithFile(res.SugarYellow_png);
        animation6.addSpriteFrameWithFile(res.IceCream1_png);
        animation6.addSpriteFrameWithFile(res.Orange_png);
        animation6.addSpriteFrameWithFile(res.IceCream4_png);
        animation6.addSpriteFrameWithFile(res.Pie_png);
        animation6.addSpriteFrameWithFile(res.Sugar_png);
        animation6.addSpriteFrameWithFile(res.IceCream1_png);

        animation6.setDelayPerUnit(9 / 10);
        var lookoutAction6 = cc.animate(animation6).repeatForever();

        iceCream2.runAction(lookoutAction6);

        //水果7
        var animation7 = new cc.Animation();
        animation7.addSpriteFrameWithFile(res.Kiwi_png);
        animation7.addSpriteFrameWithFile(res.IceCream4_png);
        animation7.addSpriteFrameWithFile(res.Watermelon_png);
        animation7.addSpriteFrameWithFile(res.SugarYellow_png);
        animation7.addSpriteFrameWithFile(res.IceCream1_png);
        animation7.addSpriteFrameWithFile(res.Orange_png);
        animation7.addSpriteFrameWithFile(res.IceCream4_png);
        animation7.addSpriteFrameWithFile(res.Pie_png);
        animation7.addSpriteFrameWithFile(res.Sugar_png);
        animation7.addSpriteFrameWithFile(res.IceCream1_png);
        animation7.addSpriteFrameWithFile(res.Biscuits_png);

        animation7.setDelayPerUnit(9 / 10);
        var lookoutAction7 = cc.animate(animation7).repeatForever();

        orange1.runAction(lookoutAction7);

        //水果8
        var animation8 = new cc.Animation();
        animation8.addSpriteFrameWithFile(res.IceCream4_png);
        animation8.addSpriteFrameWithFile(res.Watermelon_png);
        animation8.addSpriteFrameWithFile(res.SugarYellow_png);
        animation8.addSpriteFrameWithFile(res.IceCream1_png);
        animation8.addSpriteFrameWithFile(res.Orange_png);
        animation8.addSpriteFrameWithFile(res.IceCream4_png);
        animation8.addSpriteFrameWithFile(res.Pie_png);
        animation8.addSpriteFrameWithFile(res.Sugar_png);
        animation8.addSpriteFrameWithFile(res.IceCream1_png);
        animation8.addSpriteFrameWithFile(res.Biscuits_png);
        animation8.addSpriteFrameWithFile(res.Kiwi_png);

        animation8.setDelayPerUnit(9 / 10);
        var lookoutAction8 = cc.animate(animation8).repeatForever();

        sugarYellow.runAction(lookoutAction8);

        //水果9
        var animation9 = new cc.Animation();
        animation9.addSpriteFrameWithFile(res.Watermelon_png);
        animation9.addSpriteFrameWithFile(res.SugarYellow_png);
        animation9.addSpriteFrameWithFile(res.IceCream1_png);
        animation9.addSpriteFrameWithFile(res.Orange_png);
        animation9.addSpriteFrameWithFile(res.IceCream4_png);
        animation9.addSpriteFrameWithFile(res.Pie_png);
        animation9.addSpriteFrameWithFile(res.Sugar_png);
        animation9.addSpriteFrameWithFile(res.IceCream1_png);
        animation9.addSpriteFrameWithFile(res.Biscuits_png);
        animation9.addSpriteFrameWithFile(res.Kiwi_png);
        animation9.addSpriteFrameWithFile(res.IceCream4_png);

        animation9.setDelayPerUnit(9 / 10);
        var lookoutAction9 = cc.animate(animation9).repeatForever();

        watermelon.runAction(lookoutAction9);

        //水果10
        var animation10 = new cc.Animation();

        animation10.addSpriteFrameWithFile(res.SugarYellow_png);
        animation10.addSpriteFrameWithFile(res.IceCream1_png);
        animation10.addSpriteFrameWithFile(res.Orange_png);
        animation10.addSpriteFrameWithFile(res.IceCream4_png);
        animation10.addSpriteFrameWithFile(res.Pie_png);
        animation10.addSpriteFrameWithFile(res.Sugar_png);
        animation10.addSpriteFrameWithFile(res.IceCream1_png);
        animation10.addSpriteFrameWithFile(res.Biscuits_png);
        animation10.addSpriteFrameWithFile(res.Kiwi_png);
        animation10.addSpriteFrameWithFile(res.IceCream4_png);
        animation10.addSpriteFrameWithFile(res.Watermelon_png);

        animation10.setDelayPerUnit(9 / 10);
        var lookoutAction10 = cc.animate(animation10).repeatForever();

        kiwi.runAction(lookoutAction10);

        //水果11
        var animation11 = new cc.Animation();

        animation11.addSpriteFrameWithFile(res.IceCream1_png);
        animation11.addSpriteFrameWithFile(res.Orange_png);
        animation11.addSpriteFrameWithFile(res.IceCream4_png);
        animation11.addSpriteFrameWithFile(res.Pie_png);
        animation11.addSpriteFrameWithFile(res.Sugar_png);
        animation11.addSpriteFrameWithFile(res.IceCream1_png);
        animation11.addSpriteFrameWithFile(res.Biscuits_png);
        animation11.addSpriteFrameWithFile(res.Kiwi_png);
        animation11.addSpriteFrameWithFile(res.IceCream4_png);
        animation11.addSpriteFrameWithFile(res.Watermelon_png);
        animation11.addSpriteFrameWithFile(res.SugarYellow_png);

        animation11.setDelayPerUnit(9 / 10);
        var lookoutAction11 = cc.animate(animation11).repeatForever();

        iceCream1.runAction(lookoutAction11);

        //------animation声明结束------


        //------animation设置位置开始------
        orange.x = size.width / 2 - 40;
        orange.y = size.height / 2 - 80;

        pie.x = size.width / 2 + 110;
        pie.y = size.height / 2 - 80;

        sugar.x = size.width / 2 + 260;
        sugar.y = size.height / 2 - 80;

        biscuits.x = size.width / 2 + 410;
        biscuits.y = size.height / 2 - 80;

        kiwi.x = size.width / 2 - 40;
        kiwi.y = size.height / 2 + 180;

        watermelon.x = size.width / 2 + 110;
        watermelon.y = size.height / 2 + 180;

        sugarYellow.x = size.width / 2 + 260;
        sugarYellow.y = size.height / 2 + 180;

        orange1.x = size.width / 2 + 410;
        orange1.y = size.height / 2 + 180;

        iceCream1.x = size.width / 2 - 180;
        iceCream1.y = size.height / 2 + 50;

        iceCream2.x = size.width / 2 + 540;
        iceCream2.y = size.height / 2 + 120;

        iceCream3.x = size.width / 2 + 540;
        iceCream3.y = size.height / 2 - 20;


        //------animation设置位置结束------




        //定时器
        bg.schedule(function(){
            totalTime = totalTime - 1;

            //test
            //this.pause();
            //trace("test");

            //特定事件一发生  不同路线对应不同的事件
            if(totalTime == 9){

                // if else 判断状态进入那个分支

                this.pause();
                if(scenceRoute == 1){
                    addEventAndAdvice(parentNode,2,specEventOneStr,res.kaixin_xsdeng1_fnt,function () {
                        trace("accept event");
                        this.removeFromParent(true);
                        bg.resume();
                        state = 3;
                    },function () {
                        trace("reject event");

                        this.removeFromParent(true);
                        bg.resume();
                        state = 1;
                    });

                }else if(scenceRoute == 2){
                    addEventAndAdvice(parentNode,2,specEventTwoStr,res.kaixin_xsdeng1_fnt,function () {
                        trace("accept event");
                        this.removeFromParent(true);
                        bg.resume();
                        state = 1;
                    },function () {
                        trace("reject event");

                        this.removeFromParent(true);
                        bg.resume();
                        state = 2;
                    });
                }else{
                    addEventAndAdvice(parentNode,2,specEventThreeStr,res.kaixin_xsdeng1_fnt,function () {
                        trace("accept event");
                        this.removeFromParent(true);
                        bg.resume();
                        state = 2;
                    },function () {
                        trace("reject event");

                        this.removeFromParent(true);
                        bg.resume();
                        state = 3;
                    });
                }

            }

            //特定事件二发生 发放圣诞礼物
            if(totalTime == 8){
                this.pause();
                addEventAndAdvice(parentNode,2,specEventFourStr,res.kaixin_xsdeng1_fnt,function () {
                    trace("accept event");
                    this.removeFromParent(true);
                    bg.resume();
                    moodChange(bg,1,size);
                },null);



                //working11.runAction(cc.blink());

            }

            //特定事件三发生 老王偷人
            if(totalTime == 7){
                this.pause();

                //员工数量减少3
                totalEmployee -= 3;

                addEventAndAdvice(parentNode,2,specEventFiveStr,res.kaixin_xsdeng2_fnt,function () {
                    trace("accept event");
                    this.removeFromParent(true);
                    bg.resume();
                },null);

            }

            //三个随机事件 至多发生两个 至少一个
            if(totalTime == 6){
                var random = Math.random();
                trace(random);
                if(random >= 0.66 ){
                    //触发搞卫生事件
                    this.pause();

                    cakeTime += 1;

                    addEventAndAdvice(parentNode,2,randomEventOneStr,res.kaixin_xsdeng2_fnt,function () {
                        trace("accept event");
                        this.removeFromParent(true);
                        bg.resume();
                    },null);

                    randomEventOne = true;
                }else if(random >= 0.33){
                    //新店开展,业务不熟练
                    this.pause();

                    totalEmployee += 5;

                    addEventAndAdvice(parentNode,2,randomEventTwoStr,res.kaixin_xsdeng2_fnt,function () {
                        trace("accept event");
                        this.removeFromParent(true);
                        bg.resume();
                    },null);
                    randomEventTwo = true;

                }else{
                    //杭州走访 随机事件是否发生
                    this.pause();

                    cakeTime += 1;
                    cakeNum += 10;


                    addEventAndAdvice(parentNode,2,randomEventThreeStr,res.kaixin_xsdeng2_fnt,function () {
                        trace("accept event");

                        this.removeFromParent(true);
                        bg.resume();
                    },null);
                    randomEventThree = true;
                }

                randomEventNum = randomEventNum - 1;

            }

            if(totalTime == 5){
                var random2 = Math.random();
                trace(random2);
                if(random2 >= 0.5 ){
                    var random3 = Math.random();
                    if(random3 >= 0.66 && randomEventOne == false){
                        //触发搞卫生事件
                        this.pause();

                        cakeTime += 1;

                        addEventAndAdvice(parentNode,2,randomEventOneStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");
                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventOne = true;
                    }else if(random3 >= 0.33 && random3 < 0.66 && randomEventTwo == false){
                        //新店开展,业务不熟练
                        this.pause();

                        totalEmployee += 5;

                        addEventAndAdvice(parentNode,2,randomEventTwoStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");
                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventTwo = true;
                    }else if(randomEventThree == false){
                        //杭州走访 随机事件是否发生
                        this.pause();

                        cakeTime += 1;
                        cakeNum += 10;

                        addEventAndAdvice(parentNode,2,randomEventThreeStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");

                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventThree = true;
                    }
                    randomEventNum = randomEventNum - 1;
                }

            }

            if(totalTime == 4 && randomEventNum > 0){
                var random4 = Math.random();
                trace(random4);
                if(random4 >= 0.5 ){
                    var random5 = Math.random();
                    if(random5 >= 0.66 && randomEventOne == false){
                        //触发搞卫生事件
                        this.pause();

                        cakeTime += 1;

                        addEventAndAdvice(parentNode,2,randomEventOneStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");
                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventOne = true;
                    }else if(random5 >= 0.33 && random5 < 0.66 && randomEventTwo == false){
                        //新店开展,业务不熟练
                        this.pause();

                        totalEmployee += 5;

                        addEventAndAdvice(parentNode,2,randomEventTwoStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");
                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventTwo = true;
                    }else if(randomEventThree == false){
                        //杭州走访 随机事件是否发生
                        this.pause();

                        cakeTime += 1;
                        cakeNum += 10;

                        addEventAndAdvice(parentNode,2,randomEventThreeStr,res.kaixin_xsdeng2_fnt,function () {
                            trace("accept event");

                            this.removeFromParent(true);
                            bg.resume();
                        },null);
                        randomEventThree = true;
                    }
                    randomEventNum = randomEventNum - 1;
                }

            }



            //路线1特定事件
            if(totalTime == 3 && scenceRoute == 1){
                //针对路线1 触发卤蛋事件
                this.pause();

                addEventAndAdvice(parentNode,2,specEventSixStr,res.kaixin_xsdeng2_fnt,function () {
                    trace("accept event");
                    this.removeFromParent(true);
                    bg.resume();
                    //state = 3;
                    moodChange(bg,2,size);
                },function () {
                    trace("reject event");

                    cakeTime += 1;
                    this.removeFromParent(true);
                    bg.resume();
                });

            }




            if(totalTime <= 2){
                this.pause();
                cc.director.runScene(new TestCakeScene());;
            }
        },4);

        return true;
    },


});
//---------------------开发场景结束------------

//---------------------开发返工场景开始---------
var DevelopmentTwoLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        var parentNode = this;

        var delayPerUnit1 = 7 / 10;
        var delayPerUnit2 = 1 / 10;
        var delayPerUnit3 = 7 / 10;

        var size = cc.winSize;

        var bg = new cc.Sprite(res.BackgroundBlue_png);

        this.addChild(bg,1);
        bg.x = size.width / 2;
        bg.y = size.height / 2;

        bg.scaleX = 0.8;
        bg.scaleY = 0.9;

        //音乐图标
        musicImage(bg,size);
        //任务头像显示
        headShow(bg,size,role);

        var man = new cc.Sprite(res.Boy_png);
        var desktop = new cc.Sprite(res.DeskDark_png);
        var working1 = new cc.Sprite(res.Engineer_png1);
        var working2 = new cc.Sprite(res.Engineer_png1);
        var working3 = new cc.Sprite(res.Engineer_png1);
        var working4 = new cc.Sprite(res.Engineer_png1);

        var working5 = new cc.Sprite(res.Engineer_png3);
        var working6 = new cc.Sprite(res.Engineer_png3);
        var working7 = new cc.Sprite(res.Engineer_png3);
        var working8 = new cc.Sprite(res.Engineer_png3);

        var working9 = new cc.Sprite(res.Engineer_png7);
        var working10 = new cc.Sprite(res.Engineer_png7);
        var working11 = new cc.Sprite(res.Engineer_png7);
        var working12 = new cc.Sprite(res.Engineer_png7);
        var working13 = new cc.Sprite(res.Engineer_png7);

        var orange = new cc.Sprite(res.Orange_png);
        var pie = new cc.Sprite(res.Pie_png);
        var sugar = new cc.Sprite(res.Sugar_png);
        var biscuits = new cc.Sprite(res.Biscuits_png);
        var kiwi = new cc.Sprite(res.Kiwi_png);
        var watermelon = new cc.Sprite(res.Watermelon_png);
        var sugarYellow = new cc.Sprite(res.SugarYellow_png);
        var orange1 = new cc.Sprite(res.Orange_png);
        var iceCream1 = new cc.Sprite(res.IceCream1_png);
        var iceCream2 = new cc.Sprite(res.IceCream4_png);
        var iceCream3 = new cc.Sprite(res.IceCream1_png);

        var stand1 = new cc.Sprite(res.stand1_png);
        var stand2 = new cc.Sprite(res.stand1_png);
        var stand3 = new cc.Sprite(res.stand2_png);


        // var labelBoard = new cc.Sprite(res.LabelBoard_png);
        // var talkPig = new cc.Sprite(res.TalkPig_png);
        // var talkBoard = new cc.Sprite(res.TalkBoard_png);




        bg.addChild(desktop,1);
        bg.addChild(working1,2);
        bg.addChild(working2,3);
        bg.addChild(working3,4);
        bg.addChild(working4,5);
        bg.addChild(working5,6);
        bg.addChild(working6,7);
        bg.addChild(working7,8);
        bg.addChild(working8,9);
        bg.addChild(orange,10);
        bg.addChild(pie,11);
        bg.addChild(sugar,12);
        bg.addChild(biscuits,13);
        bg.addChild(kiwi,14);
        bg.addChild(watermelon,15);
        bg.addChild(sugarYellow,16);
        bg.addChild(orange1,17);
        bg.addChild(working9,18);
        bg.addChild(working10,19);
        bg.addChild(working11,20);
        bg.addChild(working12,21);
        bg.addChild(working13,22);
        bg.addChild(iceCream1,23);
        bg.addChild(iceCream2,24);
        bg.addChild(iceCream3,25);

        bg.addChild(stand1,50);
        bg.addChild(stand2,51);
        bg.addChild(stand3,52);

        //------sprite设置位置开始------



        desktop.x = size.width / 2 + 200;
        desktop.y = size.height / 2 + 50;

        working1.x = size.width / 2 - 40;
        working1.y = size.height / 2 - 160;

        working2.x = size.width / 2 + 110;
        working2.y = size.height / 2 - 160;

        working3.x = size.width / 2 + 260;
        working3.y = size.height / 2 - 160;

        working4.x = size.width / 2 + 410;
        working4.y = size.height / 2 - 160;

        working5.x = size.width / 2 - 40;
        working5.y = size.height / 2 + 260;

        working6.x = size.width / 2 + 110;
        working6.y = size.height / 2 + 260;

        working7.x = size.width / 2 + 260;
        working7.y = size.height / 2 + 260;

        working8.x = size.width / 2 + 410;
        working8.y = size.height / 2 + 260;

        working9.x = size.width / 2 - 275;
        working9.y = size.height / 2 + 50;
        working9.setRotation(-90);

        working10.x = size.width / 2 + 625;
        working10.y = size.height / 2 + 170;
        working10.setRotation(60);

        working11.x = size.width / 2 + 625;
        working11.y = size.height / 2 - 70;
        working11.setRotation(120);

        stand1.x = size.width / 2 + 550;
        stand1.y = size.height / 2 + 320;
        stand1.setRotation(30);

        stand2.x = size.width / 2 + 550;
        stand2.y = size.height / 2 - 200;
        stand2.setRotation(120);

        stand3.x = size.width / 2 + 715;
        stand3.y = size.height / 2 + 50;
        stand3.setRotation(-90);

        //------sprite设置位置结束------

        //设置计时面板
        addStatisticsBoard2(parentNode, 100, size.height - 140);


        //------animation声明开始------

        //工作1
        var animation_work1 = new cc.Animation();
        animation_work1.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work1.addSpriteFrameWithFile(res.Engineer_png2);
        //animation_work1.addSpriteFrameWithFile(res.EngineerAngry1_png);
        //animation_work1.addSpriteFrameWithFile(res.EngineerAngry2_png);

        animation_work1.setDelayPerUnit(delayPerUnit2);
        var workAction1 = cc.animate(animation_work1).repeatForever();

        working1.runAction(workAction1);

        //工作2
        var animation_work2 = new cc.Animation();
        animation_work2.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work2.addSpriteFrameWithFile(res.Engineer_png2);

        animation_work2.setDelayPerUnit(delayPerUnit2);
        var workAction2 = cc.animate(animation_work2).repeatForever();

        working2.runAction(workAction2);

        //工作3
        var animation_work3 = new cc.Animation();
        animation_work3.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work3.addSpriteFrameWithFile(res.Engineer_png2);

        animation_work3.setDelayPerUnit(delayPerUnit2);
        var workAction3 = cc.animate(animation_work3).repeatForever();

        working3.runAction(workAction3);

        //工作4
        var animation_work4 = new cc.Animation();
        animation_work4.addSpriteFrameWithFile(res.Engineer_png1);
        animation_work4.addSpriteFrameWithFile(res.Engineer_png2);

        animation_work4.setDelayPerUnit(delayPerUnit2);
        var workAction4 = cc.animate(animation_work4).repeatForever();

        working4.runAction(workAction4);

        //工作5
        var animation_work5 = new cc.Animation();
        animation_work5.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work5.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work5.setDelayPerUnit(delayPerUnit2);
        var workAction5 = cc.animate(animation_work5).repeatForever();

        working5.runAction(workAction5);

        //工作6
        var animation_work6 = new cc.Animation();
        animation_work6.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work6.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work6.setDelayPerUnit(delayPerUnit2);
        var workAction6 = cc.animate(animation_work6).repeatForever();

        working6.runAction(workAction6);

        //工作7
        var animation_work7 = new cc.Animation();
        animation_work7.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work7.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work7.setDelayPerUnit(delayPerUnit2);
        var workAction7 = cc.animate(animation_work7).repeatForever();

        working7.runAction(workAction7);

        //工作8
        var animation_work8 = new cc.Animation();
        animation_work8.addSpriteFrameWithFile(res.Engineer_png3);
        animation_work8.addSpriteFrameWithFile(res.Engineer_png4);

        animation_work8.setDelayPerUnit(delayPerUnit2);
        var workAction8 = cc.animate(animation_work8).repeatForever();

        working8.runAction(workAction8);

        //工作9
        var animation_work9 = new cc.Animation();
        animation_work9.addSpriteFrameWithFile(res.Engineer_png7);
        animation_work9.addSpriteFrameWithFile(res.EngineerAngry1_png);
        animation_work9.addSpriteFrameWithFile(res.EngineerAngry2_png);

        animation_work9.setDelayPerUnit(delayPerUnit1);
        var workAction9 = cc.animate(animation_work9).repeatForever();

        working9.runAction(workAction9);

        //工作10
        var animation_work10 = new cc.Animation();
        animation_work10.addSpriteFrameWithFile(res.Engineer_png7);
        animation_work10.addSpriteFrameWithFile(res.EngineerAngry1_png);
        animation_work10.addSpriteFrameWithFile(res.EngineerAngry2_png);

        animation_work10.setDelayPerUnit(delayPerUnit1);
        var workAction10 = cc.animate(animation_work10).repeatForever();

        working10.runAction(workAction10);

        //工作11
        var animation_work11 = new cc.Animation();
        animation_work11.addSpriteFrameWithFile(res.Engineer_png7);
        animation_work11.addSpriteFrameWithFile(res.EngineerAngry1_png);
        animation_work11.addSpriteFrameWithFile(res.EngineerAngry2_png);

        animation_work11.setDelayPerUnit(delayPerUnit1);
        var workAction11 = cc.animate(animation_work11).repeatForever();

        working11.runAction(workAction11);


        //水果1
        var animation1 = new cc.Animation();
        animation1.addSpriteFrameWithFile(res.Orange_png);
        animation1.addSpriteFrameWithFile(res.IceCream4_png);
        animation1.addSpriteFrameWithFile(res.Pie_png);
        animation1.addSpriteFrameWithFile(res.Sugar_png);
        animation1.addSpriteFrameWithFile(res.IceCream1_png);
        animation1.addSpriteFrameWithFile(res.Biscuits_png);
        animation1.addSpriteFrameWithFile(res.Kiwi_png);
        animation1.addSpriteFrameWithFile(res.IceCream4_png);
        animation1.addSpriteFrameWithFile(res.Watermelon_png);
        animation1.addSpriteFrameWithFile(res.SugarYellow_png);
        animation1.addSpriteFrameWithFile(res.IceCream1_png);


        animation1.setDelayPerUnit(delayPerUnit3);
        var lookoutAction1 = cc.animate(animation1).repeatForever();

        orange.runAction(lookoutAction1);

        //水果2
        var animation2 = new cc.Animation();
        animation2.addSpriteFrameWithFile(res.IceCream4_png);
        animation2.addSpriteFrameWithFile(res.Pie_png);
        animation2.addSpriteFrameWithFile(res.Sugar_png);
        animation2.addSpriteFrameWithFile(res.IceCream1_png);
        animation2.addSpriteFrameWithFile(res.Biscuits_png);
        animation2.addSpriteFrameWithFile(res.Kiwi_png);
        animation2.addSpriteFrameWithFile(res.IceCream4_png);
        animation2.addSpriteFrameWithFile(res.Watermelon_png);
        animation2.addSpriteFrameWithFile(res.SugarYellow_png);
        animation2.addSpriteFrameWithFile(res.IceCream1_png);
        animation2.addSpriteFrameWithFile(res.Orange_png);

        animation2.setDelayPerUnit(delayPerUnit3);
        var lookoutAction2 = cc.animate(animation2).repeatForever();

        pie.runAction(lookoutAction2);

        //水果3
        var animation3 = new cc.Animation();
        animation3.addSpriteFrameWithFile(res.Pie_png);
        animation3.addSpriteFrameWithFile(res.Sugar_png);
        animation3.addSpriteFrameWithFile(res.IceCream1_png);
        animation3.addSpriteFrameWithFile(res.Biscuits_png);
        animation3.addSpriteFrameWithFile(res.Kiwi_png);
        animation3.addSpriteFrameWithFile(res.IceCream4_png);
        animation3.addSpriteFrameWithFile(res.Watermelon_png);
        animation3.addSpriteFrameWithFile(res.SugarYellow_png);
        animation3.addSpriteFrameWithFile(res.IceCream1_png);
        animation3.addSpriteFrameWithFile(res.Orange_png);
        animation3.addSpriteFrameWithFile(res.IceCream4_png);

        animation3.setDelayPerUnit(delayPerUnit3);
        var lookoutAction3 = cc.animate(animation3).repeatForever();

        sugar.runAction(lookoutAction3);

        //水果4
        var animation4 = new cc.Animation();

        animation4.addSpriteFrameWithFile(res.Sugar_png);
        animation4.addSpriteFrameWithFile(res.IceCream1_png);
        animation4.addSpriteFrameWithFile(res.Biscuits_png);
        animation4.addSpriteFrameWithFile(res.Kiwi_png);
        animation4.addSpriteFrameWithFile(res.IceCream4_png);
        animation4.addSpriteFrameWithFile(res.Watermelon_png);
        animation4.addSpriteFrameWithFile(res.SugarYellow_png);
        animation4.addSpriteFrameWithFile(res.IceCream1_png);
        animation4.addSpriteFrameWithFile(res.Orange_png);
        animation4.addSpriteFrameWithFile(res.IceCream4_png);
        animation4.addSpriteFrameWithFile(res.Pie_png);

        animation4.setDelayPerUnit(delayPerUnit3);
        var lookoutAction4 = cc.animate(animation4).repeatForever();

        biscuits.runAction(lookoutAction4);

        //水果5
        var animation5 = new cc.Animation();

        animation5.addSpriteFrameWithFile(res.IceCream1_png);
        animation5.addSpriteFrameWithFile(res.Biscuits_png);
        animation5.addSpriteFrameWithFile(res.Kiwi_png);
        animation5.addSpriteFrameWithFile(res.IceCream4_png);
        animation5.addSpriteFrameWithFile(res.Watermelon_png);
        animation5.addSpriteFrameWithFile(res.SugarYellow_png);
        animation5.addSpriteFrameWithFile(res.IceCream1_png);
        animation5.addSpriteFrameWithFile(res.Orange_png);
        animation5.addSpriteFrameWithFile(res.IceCream4_png);
        animation5.addSpriteFrameWithFile(res.Pie_png);
        animation5.addSpriteFrameWithFile(res.Sugar_png);

        animation5.setDelayPerUnit(delayPerUnit3);
        var lookoutAction5 = cc.animate(animation5).repeatForever();

        iceCream3.runAction(lookoutAction5);

        //水果6
        var animation6 = new cc.Animation();
        animation6.addSpriteFrameWithFile(res.Biscuits_png);
        animation6.addSpriteFrameWithFile(res.Kiwi_png);
        animation6.addSpriteFrameWithFile(res.IceCream4_png);
        animation6.addSpriteFrameWithFile(res.Watermelon_png);
        animation6.addSpriteFrameWithFile(res.SugarYellow_png);
        animation6.addSpriteFrameWithFile(res.IceCream1_png);
        animation6.addSpriteFrameWithFile(res.Orange_png);
        animation6.addSpriteFrameWithFile(res.IceCream4_png);
        animation6.addSpriteFrameWithFile(res.Pie_png);
        animation6.addSpriteFrameWithFile(res.Sugar_png);
        animation6.addSpriteFrameWithFile(res.IceCream1_png);

        animation6.setDelayPerUnit(delayPerUnit3);
        var lookoutAction6 = cc.animate(animation6).repeatForever();

        iceCream2.runAction(lookoutAction6);

        //水果7
        var animation7 = new cc.Animation();
        animation7.addSpriteFrameWithFile(res.Kiwi_png);
        animation7.addSpriteFrameWithFile(res.IceCream4_png);
        animation7.addSpriteFrameWithFile(res.Watermelon_png);
        animation7.addSpriteFrameWithFile(res.SugarYellow_png);
        animation7.addSpriteFrameWithFile(res.IceCream1_png);
        animation7.addSpriteFrameWithFile(res.Orange_png);
        animation7.addSpriteFrameWithFile(res.IceCream4_png);
        animation7.addSpriteFrameWithFile(res.Pie_png);
        animation7.addSpriteFrameWithFile(res.Sugar_png);
        animation7.addSpriteFrameWithFile(res.IceCream1_png);
        animation7.addSpriteFrameWithFile(res.Biscuits_png);

        animation7.setDelayPerUnit(delayPerUnit3);
        var lookoutAction7 = cc.animate(animation7).repeatForever();

        orange1.runAction(lookoutAction7);

        //水果8
        var animation8 = new cc.Animation();
        animation8.addSpriteFrameWithFile(res.IceCream4_png);
        animation8.addSpriteFrameWithFile(res.Watermelon_png);
        animation8.addSpriteFrameWithFile(res.SugarYellow_png);
        animation8.addSpriteFrameWithFile(res.IceCream1_png);
        animation8.addSpriteFrameWithFile(res.Orange_png);
        animation8.addSpriteFrameWithFile(res.IceCream4_png);
        animation8.addSpriteFrameWithFile(res.Pie_png);
        animation8.addSpriteFrameWithFile(res.Sugar_png);
        animation8.addSpriteFrameWithFile(res.IceCream1_png);
        animation8.addSpriteFrameWithFile(res.Biscuits_png);
        animation8.addSpriteFrameWithFile(res.Kiwi_png);

        animation8.setDelayPerUnit(delayPerUnit3);
        var lookoutAction8 = cc.animate(animation8).repeatForever();

        sugarYellow.runAction(lookoutAction8);

        //水果9
        var animation9 = new cc.Animation();
        animation9.addSpriteFrameWithFile(res.Watermelon_png);
        animation9.addSpriteFrameWithFile(res.SugarYellow_png);
        animation9.addSpriteFrameWithFile(res.IceCream1_png);
        animation9.addSpriteFrameWithFile(res.Orange_png);
        animation9.addSpriteFrameWithFile(res.IceCream4_png);
        animation9.addSpriteFrameWithFile(res.Pie_png);
        animation9.addSpriteFrameWithFile(res.Sugar_png);
        animation9.addSpriteFrameWithFile(res.IceCream1_png);
        animation9.addSpriteFrameWithFile(res.Biscuits_png);
        animation9.addSpriteFrameWithFile(res.Kiwi_png);
        animation9.addSpriteFrameWithFile(res.IceCream4_png);

        animation9.setDelayPerUnit(delayPerUnit3);
        var lookoutAction9 = cc.animate(animation9).repeatForever();

        watermelon.runAction(lookoutAction9);

        //水果10
        var animation10 = new cc.Animation();

        animation10.addSpriteFrameWithFile(res.SugarYellow_png);
        animation10.addSpriteFrameWithFile(res.IceCream1_png);
        animation10.addSpriteFrameWithFile(res.Orange_png);
        animation10.addSpriteFrameWithFile(res.IceCream4_png);
        animation10.addSpriteFrameWithFile(res.Pie_png);
        animation10.addSpriteFrameWithFile(res.Sugar_png);
        animation10.addSpriteFrameWithFile(res.IceCream1_png);
        animation10.addSpriteFrameWithFile(res.Biscuits_png);
        animation10.addSpriteFrameWithFile(res.Kiwi_png);
        animation10.addSpriteFrameWithFile(res.IceCream4_png);
        animation10.addSpriteFrameWithFile(res.Watermelon_png);

        animation10.setDelayPerUnit(delayPerUnit3);
        var lookoutAction10 = cc.animate(animation10).repeatForever();

        kiwi.runAction(lookoutAction10);

        //水果11
        var animation11 = new cc.Animation();

        animation11.addSpriteFrameWithFile(res.IceCream1_png);
        animation11.addSpriteFrameWithFile(res.Orange_png);
        animation11.addSpriteFrameWithFile(res.IceCream4_png);
        animation11.addSpriteFrameWithFile(res.Pie_png);
        animation11.addSpriteFrameWithFile(res.Sugar_png);
        animation11.addSpriteFrameWithFile(res.IceCream1_png);
        animation11.addSpriteFrameWithFile(res.Biscuits_png);
        animation11.addSpriteFrameWithFile(res.Kiwi_png);
        animation11.addSpriteFrameWithFile(res.IceCream4_png);
        animation11.addSpriteFrameWithFile(res.Watermelon_png);
        animation11.addSpriteFrameWithFile(res.SugarYellow_png);

        animation11.setDelayPerUnit(delayPerUnit3);
        var lookoutAction11 = cc.animate(animation11).repeatForever();

        iceCream1.runAction(lookoutAction11);




        //------animation声明结束------


        //------animation设置位置开始------
        orange.x = size.width / 2 - 40;
        orange.y = size.height / 2 - 80;

        pie.x = size.width / 2 + 110;
        pie.y = size.height / 2 - 80;

        sugar.x = size.width / 2 + 260;
        sugar.y = size.height / 2 - 80;

        biscuits.x = size.width / 2 + 410;
        biscuits.y = size.height / 2 - 80;

        kiwi.x = size.width / 2 - 40;
        kiwi.y = size.height / 2 + 180;

        watermelon.x = size.width / 2 + 110;
        watermelon.y = size.height / 2 + 180;

        sugarYellow.x = size.width / 2 + 260;
        sugarYellow.y = size.height / 2 + 180;

        orange1.x = size.width / 2 + 410;
        orange1.y = size.height / 2 + 180;

        iceCream1.x = size.width / 2 - 180;
        iceCream1.y = size.height / 2 + 50;

        iceCream2.x = size.width / 2 + 540;
        iceCream2.y = size.height / 2 + 120;

        iceCream3.x = size.width / 2 + 540;
        iceCream3.y = size.height / 2 - 20;


        //------animation设置位置结束------




        //定时器
        bg.schedule(function(){
            totalTime = totalTime - 1;

            //test
            //this.pause();

            if(totalTime == 4){

                // var angry1 = new cc.Sprite(res.EngineerAngry1_png);
                //
                // var animation_angry1 = new cc.Animation();
                // animation_angry1.addSpriteFrameWithFile(res.EngineerAngry1_png);
                // animation_angry1.addSpriteFrameWithFile(res.EngineerAngry2_png);
                //
                // animation_angry1.setDelayPerUnit(9 / 10);
                // var angryAction1 = cc.animate(animation_angry1).repeatForever();
                //
                // angry1.runAction(angryAction1);
                //
                // angry1.x = size.width / 2 - 40;
                // angry1.y = size.height / 2 - 110;

            }

            if(totalTime == 3){

            }


            if(totalTime <= 2){
                this.pause();
                cc.director.runScene(new TestCakeScene());;
            }
        },2);

        return true;
    },


});


//---------------------开发返工场景结束---------


var DevelopmentEmployeeScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var developLayer = new DevelopmentOneLayer();

        this.addChild(developLayer);
    }
});


var DevelopmentReturnScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var developLayer1 = new DevelopmentTwoLayer();

        this.addChild(developLayer1);
    }
});



//---------------------公共函数开始------------
//员工状态改变函数
var moodChange = function (pNode, mood,size) {

    //mood 1为smile  2为angry
    if(mood == 1){
        trace(mood);
        var moodChange1 = new cc.Sprite(res.smile1_png);
        var moodChange2 = new cc.Sprite(res.smile3_png);
        var moodChange3 = new cc.Sprite(res.smile1_png);
        var moodChange4 = new cc.Sprite(res.smile3_png);
        var moodChange5 = new cc.Sprite(res.smile3_png);
        var moodChange6 = new cc.Sprite(res.smile1_png);
        var moodChange7 = new cc.Sprite(res.smile3_png);
        var moodChange8 = new cc.Sprite(res.smile1_png);
        var moodChange9 = new cc.Sprite(res.smile3_png);
        var moodChange10 = new cc.Sprite(res.smile3_png);
        var moodChange11 = new cc.Sprite(res.smile3_png);

        pNode.addChild(moodChange1,26);
        pNode.addChild(moodChange2,27);
        pNode.addChild(moodChange3,28);
        pNode.addChild(moodChange4,29);
        pNode.addChild(moodChange5,30);
        pNode.addChild(moodChange6,31);
        pNode.addChild(moodChange7,32);
        pNode.addChild(moodChange8,33);
        pNode.addChild(moodChange9,34);
        pNode.addChild(moodChange10,35);
        pNode.addChild(moodChange11,36);

        moodChange1.x = size.width / 2 - 40;
        moodChange1.y = size.height / 2 - 165;
        moodChange1.setRotation(180);

        moodChange2.x = size.width / 2 + 110;
        moodChange2.y = size.height / 2 - 160;
        moodChange2.setRotation(180);

        moodChange3.x = size.width / 2 + 260;
        moodChange3.y = size.height / 2 - 165;
        moodChange3.setRotation(180);

        moodChange4.x = size.width / 2 + 410;
        moodChange4.y = size.height / 2 - 160;
        moodChange4.setRotation(180);

        moodChange5.x = size.width / 2 - 40;
        moodChange5.y = size.height / 2 + 260;

        moodChange6.x = size.width / 2 + 110;
        moodChange6.y = size.height / 2 + 265;

        moodChange7.x = size.width / 2 + 260;
        moodChange7.y = size.height / 2 + 260;

        moodChange8.x = size.width / 2 + 410;
        moodChange8.y = size.height / 2 + 265;

        moodChange9.x = size.width / 2 - 275;
        moodChange9.y = size.height / 2 + 50;
        moodChange9.setRotation(-90);

        moodChange10.x = size.width / 2 + 625;
        moodChange10.y = size.height / 2 + 170;
        moodChange10.setRotation(60);

        moodChange11.x = size.width / 2 + 625;
        moodChange11.y = size.height / 2 - 70;
        moodChange11.setRotation(120);

        var actionMood1 = cc.blink(3,3);
        var actionMood2 = cc.blink(3,3);
        var actionMood3 = cc.blink(3,3);
        var actionMood4 = cc.blink(3,3);
        var actionMood5 = cc.blink(3,3);
        var actionMood6 = cc.blink(3,3);
        var actionMood7 = cc.blink(3,3);
        var actionMood8 = cc.blink(3,3);
        var actionMood9 = cc.blink(3,3);
        var actionMood10 = cc.blink(3,3);
        var actionMood11 = cc.blink(3,3);

        moodChange1.runAction(actionMood1);
        moodChange2.runAction(actionMood2);
        moodChange3.runAction(actionMood3);
        moodChange4.runAction(actionMood4);
        moodChange5.runAction(actionMood5);
        moodChange6.runAction(actionMood6);
        moodChange7.runAction(actionMood7);
        moodChange8.runAction(actionMood8);
        moodChange9.runAction(actionMood9);
        moodChange10.runAction(actionMood10);
        moodChange11.runAction(actionMood11);




        setTimeout(function(){
            trace("setTimeout");
            moodChange1.removeFromParent(pNode);
            moodChange2.removeFromParent(pNode);
            moodChange3.removeFromParent(pNode);
            moodChange4.removeFromParent(pNode);
            moodChange5.removeFromParent(pNode);
            moodChange6.removeFromParent(pNode);
            moodChange7.removeFromParent(pNode);
            moodChange8.removeFromParent(pNode);
            moodChange9.removeFromParent(pNode);
            moodChange10.removeFromParent(pNode);
            moodChange11.removeFromParent(pNode);

        },3000)


    }else if(mood == 2){
        var moodChange21 = new cc.Sprite(res.angry2_png);
        var moodChange22 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange23 = new cc.Sprite(res.angry2_png);
        var moodChange24 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange25 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange26 = new cc.Sprite(res.angry2_png);
        var moodChange27 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange28 = new cc.Sprite(res.angry2_png);
        var moodChange29 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange30 = new cc.Sprite(res.EngineerAngry1_png);
        var moodChange31 = new cc.Sprite(res.EngineerAngry1_png);



        pNode.addChild(moodChange21,37);
        pNode.addChild(moodChange22,38);
        pNode.addChild(moodChange23,39);
        pNode.addChild(moodChange24,40);
        pNode.addChild(moodChange25,41);
        pNode.addChild(moodChange26,42);
        pNode.addChild(moodChange27,43);
        pNode.addChild(moodChange28,44);
        pNode.addChild(moodChange29,45);
        pNode.addChild(moodChange30,46);
        pNode.addChild(moodChange31,47);




        moodChange21.x = size.width / 2 - 40;
        moodChange21.y = size.height / 2 - 165;
        moodChange21.setRotation(180);

        moodChange22.x = size.width / 2 + 110;
        moodChange22.y = size.height / 2 - 160;
        moodChange22.setRotation(180);

        moodChange23.x = size.width / 2 + 260;
        moodChange23.y = size.height / 2 - 165;
        moodChange23.setRotation(180);

        moodChange24.x = size.width / 2 + 410;
        moodChange24.y = size.height / 2 - 160;
        moodChange24.setRotation(180);

        moodChange25.x = size.width / 2 - 40;
        moodChange25.y = size.height / 2 + 260;

        moodChange26.x = size.width / 2 + 110;
        moodChange26.y = size.height / 2 + 265;

        moodChange27.x = size.width / 2 + 260;
        moodChange27.y = size.height / 2 + 260;

        moodChange28.x = size.width / 2 + 410;
        moodChange28.y = size.height / 2 + 265;

        moodChange29.x = size.width / 2 - 275;
        moodChange29.y = size.height / 2 + 50;
        moodChange29.setRotation(-90);

        moodChange30.x = size.width / 2 + 625;
        moodChange30.y = size.height / 2 + 170;
        moodChange30.setRotation(60);

        moodChange31.x = size.width / 2 + 625;
        moodChange31.y = size.height / 2 - 70;
        moodChange31.setRotation(120);


        var actionMood21 = cc.blink(3,3);
        var actionMood22 = cc.blink(3,3);
        var actionMood23 = cc.blink(3,3);
        var actionMood24 = cc.blink(3,3);
        var actionMood25 = cc.blink(3,3);
        var actionMood26 = cc.blink(3,3);
        var actionMood27 = cc.blink(3,3);
        var actionMood28 = cc.blink(3,3);
        var actionMood29 = cc.blink(3,3);
        var actionMood30 = cc.blink(3,3);
        var actionMood31 = cc.blink(3,3);

        moodChange21.runAction(actionMood21);
        moodChange22.runAction(actionMood22);
        moodChange23.runAction(actionMood23);
        moodChange24.runAction(actionMood24);
        moodChange25.runAction(actionMood25);
        moodChange26.runAction(actionMood26);
        moodChange27.runAction(actionMood27);
        moodChange28.runAction(actionMood28);
        moodChange29.runAction(actionMood29);
        moodChange30.runAction(actionMood30);
        moodChange31.runAction(actionMood31);

        setTimeout(function(){
            trace("mood 2");
            moodChange21.removeFromParent(pNode);
            moodChange22.removeFromParent(pNode);
            moodChange23.removeFromParent(pNode);
            moodChange24.removeFromParent(pNode);
            moodChange25.removeFromParent(pNode);
            moodChange26.removeFromParent(pNode);
            moodChange27.removeFromParent(pNode);
            moodChange28.removeFromParent(pNode);
            moodChange29.removeFromParent(pNode);
            moodChange30.removeFromParent(pNode);
            moodChange31.removeFromParent(pNode);

        },3000)

    }

}
//背景音乐按钮展示
var musicImage = function (pNode,size) {
    var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, pNode);
    menuImage1.scaleX = 0.2;
    menuImage1.scaleY = 0.2;
    var menu1 = new cc.Menu(menuImage1);
    menu1.x = size.width + 250;
    menu1.y = size.height /2 + 330;
    pNode.addChild(menu1, 4);
    //forever旋转
    var kaixinAction = cc.rotateBy(5, 360);
    var kaixinActionRepeat = cc.repeatForever(kaixinAction);
    menuImage1.runAction(kaixinActionRepeat);
}

//人物头像显示函数
var headShow = function (pNode,size,roleChoose) {

    var headSprite = null;

    if(roleChoose == "male"){
        headSprite = new cc.Sprite(res.RoleChooseBoy_png);

    }else{
        headSprite = new cc.Sprite(res.RoleChooseGirl_png);
    }

    pNode.addChild(headSprite,40);

    headSprite.x = size.width / 2 - 200;
    headSprite.y = size.height / 2 - 200;

    headSprite.scaleX = 0.4;
    headSprite.scaleY = 0.4;

}


//---------------------公共函数结束------------