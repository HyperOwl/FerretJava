const  Discord = require("discord.js");
<<<<<<< HEAD
const fs = require("fs")
const Token = fs.readFile("Token.txt","utf8",(err,data) =>{
    if(err) throw (err);
    console.log(data);
});
const Prefix = "!";
=======
const token = "NDYzNDg4MTU0NTE5ODYzMjk2.Dh3f3g.ZoQcj5_rx5EGLzyxVTyJAzXrwys"
>>>>>>> parent of c1e3640... Added echo, ping, and rng(embed)
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
    //console.log("token is",Token);
});
<<<<<<< HEAD
bot.on("message",function(message){
    if(!message.content.startsWith(Prefix))return;
    if(message.channel.name != "bot-spam"&&message.channel.name != "master-ferret"){
        message.channel.send("You must be in the bot spam channel to use me ;)");
        return;
    };
    var args = message.content.substring(Prefix.length).split(" ");
    switch(args[0].toLowerCase()){
        case"ping":
            message.channel.send("pong");
            break;
        case"echo":
            message.channel.send(message.content.substring(5));
            break;
        case"rng":
        var result = GenRand(args[1],args[2]);
        var embed = new Discord.RichEmbed()
            .setTitle(message.author.username+"'s embed")
            .setDescription(message.author.username+" rolled a "+result)
            .setColor(GenColor())
        message.channel.sendEmbed(embed); 
        default:
            console.log("Unknown Command");
            break;
    }
});
bot.login(Token);
//   node index
=======


>>>>>>> parent of c1e3640... Added echo, ping, and rng(embed)
