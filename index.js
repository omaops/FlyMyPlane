const tmi = require('tmi.js');

/////////////////////////////////////////
// I MADE THIS REPO PUBLIC FOR PORTFOLIO PURPOSES. I'LL UPDATE IT AS SOON AS I CAN WITH MORE FEATURES AND A CLEANER CODE BASE.
// HAVE A SAFE FLIGHT
// This is the js that takes an executes user irc requests
// FlyMyPlane  is the main directory: Can be changed but make sure to change all the absoulte directories
//////////////////////////////////////////
var child = require('child_process').execFile;

var fs = require("fs");


function ap(){

var executablePath = "C:\\flymyplane\\events\\ap.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pause(){

var executablePath = "C:\\flymyplane\\events\\pause.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function unpause(){

var executablePath = "C:\\flymyplane\\events\\unpause.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function gu(){

var executablePath = "C:\\flymyplane\\events\\gu.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function gd(){

var executablePath = "C:\\flymyplane\\events\\gd.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}


function hdg(){

var executablePath = "C:\\flymyplane\\events\\hdg.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function eng2c(){

var executablePath = "C:\\flymyplane\\events\\eng2c.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function eng1c(){

var executablePath = "C:\\flymyplane\\events\\eng1c.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function at(){

var executablePath = "C:\\flymyplane\\events\\at.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}  

function alt(){

var executablePath = "C:\\flymyplane\\events\\alt.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}  

function spd(){

var executablePath = "C:\\flymyplane\\events\\spd.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function vs(){

var executablePath = "C:\\flymyplane\\events\\vs.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function fps(){

var executablePath = "C:\\flymyplane\\events\\fps.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function nvon(){

var executablePath = "C:\\flymyplane\\events\\nvon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function nvoff(){

var executablePath = "C:\\flymyplane\\events\\nvoff.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function bcon(){

var executablePath = "C:\\flymyplane\\events\\bcon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pbrkon(){

var executablePath = "C:\\flymyplane\\events\\pbrkon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pbrkoff(){

var executablePath = "C:\\flymyplane\\events\\pbrkoff.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function ATC(){



var url = 'http://localhost/addinfo/index.php';
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);

    
}
function comm1(){

var executablePath = "C:\\flymyplane\\events\\comm1.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 
function nav1(){

var executablePath = "C:\\flymyplane\\events\\nav1.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 
function xpdr(){

var executablePath = "C:\\flymyplane\\events\\xpdr.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

/*
function livee(){

var executablePath = "C:\\Cave\\zDelme1\\Dev\\Project2.exe";
    
const {exec} = require("child_process")
exec(executablePath).unref()
    
}   
*/
///////////////////////////////////////////
// This is where you input your  OAUTH tokens credentials for your prefered IRC service, this was for twitch.
//////////////////////////////////////////

const options = {
    options: {
        debug: true,
    },
    connnection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: '', //Your IRC username, for instance, Twitch username
        password: 'oauth:', //Your generated access token for the irc service, again works for twitch OAUTH
    },
    channels: ['addisinyan'], //Twitch channel name (this is mine, change it to yours)
};


const client = new tmi.client(options);

client.connect();


client.on('connected', (address, port) => {
    client.action('addisinyan', 'Flight bot Restarted!');
    
    
});


   
client.on('chat', (channel, user, message, self) => {
     if(message === '!__bot') {
        client.action('addisinyan', 'FlyMyPlane is on! '); // Chnage my name to your channel name
        
    }
    if(message === '!__ap') {
        client.action('addisinyan', 'Autopilot Set!'); // Chnage my name to your channel name
        ap();
    }
    
    if(message === '!__pause'){
        client.action('addisinyan', 'Sim has been paused!'); // Chnage my name to your channel name
        pause();
    }
    if(message === '!__unpause'){
        client.action('addisinyan', 'Sim has been unpaused!'); // Chnage my name to your channel name
        unpause();
    }
    if(message === '!__gu'){
        client.action('addisinyan', 'Gears Up!'); // Chnage my name to your channel name
        gu();
    }
     if(message === '!__gd'){
        client.action('addisinyan', 'Gears coming Down!'); // Chnage my name to your channel name
        gd();
        
    }
    if(message === '!__eng2cc'){
        client.action('addisinyan', 'Engine 2 Cuttoff!'); // Chnage my name to your channel name
        eng2c();
        
    }
    if(message === '!__eng1cc'){
        client.action('addisinyan', 'Engine 1 Cuttoff!'); // Chnage my name to your channel name
        eng1c();
        
    }
     if(message === '!__at'){
        client.action('addisinyan', 'A/T Disabled!'); // Chnage my name to your channel name
        at();
        
    }  
    if(message === '!__nvon'){
        client.action('addisinyan', 'NAV Light On!'); // Chnage my name to your channel name
        nvon();
        
    }  
    if(message === '!__nvoff'){
        client.action('addisinyan', 'NAV Light Off!'); // Chnage my name to your channel name
        nvoff();
        
    }
    if(message === '!__pbrkon'){
        client.action('addisinyan', 'Parking Brakes Set!'); // Chnage my name to your channel name
        pbrkon();
        
    }
    if(message === '!__pbrkoff'){
        client.action('addisinyan', 'Parking Brakes Realesed!'); // Chnage my name to your channel name
        pbrkoff();
        
    }
    if(message === '!__bcon'){
        client.action('addisinyan', 'Beacon Light On!'); // Chnage my name to your channel name
        bcon();
        
    }
    if(message.substring(0,6) === '!__alt'){
        
        var data = message.substring(6,11);
        fs.writeFile("C:\\flymyplane\\events\\alt.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Altitude Set!'); // Chnage my name to your channel name
});         
        alt();
        }
    if(message.substring(0,6) === '!__hdg'){
        
        var data = message.substring(6,9);
        fs.writeFile("C:\\flymyplane\\events\\hdg.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Heading Set!'); // Chnage my name to your channel name
});         
        hdg();
        }
    if(message.substring(0,6) === '!__spd'){
        
        var data = message.substring(6,9);
        fs.writeFile("C:\\flymyplane\\events\\spd.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Speed Set!'); // Chnage my name to your channel name
});         
        spd();
        }
    if(message.substring(0,5) === '!__vs'){
        
        var data = message.substring(5,11);
        fs.writeFile("C:\\flymyplane\\events\\vs.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'V/S Set!'); // Chnage my name to your channel name
});         
        vs();
        }
     if(message.substring(0,6) === '!__fps'){
        
        var data = message.substring(6,7);
        fs.writeFile("C:\\flymyplane\\events\\fps.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Flaps Set!'); // Chnage my name to your channel name
});         
        fps();
        }
     if(message.substring(0,6) === '!__ATC'){
        
        var data = message.substring(6,15);
        fs.writeFile("C:\\flymyplane\\events\\ATC.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Checking Airspace!'); // Chnage my name to your channel name
});      
         
         ATC();
             
             
      
        }
    if(message.substring(0,7) === '!__comm'){
        
        var data = message.substring(7,11);
        fs.writeFile("C:\\flymyplane\\events\\comm1.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Comm1 Radio Set!'); // Chnage my name to your channel name
});         
        comm1();
        }
    if(message.substring(0,6) === '!__nav'){
        
        var data = message.substring(6,10);
        fs.writeFile("C:\\flymyplane\\events\\nav1.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Nav1 Radio Set!'); // Chnage my name to your channel name
});         
        nav1();
        }
    if(message.substring(0,7) === '!__xpdr'){
        
        var data = message.substring(7,11);
        fs.writeFile("C:\\flymyplane\\events\\xpdr.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Transponder Set!'); // Chnage my name to your channel name
});         
        xpdr();
        }
////////////////////////////////////////////////////////////////////////////////////////////////    
    if(message.substring(0,6) === '!__hdgg'){
        
        var data = message.substring(6,9);
        
      /*
        fs.writeFile("C:\\Users\\<USER>\\Desktop\\NodeBot\\events\\hdg.txt", data, (err) => {
            if (err) console.log(err);
            
            console.log("Heading sent!");
            client.action('addisinyan', 'Heading Sent!');
            
            
}); */
        
var executablePath = "C:\\flymyplane\\events\\hdg\\"+data+".exe"; 
const {exec} = require("child_process")
exec(executablePath).unref()
        
let path = 'C:\\flymyplane\\events\\hdg.txt';
let buffer = new Buffer(data);

// open the file in writing mode, adding a callback function where we do the actual writing
fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'could not open file: ' + err;
    }
    
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            
            console.log('wrote the file successfully');
        });
        
    });
    
});
        
        
        
          
        }
    
    
    /////////////////////////////////////////////////////////////////////////////////

        
  /////////////////////////////////////////////////////////////////////////      

    }

          
          
    //client.action('addisinyan', 'Hello ${user['display-name']}!');
);
