import React from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../theme/themeProvider';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  onValueChange,
  value,
  switchButton,
  icon,
  leftTitle,
  textColor,
  onPressText,
}) => {
  const {dark, color} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={[styles.mainContainer, {backgroundColor: color?.primary}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.iconContainer}>
        {icon && (
          <Entypo name={'cross'} size={25} color={dark ? 'white' : 'black'} />
        )}
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleStyle, {color: color?.text}]}>{title}</Text>
      </View>
      <View style={styles.switchContainer}>
        {switchButton ? (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={dark ? '#f5dd4b' : '#f4f3f4'}
          />
        ) : (
          leftTitle && (
            <Text
              onPress={onPressText}
              style={{
                fontSize: 20,
                color: textColor,
              }}>
              {leftTitle}
            </Text>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 20,
  },
  switchContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Header};
