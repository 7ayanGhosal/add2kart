var HOMELINK = 'http://salty-forest-66171.herokuapp.com/';
var request = require('request')
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var emailid = 'assist.add2kart@gmail.com';
var emailpass = 'coltismyname';
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailid,
    pass: emailpass
  }
});

var mailtext1 =
//  "<div style='height = 2em; padding-top:0.2em text-align:center'><a style='margin:auto' href='"+HOMELINK+"/'><span style = 'color:lightskyblue;font-size:0.8em;text-decoration: underline;text-decoration: overline #acf570;font-weight:400;'>add</span><img style='width:1.8em;height:1.8em;' src ='https://pngimage.net/wp-content/uploads/2018/06/png-2-5.png'><span style='color:red;font-size:1.1em;font-weight:800;'>kart</span></a></div><hr>"
// +
"<div style='background: #deeaee; padding:20px;border-radius:5px; text-align:center; width:65vw; margin:auto'><a style='margin:auto;text-decoration:none' href='"+HOMELINK+"/'><span style = 'color:lightskyblue;font-size:1.2em;text-decoration:overline #acf570;font-weight:400;'>add</span><img style='width:1.6em;height:2.5em;' src ='https://pngimage.net/wp-content/uploads/2018/06/png-2-5.png'><span style='color:red;font-size:1.6em;font-weight:800;'>kart</span></a>"+"<h3>Hi  ";
 var mailtext2 = "</h3><p>To complete your sign up, please verify your email :</p>"+"<div class='button' style='margin:10px auto;text-align:center;background:royalblue;padding-top:5px;padding-bottom:4px;width:45vw;max-width:500px;border-radius:5px;'><a style='color:white;text-decoration:none;font-weight:700;margin:auto' href ='"+HOMELINK+"/verify/";
 var mailtext3 = "'>Click HERE</a></div>"+"<p>Or copy this link and paste in your web browser</p><a style='margin:10px auto; text-decoration:none' href ='"+HOMELINK+"/verify/"
 var mailtext4 ="'>"+HOMELINK+"/verify/"
 var mailtext5 = "</a><p>Cheers,<p><b>The add2kart Team</p></div>";




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(process.env.PORT||3000,process.env.IP,function(){
    console.log("Server Started");
})

var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://add2kart:coltismyname@cluster0-zntgd.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

var userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    birthday: Date,
	verified: Boolean,
	zip:Number,
	city:String,
	address: String
});

//------------------------------------------------MODEL
var User = mongoose.model("User", userSchema);

var categorySchema = new mongoose.Schema({
    row: Number,
	col: Number,
	elements: Array
});

//------------------------------------------------MODEL
var Category = mongoose.model("Category", categorySchema);


//restful routes
app.get("/",function(req,res){
	res.render("home.ejs", {login: false, user: null});
});

//index route;

////////////////////////////////////////////////////////////////////////////////////////////  LOGIN
app.post("/", function(req, res){
	var email = req.body.userEmail;
    var password = req.body.userPass;
	User.find({email: email, password:password}, function(err, foundUser){
		if(foundUser.length == 0){
			res.redirect("/");
		}
		else{
			if(foundUser[0].verified)
				res.render("home.ejs", {login: true, user: foundUser[0]});
			else{
				res.send("Please Verify your account");
			}
		}
	})
});

app.post("/signup", function(req, res){
	var name = "Not provided";
    var surname = "";
	var address = "Not provided";
    var email = req.body.userEmail;
    var password = req.body.userPass;
    var birthday = Date(01, 01, 2000);
	var zip = 777777;
	var city = "Not provided";
	var verified = false;
    var newUser = {name: name, surname:surname, email: email, address:address , password: password, birthday: birthday, verified: verified, zip:zip, city:city};
    //check if user already exists
    User.find({email: email}, function(err, foundUser){
        var len = foundUser.length;
        if(err){
            console.log("Error in user find signup");
        }
        else if(len == 0||true){
            User.create(newUser, function(err, user){
				if(err){
                    console.log("ERROR IN SIGNUP");
                }
                else{
					//send verification link
					var mailOptions = {
					  from: emailid,
					  to: email,
					  subject: 'Account Verification',
						html:mailtext1+email+mailtext2+email+mailtext3+email+mailtext4+email+mailtext5
					};

					transporter.sendMail(mailOptions, function(error, info){
					  if (error) {
						console.log("error in transporter :"+error);
					  } else {
						console.log('Email sent: ');
					  }
					});
                    res.redirect("/");
                }
            })
        }
        else{
            res.redirect("/");
        }
    })
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////verification

app.get("/verify/:email", function(req, Res){
	var email = req.params.email;
	var myquery = {email: email};
	var newvalues = {verified: true};
	User.find(myquery, function(err, foundUser){
		if(foundUser.length == 0)
			Res.redirect("/");
		else if(foundUser[0].verified)
			Res.redirect("/");
		else{
			User.updateOne(myquery, newvalues, function(err, res){
				if(err){
					console.log("Error in verification");
					Res.send("You are not a registered user, please visit our website and fill the 'SignUP' form");
				}
				else{
					request.post({
					  headers: {'content-type' : 'application/x-www-form-urlencoded'},
					  url:     HOMELINK+'/',
					  form:    { userEmail: foundUser[0].email, userPass:foundUser[0].password }
					}, function(error, response, body){
					  Res.send(body);
					});					
				}
			})
		}
	})
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CATCH CATEGORY
app.get("/category/:row/:col", function(req, Res){
	var row = req.params.row;
	var col = req.params.col;

	var myquery = {row: row, col: col};
	Category.find(myquery, function(err, foundCat){
		if(foundCat.length == 0)
			Res.redirect("/");
		else{
			Res.render("items.ejs",{cat: foundCat[0]});
		}
	})
});


app.post("/update-info/:email", function(req, Res){
	var email = req.params.email;
	var password = req.body.password;
	var address = req.body.address;
	var name = req.body.name;
	var surname = req.body.surname;
	var birthday = req.body.birthday;
	var myquery = {email: email};
	var zip = req.body.zip;
	var city = req.body.city;
	var newvalues = {password:password, address:address, birthday:birthday, name:name, surname:surname, zip:zip, city:city};
	User.updateOne(myquery, newvalues, function(err, res){
		if(err){
			Res.redirect("/");
		}
		else{
			request.post({
			  headers: {'content-type' : 'application/x-www-form-urlencoded'},
			  url:     HOMELINK+'/',
			  form:    { userEmail: email, userPass:password }
			}, function(error, response, body){
			  Res.send(body);
			});					
		}
	})
});









app.get("/images", function(req, res){
	Category.find({}, function(err, foundCat){
		if(foundCat.length == 0){
			res.redirect("/");
		}
		else{
			res.render("image.ejs", {category: foundCat});
		}
	})
});


app.get("/tmp", function(req, res){
	Category.find({}, function(err, foundCat){
		if(foundCat.length == 0){
			res.redirect("/");
		}
		else{
			res.render("tmp.ejs");
		}
	})
});