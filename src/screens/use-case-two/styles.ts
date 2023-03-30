import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, metrics} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  inputContainer: {
    backgroundColor: colors.GREY,
    borderRadius: 5,
    padding: 0,
  },
  inputText: {
    paddingHorizontal: 15,
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: fontSize.font14,
    color: colors.DARK_BALCK,
    width: metrics.screenWidth - 0,
  },
  buttonContainer: {
    backgroundColor: colors.APP_COLOR,
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.WHITE,
    fontSize: fontSize.font14,
  },

  head: {
    height: 60,
    backgroundColor: colors.WHITE,
    textAlign: 'center',
  },
  text: {
    margin: 6,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: fontSize.font10,
    color: colors.DARK_BALCK,
  },
  tableRowText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: fontSize.font10,
    color: colors.DARK_BALCK,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },
  statusButton: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
  },
  statusButtonText: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: fontSize.font12,
    color: colors.WHITE,
  },
});

export default styles;
