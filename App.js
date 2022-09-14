import { StyleSheet, Text, View } from 'react-native';
import Formulario from './assets/components/Formulario';
import { useState, useEffect } from 'react';

export default function App() {
  const [creditos, setCreditos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);
  const [numeroCuotas, setNumeroCuotas] = useState(0);
  const [valorCuotas, setvalorCuotas] = useState(0);
  const [fecha, setFecha] = useState("");
  const [tipoPrestamo, setTipoPrestamo] = useState("");
  const [totalDeuda, setTotalDeuda] = useState(0);
  const [creditos2, setCreditos2] = useState([]);
  //useState para validar si hay algun campo vacio
  const [validaVacio, setValidaVacio] = useState(false);
  //useState para ingresar a la validacion del monto
  const [irValidaMonto, setIrValidaMonto] = useState(false);
  //useState para controlar mensaje cuando el monto no cumple
  const [validaMonto, SetValidaMonto] = useState(false);
  //useState para controlar mensaje cuando numero de cuotas no cumple
  const [validaNumeroCuotas, SetValidaNumeroCuotas] = useState(false);
  //useState para controlar mensaje cuando tipo de vredito no cumple
  const [validaTipoCredito, SetValidaTipoCredito] = useState(false);
  //useState para controlar cambiar los placeholder
  const [placeHolde, setPlaceHolde] = useState(false);

  let f1 = () => {
    let dia = new Date().toLocaleDateString();
    let date;
    date = dia;
    setFecha(dia);
  };
  window.onload = f1;

  const hacerArreglo = () => {
    const objeto = { nombre, monto, numeroCuotas, tipoPrestamo, valorCuotas, totalDeuda, fecha }
    setCreditos([...creditos, objeto]);
  };

  let tipoCredito = (montoAprobado, cuotaAprobada) => {
    let interes = 0;
    let deudaTotal = 0;
    let valorCuota = 0;

    switch (tipoPrestamo) {
      case "vivienda":
        interes = montoAprobado * 0.015;
        SetValidaTipoCredito(false);
        break;
      case "educacion":
        interes = montoAprobado * 0.010;
        SetValidaTipoCredito(false);
        break;
      case "libre":
        interes = montoAprobado * 0.02;
        SetValidaTipoCredito(false);
        break;
      default:
        SetValidaTipoCredito(true);
        break;
    }
    deudaTotal = parseFloat(montoAprobado) + parseFloat(interes * cuotaAprobada);
    valorCuota = deudaTotal / cuotaAprobada;
    setTotalDeuda(deudaTotal);
    setvalorCuotas(valorCuota);
    f1();
    setPlaceHolde(true);
    hacerArreglo();
  };

  if (irValidaMonto == true) {
    if (monto >= 1000000 && monto <= 100000000) {
      SetValidaMonto(false);
      if (numeroCuotas >= 12 && numeroCuotas <= 36) {
        SetValidaNumeroCuotas(false);
        tipoCredito(monto, numeroCuotas);
      } else {
        SetValidaNumeroCuotas(true);
        setPlaceHolde(false);
      }
    } else {
      SetValidaMonto(true);
      setPlaceHolde(false);
      if (numeroCuotas >= 12 && numeroCuotas <= 36) {
        SetValidaNumeroCuotas(false);
      }
    }
    setIrValidaMonto(false);
  }


  return (
    <View style={styles.container}>
      <Formulario
        nombre={nombre} setNombre={setNombre}
        monto={monto} setMonto={setMonto}
        numeroCuotas={numeroCuotas} setNumeroCuotas={setNumeroCuotas}
        valorCuotas={valorCuotas} setvalorCuotas={setvalorCuotas}
        fecha={fecha} setFecha={setFecha}
        tipoPrestamo={tipoPrestamo} setTipoPrestamo={setTipoPrestamo}
        totalDeuda={totalDeuda} setTotalDeuda={setTotalDeuda}
        creditos={creditos} setCreditos={setCreditos}
        validaVacio={validaVacio} setValidaVacio={setValidaVacio}
        setIrValidaMonto={setIrValidaMonto}
        validaMonto={validaMonto}
        validaNumeroCuotas={validaNumeroCuotas}
        placeHolde={placeHolde} setPlaceHolde={setPlaceHolde}
        validaTipoCredito={validaTipoCredito} SetValidaTipoCredito={SetValidaTipoCredito}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },
});
