process.on('message', (msg) => {
    if(msg.task === 'calculate'){
        const result = msg.number * 100;
        process.send(result)
    }
})