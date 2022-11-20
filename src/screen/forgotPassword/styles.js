import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/themeProvider';

const {dark, color, setScheme} = useTheme();

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.primary,
  },
});

export {styles};
