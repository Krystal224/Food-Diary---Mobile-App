var data = require("../data.json");
exports.addDiary = function(req,res){
    var foodName = req.body.foodName;
    var comments = req.body.comments;
    var taste = req.body.taste;
    var health = req.body.health;
    var mood = req.body.mood;
    var anxiety = req.body.anxiety;
    var date = req.body.date;
    var time = req.body.time;
    var userid = req.body.userid;
    for(var i=0; i<data.info.length;i++)
    {
      if(userid==data.info[i].id)
      {
          var newObject = {
        "foodName":foodName,
        "image":"/images/B1.jpg",
        "comments":comments,
        "date":date,
        "time":time,
        "taste":taste,
        "health":health,
        "mood":mood,
        "anxiety":anxiety
        };
        data.info[i].datas.unshift(newObject);
        return res.redirect('/diary/'+userid);
      }
    }

      //  data.info.push(newID);
      //  console.log(data.info[1]);
     // return res.redirect('/tab/diary');

}
