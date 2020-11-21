let dog = {
    name: 'Fido',
    weight: 38
}

function propInObj (str, obj){
    return str in obj;
}
console.log(propInObj('name', dog));

console.log(propInObj('breed', dog));

// Метод для проверки наличия свойства в объекте выбран верно (оператор in), но по заданию нужно было реализовать проверку именно с использованием функции. У вас функция пустая, а проверка сделана в отдельных console.log. Выше исправила на верный вариант.