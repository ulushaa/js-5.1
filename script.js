let obj = {

}

for(let i=1;i<=10;i++){
    let name = prompt('введите имя');
    let age = +prompt('введите возраст');
    obj[i] = {
        name: name,
        age: age,
    }
}
for(let key in obj){
    console.log(`пользователь ${key}`);
    for(let newKey in obj[key]){
        console.log(newKey == 'name' ? `вас зовут ${obj[key][newKey]}` : `ваш возраст ${obj[key][newKey]}`);
    }
}
console.log(obj);


