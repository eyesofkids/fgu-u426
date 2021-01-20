import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Headline, TextInput } from 'react-native-paper'

function MyMoneyApp() {
  const [money, setMoney] = useState('')
  // t2u u2t
  const [type, setType] = useState('')

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1 / 6, justifyContent: 'center' }}>
        <Headline>貨幣轉換程式</Headline>
      </View>
      <View style={{ width: '100%', flex: 1 / 6, justifyContent: 'center' }}>
        <TextInput
          label="金額"
          value={money}
          onChangeText={(text) => {
            setMoney(text)
          }}
        />
      </View>
      <View style={{ width: '100%', flex: 1 / 6, justifyContent: 'center' }}>
        <Button
          mode="contained"
          onPress={() => {
            setType('t2u')
          }}
        >
          新台幣轉美金
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            setType('u2t')
          }}
        >
          美金轉新台幣
        </Button>
      </View>
      <View
        style={{ width: '100%', flex: 3 / 6, justifyContent: 'flex-start' }}
      >
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})

export default MyMoneyApp
