import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { styles } from '../style/miStyle';

const Formulario = ({ monto, setMonto, numeroCuotas, setNumeroCuotas, nombre, setNombre,
    tipoPrestamo, setTipoPrestamo, validaVacio, setValidaVacio,
    setIrValidaMonto, validaMonto, validaNumeroCuotas, fecha, placeHolde, setPlaceHolde, valorCuotas,
    setvalorCuotas, setTotalDeuda, setFecha, totalDeuda, validaTipoCredito, SetValidaTipoCredito, creditos }) => {

    let validar = () => {
        
        if ([nombre, monto, numeroCuotas, tipoPrestamo].includes("")) {
            setValidaVacio(true);
            setPlaceHolde(false);
          
        } else {
            setValidaVacio(false);
            setIrValidaMonto(true);
           
        }
    };


    let buscar = () => {
        let objetoBuscado = creditos.find(nombreb => nombreb.nombre == nombre);
        if (objetoBuscado != undefined) {
            setNombre(objetoBuscado.nombre);
            setMonto(objetoBuscado.monto);
            setNumeroCuotas(objetoBuscado.numeroCuotas);
            setTipoPrestamo(objetoBuscado.tipoPrestamo);
            setvalorCuotas(objetoBuscado.valorCuotas);
            setTotalDeuda(objetoBuscado.totalDeuda);
            setFecha(objetoBuscado.fecha);
            setPlaceHolde(true);
        } else {
            alert("El no se encuentra el el objeto");
        };

    }
    let limpiar = () => {
        setNombre("");
        setMonto("");
        setTipoPrestamo("");
        setNumeroCuotas("");
        setTotalDeuda("");
        setvalorCuotas("");
        setFecha("");
        setPlaceHolde(false);
        SetValidaTipoCredito(false);
    };
    return (
        <View>
            <View style={styles.titulo}><Text style={{ fontWeight: 'bold' }} >Simulador de Credito</Text></View>
            <View style={styles.formulario}>

                <View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.label}>
                            <Text style={[styles.text, { width: 130, marginTop: 30 }]} >Nombre</Text>
                            <TextInput style={[styles.text, { padding: 5, width: 110, marginTop: 30 }]} placeholder='____________________'
                                onChangeText={nombre => setNombre(nombre)}
                                value={nombre}
                            ></TextInput>
                        </View>
                        <View style={styles.label}>
                            <Text style={[styles.text, { marginLeft: 40, width: 120, marginTop: 30 }]}>Fecha</Text>
                            <TextInput style={[styles.text, { padding: 5, width: 110, marginTop: 30 }]} placeholder={placeHolde ? (`${fecha}`) : ('____________________')}></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.label}>
                            <Text style={[styles.text, { width: 130 }]}>Monto Prestamo</Text>
                            <TextInput style={[styles.text, { padding: 5, width: 110 }]} placeholder='____________________'
                                onChangeText={monto => setMonto(monto)}
                                value={monto}
                            ></TextInput>

                        </View>
                        <View style={styles.label}>
                            <Text style={[styles.text, { marginLeft: 40, width: 120 }]}>Tipo Prestamo</Text>
                            <TextInput style={[styles.text, { padding: 5, width: 110 }]} placeholder='____________________'
                                onChangeText={tipoPrestamo => setTipoPrestamo(tipoPrestamo)}
                                value={tipoPrestamo}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.label}>
                            <Text style={[styles.text, { width: 130 }]}>Numero de Cuotas</Text>
                            <TextInput style={[styles.text, { padding: 5, width: 110 }]} placeholder='____________________'
                                onChangeText={numeroCuotas => setNumeroCuotas(numeroCuotas)}
                                value={numeroCuotas}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.label}>
                            <Text style={[styles.text, { marginBottom: 40, width: 130 }]}>Valor Cuota</Text>
                            <TextInput style={[styles.text, { padding: 5, marginBottom: 40, width: 110 }]} placeholder={placeHolde ? (` ${valorCuotas} `) : ('____________________')}></TextInput>
                        </View>
                        <View style={styles.label}>
                            <Text style={[styles.text, { width: 120, marginLeft: 40, marginBottom: 40 }]}>Total Deuda</Text>
                            <TextInput style={[styles.text, { marginBottom: 40, width: 110 }]} placeholder={placeHolde ? (` ${totalDeuda} `) : ('____________________')}></TextInput>
                        </View>
                    </View>
                </View>



                <View>
                    <View>
                        <TouchableOpacity id="enviar" style={styles.tochable}
                            onPress={() => validar()}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 2, textAlign: 'center' }}>Calcular / Guardar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity style={styles.tochable}
                            onPress={() => buscar()}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 3, textAlign: 'center' }}>Buscar</Text>
                            {
                                creditos.map(objetoBuscado => {
                                    return (
                                        <View></View>
                                    )
                                })
                            }
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity style={styles.tochable}
                            onPress={() => limpiar()}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 3, textAlign: 'center' }}>Limpiar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <>
                {validaVacio && (

                    <View style={styles.campoVacio}><Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Hay al menos un campo vacio</Text></View>
                )}
            </>
            <>
                {validaMonto && (

                    <View style={styles.validaMonto}><Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Verifique si el monto ingresado esta entre 1 millon y cien millones</Text></View>
                )}
            </>
            <>
                {validaNumeroCuotas && (

                    <View style={styles.validaNumeroCuotas}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Verifique si el numero de cuotas esta entre 12 y 36</Text></View>
                )}
            </>
            <>
                {validaTipoCredito && (

                    <View style={styles.validaTipoCredito}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Ingresa un tipo de credito valido: vivienda, educacion o libre</Text></View>
                )}
            </>
        </View >
    )
}


export default Formulario