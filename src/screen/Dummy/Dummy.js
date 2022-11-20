import React from 'react';
import {View, Text, Switch, ScrollView} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {AppButton, AppInput, Header} from '../../component';
import {useTheme} from '../../theme/themeProvider';
import {styles} from './styles';

const Dummy = ({navigation}) => {
  const {dark, color, setScheme} = useTheme();

  return (
    <View style={[styles.mainContainer, {backgroundColor: color.primary}]}>
      <ScrollView>
        <Header
          title={'Sign Up'}
          icon={true}
          leftTitle={'Login'}
          textColor={dark ? 'purple' : 'green'}
          onPressText={() => {
            navigation.navigate('Login');
          }}
        />

        <View
          style={{
            marginVertical: '10%',
          }}>
          <AppInput
            placeholder={'Name'}
            placeholderTextColor={dark ? 'gray' : 'black'}
            activeOutlineColor={dark ? 'purple' : 'black'}
            outlineColor={dark ? 'purple' : 'green'}
          />
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
          onPress={() => {}}
          title={'Sign Up'}
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

export default Dummy;
