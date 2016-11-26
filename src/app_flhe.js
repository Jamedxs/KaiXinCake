//---------------------游戏第一个场景开始----------------------
var StartLayer = cc.Layer.extend({
    menuButton: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX = 0.2;
        menuImage1.scaleY = 0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width - size.width / 12;
        menu1.y = size.height * 5 / 6;
        this.addChild(menu1, 4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        //var bg = new cc.LayerColor(cc.color(0, 111, 186), size.width, size.height);
        var bg = new cc.Sprite(res.BackgroundYellow_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var textKaixin = new cc.Sprite(res.TextKaixin_png);
        textKaixin.x = size.width / 2;
        textKaixin.y = size.height / 2 + 150;
        this.addChild(textKaixin);
        var kaixinAction = cc.rotateBy(2, 10, 10);
        var kaixinActionBack = kaixinAction.clone().reverse();
        var kaixinActionSequence = cc.sequence(kaixinAction, kaixinActionBack);
        var kaixinActionRepeat = cc.repeatForever(kaixinActionSequence);
        textKaixin.runAction(kaixinActionRepeat);


        var danceBoy = new cc.Sprite(res.BoyDance3_png);
        danceBoy.x = size.width / 2 - 300;
        danceBoy.y = size.height / 2 - 50;
        this.addChild(danceBoy);
        var danceBoyAnimation = new cc.Animation();
        danceBoyAnimation.addSpriteFrameWithFile(res.BoyDance3_png);
        danceBoyAnimation.addSpriteFrameWithFile(res.BoyDance4_png);
        danceBoyAnimation.setDelayPerUnit(1 / 2);
        var danceBoyAction = cc.animate(danceBoyAnimation);
        danceBoyAction.repeatForever();
        danceBoy.runAction(danceBoyAction);

        var danceGirl = new cc.Sprite(res.GirlDance3_png);
        danceGirl.x = size.width / 2 + 300;
        danceGirl.y = size.height / 2 - 50;
        this.addChild(danceGirl);
        var danceGirlAnimation = new cc.Animation();
        danceGirlAnimation.addSpriteFrameWithFile(res.GirlDance3_png);
        danceGirlAnimation.addSpriteFrameWithFile(res.GirlDance4_png);
        danceGirlAnimation.setDelayPerUnit(1 / 2);
        var danceGirlAction = cc.animate(danceGirlAnimation);
        danceGirlAction.repeatForever();
        danceGirl.runAction(danceGirlAction);

        var iceCream2 = new cc.Sprite(res.IceCream2_png);
        iceCream2.x = size.width / 2 - 100;
        iceCream2.y = size.height / 2 - 50;
        this.addChild(iceCream2);

        var iceCream3 = new cc.Sprite(res.IceCream3_png);
        iceCream3.x = size.width / 2 + 100;
        iceCream3.y = size.height / 2 - 50;
        this.addChild(iceCream3);

        var iceCream4 = new cc.Sprite(res.IceCream1_png);
        iceCream4.x = 50;
        iceCream4.y = size.height / 2 - 50;
        this.addChild(iceCream4);

        var action = cc.moveBy(2, 0, -(size.height / 2 - 70));
        action.easing(cc.easeIn(2));
        var back = action.clone().reverse();
        back.easing(cc.easeBounceIn());
        var sequence = cc.sequence(action, back);
        var repeat = cc.repeatForever(sequence);
        iceCream4.runAction(repeat);

        var iceCream5 = new cc.Sprite(res.IceCream1_png);
        iceCream5.x = size.width - 50;
        iceCream5.y = size.height / 2 + 100;
        iceCream5.rotation = 180;
        this.addChild(iceCream5);


        var teamStr = "Powered By 戏(细)说开心 Team\n   王丹、赵超、沈光辉、邓旭升、何发亮\n";
        var teamLabel = new cc.LabelBMFont(teamStr, res.kaixin_flhe1_fnt, 500, cc.TEXT_ALIGNMENT_LEFT);
        teamLabel.x = size.width / 2;
        teamLabel.y = size.height / 2 - 250;
        teamLabel.color = cc.color(154, 70, 0);
        teamLabel.scale = 1;
        this.addChild(teamLabel);
        teamLabel.opacity = 0;
        var teamAction = cc.fadeIn(5);
        teamLabel.runAction(teamAction);

        /*
         var desStr = "62度P西点集团在某国际社区新开一家开心蛋糕坊，集中研发生产集团蛋糕。\n";
         desStr += "作为蛋糕产品经理的你将参与蛋糕研发全程，你的每一个决定将影响蛋糕的销售业绩与口碑。\n";
         desStr += "进击吧，亲爱的蛋糕君！";
         var desLabel1 = new cc.LabelTTF(desStr, fontName, 20, cc.size(700, 200), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
         desLabel1.x = size.width / 2;
         desLabel1.y = size.height / 2 + 50;
         this.addChild(desLabel1);
         */
        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.startGame, this);
        this.menuButton = new cc.Menu(menuImage);
        this.menuButton.x = size.width / 2;
        this.menuButton.y = size.height / 2 - 50;
        this.addChild(this.menuButton);


        return true;
    },

    startGame: function () {
        trace("start game clicked");
        cc.director.runScene(new IntroScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});

//---------------------游戏第一个场景结束----------------------

//---------------------游戏背景介绍场景开始----------------------
var IntroLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();
        var size = cc.winSize;

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX = 0.2;
        menuImage1.scaleY = 0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width - size.width / 12;
        menu1.y = size.height * 7 / 8;
        this.addChild(menu1, 4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);

        //var bg = new cc.LayerColor(cc.color(0, 111, 186), size.width, size.height);
        var bg = new cc.Sprite(res.BackgroundYellow_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var iceCream2 = new cc.Sprite(res.IceCream2_png);
        iceCream2.x = 130;
        iceCream2.y = size.height / 2 + 200;
        this.addChild(iceCream2);

        var iceCream3 = new cc.Sprite(res.IceCream3_png);
        iceCream3.x = size.width / 2 + 150;
        iceCream3.y = size.height / 2 + 250;
        this.addChild(iceCream3);

        var iceCream4 = new cc.Sprite(res.IceCream1_png);
        iceCream4.x = 50;
        iceCream4.y = size.height / 2 - 100;
        this.addChild(iceCream4);

        var iceCream5 = new cc.Sprite(res.IceCream1_png);
        iceCream5.x = size.width - 50;
        iceCream5.y = 50;
        iceCream5.rotation = 180;
        this.addChild(iceCream5);

        var talkPig = new cc.Sprite(res.TalkPig1_png);
        talkPig.x = 150;
        talkPig.y = size.height / 2;
        this.addChild(talkPig);
        var pigAnimation = new cc.Animation();
        pigAnimation.addSpriteFrameWithFile(res.TalkPig1_png);
        pigAnimation.addSpriteFrameWithFile(res.TalkPig2_png);
        pigAnimation.setDelayPerUnit(1 / 2);
        var pigAction = cc.animate(pigAnimation);
        pigAction.repeatForever();
        talkPig.runAction(pigAction);


        var qp1 = new cc.Sprite(res.TalkBoard_png);
        qp1.x = size.width / 2 + 150;
        qp1.y = size.height / 2 + 50;
        qp1.scale = 0.8;
        this.addChild(qp1);

        var desStr = "J经理，您好，\n我是你的专属秘书，猪猪\n";
        desStr += "我将在24小时，不眠不休，为您服务。\n";
        desStr += "先来介绍一下我们的公司背景。\n";
        desStr += "62度P西点集团在某国际社区新开一家开心蛋糕坊，\n集中研发生产集团蛋糕。\n";
        desStr += "作为蛋糕产品经理的你将参与蛋糕研发全程，\n你的每一个决定将影响蛋糕的销售业绩与口碑。\n";
        desStr += "进击吧，亲爱的蛋糕君！";
        var desLabel1 = new cc.LabelTTF("", fontName, 30, cc.size(700, 400), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        //var desLabel1 = new cc.LabelBMFont("", res.kaixin_flhe1_fnt, 500, cc.TEXT_ALIGNMENT_LEFT);
        desLabel1.x = size.width / 2 - 20;
        desLabel1.y = size.height / 2 - 170;
        desLabel1.color = cc.color(154, 70, 0);
        qp1.addChild(desLabel1);


        //定时器
        var i = 0;
        var myDesStr = "";
        desLabel1.schedule(function () {
            myDesStr += desStr.charAt(i);
            desLabel1.string = myDesStr;
            if (i == desStr.length - 1) {
                this.pause();
            }
            i++;
        }, 0.08);


        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.nextScene, this);
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2 + 300;
        menu.y = size.height / 2 - 200;
        this.addChild(menu);

        return true;
    },

    nextScene: function () {
        trace("nextScene clicked");
        cc.director.runScene(new RoleChooseScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});

var IntroScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new IntroLayer();
        this.addChild(layer);
    }
});

