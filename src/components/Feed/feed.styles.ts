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
    gap: 18,
  },
  postContainer: {
    backgroundColor: colors.grayLight1,
    padding: 18,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    paddingBottom: 8,
    color: colors.primary,
  },
  content: {
    fontSize: fontSizes.md,
    color: colors.black,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
    alignItems: 'center',
  },
  icon: {
    color: colors.grayMedium,
  },
  countText: {
    fontSize: 12,
    color: colors.grayMedium,
    marginLeft: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  modalTitle: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    marginBottom: 10,
  },
  commentItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
  },
  commentUser: {
    fontWeight: fontWeights.medium,
  },
  commentText: {
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  closeButton: {
    backgroundColor: colors.grayMedium,
  },
  postButton: {
    backgroundColor: colors.orangeDark,
  },
  buttonText: {
    color: 'white',
    fontWeight: fontWeights.bold,
  },

});
