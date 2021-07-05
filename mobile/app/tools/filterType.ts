
/*Função auxiliar de filtro*/
export const FilterType = (array: any[], tip: string ) =>{
    if(tip === 'Todos'){
        return array;
    }
    else{
        return array.filter( obj => {
            return obj.type == tip
        } )
    }
}


