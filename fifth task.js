class ElectricalApp {
    constructor(name){
        this.name = name;
    }
    plugIn(){
        console.log(`Elecrical appliance is ${this.name} plug in`);
    }
    plugOff(){
        console.log(`Elecrical appliance is ${this.name} plug off`);
    }
}


class Lamp extends ElectricalApp {
    constructor (color, weight, name) {
        super(name);
        this.color = color;
        this.weight = weight ;
    }
    plugIn(){
        //return
        console.log(super.plugIn());
    }
    plugOff(){
        console.log(super.plugOff());
    }
}



class Computer extends ElectricalApp {
    constructor (color, weight, name) {
        super(name);
        this.color = color;
        this.weight = weight ;
    }
    plugIn(){
        //return
        console.log(super.plugIn());
    }
    plugOff(){
        console.log(super.plugOff());
    }
}

const lamp = new Lamp('white', 1000, 'Small Lamp');
lamp.brightness = 70;

lamp.getPowerConsumption = function( brightness){
    if (brightness <= 70){
        console.log("Power consumption is 20 watt");
    } else if( brightness >  70){
        console.log("Power consumption is 10 watt");
    }
}

lamp.getPowerConsumption(70);

const computer = new Computer ('black', 3000, 'Energy');
computer.model = 'Lenovo';


console.log(lamp.plugIn());
console.log(lamp.plugOff());

console.log(lamp instanceof ElectricalApp);

console.log(lamp instanceof Lamp);

console.log(computer.plugIn());
console.log(computer.plugOff());

console.log(computer instanceof ElectricalApp);
console.log(computer instanceof Computer);

