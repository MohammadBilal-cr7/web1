var data;

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(json => data = json)


function gettingData(){

        data.map( 
        (val,i)=>{
        document.getElementById('1').innerHTML+= `${val.id} ${val.title}<br>`
    })

}

setTimeout(()=>{
    gettingData()

},100)

let bilal = () => {

}

setTimeout(bilal,100)