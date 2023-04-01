import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


  return (
    <View>
      <Text>Login</Text>

      <TextInput
        onChangeText ={(val => setemail(val))}
        placeholder='Enter Emali'
        style = {styles.emailInput}
      />

      <TextInput
        onChangeText ={(val => setpassword(val))}
        placeholder='Enter Password'
        style = {styles.emailInput}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

    emailInput: {


    }

})

