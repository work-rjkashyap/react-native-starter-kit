import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

export const typography = {
  fontSizeSmall: RFValue(12),
  fontSizeNormal: RFValue(14),
  fontSizeMedium: RFValue(16),
  fontSizeLarge: RFValue(18),
  fontSizeXLarge: RFValue(24),
  fontSizeXXLarge: RFValue(32),
  fontSizeXXXLarge: RFValue(40),
  fontFamilyRegular: 'System',
  fontFamilyBold: 'System',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(3),
    elevation: 2,
  },
  button: {
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: typography.fontSizeMedium,
    fontFamily: typography.fontFamilyBold,
    color: '#fff',
  },
  input: {
    width: wp('90%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    fontSize: typography.fontSizeNormal,
  },
});
