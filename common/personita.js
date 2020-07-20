module.exports= class Personita{

    nombre="";
    constructor(nombre, apellidos){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre= nombre;
    }

}

