import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { SocialIcon } from 'react-native-elements'
 function handleFacebookLogin () {
  LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
    function (result) {
      if (result.isCancelled) {
        console.log('Login cancelled')
      } else {
        console.log('Login success with permissions: ' + result.grantedPermissions.toString())
      }
    },
    function (error) {
      console.log('Login fail with error: ' + error)
    }
  )
}

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
    <SocialIcon
    onPress={() => alert('im facebook !')}
    style={{
      width:290
    }}
  title='Sign In With Facebook'
  button
  type='facebook'
/>
<SocialIcon style={{
  width:290
}}
onPress={() => alert('im google !')}
  title='Sign In With Google +'
  button
  type='google'
/>
            
  </Background>
);
export default memo(HomeScreen);
