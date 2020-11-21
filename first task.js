let dog = {
    name: 'Fido',
    weight: 38
}

function getProperty (dog){
    for(let key in dog){
        if (dog.hasOwnProperty(key)){
            console.log(`Ключ - ${key}, значение - ${dog[key]}`);
        }

    }
}
getProperty (dog);

// Не совсем верно сделан вывод. У вас на каждой итерации выводятся все свойства объекта сразу. Нужно выводить по одному на каждой итерации 