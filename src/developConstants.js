/**
 * Created by dengxusheng on 16/11/24.
 */


//状态
var state = 1;
//蛋糕选择后场景路线 水果蛋糕 路线=1   水果蛋糕 路线=2   翻糖蛋糕 路线=3
var scenceRoute = 3;
//游戏剩余天数
var totalTime = 10;
var totalEmployee = 20;
//迎接领导搞卫生 随机事件是否发生
var randomEventOne = false;
//新店开展,业务不熟练 随机事件是否发生
var randomEventTwo = false;
//杭州走访 随机事件是否发生
var randomEventThree = false;
//静音是否
var silence = false;
//蛋糕数量
var cakeNum = 100;
//蛋糕利润
var cakeProfit = 100;
//员工数量
var empNum = 12;
//总周期
var cakeTime = 10;

var lastDglr = cakeProfit;
var lastDgSl = cakeNum;
var lastEmply = totalEmployee;
