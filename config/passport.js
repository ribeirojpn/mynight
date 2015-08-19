var mongoose = require('mongoose');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){

  var User = mongoose.model('User');

  passport.use(new FacebookStrategy({
    clientID: '497526977087283',
    clientSecret: 'c059fa812eb49748c0f5683da6df17be',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    // callbackURL: 'https://voted.herokuapp.com/auth/facebook/callback'||'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id','displayName','photos','emails']
  }, function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(
      {'login': profile.emails[0].value},
      {'name': profile.displayName,
      'photo': profile.photos[0].value},
      function (erro, user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);
      }
    )
  }));

  passport.use(new TwitterStrategy({
    consumerKey: 'K7IMkmsVSXdqcaTi7IVNJbGNH',
    consumerSecret: 'KSC5iltnm3Cy92dsfYNUXm0kTZNjlGLWYc5karCKoLGIdAfXN2',
    callbackURL: "http://localhost:3000/auth/twitter/callback",
    // callbackURL: 'https://voted.herokuapp.com/auth/twitter/callback' || "http://localhost:3000/auth/twitter/callback",
    profileFields: ['id','displayName','photos','username']
  }, function (token, tokenSecret, profile, done) {
    User.findOrCreate(
      {'login': profile.username},
      {'name': profile.displayName,
      'photo': profile.photos[0].value},
      function (erro, user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);
      }
    )
  }));

  passport.use(new GoogleStrategy({
    clientID: '113253359008-l7dt6f3ob0999k9jtdtvvig1fjj7eesk.apps.googleusercontent.com',
    clientSecret: 'Zv5NcgVwj1K4V8_q4xfGyTE2',
    callbackURL: "http://localhost:3000/auth/google/callback",
    // callbackURL: 'https://voted.herokuapp.com/auth/google/callback'|| "http://localhost:3000/auth/google/callback",
    profileFields: ['id','displayName','photos','emails']
  },function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(
      {'login': profile.emails[0].value},
      {'name': profile.displayName,
      'photo': profile.photos[0].value},
      function (erro, user) {
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null,user);
      }
    )
  }));

  passport.serializeUser(function (user,done) {
    done(null,user._id);
  });

  passport.deserializeUser(function (id,done) {
    User.findById(id).exec().then(function (user) {
      done(null,user);
    });
  });

}
