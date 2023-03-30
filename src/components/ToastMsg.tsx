/**
 * Toast Messgae
 */

import Snackbar from 'react-native-snackbar';

const ToastMsg = (message = '') =>
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });

export default ToastMsg;
