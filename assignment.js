//NO 1- FEET TO MILE

function feetToMile(feet){
    
    var mile = Math.round(feet/5280);
    return mile;
  }
  
  var result =  feetToMile(50000);
  console.log(result);
  
  
  //NO 2- CALCULATION OF REQUIRED WOOD FOR CHAIR,TABLE & BED.
  
  function woodCalculator(chair, table, bed){
        if(chair>0 && table >0 && bed> 0){
            var woodForChair = chair*1;
            var woodForTable = table*3;
            var woodForBed = bed*5;
            
            var total = woodForChair + woodForTable + woodForBed;
            return total;
        }  
        else {
            return "The number of chair, table and bed cannot be negative!";
           }
  }
   var result1 =  woodCalculator(12, 8, 4);
   var result2 =  woodCalculator(16, 5, 5);
   var result3 =  woodCalculator(10, 5, 2);
   var result4 =  woodCalculator(20, 8, 1);
   var result4 =  woodCalculator(0, -8, -5);
   console.log(result1, result2, result3, result4);
  
  
  //N0 3-  CALCULATION OF REQUIRED BRICK OF A SPECIFIC FLOOR.
  
  function brickCalculator(floor){
  
    for(let i=1; i<=floor; i++){
        if(i>0 && i<=10){
            var totalBrick = i*15*1000;
        }

        else if(i>=11 && i<=20){
            var totalBrick = i*12*1000;
    
        }
        else if(i>=21){
            var totalBrick = i*10*1000;
        }
        
    }
    return totalBrick;
   
  }
  var result =  brickCalculator(50);
  console.log("There will need:",  result, "bricks");
  
  
  
  // NO 4- FIND SMALLEST NAME.
  
  function tinyFriend(name) {
    var shortLength = Infinity;
    var smallest = " ";
  
    if (name.length > 0) {
        for (let i = 0; i < name.length; i++) {
            if (name[i].length < shortLength) {
                smallest = name[i];
                shortLength = name[i].length;
            }
        }
    }
    return smallest;
  }
  
  var result = tinyFriend([ 'HASNAT', 'SAGAR', 'APU', 'FAYSAL', 'HIMON']);
  console.log(result);