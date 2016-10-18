# react-native-keyboard-event

[![npm](https://img.shields.io/npm/v/react-native-keyboard-event.svg?style=flat-square)](https://www.npmjs.com/package/react-native-keyboard-event)
[![npm](https://img.shields.io/npm/dt/react-native-keyboard-event.svg?style=flat-square)](https://www.npmjs.com/package/react-native-keyboard-event)

react-native keyboard event for android & iOS

### Installation

```
$ npm i react-native-keyboard-event --save
```

### Usage

````javascript

import KeyListener from 'react-native-keyboard-event';

KeyListener.show(onkeyboardShow).hide(onkeyboardHide);

// Note
// event name is up to platform
console.log(KeyListener.hideEvent);  // iOS: 'keyboardWillShow'; Android: 'keyboardDidShow'
console.log(KeyListener.showEvent);  // iOS: 'keyboardWillHide'; Android: 'keyboardDidHide'

```
