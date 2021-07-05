const viewT = new Map();
viewT.set('Pagamento','PaymentDetail');
viewT.set('Iniciado','RequestDetail');
viewT.set('Finalizado','RequestDetail');
viewT.set('Agendado','ScheduledDetail');


export const TypeView = (type: string) =>{
    return viewT.get(type);
}