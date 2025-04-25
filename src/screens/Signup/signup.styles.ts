import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    flexDirection: 'column',
    gap: 16,
  },
  title: {
    fontSize: fontSizes.heading,
    fontWeight: fontWeights.semiBold,
    paddingBottom: 4,
    color: colors.black,
  },
  subtitle: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.regular,
    paddingBottom: 24,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
    padding: 14,
    fontSize: fontSizes.md,
  },
  button: {
    backgroundColor: colors.orangeDark,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24,
  },
  footerText: {
    color: colors.grayMedium,
  },
  loginLink: {
    color: colors.orangeDark,
    fontWeight: fontWeights.semiBold,
  },
  errorText: {
    color: colors.red,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: fontSizes.sm,
  },
});

export default styles;
