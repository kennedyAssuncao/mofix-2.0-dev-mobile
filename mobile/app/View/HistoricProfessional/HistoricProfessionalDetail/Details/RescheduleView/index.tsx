import React, {
    useState,
} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { 
    Container,
    TitleView,
    ViewText,
    LabelText,
    ReasonDescription,
    Button,
    ButtonText,
    ViewData,
    ButtonData,
    ButtonTextData,
    LabelTextData,
    ViewModal,
    ViewModalAlert,
    TitleAlertView,
    TextButton,
    DescriptionAlertView,
    TextDescriptionAlert,
    AlertButton,
    ButtonHour,
    ButtonsDateTimeView,
} from './styles';

import{
    Modal,
    Platform
} from 'react-native';


import theme from 'root/theme.json';

import DateTimePicker from '@react-native-community/datetimepicker';

const RescheduleView: React.FC = ({navigation}: any) => {

  const [reason, setReason] = useState('');
  const [modal, SetModal] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [showdatetime, SetShowDateTime] = useState(false);


  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || date;
    SetShowDateTime(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode:any) => {
    SetShowDateTime(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    
  return(
    <Container>
        <TitleView>
            {`Informe o motivo, data e horário \n do reagendamento`}
        </TitleView>

        <ViewText>
            <LabelText>
                Motivo
            </LabelText>
            <ReasonDescription
                multiline={true}
                onChangeText={(text) => {setReason(text)}}
                value={reason}
                placeholder={'Descreva aqui o motivo do reagendamento.'}
                placeholderTextColor={'#979797'}
                textAlignVertical={'top'}
            />
        </ViewText>

        <ViewData>
            <LabelTextData>
                Data/Hora
            </LabelTextData>
            <ButtonsDateTimeView>
                <ButtonData
                    onPress={
                        showDatepicker
                    }
                >
                    <ButtonTextData>
                        Selecione a Data
                    </ButtonTextData>
                </ButtonData>

                <ButtonHour
                    onPress={
                        showTimepicker
                    }
                >
                    <ButtonTextData>
                        Selecione a Hora
                    </ButtonTextData>
                </ButtonHour>
            </ButtonsDateTimeView>

        </ViewData>
      
        <Button
            onPress={()=>{
                /*abrir mensagem e enviar dados...*/
                console.log('Data: ', date);
                SetModal(!modal);
            }}
        >
            <ButtonText>
                SOLICITAR REAGENDAMENTO
            </ButtonText>
        </Button>

        {showdatetime && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}


        {
            <Modal
                animationType="slide"
                //transparent={false} -> sobe em cima da statusbar mas não fica transparente
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                SetModal(!modal);
                }}
                style={{flex:1}}
            >
                <ViewModal>
                    <ViewModalAlert>
                        <TitleAlertView
                            style={{
                                backgroundColor: theme.colors['default-green']
                            }}
                        >
                            <TextButton>
                                SUCESSO!
                            </TextButton>
                        </TitleAlertView>
                        <DescriptionAlertView>
                            <TextDescriptionAlert
                                    style={{
                                        color: theme.colors['default-green']
                                    }}
                            >
                                {`Solicitação de reagendamento \n enviada!`}
                            </TextDescriptionAlert>
                        </DescriptionAlertView>

                        <AlertButton
                            onPress={() =>{
                                console.log('Enviar soliciatação...\nTipo da solicitação[aceito/não aceito]');
                                SetModal(!modal);
                            }}
                        >
                            <TextButton>
                                OK
                            </TextButton>
                        </AlertButton>                                

                    </ViewModalAlert>
                </ViewModal>

            </Modal>
        }



    </Container>
  );
}

export default RescheduleView;