// canvasのエレメントを取得
var canvas = document.getElementById("can1"); 

//ctxの値でキャンバス内に描画
var ctx = canvas.getContext("2d");
let x1=0; 
let x2=0;
let goal=0;
var img = new Image();//画像を取得

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//画面を初期化

    for (let xm=0; xm<2000; xm+=120) { //繰り返して複数を描画
        //木を描画
            if (xm<1000) {
                ctx.fillStyle = "brown";

            }else{ctx.fillStyle = "yellow";
            }
            
        
        ctx.fillRect(30 + xm + x2 ,180,50,120);
        //葉を描画
        if (xm<1000) {
                ctx.fillStyle = "green";
                
            }else{ctx.fillStyle = "red";
            }
        ctx.beginPath(); //初期化
        ctx.moveTo(60 + xm + x2,10); //開始座標
        ctx.lineTo(110 + xm + x2,180); //開始座標から1本目の線を引く
        ctx.lineTo(0 + xm + x2,180); //2本目の線を引く
        ctx.fill(); //間を塗りつぶす
        x2=x2-0.1;

    }; 
    
    img.onload = function(ev) {//画像を表示 
        if(x1>canvas.width && goal<2){
            x1=0;
            goal++;
        }else if(goal==2){
            ctx.font = '128px serif';
            ctx.fillText('GOAL!!', 150, 100);
        }

    ctx.drawImage(img,x1,175,150,150);
    }
    img.src ="meganeko.png"
    x1=x1+1;
    
    }
    

setInterval(draw, 10);





