var users = require('../data.json');
exports.viewSetting = function(req,res){
  var userid = req.params.name;
  var session = req.sessionID;
  var authentication = false;
  console.log(session);
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){
      //if(users.info[i].session==session){
        authentication = true;
          res.render('setting',users.info[i]);
    //  }
    }
  }
  if(authentication == false){
    res.status(404).send();
  }


}