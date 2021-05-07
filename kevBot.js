const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'kaimed01',
    password: 'oauth:coarh8w6fellg11u5zi6o4usmoakz2'
  },
  channels: [
    'kaimed00'
  ]
};
// function incCount(){
//
//   var messageCount = 1;
//
// }
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
// Create a client with our options
const client = new tmi.client(opts);

var messageCount = 1;

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();
// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  console.log(context,msg,self);
  console.log(context['display-name']);
  if (self) { return; } // Ignore messages from the bot
  // messageCount = messageCount+1;
  // if(messageCount == 12){
  //   messageCount = 1;
  //   client.say(target,"Join my discord! \nhttps://discord.gg/uE4YHruR");
  // }
  // Remove whitespace from chat message
  const commandName = msg.trim().toLowerCase();

  // If the command is known, let's execute it
  if(commandName[0] != '!'){
    return;
  }
  //only works for @eatmykittyup
  if(commandName == '!toot' && context['display-name'] == 'eatmykittyup'){
    client.say(target, '@eatmykittyup tooted on you! Don"t be shy, take a sniff!');
  }
  else if(commandName == '!commands'){
    client.say(target, "!discord !disco !notp !flanter !fart !flap !wink !w !scat !fff !secret !shorts !pizza !aimee !up !piss");
    console.log("Nothing");
  } else if(commandName == '!disco'){
    client.say(target, "HOOTIE TOOTIE DISCO CUTIE!!!");
    console.log("Greasy");
  } else if(commandName == '!fart'){
    client.say(target, "so you know we're doing it.. all of a sudden... a FART SO LOUD ... so loud and FORCEFUL... we're on the bed right, we have a king size bed, we're in the middle kinda.... it LITERALLY EJECTED him from my body.... PUSHED HIM.... he cowered to the corner like a scared animal *weeze* i fucking laughed. that was the first time i farted during sex.");
    console.log('copy pasta"d');
  } else if(commandName == "!toot"){
    client.say(target, "Stop trying to get a toot command @eatmykittyup its not gonna happen....");
  }
  else if (commandName === '!flap') {
    client.say(target,"'I can open my fanny flaps in the night if I need a wee...' -Charlotte Crosby");
    console.log("Fanny flaps opened");
  }
  else if(commandName == '!wink'){
    client.say(target, "'I look at her fanny.. and it's winkin' at me!' -Sophie Kasaei");
    console.log("Sophie quoted");
  }
  else if(commandName == "!w" || commandName == "!W"){
    client.say(target, "Wet, wide and horny. -Charlotte Crosby");
    console.log("No errors.");
  }
  else if(commandName == "!scat"){
    client.say(target, "'Poo is just food that comes out your asshole..' -Charlotte Crosby");
    console.log("Never getting partner");
  }
  else if(commandName == "!fff"){
    client.say(target, "I'm fit, I'm flirty, and I've got double F's.' -Holly Hagan");
    console.log("I think that says it all...");
  } else if(commandName == "!secret"){
    client.say(target, "I'll never tell!!!");
    setTimeout(function(){
      client.say(target, "Or will I...");},
       3000
     );
    console.log("somehow this shit works");
  } else if(commandName == '!notp'){
    client.say(target, "So it comes out both ends. And I had a skirt on. I had a G-String. The barf goes projectile ALL over the wall...the poop goes all over their floor... no towels, no paper towels anywhere in the bathroom - NO TOILET PAPER... So… at this point I was like PANICKING");
    console.log("copy pasta'd");
  }
  else if(commandName == '!fpc'){
    client.say(target,"FIST PUMPS, PUSH UPS, CHAPSTICK");
  }
  else if(commandName == "!flanter"){
    client.say(target, "'Flanter' == 'Flirty banter'")
  } else if(commandName == "!discord"){
    client.say(target, "https://discord.gg/uE4YHruR");
  } else if(commandName == '!fanny'){
    client.say(target, "'me fanny is pulsing its a gaping hole gonna swallow all these cocks in' -Sophie");
    console.log("fanny");
  } else if(commandName == "!massage"){
    client.say(target,"I'm not good at massages unless I'm using me tits or me fanny -Holly Hagan");
    console.log("Massage done....");
  } else if(commandName == '!shorts'){
    client.say(target,'"these shorts are all the way in my butthole its touching my heart" -Nilsa');
  } else if(commandName == '!pizza'){
    client.say(target,"'Who needs a man when you got a whole pizza to yourself...' -Nilsa")
  } else if(commandName == '!aimee' || commandName == '!amy' || commandName == '!amiee'){
    client.say(target,"The one and only Princess Goddess Mermaid");
    console.log("PGM");
  } else if(commandName == "!up"){
    client.say(target, "CHI CHIs UP!!!!!");
  } else if(commandName == "!piss"){
    client.say(target, " 'i don’t remember ever pissing myself while drunk but also i couldn’t definitely say i havent bc when i could see myself doing that while laughing or sumn' -EarthlingCaroline");
  } else if(commandName == "!any"){
    client.say(target, "Any followers? Any donators? Any chatters?");
  }
  else {
    client.say(target, "Unknown command...");
    console.log('* Unknown command ${commandName}');
  }
}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
