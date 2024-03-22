const axios = require('axios')

const foo = () => {
    console.log("this is main.js");
}
foo()
console.log('main')

axios.get("http://123.207.32.32:9002/lyric?id=1842025914").then(res => {
    console.log(res.data);
})