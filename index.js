/**
 * @desc    react-native keyboard event binding
 * @author  angusfu1126@qq.com
 * @version 2.0.0
 * 
 * @changeLog removeListener
 * 
 * NOTICE that now we can use [Keyboard Module
 * @see http://facebook.github.io/react-native/docs/keyboard.html
 */
import { DeviceEventEmitter, Platform } from 'react-native';

const isAndroid = Platform.OS.toLowerCase() == "android";
const hideEvent = isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';
const showEvent = isAndroid ? 'keyboardDidShow' : 'keyboardWillShow';

export class KeyUpShowListener {
  constructor() {
    this.listeners = {
      hideEvent: [],
      showEvent: []
    };

    this.hideEvent = hideEvent;
    this.showEvent = showEvent;
  }

  hide(onKeyboardHide, ...defaults) {
    let fn = function (...args) {
      onKeyboardHide(defaults.concat(args));
    };

    this.listeners.hideEvent.push(fn);
    DeviceEventEmitter.addListener(hideEvent, fn);
    return this;
  }

  show(onKeyboardShow, ...defaults) {
    let fn = function (...args) {
      onKeyboardShow(defaults.concat(args));
    };

    this.listeners.showEvent.push(fn);
    DeviceEventEmitter.addListener(showEvent, fn);
    return this;
  }

  off() {
    DeviceEventEmitter.removeAllListeners(showEvent);
    DeviceEventEmitter.removeAllListeners(hideEvent);
  }
}
