# FlyMyPlane (AKA AddyBot)
## Introduction
FlyMyplane is an addon for Lockheed Martin's Prepar3D® simulation software that allows a trainer to have full control of a students flight controls via irc protocols. This version was made and tested on Twitch which allows users (Chat) to send text to the platform via IRC. It allows, for instance a twitch streamer, to open P3D, start a flight and connect this system with their Twitch accont so that the software gets access to the chat feed. This allows the system to get a read on users typing specific commands.

For instance if a user types "!__ap" in chat, it is recognized as a command to engage the auto-pilot of the system.

## Requriments
-  Lockheed Martin Prepar3D v4 or greater (That is the flight simulator)
-  FSUIPC v5 or greater (Get the proper version based on the sim verion you have accordingly)
-  Node (This thing runs on node so ... you need Node.JS)

## Usage
So here is how the system works. This is just to clarify some things you need to understand in order to cutomize it to your needs.
1. You need to go into index.js and change a few things accroding to the comments I left inside.
- You need to change path names as absolute pathing was used.
- You need to add IRC authentication credentails like username and OAUTH tokens generated to you accordingly. Fill in those data accordingly.
2. When you run index.js via Node, it connects to the IRC and starts listening to commands. If the commands match, it saves data in a txt file and executes an exe file that will read data from the txt and transmites it to the flight sim via FSUIPC.
- For isntance, if a user types, "!__hdg 123", the system first checks if the first six character are registered commands, in this case it is.
- It then stores the next 3 digits to a file called "hdg.txt" inside the events directory.
- And then executes the "hdg.exe" file, which, first reads the hdg.txt, takes the 123 value and transmits it to the flight sim via FSUIPC commands.
- Which then turns the plane to Heading 123
3. If you want to discontinue, just stop running index.js. That will stop the connection to the IRC and chat can fly your plane.

## Commands
You can find the details here https://www.twitch.tv/addisinyan/about
Drop a follow on your way.

Command For Flying The Plane
Navigation and Controls

    !__ap (autopilot on/off)
    !__at (A/T off)
    !__eng1c (Cut Engine 1)
    !__eng2c (Cut Engine 2)
    !__gu (gears up)
    !__gd (gears down)
    !__hdg%%% (put heading in the %)
    !__alt%%%%% (put altitude in the %)
    !__spd%%% (put air speed in the %)
    !__vs%%%% (put V/S in the %)
    !__pbrkon(Parking Brakes On)
    !__pbrkoff (Parking Brakes Off)

Comms

    !__comm%%%% (put the middle 4 digits with no decimal)
    !__nav%%%% (put the middle 4 digits with no decimal)
    !__xpdr%%%% (number in the place of %)
    !__pause (Pause sim)
    !__unpause (Unpause sim)
    !__fps% (put flaps stage1-9 in the %)
    !__bcon (Beacon Light on)
    !__nvon (navlights on)
    !__nvoff (nav lights off)
Misc

    !__ATC (search for call signs or ATC.... what ever you want in Vatsim. Not working at the moment, after vatsim api udated ... will be added and fixed soon)
    
## FAQ
Cant list them all. Contact me at omaops@gmail.com if you have any questions. Fly Safe and Cheers!

