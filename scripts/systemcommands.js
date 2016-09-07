exports.handleCommand = function (src, command, commandData, tar, channel) {
    if (command == "changeservername" || command == "csn") {
        if (sys.name(src) == "Rabbit" || sys.name(src) == "Devil") {
            if (commandData == undefined) {
                normalbot.sendMessage(src, "Cannot have an empty server name.", channel);
                return;
            }
            normalbot.sendMessage(src, "Server Name: " + sys.getserverName() + ", now changing to " + commandData + ".", channel);
            sys.changeServerName(commandData);
            normalbot.sendMessage(src, "The server is now called " + sys.getServerName() + "!", channel);
            return;
        } else {
            normalbot.sendMessage(src, "You do not have sufficent permissions to use this command. Are you in the right mode?", channel);
            return;
        }
    }
    
    if (command == "deluser" || command == "du") {
        if (sys.name(src) == "Rabbit" || sys.name(src) == "Devil") {
            if (!sys.dbExists(commandData)) {
                normalbot.sendMessage(src, "That name isn't present in the database.", channel);
                return;
            }
            
            sys.dbDelete(commandData);
            normalbot.sendMessage(src, commandData + " was deleted from the server database.", channel);
            return;
        } else {
            normalbot.sendMessage(src, "You do not have sufficent permissions to use this command. Are you in the right mode?", channel);
            return;
        }
    }
}
