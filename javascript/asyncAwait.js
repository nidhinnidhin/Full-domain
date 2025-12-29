async function fetchData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(res)
}

fetchData()