import React from 'react';
import {View, Text, Switch, ScrollView} from 'react-native';
import {AppButton, AppInput, Header} from '../../component';
import {useTheme} from '../../theme/themeProvider';
import {styles} from './styles';

const Login = ({navigation}) => {
  const {dark, color, setScheme} = useTheme();

  const toggleTheme = () => {
    dark ? setScheme('light') : setScheme('dark');
  };
  return (
    <View style={[styles.mainContainer, {backgroundColor: color.primary}]}>
      <ScrollView>
        <Header
          title={'Login'}
          value={dark}
          onValueChange={toggleTheme}
          switchButton={true}
        />

        <View
          style={{
            marginVertical: '10%',
          }}>
          <AppInput
            placeholder={'Email'}
            placeholderTextColor={dark ? 'gray' : 'black'}
            activeOutlineColor={dark ? 'purple' : 'black'}
            outlineColor={dark ? 'purple' : 'green'}
          />
          <AppInput
            placeholder={'Password'}
            placeholderTextColor={dark ? 'gray' : 'black'}
            activeOutlineColor={dark ? 'purple' : 'black'}
            outlineColor={dark ? 'gray' : 'green'}
            secureTextEntry
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

        <Text
          onPress={() => {
            navigation.navigate('forgotPassword');
          }}
          style={{
            fontSize: 20,
            paddingVertical: 20,
            alignSelf: 'center',
            color: dark ? 'white' : 'green',
          }}>
          Forgot your password?
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;
