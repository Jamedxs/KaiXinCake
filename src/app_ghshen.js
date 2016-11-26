//---------------------全局变量声明区域开始--------------------
//用户选择的角色，male和female
//var role = "male";


//测试和攻防相关
var hasShowZhifugou = false;
var left_time = 20;
var test_res_words_good = "由于大家通力配合,质检顺利,产品质量非常好！口味卖相极佳,可以提升售价,利润增长！";
var test_res_words_normal = "产品质量正常,质检合格,如期推向市场。\n口味好卖相佳，定价符合预期。";
var test_res_words_bad = "不得不反复检测,防止造成不良后果。\n决策小失误，导致产品质量差利润下降。";
var left_time_text = "还剩一点时间，建议把剩余的时间\n放在调整蛋糕口味上。";
var not_familiar_text = "由于蛋糕不熟悉，制作周期过短等缘故\n蛋糕质量不过关,制作人员不得不加紧\n调整蛋糕口味.";
var listen_text = "制作周期临近，决定让蛋糕制作人员和\n质检人员全力完成手头工作，下来带领\n员工听取和协调客户诉求。";
var gebi_text = "隔壁“支付狗蛋糕店”有一招牌产品“仰望星空派”\n是否重新制作一款类似产品？";
var daojishi_text = "倒计时(天)：";
var renlipeizhi_text = "人力配置：";
var dangaolirun_text = "蛋糕利润：";
var dangaoshuliang_text = "蛋糕数量：";
var lirunzengjia_text = "明智的决定，利润+5";
var lirunjianshao_text = "真是个令人沮丧的决定，可能会导致周期加倍，利润减半";
var fangong_text = "由于临时更换方案，蛋糕经过多轮反复，\n终于艰难推向市场。";

//---------------------测试和攻防场景开始------------
var TestCakeScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new TestCakeLayer();
        this.addChild(layer);
    }
});

var TestCakeLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;
        var parentNode = this;

        var bg = new cc.Sprite(res.BackgroundBlue_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg, 1);
        var timeBoard = addStatisticsBoard2(this, 100, size.height - 140);
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

        //测试人物
        var test_ces = new cc.Sprite(res.TestCakeCes_png);
        this.addChild(test_ces, 5);
        test_ces.x = size.width / 4 + 50;
        test_ces.y = size.height / 2;

        var csAnimation = new cc.Animation();
        csAnimation.addSpriteFrameWithFile(res.TestCakeCes_png);
        csAnimation.addSpriteFrameWithFile(res.TestCakeCes2_png);
        csAnimation.setDelayPerUnit(1 / 2);
        var csAction = cc.animate(csAnimation);
        csAction.repeatForever();
        test_ces.runAction(csAction);

        //蛋糕
        var test_cake;
        if (cakeTp == "fruit") {
            test_cake = new cc.Sprite(res.CakeFruit_png);
        } else {
            test_cake = new cc.Sprite(res.CakeSugar_png);
        }
        this.addChild(test_cake, 5);
        test_cake.scaleX = 0.6;
        test_cake.scaleY = 0.6;
        test_cake.x = size.width / 2;
        test_cake.y = size.height / 4 + 30;


        var cakeAction1 = cc.fadeOut(0.7, 0);
        var cakeAction2 = cc.fadeIn(0.7, 255);
        var cakeSequence = cc.sequence(cakeAction1, cakeAction2);
        var cakeAction = cc.repeatForever(cakeSequence);
        test_cake.runAction(cakeAction);

        //攻防人物
        var test_gf = new cc.Sprite(res.TestCakeCes2_png);
        this.addChild(test_gf, 5);
        test_gf.x = size.width - size.width / 4 - 50;
        test_gf.y = size.height / 2;

        var gfAnimation = new cc.Animation();
        gfAnimation.addSpriteFrameWithFile(res.TestCakeGf_png);
        gfAnimation.addSpriteFrameWithFile(res.TestCakeGf2_png);
        gfAnimation.setDelayPerUnit(1 / 2);
        var gfAction = cc.animate(gfAnimation);
        gfAction.repeatForever();
        test_gf.runAction(gfAction);

        //底部公告板
        var bottomBoard = new cc.Sprite(res.LabelBoardBottom_png);
        bottomBoard.x = size.width / 2;
        bottomBoard.y = bottomBoard.getContentSize().height / 2;
        bottomBoard.scaleX = 0.9;
        this.addChild(bottomBoard, 5);
        //2秒后加载检测结果
        bottomBoard.scheduleOnce(function () {
            if (!hasShowZhifugou) {

                if (scenceRoute == 1) {
                    cakeProfit += 5;
                    addLabelFunc(bottomBoard, test_res_words_good,
                        bottomBoard.getContentSize().width / 2, bottomBoard.getContentSize().height / 2);
                } else if (scenceRoute == 3) {
                    addLabelFunc(bottomBoard, test_res_words_bad,
                        bottomBoard.getContentSize().width / 2, bottomBoard.getContentSize().height / 2);
                } else {
                    addLabelFunc(bottomBoard, test_res_words_normal,
                        bottomBoard.getContentSize().width / 2, bottomBoard.getContentSize().height / 2);
                }
            } else {
                addLabelFunc(bottomBoard, test_res_words_bad,
                    bottomBoard.getContentSize().width / 2, bottomBoard.getContentSize().height / 2);
            }
        }, 1);
        //必然事件1：所剩事件不多，建议专心调整口味
        bottomBoard.scheduleOnce(function () {
            if (!hasShowZhifugou) {
                if (scenceRoute == 1) {
                    addEventAndAdvice(parentNode, 2, left_time_text, res.kaixin_ghshen1_fnt, function () {
                        this.removeFromParent(true);
                        addEventAndAdvice(parentNode, 1, lirunzengjia_text, res.kaixin_ghshen2_fnt, function () {
                            this.removeFromParent();
                            //showAlert(parentNode, "利润增长", res.kaixin_ghshen1_fnt, cc.color(0, 255, 0),
                            //   size.width / 8, size.height - size.height / 8);
                            //setTimeout(function () {
                            cakeProfit += 5;
                            //}, 2000);
                            setTimeout(function () {
                                startZhifufouEvent();
                            }, 3500);
                        });
                    }, function () {
                        this.removeFromParent(true);
                        startZhifufouEvent();
                    });
                } else if (scenceRoute == 3) {
                    addEventAndAdvice(parentNode, 2, not_familiar_text, res.kaixin_ghshen1_fnt, function () {
                        this.removeFromParent(true);
                        //showAlert(parentNode, "质量不过关\n利润下降", res.kaixin_ghshen1_fnt, cc.color(255, 0, 0),
                        //  size.width / 8, size.height - size.height / 8);
                        //setTimeout(function () {
                        cakeProfit -= 5;
                        //}, 3000);
                        setTimeout(function () {
                            startZhifufouEvent();
                        }, 3500);
                    });
                } else if (scenceRoute == 2) {
                    //startZhifufouEvent();
                    startRandomEvent();
                }
            } else {
                addEventAndAdvice(parentNode, 2, fangong_text, res.kaixin_ghshen1_fnt, function () {
                    this.removeFromParent(true);
                    setTimeout(function () {
                        cc.director.runScene(new SellScene());
                    }, 1500);
                });
            }

        }, 3);
        //必然事件2：支付狗事件
        var startZhifufouEvent = function () {
            if (!hasShowZhifugou) {
                setTimeout(function () {
                    //随机事件1：强行模仿支付狗，制作星空派
                    addEventAndAdvice(parentNode, 2, gebi_text, res.kaixin_ghshen2_fnt,
                        function () {
                            state = 3;
                            this.removeFromParent(true);
                            addEventAndAdvice(parentNode, 0, lirunjianshao_text, res.kaixin_ghshen2_fnt, function () {
                                this.removeFromParent(true);
                                //  showAlert(parentNode, "利润减半\n工期加倍", res.kaixin_ghshen2_fnt, cc.color(255, 0, 0),
                                //    size.width / 8, size.height - size.height / 8);
                                // setTimeout(function () {
                                cakeProfit = cakeProfit / 2;
                                cakeTime *= 2;
                                // }, 2000);
                                setTimeout(function () {
                                    cc.director.runScene(new DevelopmentReturnScene());
                                    totalTime = 5;
                                }, 4000);
                            });
                        }, function () {
                            state = 1;
                            this.removeFromParent(true);
                            startRandomEvent();
                        });
                }, 1500);
                hasShowZhifugou = true;
            } else {
                startRandomEvent();
                hasShowZhifugou = false;
                trace("hasShowZhifugou:" + hasShowZhifugou);
            }
        }
        //出现随机事件
        var startRandomEvent = function () {
            setTimeout(function () {
                var randInt1 = parseInt(2 * Math.random()) + 1;
                //事件2：聆听客户需求
                trace(randInt1);
                if (randInt1 == 1) {
                    addEventAndAdvice(parentNode, 2,
                        listen_text, res.kaixin_ghshen2_fnt, function () {
                            this.removeFromParent(true);
                            // showAlert(parentNode, "听取诉求\n工期减一", res.kaixin_ghshen2_fnt, cc.color(0, 255, 0),
                            //   size.width / 8, size.height - size.height / 8);
                            setTimeout(function () {
                                cakeTime -= 1;
                            }, 2000);
                            setTimeout(function () {
                                cc.director.runScene(new SellScene());
                            }, 2500);
                        });
                } else {
                    setTimeout(function () {
                        cc.director.runScene(new SellScene());
                    }, 1200);
                }
            }, 1500);
        }

        return true;
    }
});

