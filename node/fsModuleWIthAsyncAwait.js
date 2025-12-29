const fs = require('fs').promises;

async function fileOps(){
    try{
        // Creating file
        await fs.writeFile('index.txt', 'Hello this is an asyc function');

        // Read data from the file
        const data = await fs.readFile('index.txt','utf-8');
        console.log('The response : ', data)

        // Append data
        await fs.appendFile('index.txt', "/n Appended data")

        // Read while data again
        const newData = await fs.readFile('index.txt', 'utf-8');
        console.log('New data: ', newData)

        // Delete file
        await fs.unlink('index.txt');
        console.log('File deleted successfully..')
    }
    catch(err){
        console.log('Error : ' ,err)
    }
}

fileOps(); 