//---------------------游戏背景介绍场景结束----------------------


//---------------------游戏角色选择场景开始------------

var RoleChooseLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        var size = cc.winSize;

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX = 0.2;
        menuImage1.scaleY = 0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width - size.width / 12;
        menu1.y = size.height * 5 / 6;
        this.addChild(menu1, 4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);


        var bg = new cc.Sprite(res.BackgroundYellow_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //var titleLabel = new cc.LabelTTF("请选择游戏角色", fontName, 38);
        var titleLabel = new cc.LabelBMFont("请选择游戏角色", res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height / 2 + 250;
        titleLabel.color = cc.color(255, 255, 255);
        titleLabel.scale = 2;
        this.addChild(titleLabel);

        var role1 = new cc.Sprite(res.RoleChooseBoy_png);
        role1.x = size.width / 2 - 150;
        role1.y = size.height / 2;
        role1.scale = 0.8;
        this.addChild(role1);

        var qp1 = new cc.Sprite(res.TalkBoard2_png);
        qp1.x = size.width / 2 - 380;
        qp1.y = size.height / 2;
        qp1.scale = 1.0;
        this.addChild(qp1);

        //var qp1Label = new cc.LabelTTF("Hello", fontName, 38);
        var qp1Label = new cc.LabelBMFont("Hello", res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        qp1Label.x = 50;
        qp1Label.y = 30;
        qp1Label.color = cc.color(154, 70, 0);
        qp1.addChild(qp1Label);
        //qp1.visible = true;

        var role2 = new cc.Sprite(res.RoleChooseGirl_png);
        role2.x = size.width / 2 + 150;
        role2.y = size.height / 2;
        role2.scale = 0.8;
        this.addChild(role2);

        var qp2 = new cc.Sprite(res.TalkBoard2_png);
        qp2.x = size.width / 2 + 380;
        qp2.y = size.height / 2;
        qp2.scale = 1.0;
        this.addChild(qp2);

        //var qp2Label = new cc.LabelTTF("Hi", fontName, 38);
        var qp2Label = new cc.LabelBMFont("Hi", res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        qp2Label.x = 50;
        qp2Label.y = 30;
        qp2Label.color = cc.color(154, 70, 0);
        qp2.addChild(qp2Label);
        //qp2.visible = true;

        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.nextScene, this);
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2 + 300;
        menu.y = size.height / 2 - 200;
        this.addChild(menu);
        menu.visible = false;


        //监听图片选择事件
        // 创建一个事件监听器 OneByOne 为单点触摸
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,                        // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {        //实现 onTouchBegan 事件处理回调函数
                var target = event.getCurrentTarget();    // 获取事件所绑定的 target, 通常是cc.Node及其子类

                // 获取当前触摸点相对于按钮所在的坐标
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {        // 判断触摸点是否在按钮范围内
                    trace("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();              //获取事件数据: delta
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数
                var target = event.getCurrentTarget();
                trace("sprite onTouchesEnded.. ");
                target.setOpacity(255);
                if (target == role1) {
                    trace("male chosen.");
                    role = "male";
                    role1.scale = 1.0;
                    role2.scale = 0.8;
                } else if (target == role2) {
                    trace("female chosen.");
                    role = "female";
                    role1.scale = 0.8;
                    role2.scale = 1.0;
                }
                trace("role:" + role);
                menu.visible = true;
                //cc.director.runScene(new PMScene());
            }
        });

        // 添加监听器到管理器
        cc.eventManager.addListener(listener1, role1);
        cc.eventManager.addListener(listener1.clone(), role2);

        return true;
    },

    nextScene: function () {
        trace("nextScene clicked");
        cc.director.runScene(new PMScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});

var RoleChooseScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new RoleChooseLayer();
        this.addChild(layer);
    }
});


