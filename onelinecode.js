document.body.innerHTML+='<canvas id="board" width="600px" height="600px" onmousedown = "boardmousedown()" onmousemove = "boardmousemove(event)" onmouseout = "boardmouseout(event)" onmouseup = "boardmouseup(event)" ></canvas>'+
        '<div class="btn">'+
            '<input type="color" class="color" onchange="colorchange()">'+
            '<input type="button" value="清屏" class="clear" onclick="clearclick()">'+
            '<input type="button" value="撤销" class="reset" onclick="resetclick()">'+
            '<input type="button" value="橡皮" class="eraser" onclick="eraserclick()">'+
        '</div>'+
' .board {width: 600px;height: 300px;border: 2px solid yellowgreen;border-radius: 10px;box-shadow: 2px 0px 5px #666;margin: 10px 0 0 10px;cursor: pointer;}'+
' .btn {width: 610px;height: 35px;margin: 10px 0 0px 10px;position: relative;}'+
' .btn input {border: none;outline: none;width: 100px;height: 35px;vertical-align: middle;margin-right: 10px;border-radius: 10px;background-color: chartreuse;}'+
' .btn input[type="color"]::-webkit-color-swatch-wrapper {padding: 0px;}'+
' .btn input[type="color"]::-webkit-color-swatch {border: 3px solid chartreuse;border-radius: 10px;}'+
' .btn input[type="range"] {padding: 0 5px;-webkit-appearance: none;background-color: chartreuse;}'+
' .btn input[type="range"]::-webkit-slider-thumb {-webkit-appearance: none;width: 10px;height: 10px;background-color: #fff;border-radius: 50%;margin-top: -4px;}'+
' .btn input[type="range"]::-webkit-slider-runnable-track {width: 90px;height: 2px;background-color: #666;}'

var $board = document.getElementById('board'); //jquery对象与dom对象转换
var ctx = $board.getContext("2d"); //创建画布对象
var bool = false;
var left = $board.offset().left; //获取画布的left值
var top = $board.offset().top; //获取画布的top值
var canvasW = $board.width(); //获取画布的宽度
var canvasH = $board.height(); //获取画布的高度
var img = []; //用于存放画布图片截图的数组
 

// draw();
ctx.lineCap = "round"; //设置线条的结束端点样式
ctx.lineJion = "round"; //设置两条线相交时，所创建的拐角类型
function boardmousedown(e) {
    bool = true;
    ctx.beginPath(); //起始/重置一条路径
    ctx.moveTo(e.clientX - left, e.clientY - top); //把路径移动到画布中的指定点，不创建线条
    var pic = ctx.getImageData(0, 0, canvasW, canvasH); //获取当前画布的图像
    img.push(pic); //将当前图像存入数组
    // ctx.moveTo(e.clientX, e.clientY);
}
function boardmousemove(e) {
    console.log(bool);
    if (bool) {
        // ctx.lineTo(e.clientX, e.clientY);
        ctx.lineTo(e.clientX - 10, e.clientY - 10); //添加一个新点，在画布中创建从该点到最后指定点的线条
        ctx.stroke();
    }
};
function boardmouseout(e) {
    ctx.closePath(); //当鼠标移出画布区域时,创建从当前点回到起始点的路径
    bool = false;
}
function boardmouseup(e) {

    ctx.closePath(); //当鼠标抬起时,创建从当前点回到起始点的路径
    bool = false;
}
function clearclick() {
    ctx.clearRect(0, 0, canvasW, canvasH); //创建一个等大画布覆盖
};
function resetclick() {
    if (img.length > -1) {
        ctx.putImageData(img.pop(), 0, 0); //删除图像数组最后一位
    }
}
function eraserclick() {
    ctx.strokeStyle = "#fff";
}
function colorchange() {
    ctx.strokeStyle = this.value; //改变颜色
};


