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

function driversByRevenue(drvs){
  return drvs.sort(function(a,b){
    return a.revenue-b.revenue;
  });
}