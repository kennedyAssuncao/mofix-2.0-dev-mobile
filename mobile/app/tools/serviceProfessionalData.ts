const getRandomInt = (min: number, max: number)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  
const client_1 = {
  name: 'Rafael Carvalho',
  address_client:{
    number_cel:'(12)98778-1223',
    number_tel:'(12)3998-1223',
    address:'Avenida Central',
    number:112,
    district: 'Chácaras Reunidas',
    city: 'São José dos Campos',
    state: 'SP',
    country:'Brasil',
    location: {
      latitude: -23.204690, 
      longitude: -45.911369,
    }
  },
  arr_data_requested:[
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
    )
  ],
  image_service:[
    'https://www.esquadriaszagonel.com.br/wp-content/uploads/2020/07/macaneta.jpg',
    'https://img.elo7.com.br/product/zoom/26F0FEF/protetor-de-macaneta-para-porta.jpg',
    'https://www.chaveirozanella.com.br/imagens/conserto-macaneta-de-porta-precos.jpg',
    'https://www.blogodorium.com.br/wp-content/uploads/sonhar-com-macaneta.jpg'
  ],
}

const client_2 = {
  name: 'Marcos Maciel',
  address_client:{
    number_cel:'(12)982332-1223',
    number_tel:'(12)3432-1223',
    address:'Avenida Java',
    number:822,
    district: 'Jardim Colinas',
    city: 'São José dos Campos',
    state: 'SP',
    country:'Brasil',
    location: {
      latitude: -28.204690, 
      longitude: -49.911369,
    }
  },
  arr_data_requested:[
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
    )
],
  image_service:[
    'https://www.esquadriaszagonel.com.br/wp-content/uploads/2020/07/macaneta.jpg',
    'https://img.elo7.com.br/product/zoom/26F0FEF/protetor-de-macaneta-para-porta.jpg',
    'https://www.chaveirozanella.com.br/imagens/conserto-macaneta-de-porta-precos.jpg',
    'https://www.blogodorium.com.br/wp-content/uploads/sonhar-com-macaneta.jpg'
  ],
}

const items_number = () =>{
    let value = getRandomInt(0,4);
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

let aux_tp = 0;

let set_tp = ()=>{
  aux_tp = getRandomInt(1,3);
}

const services = () =>{
  set_tp();
  let value = aux_tp;
  let name;
  switch(value){
    case 1:
      name = 'Instalação de Puxadores';
      break;
    case 2:
      name = 'Instalação de Prateleira';
      break;
  }
  return name;
}

const services_desc = () =>{
  let value = aux_tp;
  let dsc;
  switch(value){
    case 1:
      dsc = "Instalar puxadores no armário do quarto e no armário da cozinha!";
      break;
    case 2:
      dsc = "Instalar prateleira no quarto e na sala!";
      break;
  }
  return dsc;
}

const service = {
  client_service: getRandomInt(1,3) === 1? client_1 : client_2,
  name_service: services(),
  quantity_items: items_number(),
  description_service:services_desc(),
  value_service:'R$80,00',
  service_request:new Date(
    parseInt(Math.random()*(2020-2016)+2016), 
    parseInt(Math.random()*(12)), 
    parseInt(Math.random()*(32-1)+1),
    parseInt(Math.random()*(24)),
    parseInt(Math.random()*(60))
  ),
}

const list_service = (ele_number: number) =>{
  let list_services=[];
  for(let i = 0; i < ele_number; i++){
    list_services.push(service);
  }
  return list_services;
}

export const ServiceProfessionalData = (size_array: number) =>{
    return list_service(size_array);
}

console.log(list_service(3))
  