var express = require('express');
var router = express.Router();

/* GET users listing. */
//Tässä testataan HTTP requestia, GET!
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
    console.log("Kukkuluuruu!");
});

//Tässä kohdassa routeen lisätään Middleware, joka suoriutuu ennen
//ensimmäistä parametria ja deletoituu ennen sen toteutumista
router.use(function (request,response,next) {
console.log("Olen välivehje!!");
next();
});

//Tässä routeen lisätään ensimmäinen parametri
router.get ('/toka',function(request,response)
{
  response.send("Olenpa toka hyvinkin");
  console.log("Tokapa tietenkin");

});

//Tässä lisätään toinen Middleware
router.use(function (request,response,next) {
  console.log("Olen välivehje 2!!");
  next();
  });

//Tässä routeen lisätään toinen parametri, eli nimi, jonka saa komennolla
// /users/kolmas/'insert nimi'
router.get ('/kolmas/:nimi',function(request,response)
{
  response.send("Olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);

});

//Tässä lisätään kolmas parametri, millä voidaan tulosta sekä sukunimi
router.get ('/neljas/:enimi/:snimi',function(request,response)
{
  response.send("Olenpa vaan "+request.params.enimi+" "+request.params.snimi);
  //console.log(request.params.nimi);

});

//Tässä otetaan käyttöön POST, mitä voi käyttää ainoastaan Postman sovelluksella
router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
