const obj = {
    name: 'name',
    age: 18
}
const foo = () => {
    console.log('foo');
}

foo()

const { name, age } = obj
console.log(name, age);