//---------------------游戏角色选择场景结束------------


//---------------------产品经理选择蛋糕产品场景开始------------

var PMLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        var size = cc.winSize;

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX = 0.2;
        menuImage1.scaleY = 0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width - size.width / 12;
        menu1.y = size.height * 5 / 6;
        this.addChild(menu1, 4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);


        var bg = new cc.Sprite(res.BackgroundYellow_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //var titleLabel = new cc.LabelTTF("选择蛋糕计划", fontName, 38);
        var titleLabel = new cc.LabelBMFont("选择蛋糕计划", res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height / 2 + 200;
        titleLabel.color = cc.color(255, 255, 255);
        titleLabel.scale = 2;
        this.addChild(titleLabel);

        var cake1 = new cc.Sprite(res.CakeFruit_png);
        cake1.x = size.width / 2 - 150;
        cake1.y = size.height / 2 + 30;
        cake1.scale = 0.7;
        this.addChild(cake1);

        var desStr1 = "招牌水果蛋糕，烘焙师拿手蛋糕，价格适中，蛋糕效果及制作品质稳定。\n";
        //var desLabel1 = new cc.LabelTTF(desStr1, fontName, 20, cc.size(200, 200), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var desLabel1 = new cc.LabelBMFont(desStr1, res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        desLabel1.x = size.width / 2 - 150;
        desLabel1.y = size.height / 2 - 200;
        desLabel1.color = cc.color(154, 70, 0);
        this.addChild(desLabel1);


        var cake2 = new cc.Sprite(res.CakeSugar_png);
        cake2.x = size.width / 2 + 150;
        cake2.y = size.height / 2 + 30;
        cake2.scale = 0.7;
        this.addChild(cake2);

        var desStr2 = "翻糖卡通蛋糕，烘焙师对其不够熟练，价格较高，蛋糕效果好，品质不稳定。\n";
        //var desLabel2 = new cc.LabelTTF(desStr2, fontName, 20, cc.size(200, 200), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var desLabel2 = new cc.LabelBMFont(desStr2, res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
        desLabel2.x = size.width / 2 + 170;
        desLabel2.y = size.height / 2 - 200;
        desLabel2.color = cc.color(154, 70, 0);
        this.addChild(desLabel2);

        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.nextScene, this);
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2 + 300;
        menu.y = size.height / 2 - 200;
        this.addChild(menu);
        menu.visible = false;

        //监听图片选择事件
        // 创建一个事件监听器 OneByOne 为单点触摸
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,                        // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {        //实现 onTouchBegan 事件处理回调函数
                var target = event.getCurrentTarget();    // 获取事件所绑定的 target, 通常是cc.Node及其子类

                // 获取当前触摸点相对于按钮所在的坐标
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {        // 判断触摸点是否在按钮范围内
                    trace("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                // 移动当前按钮精灵的坐标位置
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();              //获取事件数据: delta
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数
                var target = event.getCurrentTarget();
                trace("sprite onTouchesEnded.. ");
                target.setOpacity(255);
                if (target == cake1) {
                    trace("fruit chosen.");
                    scenceRoute = 1;
                    cakeTp = "fruit";
                    var random = Math.random();
                    trace("random:" + random);
                    if (random >= 0.5) {
                        scenceRoute = 2;
                    }
                    cake1.scale = 1.0;
                    cake2.scale = 0.7;
                } else if (target == cake2) {
                    trace("fondant chosen.");
                    scenceRoute = 3;
                    cakeTp = "fondant";
                    cake1.scale = 0.7;
                    cake2.scale = 1.0;
                }
                trace("scenceRoute:" + scenceRoute);
                trace("cakeTp:" + cakeTp);
                menu.visible = true;
                //cc.director.runScene(new ChiefEngineerScene());
            }
        });

        // 添加监听器到管理器
        cc.eventManager.addListener(listener1, cake1);
        cc.eventManager.addListener(listener1.clone(), cake2);

        return true;
    },

    nextScene: function () {
        trace("nextScene clicked");
        cc.director.runScene(new ChiefEngineerScene());
        // cc.director.runScene(new cc.TransitionSplitCols(2, new PMScene()));
    }
});

var PMScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new PMLayer();
        this.addChild(layer);
    }
});


//---------------------产品经理选择蛋糕产品场景结束------------


//---------------------总工场景开始------------

var ChiefEngineerLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        //----------音量button
        var menuImage1 = new cc.MenuItemImage(res.BGM_png, res.BGM_png, res.BGM_png, shutBGM, this);
        menuImage1.scaleX = 0.2;
        menuImage1.scaleY = 0.2;
        var menu1 = new cc.Menu(menuImage1);
        menu1.x = size.width - size.width / 12;
        menu1.y = size.height * 5 / 6;
        this.addChild(menu1, 4);
        //forever旋转
        var kaixinAction = cc.rotateBy(5, 360);
        var kaixinActionRepeat = cc.repeatForever(kaixinAction);
        menuImage1.runAction(kaixinActionRepeat);


        var bg = new cc.Sprite(res.BackgroundBlue_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var role1 = new cc.Sprite(res.ZongGong_png);
        role1.x = size.width - 400;
        role1.y = 220;
        role1.scale = 0.7;
        this.addChild(role1);

        var role1Animation = new cc.Animation();
        role1Animation.addSpriteFrameWithFile(res.ZongGong_png);
        role1Animation.addSpriteFrameWithFile(res.ZongGong1_png);
        role1Animation.setDelayPerUnit(1 / 2);
        var role1Action = cc.animate(role1Animation);
        role1Action.repeatForever();
        role1.runAction(role1Action);


        var role2 = new cc.Sprite(res.XuQiu_png);
        role2.x = size.width - 200;
        role2.y = 220;
        role2.scale = 0.7;
        this.addChild(role2);


        var role2Animation = new cc.Animation();
        role2Animation.addSpriteFrameWithFile(res.XuQiu_png);
        role2Animation.addSpriteFrameWithFile(res.XuQiu1_png);
        role2Animation.setDelayPerUnit(1 / 2);
        var role2Action = cc.animate(role2Animation);
        role2Action.repeatForever();
        role2.runAction(role2Action);

        var qp2 = new cc.Sprite(res.SquareBackground_png);
        qp2.x = 300;
        qp2.y = size.height / 2 - 50;
        qp2.scale = 0.5;
        this.addChild(qp2);
        qp2.visible = false;


        var menuImage = new cc.MenuItemImage(res.G0_png, res.G0_png, res.G0_png, this.nextScene, this);
        var menu = new cc.Menu(menuImage);
        menu.x = size.width / 2 + 400;
        menu.y = size.height / 2 - 250;
        this.addChild(menu);
        menu.visible = false;

        setTimeout(function () {
            qp2.visible = true;
            var sayStr = "";
            if (cakeTp == "fruit") {
                trace("fruit say.");
                sayStr += "美味的蛋糕需要大家通力合作才能完成。将工作细分，每份工作分配给最合适的人，制作效率将大大增加。";
                sayStr += "水果蛋糕是我们强项，员工经验丰富，很多公共的材料可以用，效率杠杠的。";
            } else if (cakeTp == "fondant") {
                trace("fondant say.");
                sayStr += "翻糖蛋糕大家没有什么经验，我们特地协调总部请来的蛋糕师给大家培训，并组织专门的可行性验证。";
            }
            //var qp1Label = new cc.LabelTTF(sayStr, fontName, 46, cc.size(300, 400), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
            var qp2Label = new cc.LabelTTF(sayStr, fontName, 46, cc.size(500, 500), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
            //var qp2Label = new cc.LabelBMFont("需求评审通过", res.kaixin_flhe2_fnt, 200, cc.TEXT_ALIGNMENT_LEFT);
            qp2Label.x = 280;
            qp2Label.y = 260;
            qp2Label.color = cc.color(154, 70, 0);
            qp2.addChild(qp2Label);
            qp2Label.string = sayStr;

            menu.visible = true;
        }, 1000);

        return true;
    },

    nextScene: function () {
        trace("nextScene clicked");
        cc.director.runScene(new DevelopmentEmployeeScene());
    }
});

var ChiefEngineerScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ChiefEngineerLayer();
        this.addChild(layer);
    }
});


//---------------------总工场景结束------------




