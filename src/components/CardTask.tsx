import { Pressable, StyleSheet, Touchable, View } from 'react-native'
import React from 'react'
import { Divider, Text, Checkbox } from 'react-native-paper'

type TProps = {
    name: string;
    isChecked?: boolean;
    onPress: () => void;
}

const CardTask = ({name, isChecked = false, onPress}: TProps) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress?.()}>
        <Checkbox.Android status={isChecked ? 'checked' : 'unchecked'}/>
        <Text style={styles.text} numberOfLines={1}>{name}</Text>
        <Divider />
    </Pressable>
  )
}

export default CardTask

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    text: {
        textDecorationLine: 'line-through'
    }
})