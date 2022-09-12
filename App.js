import { StyleSheet, Text, View } from 'react-native';
import Formulario from './assets/components/Formulario';
import Logica from './assets/components/Logica';
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

  const hacerArreglo = () => {
    const objeto = { nombre, monto, numeroCuotas, tipoPrestamo, valorCuotas, totalDeuda, fecha }
    setCreditos([...creditos, objeto]);
  }



  const fechaActual = () => {
    let dia = new Date().toLocaleDateString();
    let date;
    date = dia;
    setFecha(dia);

  }

  let tipoCredito = (montoAprobado, cuotaAprobada) => {
    let interes = 0;
    let deudaTotal = 0;
    let valorCuota = 0;
    console.log("se vinieron los calculas");
    console.log(montoAprobado);
    console.log(cuotaAprobada);
    switch (tipoPrestamo) {
      case "vivienda":
        console.log("credito de vivienda");
        interes = montoAprobado * 0.015;
        console.log(interes);
        SetValidaTipoCredito(false);
        break;
      case "educacion":
        console.log("credito de educacion");
        interes = montoAprobado * 0.010;
        console.log(interes);
        SetValidaTipoCredito(false);
        break;
      case "libre":
        console.log("credito de libre inversion");
        interes = montoAprobado * 0.02;
        console.log(interes);
        SetValidaTipoCredito(false);
        break;
      default:
        console.log("credito no  valido");
        SetValidaTipoCredito(true);
        break;

    }
    deudaTotal = parseFloat(montoAprobado) + parseFloat(interes * cuotaAprobada);
    console.log(deudaTotal);
    valorCuota = deudaTotal / cuotaAprobada;
    console.log(valorCuota);
    setTotalDeuda(deudaTotal);
    setvalorCuotas(valorCuota);
    fechaActual();
    setPlaceHolde(true);
    hacerArreglo();

  }

  if (irValidaMonto == true) {
    //console.log("se viene la validacion del monto");

    if (monto >= 1000000 && monto <= 100000000) {
      //console.log("continuamos con los calculos del credito");
      SetValidaMonto(false);
      if (numeroCuotas >= 12 && numeroCuotas <= 36) {
        //console.log("se aprueba la cuota del credito");
        SetValidaNumeroCuotas(false);
        console.log("procedemos con el tipo de credito");
        tipoCredito(monto, numeroCuotas);

      } else {
        //console.log("la cuota no cumple, debe ser entre 12 y 36");
        SetValidaNumeroCuotas(true);
        setPlaceHolde(false);
      }
    } else {
      //console.log("Alerta el monto ingresado no no esta en los rangos definidos por el banco");
      SetValidaMonto(true);
      setPlaceHolde(false);
      if (numeroCuotas >= 12 && numeroCuotas <= 36) {
        //console.log("se aprueba la cuota del credito");
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

      {/* <Logica
        setMonto={setMonto}
        setNumeroCuotas={setNumeroCuotas}
        nombre={nombre}
        setNombre={setNombre}
        limpiar={limpiar}
        setLimpiar={setLimpiar}
        verFormulario={verFormulario}
      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },
});
