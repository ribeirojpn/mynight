var passport = require('passport');

module.exports = function (app) {
  app.get('/auth/facebook',
    passport.authenticate('facebook',{scope:'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook',{
      successRedirect:'/',
      failureRedirect:'#/auth'}));

  app.get('/auth/twitter',
    passport.authenticate('twitter',{scope:'photo'}));
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter',{
      successRedirect:'/',
      failureRedirect:'#/auth'}));

  app.get('/auth/google',
    passport.authenticate('google',{
    scope: ['https://www.googleapis.com/auth/plus.login','email']
  }));
  app.get('/auth/google/callback',
    passport.authenticate('google',{
      successRedirect:'/',
      failureRedirect:'#/auth'}));


  app.get('/logout',function (req,res) {
    req.logOut();
    res.redirect('/');
  })
}
