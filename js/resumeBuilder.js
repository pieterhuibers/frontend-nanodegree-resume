//var awesomeThoughts = "I am Pieter and I am awesome";
//console.log(awesomeThoughts);

//var funThoughs = awesomeThoughts.replace("awesome","fun");
//$("#main").append(funThoughs);

var formattedName = HTMLheaderName.replace("%data%", "Pieter Huibers");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = [];
