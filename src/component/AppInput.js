import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const AppInput = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  backgroundColor,
  borderColor,
  activeOutlineColor,
  outlineColor,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        mode={'outlined'}
        outlineColor={outlineColor}
        activeOutlineColor={activeOutlineColor}
        style={[
          styles.inputStyle,
          {backgroundColor: backgroundColor, borderColor: borderColor},
        ]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginVertical: '4%',
  },
  inputStyle: {
    width: '90%',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
});

export {AppInput};
