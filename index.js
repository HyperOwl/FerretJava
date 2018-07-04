const  Discord = require("discord.js");
const token = "NDYzNDg4MTU0NTE5ODYzMjk2.Dh3f3g.ZoQcj5_rx5EGLzyxVTyJAzXrwys"
function GenColor(){
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    return([r,g,b]);
}
function GenRand(one,two){
    return(Math.round(Math.random()*(two-one)+one));
}
var bot = new Discord.Client();
bot.on("ready",function(){
    console.log("FERRET ACTIVE");
});


