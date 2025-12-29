process.on('message', (msg) => {
    console.log('The message is ', msg);

    process.send({reply: 'Hello from child'})
})

console.log("Hello world")