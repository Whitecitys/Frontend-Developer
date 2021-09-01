var req = new XMLHttpRequest();
req.open("POST", "https://my.private-server.com/save", true);
req.setRequestHeader('Content-Type', 'application/json');
req.send(JSON.stringify({
    name: "John",
    lastname: "Adam",
    age: 28,
}));

