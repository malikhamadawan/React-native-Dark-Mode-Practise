import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = ({title, backgroundColor, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textStyle, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '85%',
    padding: '3%',
    paddingVertical: '5%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
});

export {AppButton};
