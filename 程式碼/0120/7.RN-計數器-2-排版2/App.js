import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [total, setTotal] = useState(0)

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          onPress={() => {
            setTotal(total + 1)
          }}
          style={{ fontSize: 120 }}
        >
          {total}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <View style={{ flex: 1, width: 150, alignSelf: 'stretch' }}>
          <Button
            onPress={() => {
              setTotal(0)
            }}
            title="reset"
            color="red"
          />
        </View>
        <View style={{ flex: 1, width: 150, alignSelf: 'stretch' }}>
          <Button
            onPress={() => {
              setTotal(total + 1)
            }}
            title="+1"
            color="green"
          />
        </View>
        <View style={{ flex: 1, width: 150, alignSelf: 'stretch' }}>
          <Button
            onPress={() => {
              setTotal(total - 1)
            }}
            title="-1"
            color="blue"
          />
        </View>
      </View>

      <StatusBar style="auto" />
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
