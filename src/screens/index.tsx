import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize} from '../themes';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../navigation/constants';
import {LOCAL_STRING} from '../config/local-string';

const EntryScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.centerView}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate(ScreenName.UseCaseOneScreen)}>
              <Text style={styles.buttonText}>{LOCAL_STRING.UserCaseOne}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, {marginTop: 20}]}
              onPress={() => navigation.navigate(ScreenName.UseCaseTwoScreen)}>
              <Text style={styles.buttonText}>{LOCAL_STRING.UserCaseTwo}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.GREY,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: fontSize.font14,
    color: colors.DARK_BALCK,
  },
});
