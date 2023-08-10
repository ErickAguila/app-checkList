import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';

type TProps = {
  title: string
}

const CustomAppbar = ({title}: TProps) => {
  return (
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title={title} />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
  )
}

export default CustomAppbar

const styles = StyleSheet.create({})