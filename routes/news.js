var users = require('../data.json');
exports.show = function(req,res){
  var userid = req.params.name;
  var session = req.sessionID;
  var authentication = false;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){
      if(users.info[i].session==session){
          authentication =true;
          res.render('news',users.info[i]);
      }
    }
  }
  if(authentication==false){
      res.status(404).send();
  }
}
