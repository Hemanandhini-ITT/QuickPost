import {StyleSheet} from 'react-native';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  label: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
  },
  input: {
    borderColor: colors.grayLight,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  inputDefault: {
    borderColor: colors.grayLight,
  },
  inputError: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: fontSizes.xs,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
