/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */
import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


interface Props {
  token: string,
}

interface State {
  token: string,
}

export default class Token extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      token: props.token || 'init Token',
    }
  }
  
  newToken = () => {
    return Math.random().toString(36).substring(7);

  }

  changeToken = () => {
    const token = `${this.newToken()}-${this.newToken()}`;
    this.setState({ token });
  };

  render() {
    return (
      <View style={styles.container}>
	  <Button
            title="new Token"
            onPress={this.changeToken}
            accessibilityLabel="button to generate token"
            color="#00BB72"
          />
	  <Text
	    style={styles.text}
	  > 
	    {this.state.token}
	  </Text>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3399FF',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontSize: 24,
  },
});
