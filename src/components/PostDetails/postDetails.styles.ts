import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warmcream,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: colors.warmcream,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.heading,
    fontWeight: fontWeights.bold,
    color: colors.black,
    paddingBottom: 16,
    textAlign: 'center',
  },
  content: {
    fontSize: fontSizes.lg,
    color: colors.black,
    paddingBottom: 24,
    textAlign: 'center',
    lineHeight: 26,
  },
  metaValue: {
    fontSize: fontSizes.md,
    color: colors.primary,
    paddingBottom: 12,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
});
