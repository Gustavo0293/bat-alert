import React, {useState} from 'react';
import { View,  TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { BatLogo } from '../components/BatLogo/BatLogo';
import { Button } from '../components/Button/Button';
import { InputText } from '../components/InputText/InputText';

export function Home() {

const [visibility, setVisibility] = useState(true)
const [name, setName] = useState('')
const [telefone, setTelefone] = useState('')
const [localizacao, setLocalizacao] = useState('')
const [observacao, setObservacao] = useState('')
const [styleObs, setStyleObs] = useState(false)

const handlerInputs = () => {

  console.log(name);
  console.log(telefone);
  console.log(localizacao);
  console.log(observacao);
}


  return (
    <>
    <View style={[styles.container,{display:visibility?'flex':'none'}]}>
      <View style={{
        width: '80%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BatLogo/>
      </View>
      <View
      style={{
        width: '80%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
      >
        <TouchableOpacity
        onPress={()=>{setVisibility(!visibility)}}
        >
           <Button text='Activate bat signal' color='#696969'/>
        </TouchableOpacity>
      </View>
    </View>
    <View style={[styles.containerForm,{display:!visibility?'flex':'none'}]}>
      <View style={styles.form}>
        <InputText
      placeholder="Name"
      set={setName}
      multiline={false}
      value={name}
      />
      <InputText
      placeholder="Telefone"
      set={setTelefone}
      multiline={false}
      value={telefone}
      />
      <InputText
      placeholder="Localização atual"
      set={setLocalizacao}
      multiline={false}
      value={localizacao}
      />
      <InputText
      placeholder="Observação"
      set={setObservacao}
      multiline={true}
      value={observacao}
      />
      <TouchableOpacity
      onPress={handlerInputs}
      >
        <Button text='Enviar' color='black'/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={()=>{setVisibility(!visibility)}}
      style={styles.button}
      >
        <Button text='Voltar' color='#696969'/>
      </TouchableOpacity>
    </View>
    </>
  );
}