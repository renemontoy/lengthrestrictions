import { useState, useMemo } from "react";

export default function DrivingIronLength() {
  const shaftMaxList = {
    "Accra iSeries 50i": '43 1/4"',
    "Accra iSeries 60i": '43 1/4"',
    "Accra iSeries 70i": '43 1/4"',
    "Accra iSeries 80i": '43 1/4"',

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": '43 1/4"',
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": '43 1/4"',
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": '43 1/4"',
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": '43 1/4"',
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": '43 1/4"',

    "Fujikura Ventus Blue 7 R Hyb": '44 1/4"',
    "Fujikura Ventus Blue 8 S Hyb": '44 1/4"',
    "Fujikura Ventus Blue 9 X Hyb": '44 1/4"',

    "Graphite Design Tour AD DI Hyb 85- S": '44 1/4"',
    "Graphite Design Tour AD DI Hyb 85- X": '44 1/4"',
    "Graphite Design Tour AD IZ Hyb 6- R2": '44 1/4"',
    "Graphite Design Tour AD IZ Hyb 7- R": '44 1/4"',

    "KBS Max Graphite 45 L- Parallel": '43 1/4"',
    "KBS Max Graphite 55 A- Parallel": '43 1/4"',
    "KBS Max Graphite 65 R- Parallel": '43 1/4"',

    "KBS-TGIGraphite-70-R-Iron": '43 1/4"',
    "KBS-TGIGraphite-80-S-Iron": '43 1/4"',

    "KBS-Tour-85H-S-Hyb": '44 1/4"',
    "KBS-Tour-95H-X-Hyb": '44 1/4"',

    "MCA Tensei AV X-Link Hybrid Blue 75 R": '44 1/4"',
    "MCA Tensei AV X-Link Hybrid Blue 75 S": '44 1/4"',
    "MCA Tensei AV X-Link Hybrid White 85 S": '44 1/4"',
    "MCA Tensei AV X-Link Hybrid White 85 X": '44 1/4"',

    "Mitsubishi MMT 50 L- Parallel": '44 1/4"',
    "Mitsubishi MMT 60 A- Parallel": '44 1/4"',
    "Mitsubishi MMT 70 R- Parallel": '44 1/4"',
    "Mitsubishi MMT 80 S- Parallel": '44 1/4"',

    "Project X Cypher 2.0 40i 4.0 - Parallel": '43 1/4"',
    "Project X Cypher 2.0 50i 5.0 - Parallel": '43 1/4"',
    "Project X Cypher 2.0 60i 5.5 - Parallel": '43 1/4"',

    "Project X Denali Frost Blue Hybrid 70 5.5": '44 1/4"',
    "Project X Denali Frost Blue Hybrid 70 6.0": '44 1/4"',
    "Project X Denali Frost Blue Hybrid 80 6.5": '44 1/4"',

    "Project X Denali Silver 105i 6.0 - Parallel": '44 1/4"',
    "Project X Denali Silver 50i 4.0 - Parallel": '43 1/4"',
    "Project X Denali Silver 60i 5.0 - Parallel": '43 1/4"',
    "Project X Denali Silver 70i 5.5 - Parallel": '44 1/4"',
    "Project X Denali Silver 80i 6.0 - Parallel": '44 1/4"',

    "UST Recoil 55 Dart F1- L": '43 1/4"',
    "UST Recoil 65 Dart F2- A": '43 1/4"',
    "UST Recoil 75 Dart F3- R": '43 1/4"',
    "UST Recoil 75 Dart F4- S": '43 1/4"',
  };

  const shaftMinList = {
    "Accra iSeries 50i": '34 1/2"',
    "Accra iSeries 60i": '34 1/2"',
    "Accra iSeries 70i": '34 1/2"',
    "Accra iSeries 80i": '34 1/2"',

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": '31 1/2"',
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": '31 1/2"',
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": '31 1/2"',
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": '31 1/2"',
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": '31 1/2"',

    "Fujikura Ventus Blue 7 R Hyb": '34"',
    "Fujikura Ventus Blue 8 S Hyb": '33 1/2"',
    "Fujikura Ventus Blue 9 X Hyb": '33"',

    "Graphite Design Tour AD DI Hyb 85- S": '32 1/2"',
    "Graphite Design Tour AD DI Hyb 85- X": '32 1/2"',
    "Graphite Design Tour AD IZ Hyb 6- R2": '34"',
    "Graphite Design Tour AD IZ Hyb 7- R": '34 1/4"',

    "KBS Max Graphite 45 L- Parallel": '36 1/4"',
    "KBS Max Graphite 55 A- Parallel": '36 1/4"',
    "KBS Max Graphite 65 R- Parallel": '36 1/4"',

    "KBS-TGIGraphite-70-R-Iron": '31 1/2"',
    "KBS-TGIGraphite-80-S-Iron": '31 1/2"',

    "KBS-Tour-85H-S-Hyb": '31 1/4"',
    "KBS-Tour-95H-X-Hyb": '34 1/4"',

    "MCA Tensei AV X-Link Hybrid Blue 75 R": '33 1/2"',
    "MCA Tensei AV X-Link Hybrid Blue 75 S": '33 1/2"',
    "MCA Tensei AV X-Link Hybrid White 85 S": '34"',
    "MCA Tensei AV X-Link Hybrid White 85 X": '34"',

    "Mitsubishi MMT 50 L- Parallel": '34 3/4"',
    "Mitsubishi MMT 60 A- Parallel": '34 3/4"',
    "Mitsubishi MMT 70 R- Parallel": '34 3/4"',
    "Mitsubishi MMT 80 S- Parallel": '34 3/4"',

    "Project X Cypher 2.0 40i 4.0 - Parallel": '31 1/4"',
    "Project X Cypher 2.0 50i 5.0 - Parallel": '31 1/4"',
    "Project X Cypher 2.0 60i 5.5 - Parallel": '31 1/4"',

    "Project X Denali Frost Blue Hybrid 70 5.5": '29 3/4"',
    "Project X Denali Frost Blue Hybrid 70 6.0": '29 1/4"',
    "Project X Denali Frost Blue Hybrid 80 6.5": '31 1/4"',

    "Project X Denali Silver 105i 6.0 - Parallel": '33 3/4"',
    "Project X Denali Silver 50i 4.0 - Parallel": '30 3/4"',
    "Project X Denali Silver 60i 5.0 - Parallel": '31 1/4"',
    "Project X Denali Silver 70i 5.5 - Parallel": '34 3/4"',
    "Project X Denali Silver 80i 6.0 - Parallel": '33 3/4"',

    "UST Recoil 55 Dart F1- L": '31 1/4"',
    "UST Recoil 65 Dart F2- A": '31 1/4"',
    "UST Recoil 75 Dart F3- R": '31 1/4"',
    "UST Recoil 75 Dart F4- S": '31 1/4"',
  };

  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Accra iSeries 50i");

  // --- Calcular resultados ---
  const results = useMemo(() => {
    const shaftLengthMax = shaftMaxList[selectedShaft] ?? "Not available";
    const shaftLengthMin = shaftMinList[selectedShaft] ?? "Not available";

    return {
      result_shaft_Max: shaftLengthMax,
      result_shaft_Min: shaftLengthMin,
    };
  }, [selectedShaft]); 

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Driving Iron Length Calculator</h1>
        <p style={styles.subtitle}>All lengths assume standard tipping</p>

        <div style={styles.calculator}>
          {/* Columna izquierda - formulario */}
          <div style={styles.leftCol}>
            <label>Shaft</label>
            <select style={styles.selectcontainer} value={selectedShaft} onChange={(e) => setSelectedShaft(e.target.value)}>
              {Object.keys(shaftMaxList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Columna medio - resultados */}
          <div style={styles.midCol}>

          </div>

          {/* Columna derecha - resultados */}
          <div style={styles.rightCol}>
            <div style={styles.resultRow}>
              <span>Maximum Length (Raw/Uncut)</span>
              <span style={styles.resultBox}>{results.result_shaft_Max}</span>
            </div>
            <div style={styles.resultRow}>
              <span>Minimum Length</span>
              <span style={styles.resultBox}>{results.result_shaft_Min}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
      containerWrapper: {
        display: "flex",
        justifyContent: "center", // Centrado horizontal
        alignItems: "center",     // Centrado vertical (opcional)
        width: "100%",
        minHeight: "100vh",       // Ocupa toda la altura visible
        marginTop: -40,
        boxSizing: "border-box"
    },
    container: { 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "2.5vw", // Usa % del ancho de la ventana (viewport width)
      maxWidth: "1200px", // Límite máximo para pantallas muy grandes
      margin: "0 auto",
      fontSize: "clamp(10px, 1.1vw, 18px)", // Escala entre 14px y 18px según el ancho
    },
    title: { 
      marginTop: "30px", 
      marginBottom: "-8px",   
      fontSize: "clamp(20px, 1.5vw, 30px)", // Escala de 24px a 32px
      fontWeight: "bold", 
    },
    subtitle: { 
      fontSize: "clamp(10px, 1.15vw, 25px)", 
      color: "#555", 
     },
    calculator: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2vw", // Centra el contenedor calculator
      gap: "3vw",
      width: "100%", // Asegura que ocupe todo el ancho disponible
    },
    leftCol: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "min(30vw, 350px)",
      textAlign: "left",
    },
    rightCol: { 
      display: "flex", 
      flexDirection: "column",
      gap: "19px",
      width: "min(30vw, 300px)",
      alignItems: "center", // Centra los elementos hijos horizontalmente
    },
    midCol: { 
      display: "flex", 
      flexDirection: "column",
      marginTop: "1.6vw", 
      gap: "35px",
      marginRight: "13vw",
      width: "min(30vw, 30px)",
      textAlign: "right",// Centra los elementos hijos horizontalmente
    },
    resultRow: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #aaaaaaff",
      background: "#e0e0e0",
      padding: "16px",
      width: "min(30vw, 450px)"
    },
    resultBox: {
      background: "#63ff1bff",
      padding: ".20vw .25vw",
      fontWeight: "bold",
      fontSize: "clamp(14px, 1.5vw, 17px)"
    },
    selectcontainer :{
      width: "min(30vw, 350px)",
      fontSize: "clamp(13px, 1.05vw, 17px)"
    }
};