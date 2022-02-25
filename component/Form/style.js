import {StyleSheet} from 'react-native'
import color from '../../contains/color'
const styles = StyleSheet.create({
    addTask:{
        bottom: 30,
        paddingHorizontal: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: color.primary,
        paddingHorizontal: 20,
        paddingVertical:10,
        color: color.text
    },
    iconWrapper: {
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.background
    },
    icon: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',

    },
})
export default styles