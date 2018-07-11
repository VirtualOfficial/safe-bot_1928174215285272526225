const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 's-';
bot.login(process.env.BOT_TOKEN);
bot.on('ready', function (evt) {
    console.log('Starting up SafeBot.. please wait..');
    console.log('Loaded.. checking state..');
    console.log('Started up successfully, ready for use.');
    console.log('I\'m ready!');
});

async function purge(messageamount,message) {
    
    message.delete();
    const fetched = await message.channel.fetchMessages({limit: messageamount});
    message.channel.bulkDelete(fetched);
}

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        if (reaction.message.channel.id == '465861489589485569') {
            if (user.id == reaction.message.author.id) {}
            else {
                var needHelp = reaction.message.mentions.users.first();
                needHelp.sendMessage('A safe trader was found!  ' + user + '! Add them on Fortnite and he will invite both your trading partner and you to his party. He will keep track of all items dropped to make sure that no low durability or material scams can be executed. Before you trade, he will pick up both weapons and check the durability. ')
                user.sendMessage('You took a call! User: ' + reaction.message.mentions.members.first() + '! Add them on Fortnite! They recieved the following message: Add them on Fortnite and he will invite both your trading partner and you to his party. He will keep track of all items dropped to make sure that no low durability or material scams can be executed. Before you trade, he will pick up both weapons and check the durability. /// You have to keep track and make sure that no scams can be executed.')
               reaction.message.delete();
            }
      }
    }
});
bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        if (reaction.message.channel.id == '465875836915154962') {
            if (user.id == reaction.message.author.id) {}
            else {
                var needHelp = reaction.message.mentions.users.first();
                needHelp.sendMessage('Your call has been taken by ' + user + '! DM them to get verified!')
                user.sendMessage('You took a call! User: ' + reaction.message.mentions.members.first() + '! Add them on Fortnite and make them say a certain word. As soon as they say it, verify them by typing s-complete @<discord name> <fortnite username>')
            reaction.message.delete();
            }
        }
}
});
bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        if (reaction.message.channel.id == '466291798935863306') {
            if (user.id == reaction.message.author.id) {}
            else {
                var needHelp = reaction.message.mentions.users.first();
                needHelp.sendMessage('Your call has been taken by ' + user + '! Add the person on Fortnite and he will taxi you against a price! Prices are available in the #taxi-prices channel.')
                user.sendMessage('You took a call! User: ' + reaction.message.mentions.members.first() + '! You drop the player off in the desired place. After the player pays you the price, you make them party leader and leave!')
            reaction.message.delete();
            }
        }
}
});
bot.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        
        var args = message.content.slice(prefix.length).split(/ +/);
        var command = args.shift().toLowerCase();
        var sentBy = message.author.username
        var mention = message.mentions.first
        if (command == 'state') {
            if (message.member.permissions.has("ADMINISTRATOR")) {
                var messages = 5;
                message.channel.send('Measuring ping: ' + bot.ping + 'ms');
                message.channel.send('Checking amount of people that are online..');
                let guild = message.member.guild;
                message.channel.send('Amount of people in the server: ' + guild.memberCount)
                var i;
                let safetraders = message.guild.roles.get('465831225672728587').members.map(m=>m.user.username);
                let members = guild.members.filter(member => member.presence.status === 'online').map(member => {
                    return member.user.username;
                });
                message.channel.send('Amount of people online: ' + members.length)
                message.channel.send('Amount of safe-traders online: ' + safetraders.length)
             

             

                

               
                
                message.react("👍");
                
                bot.setTimeout(purge,5000,5,message)
            }

}
    if (command == 'available') {
        if (message.member.roles.has('465831105686142976')) {
            if (message.member.roles.has('465834824532492289')) {
                message.reply('You already have the "Available" role!');
            
                message.react("👍");
                
                bot.setTimeout(purge,5000,1,message)
            }
           if (!message.member.roles.has('465834824532492289')) {
               message.member.addRole('465834824532492289');
               message.reply('You are now available! Thanks for your help here at VTS!');
               
               message.react("👍");
               
               bot.setTimeout(purge,5000,1,message)
           }
        }
    }
    if (command == 'unavailable') {
        if (message.member.roles.has('465831105686142976')) {
            if (message.member.roles.has('465834824532492289')) {
                message.member.removeRole('465834824532492289');
                message.reply('you are no longer available!');
                
                message.react("👍");
                
                bot.setTimeout(purge,5000,1,message)
            }
            if (!message.member.roles.has('465834824532492289')) {
                
                message.reply('you weren\'t available!');
                message.react("👍");
                
                bot.setTimeout(purge,5000,1,message)
            }
        }
    }
    if (command == 'purge') {
        if (args[0]) {
        if (message.member.roles.has('466299420573696001')) {
            purge(args[0],message)
        }}
    }    
    if (command == 'trade') {
        if (message.member.roles.has('465831134429708288')) {
        if (!message.member.roles.has('465831161361334273')) {
            if (!message.member.roles.has('465870621885071380')) {
                if (!message.member.roles.has('465870621885071380')) {
                    message.reply('Calling a trader..')
                    message.react("👍");
                    
                    bot.setTimeout(purge,5000,1,message)
                    bot.channels.get("465861489589485569").send(" Incoming trading call from " + message.author + '! \ You can take the call by clicking on the checkmark below! Fortnite Username: ' + message.member.nickname).then(messagee => {
                       messagee.react("✅");
                    })
                }}
            }
}}
        
        }
        if (message.member.roles.has('465831161361334273')) {
            message.reply("your trading rights have been revoked.")
            message.react("👍");
            
            bot.setTimeout(purge,5000,1,message)
        }
        if (message.member.roles.has('465870621885071380')) {
            message.reply("your trading rights have been revoked.")
            message.react("👍");
            
            bot.setTimeout(purge,5000,1,message)
        }
    }
    if (command == 'verify') {
        if (args[0]) {
            if (message.channel.id == '465874554984857601') {
            if (!message.member.roles.has('465831134429708288')) {
            message.reply('your call has been sent! Make sure to turn messages from server members on so that they can DM you!')
            message.react("👍");
            
            bot.setTimeout(purge,5000,1,message)
            bot.channels.get("465875836915154962").send(" Incoming call from " + message.author + '! \ You can take the call by clicking on the checkmark below! Fortnite Username: ' + args[0]).then(messagee => {
               messagee.react("✅");
            })
        }}
    }
    }
    if (command == 'complete') {
        if (args[0]) {
            if (args[1]) {
                if (message.mentions.users.first()) {
                    message.reply('Please wait.. verifying information..');
                    message.channel.send('Verified.');
                    message.channel.send('Adding role..');
                    var mention =  message.mentions.members.first();
                    mention.addRole('465831134429708288');
                    mention.removeRole('466134205831577600')
                    message.channel.send('Added role..');
                    message.channel.send('Renaming user..')
                    mention.setNickname(args[1]);
                    message.react("👍");
                    
                    bot.setTimeout(purge,5000,5,message)
                }
              
               

            }
        }
    }
    if (command == 'help') {
            message.channel.send('For help, please refer to the ' + message.guild.channels.get('466134118934249482').toString() + ' channel. If you\'ve got any questions, you can always ask staff in the '  + message.guild.channels.get('466136617426354176').toString() + ' channel.')
            message.react("👍");

            bot.setTimeout(purge,5000,1,message)
            
        
    }
    if (command == 'readhelp') {
        if (!message.member.roles.has('466134205831577600')) {
        if (message.channel.id == '466136617426354176') {
            message.channel.send('Giving role..')
            message.member.addRole('466134205831577600');
            message.channel.send('Role recieved. Read ' + message.guild.channels.get('466134118934249482').toString() + ' for step 2.')
            message.react("👍");

            bot.setTimeout(purge,5000,2,message)
        
        }
}



}
    if (command == 'taxi') {
        if (args[0]) {
            if (message.channel.id == '466291732204617738') {
            if (message.member.roles.has('465831134429708288')) {
           
            
            bot.setTimeout(purge,5000,1,message)
            if (args[0] == "twine") {
                message.reply('your call has been sent! Make sure to turn messages from server members on so that they can DM you!')
                message.react("👍");
                bot.channels.get("466291798935863306").send(" Incoming call to Twine Peaks from " + message.author + '! \ You can take the call by clicking on the checkmark below! Fortnite Username: ' +  message.author.username).then(messagee => {
                    messagee.react("✅");
                }
            )
          
    }   else if (args[0] == "canny") {
        message.reply('your call has been sent! Make sure to turn messages from server members on so that they can DM you!')
        message.react("👍");
        bot.channels.get("466291798935863306").send(" Incoming call to Canny Village from " + message.author + '! \ You can take the call by clicking on the checkmark below! Fortnite Username: ' +  message.member.nickname).then(messagee => {
            messagee.react("✅");
        })


}
}}
}
}
});
