let dog = {
    name: 'Fido',
    weight: 38
}

function getProperty (dog){
    for( let key in dog){
        if (dog.hasOwnProperty(key)){
            console.log(Object.entries(dog));

        }

    }

}
getProperty (dog);
