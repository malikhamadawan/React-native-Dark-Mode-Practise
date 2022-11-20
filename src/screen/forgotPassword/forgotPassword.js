import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppButton, AppInput, Header} from '../../component';
import {useTheme} from '../../theme/themeProvider';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {dark, color, setScheme} = useTheme();
  return (
    <View style={[styles.mainContainer, {backgroundColor: color.primary}]}>
      <Header title={'Forgot Password'} icon={true} />
      <View
        style={{
          padding: 10,
          paddingVertical: 50,
        }}>
        <AppInput
          placeholder={'Email'}
          placeholderTextColor={dark ? 'gray' : 'black'}
          activeOutlineColor={dark ? 'purple' : 'black'}
          outlineColor={dark ? 'purple' : 'green'}
        />
      </View>
      <AppButton
        onPress={() => {
          navigation.navigate('Dummy');
        }}
        title={'Log In'}
        backgroundColor={dark ? 'purple' : 'green'}
        color={'white'}
      />
    </View>
  );
};

export default ForgotPassword;
