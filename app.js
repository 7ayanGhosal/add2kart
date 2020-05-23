var HOMELINK = 'https://add2kart.herokuapp.com';
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
"<div style='background: linear-gradient(#4286f4, #373B44); padding:20px;border-radius:5px; text-align:center; width:65vw; margin:auto; color:white'>"+"<span style='color:white; font-size:1.4em; margin-right:-3px; text-decoration:overline white'>add</span><img src ='https://cdn.pixabay.com/photo/2016/02/05/15/12/two-1181082_960_720.png' style='width:2.9em; height:2.9em; margin-top:-10px;'><span style='margin-left:-6px; color:white; font-size:2em; font-weight:600;'>kart</span>"+
	"<hr style='border: 0; height: 1px; background-image: linear-gradient(to right, #f0f0f0, #00b9ff, #59d941, #f0f0f0);'>"
	+"<h3 style='color: orangered'>Hi  ";
 var mailtext2 = "</h3><p>To complete your sign up, please verify your email :</p>"+"<div class='button' style='margin:10px auto;text-align:center;background:orangered;padding-top:5px;padding-bottom:4px;width:45vw;max-width:500px;border-radius:5px; color:white'><a style='text-decoration:none;font-weight:700;margin:auto; color:white;' href ='"+HOMELINK+"/verify/";
 var mailtext3 = "'>Click HERE</a></div>"+"<p>Or copy this link and paste in your web browser</p><a style='color:orangered; margin:10px auto; text-decoration:none' href ='"+HOMELINK+"/verify/"
 var mailtext4 ="'>"+HOMELINK+"/verify/"
 var mailtext5 = "</a><hr style='border: 0; height: 1px; background-image: linear-gradient(to right, #f0f0f0, #00b9ff, #59d941, #f0f0f0);'><p style='color:lightgrey'>Cheers,<p><b>The add2kart Team</p></div> <p style='color:red;'>MADE WITH ❤️ BY AYAN & SOHAM (BE,IT @JU)</p><p>(THIS IS JUST A PROJECT WORK ,PLEASE IGNORE THIS EMAIL IF WE MAILED THE WRONG PERSON.)</p>";


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
	address: String,
	balance:Number,
	cart:Array,
	cartValue:Number,
	orders:Array
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
	res.render("home.ejs", {login: false, user: null, message:null});
});



//------------------------CONTACT SCHEMA

var reviewSchema = new mongoose.Schema({
    name: String,
	email: String,
    message:String
});

var Review=mongoose.model("Review",reviewSchema);


//index route;

