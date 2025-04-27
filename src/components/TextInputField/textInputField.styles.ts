import {StyleSheet} from 'react-native';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  label: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  inputDefault: {
    borderColor: '#ccc',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: fontSizes.xs,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
