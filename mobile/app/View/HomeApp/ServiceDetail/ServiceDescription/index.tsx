import React, {useState} from 'react';
import { 
  Container, 
  ItemsPicker, 
  MultiLineInputData , 
  TextMsg, 
  TextInfoCheckbox, 
  SubTextMsg, 
  ViewCheckBox, 
  TecVisitButton, 
  TermsConfirmText, 
  TecVistText, 
  ButtonLogin, 
  TextButton,
  TextButtonConfirm,
} from './styles';
import CheckBox from '@react-native-community/checkbox';
import {Alert} from 'react-native';
import theme from 'root/theme.json';


function TechVisitIsNecessary(isNecessary: boolean){
  if(isNecessary)
  return (
    <ViewCheckBox>
    <TecVistText>
        Será necessária uma 
    </TecVistText>
    <TecVisitButton
        onPress={()=>{
            Alert.alert(
                "Aviso!",
                "Será necessário uma visita técnica para definir os materias que serão utilizados, por R$00,00."
            );
        }}
    >
        <TermsConfirmText>
            visita técnica.
        </TermsConfirmText>
    </TecVisitButton>
  </ViewCheckBox>
  )
}

const ServiceDescription: React.FC = ({navigation}:any) => {
  const [value, setValue] = React.useState('key1');
  const[checkbox1, setCheckBox1] = useState(false);
  const[checkbox2, setCheckBox2] = useState(false);
  const[checkbox3, setCheckBox3] = useState(false);
  const[checkbox4, setCheckBox4] = useState(false);

  return(
      <Container>
        
        <TextMsg>
          Preencha os detalhes do serviço!
        </TextMsg>

        <MultiLineInputData
          multiline
          numberOfLines={5}
          style={{textAlign:'center'}}
          placeholder="Descreva seu serviço o mais detalhado possível com informações que possam ajudar o técnico a entender o seu pedido."
        />

        <SubTextMsg>
          Quantos itens ?
        </SubTextMsg>

        <ItemsPicker
          selectedValue={value}
          onValueChange={(v) => setValue(v)}
          mode="dropdown"
          itemStyle={{
            textAlign:'center'
          }}
        >
          <ItemsPicker.Item label="1 - 4" value="key0" />
          <ItemsPicker.Item label="5  - 8" value="key1" />
          <ItemsPicker.Item label="Outro" value="key1" />
        </ItemsPicker>

        <SubTextMsg>
          Você possui os itens necessários ?
        </SubTextMsg>
        <ViewCheckBox>  
          <CheckBox
                      value={checkbox1}
                      onValueChange={setCheckBox1}
                      tintColors={{true: theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
                      style={{alignItems:"center", marginLeft:'15%', marginTop:'5%'}}

                  />
          <TextInfoCheckbox>Sim</TextInfoCheckbox>
          <CheckBox
            value={checkbox2}
            onValueChange={setCheckBox2}
            tintColors={{true:theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
            style={{alignItems:"center", marginLeft:'15%', marginTop:'5%'}}
            />
            <TextInfoCheckbox>Não</TextInfoCheckbox>
        </ViewCheckBox>

        <SubTextMsg>
          Você sabe o que precisa ?
        </SubTextMsg>
        <ViewCheckBox>  
          <CheckBox
            value={checkbox3}
            onValueChange={setCheckBox3}
            tintColors={{true:theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
            style={{alignItems:"center", marginLeft:'15%', marginTop:'5%'}}
          />
          <TextInfoCheckbox>Sim</TextInfoCheckbox>
          <CheckBox
            value={checkbox4}
            onValueChange={setCheckBox4}
            tintColors={{true:theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
            style={{alignItems:"center", marginLeft:'15%', marginTop:'5%'}}
            />
            <TextInfoCheckbox>Não</TextInfoCheckbox>
        </ViewCheckBox>

        { TechVisitIsNecessary(checkbox4) }

        <ButtonLogin>
            <TextButtonConfirm>
              Confirmar
            </TextButtonConfirm>
          </ButtonLogin>

      </Container>
  );
}


export default ServiceDescription ;