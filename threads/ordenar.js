module.exports=(arr)=>{
    arr.sort((a,b)=>{
        return a -b;
    })
    return {primverValor: arr[0]};
}