const tmi = require('tmi.js');

/////////////////////////////////////////
var child = require('child_process').execFile;

var fs = require("fs");


function ap(){

var executablePath = "C:\\Addybot\\events\\ap.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pause(){

var executablePath = "C:\\Addybot\\events\\pause.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function unpause(){

var executablePath = "C:\\Addybot\\events\\unpause.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function gu(){

var executablePath = "C:\\Addybot\\events\\gu.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function gd(){

var executablePath = "C:\\Addybot\\events\\gd.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}


function hdg(){

var executablePath = "C:\\Addybot\\events\\hdg.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function eng2c(){

var executablePath = "C:\\Addybot\\events\\eng2c.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function eng1c(){

var executablePath = "C:\\Addybot\\events\\eng1c.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}   

function at(){

var executablePath = "C:\\Addybot\\events\\at.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}  

function alt(){

var executablePath = "C:\\Addybot\\events\\alt.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}  

function spd(){

var executablePath = "C:\\Addybot\\events\\spd.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function vs(){

var executablePath = "C:\\Addybot\\events\\vs.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function fps(){

var executablePath = "C:\\Addybot\\events\\fps.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function nvon(){

var executablePath = "C:\\Addybot\\events\\nvon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 

function nvoff(){

var executablePath = "C:\\Addybot\\events\\nvoff.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function bcon(){

var executablePath = "C:\\Addybot\\events\\bcon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pbrkon(){

var executablePath = "C:\\Addybot\\events\\pbrkon.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
}

function pbrkoff(){

var executablePath = "C:\\Addybot\\events\\pbrkoff.exe";
    
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

var executablePath = "C:\\Addybot\\events\\comm1.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 
function nav1(){

var executablePath = "C:\\Addybot\\events\\nav1.exe";
    
child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
    
} 
function xpdr(){

var executablePath = "C:\\Addybot\\events\\xpdr.exe";
    
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

const options = {
    options: {
        debug: true,
    },
    connnection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'addisinyan',
        password: 'oauth:0nh9dugejrcm3kd9i3t8vj9d4lt8i8',
    },
    channels: ['addisinyan'],
};


const client = new tmi.client(options);

client.connect();


client.on('connected', (address, port) => {
    client.action('addisinyan', 'Test bot Restarted!');
    
    
});


   
client.on('chat', (channel, user, message, self) => {
     if(message === '!__bot') {
        client.action('addisinyan', 'Addy Bot is on! ');
        
    }
    if(message === '!__ap') {
        client.action('addisinyan', 'Autopilot Set!');
        ap();
    }
    
    if(message === '!__pause'){
        client.action('addisinyan', 'Sim has been paused!');
        pause();
    }
    if(message === '!__unpause'){
        client.action('addisinyan', 'Sim has been unpaused!');
        unpause();
    }
    if(message === '!__gu'){
        client.action('addisinyan', 'Gears Up!');
        gu();
    }
     if(message === '!__gd'){
        client.action('addisinyan', 'Gears coming Down!');
        gd();
        
    }
    if(message === '!__eng2cc'){
        client.action('addisinyan', 'Engine 2 Cuttoff!');
        eng2c();
        
    }
    if(message === '!__eng1cc'){
        client.action('addisinyan', 'Engine 1 Cuttoff!');
        eng1c();
        
    }
     if(message === '!__at'){
        client.action('addisinyan', 'A/T Disabled!');
        at();
        
    }  
    if(message === '!__nvon'){
        client.action('addisinyan', 'NAV Light On!');
        nvon();
        
    }  
    if(message === '!__nvoff'){
        client.action('addisinyan', 'NAV Light Off!');
        nvoff();
        
    }
    if(message === '!__pbrkon'){
        client.action('addisinyan', 'Parking Brakes Set!');
        pbrkon();
        
    }
    if(message === '!__pbrkoff'){
        client.action('addisinyan', 'Parking Brakes Realesed!');
        pbrkoff();
        
    }
    if(message === '!__bcon'){
        client.action('addisinyan', 'Beacon Light On!');
        bcon();
        
    }
    if(message.substring(0,6) === '!__alt'){
        
        var data = message.substring(6,11);
        fs.writeFile("C:\\Addybot\\events\\alt.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Altitude Set!');
});         
        alt();
        }
    if(message.substring(0,6) === '!__hdg'){
        
        var data = message.substring(6,9);
        fs.writeFile("C:\\Addybot\\events\\hdg.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Heading Set!');
});         
        hdg();
        }
    if(message.substring(0,6) === '!__spd'){
        
        var data = message.substring(6,9);
        fs.writeFile("C:\\Addybot\\events\\spd.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Speed Set!');
});         
        spd();
        }
    if(message.substring(0,5) === '!__vs'){
        
        var data = message.substring(5,11);
        fs.writeFile("C:\\Addybot\\events\\vs.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'V/S Set!');
});         
        vs();
        }
     if(message.substring(0,6) === '!__fps'){
        
        var data = message.substring(6,7);
        fs.writeFile("C:\\Addybot\\events\\fps.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Flaps Set!');
});         
        fps();
        }
     if(message.substring(0,6) === '!__ATC'){
        
        var data = message.substring(6,15);
        fs.writeFile("C:\\Addybot\\events\\ATC.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Checking Airspace!');
});      
         
         ATC();
             
             
      
        }
    if(message.substring(0,7) === '!__comm'){
        
        var data = message.substring(7,11);
        fs.writeFile("C:\\Addybot\\events\\comm1.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Comm1 Radio Set!');
});         
        comm1();
        }
    if(message.substring(0,6) === '!__nav'){
        
        var data = message.substring(6,10);
        fs.writeFile("C:\\Addybot\\events\\nav1.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Nav1 Radio Set!');
});         
        nav1();
        }
    if(message.substring(0,7) === '!__xpdr'){
        
        var data = message.substring(7,11);
        fs.writeFile("C:\\Addybot\\events\\xpdr.txt", data, (err) => {
        if (err) console.log(err);            
        client.action('addisinyan', 'Transponder Set!');
});         
        xpdr();
        }
////////////////////////////////////////////////////////////////////////////////////////////////    
    if(message.substring(0,6) === '!__hdgg'){
        
        var data = message.substring(6,9);
        
      /*
        fs.writeFile("C:\\Users\\Tinbite\\Desktop\\NodeBot\\events\\hdg.txt", data, (err) => {
            if (err) console.log(err);
            
            console.log("Heading sent!");
            client.action('addisinyan', 'Heading Sent!');
            
            
}); */
        
var executablePath = "C:\\Users\\Tinbite\\Desktop\\NodeBot\\events\\hdg\\"+data+".exe";    
const {exec} = require("child_process")
exec(executablePath).unref()
        
let path = 'C:\\Cave\\zDelme1\\Dev\\hdg.txt';
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