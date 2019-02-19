/*HOME*/
homeSect = [
"<h4>STATS</h4>", 
"<h4>UNITS</h4><div id='dvTank'></div>", 
"<h4>TASKS</h4>"
];

/*MAP*/
mapSect = [
"<h4>WORLDS</h4>", 
"<h4>MAPS</h4>", 
"<h4>QUESTS</h4>"
];

/*MARKET*/
marketSect = [
"<h4>SHOP NEWS</h4>", 
"<h4>BUY/SELL</h4>", 
"<h4>STOCKS</h4>"
];

/*NATURE*/
natureSect = [
"<h4>BIOMES</h4>",
 "<h4>TRAITS</h4>", 
 "<h4>QUESTS</h4>"
 ];

/*INVENTORY*/
invSect = [
"<h4>CHESTS</h4>",
 "<h4>ITEMS</h4>", 
 "<h4>ANIMALS</h4>"
 ];

/*RESEARCH*/
dnaSect = [
"<h4>RESEARCH</h4>", 
"<h4>EFFECTS</h4>", 
"<h4>COMPLETED</h4>"
];

/*SETTINGS*/
var myAud = loadLS("myAud");
var mmm = JSON.parse(myAud);
console.log(mmm.main);
settingsPage = [
"<label>MAIN AUDIO</label><input type='range' id='inR1' min='0' max='100' value='" + mmm.main * 100 + "' />",
"<label>AMBIENT SOUNDS</label><input type='range' id='inR2' min='0' max='100' value='" + mmm.amb * 100 + "' />",
"<label>BACKGROUND MUSIC</label><input type='range' id='inR3' min='0' max='100' value='" + mmm.music * 100 + "' />"

];