////////////////////////////////////////////////////////////////////////////////////////////  LOGIN
app.post("/", function(req, res){
	var email = req.body.userEmail;
    var password = req.body.userPass;
	User.find({email: email, password:password}, function(err, foundUser){
		if(foundUser.length == 0){
			// res.redirect("/");
			res.render("home.ejs", {login: false, user: null, message:"Wrong Email-ID / Password ! contact support..."});
		}
		else{
			if(foundUser[0].verified){
				res.render("home.ejs", {login: true, user: foundUser[0], message:"Welcome to add2kart!"});
			}
			else{
				// res.send("Please Verify your account");
				res.render("home.ejs", {login: false, user: null, message:"Account verification link has been sent to your Email-ID, please verify it to proceed further."});
			}
		}
	})
});
///////////////////////////////////////////////////////////////////////////////////////////SIGNUP
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
	var balance = 100000;
	var cart = [];
	var cartValue = 0;
    var newUser = {name: name, surname:surname, email: email, address:address , password: password, birthday: birthday, verified: verified, zip:zip, city:city , balance:balance, cart:cart, cartValue:cartValue};
    //check if user already exists
    User.find({email: email}, function(err, foundUser){
        var len = foundUser.length;
        if(err){
            console.log("Error in user find signup");
			res.redirect("/");
        }
        else if(len == 0){
            User.create(newUser, function(err, user){
				if(err){
                    console.log("ERROR IN SIGNUP");
					res.redirect("/");
                }
                else{
					//send verification link
					var mailOptions = {
					  from: emailid,
					  to: email,
					  subject: 'Account Verification',
						html:mailtext1+"<span style='color:orangered; background:lightgrey; padding:2px; border-radius:20px;'>"+email+"</span>"+mailtext2+email+mailtext3+email+mailtext4+email+mailtext5
					};

					transporter.sendMail(mailOptions, function(error, info){
					  if (error) {
							console.log("error in transporter :"+error);
						  	res.redirect("/");
					  } else {
							res.render("home.ejs", {login: false, user: null, message:"Account verification link has been sent to your Email-ID, please verify it to proceed further."});
					  }
					});
                    res.redirect("/");
                }
            })
        }
        else{
            res.render("home.ejs", {login: false, user: null, message:"Account with that Email-ID already exists, CONTACT SUPPORT!!!"});
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
					Res.render("home.ejs", {login: false, user: null, message:"You are not a registered user, please visit our website and fill the 'SignUP' form."});
					// Res.send("You are not a registered user, please visit our website and fill the 'SignUP' form");
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
app.post("/category/:row/:col", function(req, Res){
	var row = req.params.row;
	var col = req.params.col;
	var email = req.body.email;
	var password = req.body.password;
	var userquery = {email:email, password:password};
	var catquery = {row: row, col: col};
	if(email == "null"){
		Category.find(catquery, function(err, foundCat){
			if(foundCat.length == 0)
				Res.redirect("/");
			else{
				Res.render("items.ejs",{login:false, user:null, cat: foundCat[0], message:null});
			}
		});
	}else
	{
		User.find(userquery, function(err, foundUser){
			if(err){
				console.log("ERROR IN POST ROUTE CATEGORY");
				Res.redirect('/');
			}
			else{
				Category.find(catquery, function(err, foundCat){
					if(foundCat.length == 0)
						Res.redirect("/");
					else{
						Res.render("items.ejs",{login:true, user:foundUser[0], cat: foundCat[0], message:null});
					}
				})
			}
		})
	}	
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

///////////////////////////////////////////////////////////////////////////////////////////ADD TO CART
app.post("/add-to-cart/:row/:col", function(req, res){
	var row = req.params.row;
	var col = req.params.col;
	var email = req.body.email;
	var password = req.body.password;
	var title = req.body.title;
	var price = req.body.price;
	var image = req.body.image;
	var quantity = 1;
	var cart = [];
	var userquery = {email:email, password:password};
	var catquery = {row: row, col: col};
	User.find(userquery,function(err, foundUser){
		if(err){
			console.log("ERROR IN ADD TO CART POST REQ");
			res.redirect('/');
		}
		else
		{
			if(foundUser.length == 0){
				Category.find(catquery, function(err, foundCat){
					if(foundCat.length == 0)
						res.redirect("/");
					else{
						res.render('items.ejs', {login: false, user: null, cat: foundCat[0], message:'YOU NEED TO LOGIN FIRST!!!'});
					}
				})
			}
			else if(foundUser.length == 1)
			{
				cart = foundUser[0].cart;
				cart.forEach(function(item){
					if(item.title == title){
						item.quantity += quantity;
						quantity -= 1;
						foundUser[0].cart = cart;
						foundUser[0].cartValue += Number(price.slice(1));
					}
				})
				if(quantity == 1){
					cart.push({title:title, price:price, image:image, quantity:quantity});
					foundUser[0].cart = cart;
					foundUser[0].cartValue += Number(price.slice(1));
				}
				User.updateOne(userquery, {cart:cart, cartValue: foundUser[0].cartValue}, function(err, Res){
					if(err){
						console.log("ERROR IN CART UPDATION!");
						res.redirect('/');
					}
					else
					{
						Category.find(catquery, function(err, foundCat){
							if(foundCat.length == 0)
								res.redirect("/");
							else{
								res.render("items.ejs",{login:true, user:foundUser[0], cat: foundCat[0], message:"Added to cart!"});
							}
						})
					}
				})
			}
			else{
				console.log("MORE THAN ONE USER!!!");
				res.redirect('/');
			}
		}
	})
});


/////////////////////////////////////////////////////////////////save changes to cart
app.post("/saved-to-cart", function(req, res){
	var quantity = req.body.quantity;
	    quantity = quantity.slice(1, quantity.length-2);
	    quantity = quantity.split(',');
	var email = quantity[0];
	var password = quantity[1];
	quantity = quantity.slice(2);
	var userquery = {email:email, password:password};
	var cartValue = 0;
	User.find(userquery,function(err, foundUser){
		if(err){
			console.log("ERROR IN SAVE TO CART POST REQ");
			res.redirect('/');
		}
		else
		{
			if(foundUser.length == 0){
				res.redirect("/");
			}
			else if(foundUser.length == 1)
			{
				cart = foundUser[0].cart;
				for(var i=0; i<cart.length;){
					cart[i].quantity = Number(quantity[i]);
					if(cart[i].quantity == 0){
						cart.splice(i,1);
					}
					else{
						cartValue += cart[i].quantity * Number(cart[i].price.slice(1));
						i++;
					}
				}
				foundUser[0].cartValue = cartValue;
				User.updateOne(userquery, {cart:cart, cartValue: cartValue}, function(err, Res){
					if(err){
						console.log("ERROR IN CART UPDATION!");
						res.redirect('/');
					}
					else
					{
						res.render("home.ejs", {login: true, user: foundUser[0], message:"Changes Saved to cart"});
					}
				})
			}
			else{
				console.log("MORE THAN ONE USER!!!");
				res.redirect('/');
			}
		}
	})
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BUY
app.post("/order-placed", function(req, res){
	var name = req.body.name;
    var surname = req.body.surname;
	var address = req.body.address;
    var email = req.body.email;
    var password = req.body.password;
	var zip = req.body.zip;
	var city = req.body.city;
    var order = {name: name, surname:surname, email: email, address:address , password: password, zip:zip, city:city, cart:[], amount:0};
	var userquery = {email:email, password:password};
	// console.log(userquery);
	User.find(userquery,function(err, foundUser){
		if(err){
			console.log("ERROR IN BUY");
			res.redirect('/');
		}
		else
		{
			if(foundUser.length == 0){
				res.redirect("/");
			}
			else if(foundUser.length == 1)
			{
				if(foundUser[0].cartValue == 0){
					res.render("home.ejs", {login: true, user: foundUser[0], message:"ADD SOMETHING TO CART!!"});

				}
				else if(foundUser[0].balance < foundUser[0].cartValue){
					res.render("home.ejs", {login: true, user: foundUser[0], message:"INSUFFICIENT ACCOUNT BALANCE!!"});
				}
				else{
					order.amount = foundUser[0].cartValue;
					order.cart = foundUser[0].cart;
					foundUser[0].orders.push(order);
					foundUser[0].cart = [];
					foundUser[0].cartValue = 0;
					foundUser[0].balance = foundUser[0].balance - order.amount;
					User.updateOne(userquery, {cart:[], cartValue: 0, orders: foundUser[0].orders, balance:foundUser[0].balance}, function(err, Res){
						if(err){
							console.log("ERROR IN BUY UPDATE!");
							res.redirect('/');
						}
						else
						{
							//MAIL INVOICE
							var mailOptions = {
							  from: emailid,
							  to: email,
							  subject: 'ORDER PLACED',
								html:mailtext1+"<span style='color:orangered; background:lightgrey; padding:2px; border-radius:20px;'>"+email+"</span>"+"</h3>"+"<p style='text:center;'>INVOICE</p>"+"<p>NAME : "+name+" "+surname+"</p>"+"<p>ADDRESS: "+address+"</p>"+"<p>CITY: "+city+"</p>"+"<p>ZIP: "+zip+"</p>"+"<p>TOTAL AMOUNT: "+order.amount+"</p>"+"<p>THANK YOU FOR SHOPPING WITH add2kart!</p>"+mailtext5
							};

							transporter.sendMail(mailOptions, function(error, info){
							  if (error) {
									console.log("error in transporter :"+error);
									res.redirect("/");
							  } else {
									res.render("invoice.ejs", {login: true, user: foundUser[0], message:null, order:order});
							  }
							});
						}
					})
				}
			}
			else{
				console.log("MORE THAN ONE USER!!! in buy");
				res.redirect('/');
			}
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

///////////////////////////////////////////////////////////////////////////////////CONTACT
app.post("/review",function(req,res){
	var name=req.body.name;
	var email=req.body.email;
	var message=req.body.message;
	var newData = {name:name,email:email,message:message};
	Review.create(newData,function(err,review){
		if(err)
			{
				console.log(err);
				res.redirect('/');
			}
		else{
			// console.log(review);
			res.render('home.ejs', {login: false, user: null, message:'Thank You! For being a part of add2kart :") '});
		}
	});
});
