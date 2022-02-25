import {StyleSheet} from 'react-native'
import color from './contains/color'
const styles = StyleSheet.create({
    items: {
      marginTop: 25
    },
    container: {
      flex: 1,
      backgroundColor: color.background
    },
    body: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 18
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: color.primary,
    }
  })

export default styles