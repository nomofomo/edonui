var fs = require('fs');

var configpath = '/home/hseldon/';
var configs = {
  bitcoin:{},
  litecoin:{},
  blackcoin:{},
  gridcoinresearch:{}
};
var raw = {
  bitcoin:[],
  litecoin:[],
  blackcoin:[],
  gridcoinresearch:[]
};
function getRaw(cb) {
  for(var coin in configs){
    var path = configpath+'.'+coin+'/'+coin+'.conf';
    if(coin == 'gridcoinresearch'){ path = configpath+'.GridcoinResearch/'+coin+'.conf'; }
    raw[coin] = fs.readFileSync(path).toString().split("\n");
  }
  cb();
}

function getConfigs(cb) {
  getRaw(function () {
    for(var coin in raw){
      var data = raw[coin];
      //console.log(data);
      if(coin == 'gridcoinresearch'){
        data.forEach(function(item,index){
          //console.log(item);
          if(item.substring(0,1) !='p'){
            var obj = item.split('=');
            if(obj[1] != undefined){
              configs[coin][obj[0]] = obj[1].replace('\r',"");
            }
          }
        });
      }else{
        data.forEach(function(item,index){
          //console.log(index,item);
          if(item != ''){ var obj = item.split('=');
            configs[coin][obj[0]] = obj[1];
          }
        });
      }
    }
    cb();
  });
}
getConfigs(function(){
  console.log(configs);
});
