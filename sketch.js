 var runner;
 var obss = [];
    function setup(){
        createCanvas(800, 450);
        runner = new Runner();
}

function keyPressed(){
    
    if(key == "space"){
         runner.jump();
}

}

 function draw(){
         if(random(1) < 0.007){
             obss.push(new Obs());
        }
         background(220)

         

         for(let o of obss){
            o.move();
            o.show();
            }
       
                                                            
         runner.show();
         runner.move();

} 

