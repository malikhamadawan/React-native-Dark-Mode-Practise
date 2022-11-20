import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Orientation from 'react-native-orientation';

const Dummy2 = () => {
  const navigation = useNavigation();
  //   const [enteredText, setEnteredText] = useState();
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const onClick = () => {
    setFName(fName.charAt(0).toUpperCase() + fName.slice(1));
    setLName(lName.charAt(0).toUpperCase() + lName.slice(1));
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <TextInput
        placeholder="First Name"
        style={{
          backgroundColor: 'gray',
          width: '80%',
          marginBottom: 8,
        }}
        value={fName}
        onChangeText={txt => {
          setFName(txt);
        }}
      />
      <TextInput
        placeholder="Last Name"
        style={{
          backgroundColor: 'gray',
          width: '80%',
          marginBottom: 8,
        }}
        value={lName}
        autoCapitalize={'none'}
        onChangeText={txt => {
          setLName(txt);
        }}
      />

      <Button
        title="Click"
        onPress={() => {
          onClick();
        }}
        color="orange"
      />
    </View>
  );
};

export default Dummy2;
