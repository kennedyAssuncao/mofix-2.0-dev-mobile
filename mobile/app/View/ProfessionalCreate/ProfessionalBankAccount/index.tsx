import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import axios from 'axios';

import{mask} from 'remask';

import { 
    Container,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    InputData,
    TextMessage,
    SelectionBank,
} from './styles';

import { AntDesign } from '@expo/vector-icons';


interface Bank {
    bankId: number;
    st: string;
    name: string;
    ispb: string;
    createdby: string;
    createdin: Date;
}


const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const verify_values = (bank: string, agency: string, account: string) => {
    return (bank && agency && account); 
}


const ProfessionalBankAccount: React.FC = ({navigation, route}:any) => {
    const [bankList, setBankList] = useState<Bank[]>([]);

    useEffect(() => {
        async function getBankList() {
          try {
            const { data } = await axios.get(`http://www.a6i.com.br/smg-api/?p=api/data/bank`);
            setBankList(data);
          } catch (error) {
            alert("Ocorreu um erro ao buscar os items");
          }
        }
        getBankList();
      }, []);

  const[agency, onChangeAGENCY] = useState('');//useState('RG');
  const[account, onChangeACC] = useState('');//useState('CPF');
  const [bank, onChangeBANK] = useState('');
  const {user_type}:any = route.params;
  let { professional_obj } = route.params;

  console.log(bankList);
  
  return(
    <Container>
        <ImageView>
            <TextMsg>
                {frase(user_type)}, informe os dados{'\n'} para o recebimento!
            </TextMsg>
            <TextMessage>
                Informe seus dados{'\n'}bancários para receber{'\n'}o pagamento dos seus serviços.
            </TextMessage>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}
            <ButtonLogin
                onPress={()=>{
                    if(verify_values(bank, agency, account)){
                        let professionalBankInfo = {
                            bank,
                            agency,
                            account,
                        };
                        professional_obj = {
                            ...professional_obj,
                            professionalBankInfo
                        }
                        navigation.navigate('ProfessionalPasswordAcess',{user_type:user_type, professional_obj})
                    }else {
                        Alert.alert('Erro', 'Para prosseguir com cadastro informe seus dados bancários.');
                    }
                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>

            <InputData
                textAlign={'center'}
                maxLength={14}
                keyboardType={'number-pad'}
                onChangeText={text => onChangeACC(text)}
                value={account}
                placeholder={'Conta'}
            />

            <InputData 
                    textAlign={'center'}
                    maxLength={14}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeAGENCY(text)}
                    value={agency}
                    placeholder={'Agência'}
            />
            
            <SelectionBank
                mode="dropdown"
                textAlign={'center'}
                selectedValue={bank ?? null}
                onValueChange={(itemValue, itemIndex) =>itemValue && onChangeBANK(itemValue)}
                itemTextStyle={{textAlign:'center', marginLeft:'50%', backgroundColor:"#898989"}}
            >   
                {<SelectionBank.Item label={"Escolha uma Opção"} value={null} color="#898989"/>}
                <SelectionBank.Item label="Itaú" value='itau' color="#898989"/>
                <SelectionBank.Item label="Bradesco" value='bradesco' color="#898989"/>
                <SelectionBank.Item label="Nubank" value='nubank' color="#898989" />
            </SelectionBank>

        </ViewButton>

    </Container>
  );
}

export default ProfessionalBankAccount;