import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import React, { useEffect, useState } from "react";

import { Participant } from "@/src/components/Participant";

export function Home(){

    const [participants, setparticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    const [today, setToday] = useState('');
    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const formattedDate = date.toLocaleDateString('pt-BR', options);
        const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        setToday(capitalizedDate);
    }, []);

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
           return Alert.alert('Partcipante já existente', 'Esse participante já está confirmado no evento.')
        }

        setparticipants(prevState => [...prevState, participantName]);
        setParticipantName('')
    }

    function handleParticipantRemove(name: string){


        Alert.alert('Remover', `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => setparticipants(prevState => prevState.filter(participants => participants !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        {today}
      </Text>
      
      <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor='#6b6b6b'
                onChangeText={text => setParticipantName(text)}
                value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant
             key={item}
             name={item} 
             onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <View style={styles.listEmptyBoxText}>
                <Text style={styles.listEmptyText}>
                    Nenhum usuário presente nesse evento
                </Text>
            </View>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
            <Participant
             key={participant}
             name={participant} 
             onRemove={() => handleParticipantRemove(participant)} />
        ))
      }
      </ScrollView> */} 

    </View>
  )
}