//添加文本统一方法
var addLabelFunc = function (baseNode, labelStr, sizeX, sizeY, fontSize) {
    if (fontSize == null || fontSize == "" || fontSize == "undefined")
        fontSize = 35;
    var saySomeThing = new cc.LabelBMFont(labelStr, res.kaixin_ghshen1_fnt, 500, cc.TEXT_ALIGNMENT_LEFT);
    saySomeThing.x = sizeX;
    saySomeThing.y = sizeY;
    saySomeThing.scaleX = 1.2;
    saySomeThing.scaleY = 1.2;
    saySomeThing.opacity = 0;
    baseNode.addChild(saySomeThing);
    saySomeThing.runAction(cc.fadeIn(3, 255));
}

//添加菜单按钮通用方法
var addMenuItem = function (menuNameStr, bgImg, baseNode, sizeX, sizeY, callback) {
    var menuImage = new cc.MenuItemImage(bgImg, bgImg, bgImg, callback, baseNode);
    var menu = new cc.Menu(menuImage);
    menu.x = sizeX;
    menu.y = sizeY;
    baseNode.addChild(menu, 3);

    var menuLabel1 = new cc.LabelTTF(menuNameStr, "Arial", 20);
    menuLabel1.x = sizeX;
    menuLabel1.y = sizeY;
    baseNode.addChild(menuLabel1, 3);
}

//添加公告板
var addStatisticsBoard = function (baseNode, sizeX, sizeY) {
    //时间区域
    var time_limit = new cc.Sprite(res.LabelBoard_png);
    baseNode.addChild(time_limit, 2);
    time_limit.x = sizeX;
    time_limit.y = sizeY;
    //time_limit.scaleY = 1.5;
    //time_limit.scaleX = 1.2;
    //时间区域的定时刷新文本
    var sizeB = time_limit.getContentSize();
    var secondsM = 59;
    var titleLabel = new cc.LabelBMFont("23：59：" + secondsM + "\n\n" + dangaolirun_text + cakeProfit + "\n"
        + dangaoshuliang_text + cakeNum + "\n" + daojishi_text + totalTime + "\n" + renlipeizhi_text
        + totalEmployee, res.kaixin_nandl_fnt, 500, cc.TEXT_ALIGNMENT_LEFT);
    titleLabel.x = sizeB.width / 2;
    titleLabel.y = sizeB.height / 2;
    titleLabel.scaleX = 0.8;
    titleLabel.scaleY = 0.8;
    titleLabel.color = cc.color(12, 18, 145);
    time_limit.addChild(titleLabel, 3);
    titleLabel.schedule(function () {
        secondsM -= 1;
        if (totalTime <= 0) {
            totalTime = 0;
        }
        if (secondsM <= 0) {
            secondsM = 59;
        }
        titleLabel.string = "23：59：" + secondsM + "\n\n" + dangaolirun_text + cakeProfit + "\n"
            + dangaoshuliang_text + cakeNum + "\n" + daojishi_text + totalTime + "\n" + renlipeizhi_text
            + totalEmployee;
    }, 1);
    return time_limit;
}

