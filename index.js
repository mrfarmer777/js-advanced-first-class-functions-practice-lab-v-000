// Code your solution in this file!
function logDriverNames(drvs){
  drvs.forEach(function(drv){
    console.log(drv.name);
  });
}

function logDriversByHometown(drvs,location){
  drvs.forEach(function(drv){
    if(drv.hometown===location){
      console.log(drv.name);
    }
  });
}