
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titulo: {
        flex: 0.5,
        backgroundColor: '#ffdab9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 0,


    },
    formulario: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: '#b0e0e6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,


    },
    label: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {

        marginTop: 10,
    },
    tochable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6b8e23',
        marginTop: 20,
        width: 140,
        height: 30,
        borderRadius: 3,
        padding: 4,
        marginLeft: 30,
        marginRight: 30,

    },
    campoVacio: {
        flex: 0.5,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
    },
    validaMonto: {
        flex: 0.5,
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
    },
    validaNumeroCuotas: {
        flex: 0.5,
        backgroundColor: '#ff4500',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
    },
    validaTipoCredito: {
        flex: 0.5,
        backgroundColor: '#ff1493',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
    },

});


export { styles };