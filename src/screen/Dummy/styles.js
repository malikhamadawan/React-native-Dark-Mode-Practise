import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/themeProvider';

const {dark, color, setScheme} = useTheme();

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  textStyle: {
    fontSize: 10,
  },
});
export {styles};
