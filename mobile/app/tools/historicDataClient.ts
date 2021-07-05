/*Dados de teste do Histórico - Cliente*/

const profile_profissional_1 = {
    avatar:'https://static.dw.com/image/39154283_403.jpg',
    name: "Márcio Técnico",
    email: "marcio@tecnico.com.br",
    ddd_number:"12",
    tel_number: "988995522",
    rate:3.54,
    experience: "Eletrônica,Hidráulica,Serviços Gerais",
    address_professional: {
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

const profile_profissional_2 = {
    avatar:"https://images.ctfassets.net/fqtbha7ac6p4/3JqZTXeSEiLnK0mBZ9KUQ8/0bb1e03e47fb8d977430db4354e64ef1/essential.jpeg",
    name: "Rafael Técnico",
    email: "rafael@tecnico.com.br",
    ddd_number:"11",
    tel_number: "983943317",
    rate:4,
    experience: "Eletrônica,Hidráulica,Serviços Gerais",
    address_professional: {
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
m_name.set(1, 'Pagamento');
m_name.set(2, 'Iniciado');
m_name.set(3, 'Finalizado');


const typeName = (value: any) =>{
    return m_name.get(value);
}


let obj_create =(tp: string)=>{
        if(tp === 'Agendado'){
            return {
                type: tp,
                number_service: "0",
                name_service: "Instalação de Puxadores",
                professional_array:[
                    profile_profissional_1,
                    profile_profissional_2,
                    profile_profissional_1,
                    profile_profissional_2,
                    profile_profissional_1,
                    profile_profissional_2,
                    profile_profissional_1,
                    profile_profissional_2,
                    profile_profissional_1,
                    profile_profissional_2,
                ],
                value_service: "R$80,00",
                installment_service:3,
                data_requests:[
                    new Date(
                        parseInt(Math.random()*(2020-2016)+2016), 
                        parseInt(Math.random()*(12)), 
                        parseInt(Math.random()*(32-1)+1),
                        parseInt(Math.random()*(24)),
                        parseInt(Math.random()*(60))
                    ),
                    new Date(
                        parseInt(Math.random()*(2020-2016)+2016), 
                        parseInt(Math.random()*(12)), 
                        parseInt(Math.random()*(32-1)+1),
                        parseInt(Math.random()*(24)),
                        parseInt(Math.random()*(60))
                    ),
                    new Date(
                        parseInt(Math.random()*(2020-2016)+2016), 
                        parseInt(Math.random()*(12)), 
                        parseInt(Math.random()*(32-1)+1),
                        parseInt(Math.random()*(24)),
                        parseInt(Math.random()*(60))
                    ),
                ],
                address_service: {
                    address: 'Avenida Central',
                    number: 228,
                    district: 'Chácaras Reunidas',
                    city: 'São José dos Campos',
                    state: 'SP'
                },
                credit_card:{
                    number: '1232-3133-1232-3124',
                    type: 'Master Card'
                }
            }
        }
        else{
            return {
                type: tp,
                number_service: '00'+parseInt(Math.random()*(3245-1000)+1000).toString(),
                name_service: "Instalação de Puxadores",
                professional_array:[
                    profile_profissional_1,
                ],
                value_service: "R$80,00",
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
                }
            }   
        }
}


const cria_array = (num: number) =>{
    let arr = [];
    let value = 0;
    for(let i=0; i < num; i++){
        if(value>3) value = 0;
        arr.push( 
            obj_create(typeName(value))
        );
        value++;
    }
    return arr;
}


export const HistoricDataClient = (size_array: number) =>{
    return cria_array(size_array);
}