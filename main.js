mustache_x=0;
mustache_y=0;



canvas=document.getElementById("canvas").value;
function preload(){
    mustache= loadimage('https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?s=612x612'))
}




function setup(){
canvas.width="300";
canvas.height="300";
canvas.center();
video.createcapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet('pose',gotPoses)
}

function modelloaded(){
console.log("poseNet is initialized")
}

function gotposes(result){
if(result.length>0){
console.log(result);
mustache_x=result[0].pose.mustache.x;
mustache_y=result[0].pose.mustache.y;
console.log("mustache x"+ mustache_x)
console.log("mustache y"+ mustache_y)
}
}


function draw(){
Image(video,0,0,300,300)
Image(mustache,mustache_x,mustache_y,30,30)
}

function take_snapshot() {
    save("snap.png");
    }