//添加公告板
var addStatisticsBoard2 = function (baseNode, sizeX, sizeY) {
    var time_limit = new cc.Sprite(res.LabelBoard_png);
    baseNode.addChild(time_limit, 2);
    time_limit.x = sizeX;
    time_limit.y = sizeY;
    var sizeB = time_limit.getContentSize();
    var baseSize = baseNode.getContentSize();

    //, cc.size(300, 400), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_TOP
    var daojishiText = new cc.LabelTTF("倒计时/天", "Arial", 24);
    daojishiText.x = sizeB.width / 2;
    daojishiText.y = sizeB.height - 40;
    daojishiText.color = cc.color(255, 0, 0);
    time_limit.addChild(daojishiText, 9);

    var timeLeftText = new cc.LabelTTF(totalTime, "Arial", 64);
    timeLeftText.x = sizeB.width / 2;
    timeLeftText.y = sizeB.height - 90;
    timeLeftText.color = cc.color(255, 0, 0);
    time_limit.addChild(timeLeftText, 9);

    var colorLayerOrange1 = new cc.LayerColor(cc.color(248, 154, 27), 200, 33);
    time_limit.addChild(colorLayerOrange1, 8);
    colorLayerOrange1.x = -5;
    colorLayerOrange1.y = sizeB.height - 160;
    var dgLirunText = new cc.LabelTTF("蛋糕利润:" + cakeProfit, "Arial", 24);
    dgLirunText.color = cc.color(255, 255, 255);
    dgLirunText.x = 100;
    dgLirunText.y = 16.5;
    colorLayerOrange1.addChild(dgLirunText, 9);

    var colorLayerOrange2 = new cc.LayerColor(cc.color(248, 154, 27), 200, 33);
    time_limit.addChild(colorLayerOrange2, 8);
    colorLayerOrange2.x = -5;
    colorLayerOrange2.y = sizeB.height - 195;
    var dgSl = new cc.LabelTTF("蛋糕数量:" + cakeNum, "Arial", 24);
    dgSl.color = cc.color(255, 255, 255);
    dgSl.x = 100;
    dgSl.y = 16.5;
    colorLayerOrange2.addChild(dgSl, 9);

    var colorLayerOrange3 = new cc.LayerColor(cc.color(248, 154, 27), 200, 33);
    time_limit.addChild(colorLayerOrange3, 8);
    colorLayerOrange3.x = -5;
    colorLayerOrange3.y = sizeB.height - 230;
    var rlPz = new cc.LabelTTF("人力配置:" + totalEmployee, "Arial", 24);
    rlPz.color = cc.color(255, 255, 255);
    rlPz.x = 100;
    rlPz.y = 16.5;
    colorLayerOrange3.addChild(rlPz, 9);

    time_limit.schedule(function () {
        //daojishiText.string = "倒计时/天" + totalTime;
        timeLeftText.string = totalTime;
        if (cakeProfit > lastDglr) {
            time_limit.pause();
            colorLayerOrange1.color = cc.color(33, 211, 39);
            var addN = cakeProfit - lastDglr;
            lastDglr = cakeProfit;
            dgLirunText.string = "+" + addN;
        } else if (cakeProfit < lastDglr) {
            time_limit.pause();
            colorLayerOrange1.color = cc.color(255, 71, 71);
            var mN = lastDglr - cakeProfit;
            lastDglr = cakeProfit;
            dgLirunText.string = "-" + mN;

        }
        if (totalEmployee > lastEmply) {
            time_limit.pause();
            colorLayerOrange3.color = cc.color(33, 211, 39);
            var addN = totalEmployee - lastEmply;
            lastEmply = totalEmployee;
            rlPz.string = "+" + addN;
        } else if (totalEmployee < lastEmply) {
            time_limit.pause();
            var mN = lastEmply - totalEmployee;
            colorLayerOrange3.color = cc.color(255, 71, 71);
            lastEmply = totalEmployee;
            rlPz.string = "-" + mN;
        }
        if (cakeNum > lastDgSl) {
            time_limit.pause();
            var addN = cakeNum - lastDgSl;
            colorLayerOrange2.color = cc.color(33, 211, 39);
            lastDgSl = cakeNum;
            dgSl.string = "+" + addN;
        } else if (cakeNum < lastEmply) {
            time_limit.pause();
            var addN = lastDgSl - cakeNum;
            colorLayerOrange2.color = cc.color(255, 71, 71);
            lastDgSl = cakeNum;
            dgSl.string = "-" + addN;
        }
        setTimeout(function () {
            colorLayerOrange1.color = cc.color(248, 154, 27);
            colorLayerOrange2.color = cc.color(248, 154, 27);
            colorLayerOrange3.color = cc.color(248, 154, 27);
            dgLirunText.string = "蛋糕利润:" + cakeProfit;
            dgSl.string = "蛋糕数量:" + cakeNum;
            rlPz.string = "人力配置:" + totalEmployee;
            time_limit.resume();
        }, 3500);
    }, 1);

    return time_limit;
}


