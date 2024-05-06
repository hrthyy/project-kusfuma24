var date = new Date();
const y = date.getFullYear();
const mo = date.getMonth();
const HETI = [84,0,12,27,39,54,66];
var d,h,m,s,w,ma,heten,honapban,evben,dayType;
//dayType: hétfő,szerda,péntek: 12db; kedd,csütörtök: 15db; szombat,vasarnap: 18db;

var nic;

const NICATLAG = 13.2; // milligramm
const n = 2190;
const DARAB = Math.floor(n/20);
// 20 ~ 18

function rTized(n) {
    return Math.round(n*10)/10;
}

function update() {
    date = new Date();
    d = date.getDate();
    h = date.getHours()+1;
    m = date.getMinutes()+1;
    s = date.getSeconds()+1;
    w = date.getDay();
    switch (w+1) {
        case 2: //h
        case 4: //sze
        case 6: //p
            dayType = 12;
            break;
        case 3: //k
        case 5: //cs
            dayType = 15;
            break;
        case 7: //szo
        case 1: //v
            dayType = 18;
            break;
    }
    
    if (h < 7) {
        ma = 0;
    } else if (h > 22) {
        ma = dayType;
    } else {
        ma = Math.floor((h-7)*dayType*0.067);
    }
    
    ma = [ma, ma*DARAB];

    heten = HETI[w];

    heten = [heten + ma[0], heten*DARAB + ma[1]];

    honapban = (Math.floor(d/7))*102;
    honapban = [honapban+heten[0],honapban*DARAB + heten[1]];

    evben = mo*102*4;
    evben = [evben+honapban[0],evben*DARAB + honapban[1]];

    eddig = [String(8704 + evben[0]), String(1013989 + evben[1])]
    //document.getElementById('').innerHTML = "";
    document.getElementById('db-eddig').innerHTML = eddig[0] + " szál";
    document.getElementById('a-eddig').innerHTML = eddig[1] + " Ft";
    
    document.getElementById('db-ma').innerHTML = String(ma[0] + " szál");
    document.getElementById('a-ma').innerHTML = String(ma[1] + " Ft");

    document.getElementById('db-heten').innerHTML = String(heten[0] + " szál");
    document.getElementById('a-heten').innerHTML = String(heten[1] + " Ft");

    document.getElementById('db-honap').innerHTML = String(honapban[0] + " szál");
    document.getElementById('a-honap').innerHTML = String(honapban[1] + " Ft");

    document.getElementById('db-ev').innerHTML = String(evben[0] + " szál");
    document.getElementById('a-ev').innerHTML = String(evben[1] + " Ft");

    nic = [rTized(eddig[0]*NICATLAG), rTized(ma[0]*NICATLAG)];

    document.getElementById('nic-eddig').innerHTML = String(nic[0] + " mg nikotin");
    document.getElementById('nic-ma').innerHTML = String(nic[1] + " mg nikotin");
}

function startCycle() {
    update();

    setInterval(function() {
        if (h < new Date().getHours()) {
            update();
        }
    }, 900000);
}


console.log(new Date())