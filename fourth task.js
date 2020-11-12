function ElectricalApp(name){
    this.name = name
}

ElectricalApp.prototype.plugIn = function (name){
    console.log(`Elecrical appliance is ${this.name} plug in`);
}

ElectricalApp.prototype.plugOff = function (name){
    console.log(`Elecrical appliance is ${this.name} plug off`);
}



function Lamp (name, color, weight){
    this.name = name,
        this.color = color,
        this.weight = weight
}

Lamp.prototype = new ElectricalApp();

function Computer (name, color, weight){
    this.name = name,
        this.color = color,
        this.weight = weight
}

Computer.prototype = new ElectricalApp();


const lamp = new Lamp('Small Lamp', 'white', 1000);

lamp.brightness = 70;

lamp.getPowerConsumption = function( brightness){
    if (brightness <= 70){
        console.log("Power consumption is 20 watt");
    } else if( brightness >  70){
        console.log("Power consumption is 10 watt");
    }
}

lamp.getPowerConsumption(70);

const computer = new Computer ('Energy', 'black', 3000);
computer.model = 'Lenovo';


console.log(lamp.plugIn('Small Lamp'));
console.log(lamp.plugOff('Small Lamp'));



console.log(computer.plugIn('Energy'));
console.log(computer.plugOff('Energy'));

