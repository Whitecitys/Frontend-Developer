//เนื่องจาก URL https://my.private-server.com/users.json ไม่สามารถใช้งานได้ ผมเลยใช้ Jsonplaceholder แทน
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/todos', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