//添加事件统一方法
/*
 * baseNode  附加到的目标节点，通常是大背景Layer
 * eventText  板色面板中说的话
 * fontName  字体
 * delayMs 延迟时间，0表示立即出现，其他正数表示指定时间内渐渐隐现。
 * callback_yes  点击接受时回调函数，为null则不显示接受按钮。
 * callback_no   点击拒绝时回调函数，为null则不显示拒绝按钮。
 */
var addEventAndAdvice = function (baseNode, delayMs, eventText, fontName, callback_yes, callback_no) {
    var sizeB = baseNode.getContentSize();
    var aaLayer = new cc.LayerColor(cc.color(0, 0, 0), sizeB.width, sizeB.height);
    aaLayer.opacity = 178;
    baseNode.addChild(aaLayer, 6);
    var laySize = aaLayer.getContentSize();
    var pig = new cc.Sprite(res.TalkPig_png);
    pig.x = laySize.width / 8 + 40;
    pig.y = laySize.height / 2;
    pig.scaleX = 0.8;
    pig.scaleY = 0.8;
    aaLayer.addChild(pig, 1);

    var pigAnimation = new cc.Animation();
    pigAnimation.addSpriteFrameWithFile(res.TalkPig1_png);
    pigAnimation.addSpriteFrameWithFile(res.TalkPig2_png);
    pigAnimation.setDelayPerUnit(1 / 10);
    var pigAction = cc.animate(pigAnimation);
    pigAction.repeatForever();
    pig.runAction(pigAction);

    var boardToSay = new cc.Sprite(res.TalkBoard_png);
    boardToSay.x = laySize.width / 2 + sizeB.width / 8;
    boardToSay.y = laySize.height / 2;
    boardToSay.scaleX = 0.8;
    boardToSay.scaleY = 0.8;
    aaLayer.addChild(boardToSay, 1);

    var boardSize = boardToSay.getContentSize();
    var eventTextLabel = new cc.LabelBMFont(eventText, fontName, 500, cc.TEXT_ALIGNMENT_LEFT);
    eventTextLabel.x = boardSize.width / 2;
    eventTextLabel.y = boardSize.height / 2;
    eventTextLabel.scaleX = 1.5;
    eventTextLabel.scaleY = 1.5;

    eventTextLabel.color = cc.color(12, 18, 145);
    boardToSay.addChild(eventTextLabel, 1);
    baseNode.active = false;
    if (!isNull(callback_yes))
        addMenuItem("", res.OK_png, aaLayer, laySize.width - laySize.width / 8, laySize.height / 6, callback_yes);
    if (!isNull(callback_no))
        addMenuItem("", res.NO_png, aaLayer, laySize.width - laySize.width / 4, laySize.height / 6, callback_no);
    //if (isNull(delayMs) || delayMs != 0) {
    //  boardToSay.opacity = 0;
    //boardToSay.runAction(cc.fadeIn(delayMs, 255));
    //pig.opacity = 0;
    //pig.runAction(cc.fadeIn(delayMs, 255));
    //}
    return eventTextLabel;
}

var isNull = function (element1) {
    if (!element1 || typeof(element1) == "undefined" || element1 == '') {
        return true;
    }
    return false;
}

var showAlert = function (baseNode, textLabel, fontName, colorX, sizeX, sizeY) {
    var boardLittlle = new cc.Sprite(res.DeskWhileLittle_png);
    baseNode.addChild(boardLittlle, 5);
    var size = baseNode.getContentSize();
    boardLittlle.x = size.width / 2;
    boardLittlle.y = size.height / 2;
    boardLittlle.scaleX = 2;
    boardLittlle.scaleY = 2;
    var saySomeThing = new cc.LabelBMFont(textLabel, fontName, 500, cc.TEXT_ALIGNMENT_LEFT);
    boardLittlle.addChild(saySomeThing, 5);
    var bsize = boardLittlle.getContentSize();
    saySomeThing.x = bsize.width / 2;
    saySomeThing.y = bsize.height / 2;
    saySomeThing.scaleX = 0.8;
    saySomeThing.scaleY = 0.8;
    saySomeThing.color = colorX;
    boardLittlle.runAction(cc.fadeOut(2, 60));
    saySomeThing.runAction(cc.fadeOut(2, 60));
    boardLittlle.runAction(cc.scaleTo(2, 0.1, 0.1));
    boardLittlle.runAction(cc.moveTo(2, sizeX, sizeY));

}

