// guarda los datos a una base de datos
const handleSumitE = (data) => {        
    axios.post('http://localhost:9000/api/clientes/insertar/cliente', data)
    .then(res => {
        if(res.data.response){
            alert("Has Insertado Correctamente.");
        }
    })
    .catch(err=> console.log(err))
}


// funcion javascrip
const guardardatsos = (datos)=>{
    datos.map(data=>{
      clientes.push(data);
    });
    return clientes;
}
console.log(clientes);