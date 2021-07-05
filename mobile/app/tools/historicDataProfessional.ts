/*Dados de teste do Histórico - Cliente*/

const profile_client_1 = {

    name: "Márcio Texeira",
    
    address_client: {
        address: 'Rua Aricanduva',
        number: 600,
        district: 'Chácaras Reunidas',
        city: 'São José dos Campos',
        state: 'SP'
    },

    data_requested: new Date(
        parseInt(Math.random()*(2020-2016)+2016), 
        parseInt(Math.random()*(12)), 
        parseInt(Math.random()*(32-1)+1),
        parseInt(Math.random()*(24)),
        parseInt(Math.random()*(60))
    ),

    image_service:[
        'https://www.esquadriaszagonel.com.br/wp-content/uploads/2020/07/macaneta.jpg',
        'https://img.elo7.com.br/product/zoom/26F0FEF/protetor-de-macaneta-para-porta.jpg',
        'https://www.chaveirozanella.com.br/imagens/conserto-macaneta-de-porta-precos.jpg',
        'https://www.blogodorium.com.br/wp-content/uploads/sonhar-com-macaneta.jpg'
    ],
};


const profile_client_2 = {

    name: "Rafael Carvalho",
    
    address_client: {
        address: 'Rua Aricanduva',
        number: 600,
        district: 'Chácaras Reunidas',
        city: 'São José dos Campos',
        state: 'SP'
    },

    data_requested: new Date(
        parseInt(Math.random()*(2020-2016)+2016), 
        parseInt(Math.random()*(12)), 
        parseInt(Math.random()*(32-1)+1),
        parseInt(Math.random()*(24)),
        parseInt(Math.random()*(60))
    ),

    image_service:[
        'https://www.esquadriaszagonel.com.br/wp-content/uploads/2020/07/macaneta.jpg',
        'https://img.elo7.com.br/product/zoom/26F0FEF/protetor-de-macaneta-para-porta.jpg',
        'https://www.chaveirozanella.com.br/imagens/conserto-macaneta-de-porta-precos.jpg',
        'https://www.blogodorium.com.br/wp-content/uploads/sonhar-com-macaneta.jpg'
    ],
};


let m_name = new Map();
m_name.set(0, 'Agendado');
m_name.set(1, 'Iniciado');
m_name.set(2, 'Finalizado');


const typeName = (value: any) =>{
    return m_name.get(value);
}


const random_value = (min:number, max: number) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}

const items_number = () =>{
    let value = random_value(0,4);
    let qte;
    switch(value){
        case 0:
            qte = '1-4';
            break;
        case 1:
            qte = '5-9';
            break;
        case 2:
            qte = '10-13';
            break;
        case 3:
            qte = '13-17';
            break;
    }

    return qte;
}

let obj_create =(tp: string, value: number, aux: number)=>{
    return {
        type: tp,
        number_service: '00'+parseInt(Math.random()*(3245-1000)+1000).toString(),
        name_service: "Instalação de Puxadores",
        client: (value%2 === 0? profile_client_1 : profile_client_2),
        value_service: "R$80,00",
        quantity_items:items_number(),
        data: new Date(
                parseInt(Math.random()*(2020-2016)+2016), 
                parseInt(Math.random()*(12)), 
                parseInt(Math.random()*(32-1)+1),
                parseInt(Math.random()*(24)),
                parseInt(Math.random()*(60))
            ),
        installment_service:4,
        arr_image_request:[
            'https://www.esquadriaszagonel.com.br/wp-content/uploads/2020/07/macaneta.jpg',
            'https://img.elo7.com.br/product/zoom/26F0FEF/protetor-de-macaneta-para-porta.jpg',
            'https://www.chaveirozanella.com.br/imagens/conserto-macaneta-de-porta-precos.jpg',
            'https://www.blogodorium.com.br/wp-content/uploads/sonhar-com-macaneta.jpg'
        ],
        address_service: {
            address: 'Avenida Central',
            number: 228,
            district: 'Chácaras Reunidas',
            city: 'São José dos Campos',
            state: 'SP'
        },
        scheduling_time: new Date(
                parseInt(Math.random()*(2020-2016)+2016), 
                parseInt(Math.random()*(12)), 
                parseInt(Math.random()*(32-1)+1),
                parseInt(Math.random()*(24)),
                parseInt(Math.random()*(60))
            ),
        credit_card:{
            number: '1232-3133-1232-3124',
            type: 'Master Card'
        },
        description_service:"Instalar puxadores no armário do quarto e no armário da cozinha!",
        approved:(aux%2 === 0? true : false)
    } 
}


const cria_array = (num: number) =>{
    let arr = [];
    let value = 0;
    for(let i=0; i < num; i++){
        if(value>2) value = 0;
        arr.push( 
            obj_create(typeName(value), value, i)
        );
        value++;
    }
    return arr;
}


export const HistoricDataProfessional = (size_array: number) =>{
    return cria_array(size_array);
}