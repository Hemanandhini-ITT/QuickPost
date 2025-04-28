import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSizes from '../../theme/font/fontSizes';
import fontWeights from '../../theme/font/fontWeights';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
    backgroundColor: colors.grayLight1,
    flexGrow: 1,
    gap: 20,
  },
  postContainer: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    paddingBottom: 10,
  },
  content: {
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentBlack50,
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: fontSizes.md,
    paddingBottom: 25,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: colors.grayLight,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  deleteButton: {
    padding: 10,
    backgroundColor: colors.orangeDark,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: fontWeights.bold,
  },
  userInfoContainer: {
    padding: 16,
    backgroundColor: colors.warmcream,
    alignItems: 'center',
  },
  userName: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    paddingBottom: 15,
  },
  logoutbuttonContainer: {
    backgroundColor: colors.orangeDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonContainer: {
    backgroundColor: colors.orangeDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});
