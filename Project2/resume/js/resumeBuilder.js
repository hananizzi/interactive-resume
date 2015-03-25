var formattedName = HTMLheaderName.replace("%data%","Hana Dickman");
var formattedRole = HTMLheaderRole.replace("%data%"," Web Designer& Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name":"Hana Fortich Dickman", 
	"role":"Web Developer",
	"contacts":
		{
			"mobile":"3475379956",
			"email":"info@citicoder.com",
			"github":"hananizzi",
			"location":"New York"
		},
	"welcomemsg":"Your local web designer and developer in New York City.",
	"skills": [
		"HTML ", "CSS ", "Javascript ", "Python "
	],
	"biopic":"images/hana.jpg"
}

var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomemsg);
var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);

$('#topContacts').prepend(formattedLocation);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedMobile);
$('#header:last').append(formattedMsg);
$('#header').append(formattedPic);

var education = {
	"schools":[
		{
			"name":"Silliman University",
			"location":"Dumaguete City",
			"degree":"Bachelors Degree",
			"majors":"Computer Engineering",
			"date":"2000-2005",
			"url":"www.su.edu.ph"
		},
		{
			"name":"AMA Computer College",
			"location":"Makati City",
			"degree":"Certification",
			"majors":"Web Design",
			"date":"2005",
			"url":"www.amaes.edu.ph"
		}
		],
	"onlineCourses": [
		{
			"title":"Javascript Crash Course",
			"school":"Udacity",
			"dates": 2015,
			"url":"www.udacity.com"
		}
	]
}

var work = {
	"jobs":[
	{
		"employer":"Wantickets",
		"title":"Client Support Specialist",
		"date":"Oct 2005 - Jan 2015",
		"location":"New York, NY",
		"description":"Answered support emails and calls daily, dandled email marketing, updated website content, printed hard tickets and shipped out daily orders for the online ticketing company, & traveled out of state to work for shows."
	},
	{
		"employer":"Newyears.com",
		"title":"Service Account Manager",
		"date":"Seasonal - Oct - Dec 2005 - 2013",
		"location":"New York, NY",
		"date":"Seasonal - Oct 2005 - Dec 2013",
		"description":"Answered support emails and calls, responsible for email marketing and Social Media, added new website content daily (event and venue listings), printed hard tickets for customers and promoters , managed ticket fulfillment team during on New Year’s Eve, provided technical support and trouble shooting for online ticket re-seller system of 5000 accounts, advised clients/ticket re-sellers of procedural guidelines, provided training of ticketing system features and functionality for clients/ticket re-sellers, coordinated technical issues between client/ticket re-seller and IT Department, & maintained excellent client relationships."
	}
	]

}

var projects = {
	"projects": [
	{
		"title": "OOSAR 2005",
		"date": "Oct 2004",
		"description": "Online Obstacle Sensing Walking Robot",
		"images": [
		"images/robot.jpg",
		"images/robot1.jpg"
		]
	},
	{
		"title": "Citicoder",
		"date": "Oct 2013",
		"description": "Website",
		"images": [
		"images/citicoder1.png",
		"images/citicoder2.png"
		]
	}
	]
}

$("#mapDiv").append(googleMap);

$('#footerContacts').prepend(formattedLocation);
$('#footerContacts').prepend(formattedGithub);
$('#footerContacts').prepend(formattedEmail);
$('#footerContacts').prepend(formattedMobile);
