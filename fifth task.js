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
    constructor (color, weight, name, brightness) {
        super(name);
        this.color = color;
        this.weight = weight;
        this.brightness = brightness;
    }

    getPowerConsumption() {
        if (this.brightness <= 70){
            console.log("Power consumption is 20 watt");
        } else if(this.brightness > 70){
            console.log("Power consumption is 10 watt");
        }
    }
}



class Computer extends ElectricalApp {
    constructor (color, weight, name, model) {
        super(name);
        this.color = color;
        this.weight = weight;
        this.model = model;
    }
}

const lamp = new Lamp('white', 1000, 'Small Lamp', 70);

lamp.getPowerConsumption();

const computer = new Computer ('black', 3000, 'Energy', 'Lenovo');


lamp.plugIn();
lamp.plugOff();

console.log(lamp instanceof ElectricalApp);

console.log(lamp instanceof Lamp);

computer.plugIn();
computer.plugOff();

console.log(computer instanceof ElectricalApp);
console.log(computer instanceof Computer);

// С brightness, getPowerConsumption и model здесь та же ошибка, что и в предыдущем задании. Кроме этого, есть ещё одно замечание: в дочерних классах Computer и Lamp вы переопределяете родительские методы plugIn и plugOff, но при этом никаких изменений в этих методах нет, они всё равно обращаются к аналогичным родительским методам. Поэтому из дочерних классов эти методы лучше убрать, экземплярам класса они всё равно будут доступны благодаря наследованию