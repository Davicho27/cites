import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

export default function App() {
  const [citas, setCitas] = useState ([
    {id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No come"},
    {id: "2", paciente: "NOO", propietario: "Juan", sintomas: "No come"},
    {id: "3", paciente: "Vamos", propietario: "Juan", sintomas: "No come"}
  ]);                   

  const eliminarPaciente   = id => {
    setCitas ((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    }) 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Formulario/>
      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas': 'No hay citas, agrega una'}</Text>
      <FlatList
      data={citas}
      renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente}/>} 
      keyExtractor = {cita => cita.id}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo:{
    color: '#000',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paciente:{
    color:'#000'
  }
});
