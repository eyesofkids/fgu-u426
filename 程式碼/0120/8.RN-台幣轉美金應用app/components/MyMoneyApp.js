import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

function MyMoneyApp() {
  const [money, setMoney] = useState('')
  // t2u u2t
  const [type, setType] = useState('')

  return (
    <View style={styles.container}>
      <Text>貨幣轉換程式</Text>

      <TextInput
        value={money}
        onChangeText={(text) => {
          setMoney(text)
        }}
      />

      <Button
        onPress={() => {
          setType('t2u')
        }}
        title="新台幣轉美金"
      />

      <Button
        onPress={() => {
          setType('u2t')
        }}
        title="美金轉新台幣"
      />
      <Text>
        {type === 'u2t' ? <Text>美金轉新台幣</Text> : ''}
        {type === 't2u' ? <Text>新台幣轉美金</Text> : ''}
      </Text>
      <Text>
        最後轉換為
        {type === 'u2t' ? (+money * 28.53).toFixed(0) : ''}
        {type === 't2u' ? (+money / 28.53).toFixed(2) : ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MyMoneyApp
