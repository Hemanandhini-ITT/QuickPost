import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSizes from '../../theme/font/fontSizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.grayLight1,
    justifyContent: 'center',
    borderRadius: 8,
    gap: 25,
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
    padding: 10,
    backgroundColor: colors.white,
  },
  errorText: {
    color: colors.red,
    fontSize: fontSizes.xs,
    paddingBottom: 12,
  },
  buttonContainer: {
    paddingTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
    color: colors.orangeDark,
  },
  button: {
    backgroundColor: colors.orangeDark,
  },
});
