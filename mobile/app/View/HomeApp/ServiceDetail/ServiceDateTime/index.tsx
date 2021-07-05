import React, {useState} from 'react';
import { 
  Container, 
  TextMsg, 
  TextButton, 
  PasswordButton, 
  ButtonLogin,
  TextButtonConfirm,
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceDateTime: React.FC = ({navigation}:any) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');

  }



  return(
      <Container>
        <TextMsg>
          Selecione até 3 datas desejadas
        </TextMsg>
        
        <PasswordButton
        style={{ marginTop: '25%', marginBottom:'5%'}}
        onPress={showDatepicker} >
          <TextButton>
            Clique e selecione a 1° data
          </TextButton>
        </PasswordButton>
        <PasswordButton
        style={{marginBottom:'5%'}}
        onPress={showDatepicker} >
          <TextButton>
          Clique e selecione 2° data
          </TextButton>
        </PasswordButton>
        <PasswordButton
        onPress={showDatepicker}>
          <TextButton>
          Clique e selecione a 3° data
          </TextButton>
        </PasswordButton>

        <ButtonLogin>
            <TextButtonConfirm>
              Confirmar
            </TextButtonConfirm>
          </ButtonLogin>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        
      </Container>
  );
}


export default ServiceDateTime ;