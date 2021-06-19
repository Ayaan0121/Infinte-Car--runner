//speed
ayaan=10;
ayaan1=10;
//canvas variable
canvas = document.getElementById("myCanvas");
//ctx variable
ctx=canvas.getContext("2d");
//ferrari size
ferrariWidth=120;
ferrariHeight=70;
//buggati size
BuggatiWidth=140;
BuggatiHeight=70;
//back ground image
marsIamge=["road.jpg","road_1.jpg","road_2.jpg","road_3.jpg","road_4.jpg"];
randomNum=Math.floor(Math.random() * 5);
bg_image=marsIamge[randomNum];
//ferrari image
ferrari_image="ferrari.png";
buggati_image="Buggati.png"

//position of ferrari
ferrariY=200;
ferrariX=10;
//position of ferrari
BuggatiY=430;
BuggatiX=10;
//function add
function add() {
    bg= new Image();
    bg.onload=uploadBackground;
    bg.src=bg_image;
    //for ferrari
    ro= new Image();
    ro.onload=uploadferrari;
    ro.src=ferrari_image;
     //for buggati
     ro2= new Image();
     ro2.onload=uploadBuggati;
     ro2.src=buggati_image;
}
//define upload bg 
function uploadBackground() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
//define upload ro
function uploadferrari() {
    ctx.drawImage(ro,ferrariX,ferrariY,ferrariWidth,ferrariHeight);
}
//define upload ro2
function uploadBuggati() {
    ctx.drawImage(ro2,BuggatiX,BuggatiY,BuggatiWidth,BuggatiHeight);
}
//key down
window.addEventListener("keydown",myKeydown);
//key down fun
function myKeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    //up
    if (keyPressed=='38') {
        up()
        console.log("up");
        }
//down
if (keyPressed=='40') {
    down()
    console.log("down");
}
//left
if (keyPressed=='37') {
    left();
    if (ferrariX == 760) {
        ferrariX =10;
        uploadBuggati();
        uploadferrari();
    }
    console.log("left");
}
//right
if (keyPressed=='39') {
    right();
    if (ferrariX == 760) {
        ferrariX =10;
        uploadBuggati();
        uploadferrari();
    }
    console.log("right");
}
//w
if (keyPressed=='87') {
    w()
    console.log("w");
    }
    //s
    if (keyPressed=='83') {
        s()
        console.log("s");
        }
        //a
    if (keyPressed=='65') {
        a();
        console.log("a");
        if (BuggatiX == 760) {
            BuggatiX=10;
            uploadBuggati();
            uploadferrari();
        }
        }
        //d
    if (keyPressed=='68') {
        d();
        console.log("d");
        if (BuggatiX == 760) {
            BuggatiX=10;
            uploadBuggati();
            uploadferrari();
        }
        }
        
                    }

//left fun
function left() {
    if (ferrariX >= 0) {
        ferrariX=ferrariX - AYAAN2;
        uploadBackground();
        uploadferrari();
        uploadBuggati();
        if (ferrariX == 760) {
            ferrariX =10;
            uploadBuggati();
            uploadferrari();
        }
    }
}

//right fun
function right() {
    if (ferrariX <= 780) {
        ferrariX=ferrariX + AYAAN2;
        uploadBackground();
        uploadferrari();
        uploadBuggati();
        if (ferrariX == 760) {
            ferrariX =10;
            uploadBuggati();
            uploadferrari();
        }
    }
}

//d fun
function d() {
    if (BuggatiX <= 760) {
        BuggatiX=BuggatiX + AYAAN;
        uploadBackground();
       uploadBuggati();
       uploadferrari();
       if (BuggatiX == 760) {
        BuggatiX=10;
        uploadBuggati();
        uploadferrari();
    }
    }
}
//a fun
function a() {
    if (BuggatiX >= 0) {
        BuggatiX=BuggatiX - AYAAN;
        uploadBackground();
       uploadBuggati();
       uploadferrari();
       if (BuggatiX == 760) {
        BuggatiX=10;
        uploadBuggati();
        uploadferrari();
    }
       
    }
}

//w
function w() {
AYAAN =ayaan + 5;
}

//s
function s() {
  AYAAN=ayaan - 5;
    }

    //up
function up() {
AYAAN2=ayaan1 + 5;
    }

    //down
function down() {
AYAAN2=ayaan1 - 5;
    }

    //unlimited
    

    