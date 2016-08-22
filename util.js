var path = require('path');
var fs=require('fs');

function getEntry(entryList) {
    var files = {},jsPath,dirs,matchs,entery;
    for(var i=0,len=entryList.length;i<len;i++){
      entery=entryList[i];
      jsPath = path.resolve("./", entery);
      dirs = fs.readdirSync(jsPath);
      matchs = [];
      dirs.forEach(function (item) {
          matchs = item.match(/(.+)\.js$/);
          if (matchs) {
              files[matchs[1]] = path.resolve("./",entery, item);
          }
      });
    }
    return files;
}

function getView(entryList){
  var files = {},jsPath,dirs,matchs,entery;
    for(var i=0,len=entryList.length;i<len;i++){
      entery=entryList[i];
      jsPath = path.resolve("./", entery);
      dirs = fs.readdirSync(jsPath);
      matchs = [];
      dirs.forEach(function (item) {
          matchs = item.match(/(.+)\.ejs$/);
          if (matchs) {
              files[matchs[1]] = path.resolve("./",entery, item);
          }
      });
    }
    return files;
}

module.exports = {
  getEntry:getEntry,
  getView:getView
}