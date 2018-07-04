const  Discord = require("discord.js");
const Token = "NDYzNDg4MTU0NTE5ODYzMjk2.Dh3f3g.ZoQcj5_rx5EGLzyxVTyJAzXrwys"
const Prefix = "!";
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