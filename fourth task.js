function ElectricalApp(name){
    this.name = name
}

ElectricalApp.prototype.plugIn = function (){
    console.log(`Elecrical appliance is ${this.name} plug in`);
}

ElectricalApp.prototype.plugOff = function (){
    console.log(`Elecrical appliance is ${this.name} plug off`);
}

function Lamp (name, color, weight, brightness){
    this.name = name,
    this.color = color,
    this.weight = weight,
    this.brightness = brightness
}

Lamp.prototype = new ElectricalApp();

Lamp.prototype.getPowerConsumption = function(){
    if (this.brightness <= 70){
        console.log("Power consumption is 20 watt");
    } else if( brightness >  70){
        console.log("Power consumption is 10 watt");
    }
}

function Computer (name, color, weight, model){
    this.name = name,
    this.color = color,
    this.weight = weight,
    this.model = model
}

Computer.prototype = new ElectricalApp();


const lamp = new Lamp('Small Lamp', 'white', 1000, 70);

lamp.getPowerConsumption();

const computer = new Computer ('Energy', 'black', 3000, 'Lenovo');


lamp.plugIn();
lamp.plugOff();

computer.plugIn();
computer.plugOff();

// Почти верно, но есть несколько замечаний:
// 1. В методах plugIn и plugOff при выводе используется свойство объекта (this.name), поэтому передавать туда дополнительную переменную name нет смысла
// 2. Методы plugIn и plugOff и так выводят информацию в консоль, поэтому нет необходимости дополнительно помещать вызов этих функций в console.log
// 3. Свойство brightness и метод getPowerConsumption у lamp, а также свойство model у computer вы задаете только для одного экземпляра объекта. Если вы создадите во второму экземпляру, в них эти свойства и методы доступны не будут, потому что их нет в конструкторе
// Выше исправила 