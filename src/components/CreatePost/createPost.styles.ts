import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';

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
  },
  button: {
    backgroundColor: colors.orangeDark,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.md,
  },
});
