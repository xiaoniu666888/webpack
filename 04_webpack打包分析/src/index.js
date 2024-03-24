const axios = require('axios')

const foo = () => {
    console.log("this is index.js");
}
foo()

console.log('index')



axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    console.log(res.data);
})