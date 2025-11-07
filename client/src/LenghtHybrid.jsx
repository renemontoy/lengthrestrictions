import { useState, useMemo } from "react";

export default function HybridLength() {
  const shaftMaxList = {
  "Accra iSeries 50i": "42 1/2\"",
  "Accra iSeries 60i": "42 1/2\"",
  "Accra iSeries 70i": "42 1/2\"",
  "Accra iSeries 80i": "42 1/2\"",
  "Aerotech SteelFiber Private Reserve 110 S - Parallel": "42 1/2\"",
  "Aerotech SteelFiber Private Reserve 60 A - Parallel": "42 1/2\"",
  "Aerotech SteelFiber Private Reserve 70 R - Parallel": "42 1/2\"",
  "Aerotech SteelFiber Private Reserve 95 R - Parallel": "42 1/2\"",
  "Aerotech SteelFiber Private Reserve 95 S - Parallel": "42 1/2\"",
  "Fujikura Ventus Blue 7 R Hyb": "43 1/2\"",
  "Fujikura Ventus Blue 8 S Hyb": "43 1/2\"",
  "Fujikura Ventus Blue 9 X Hyb": "43 1/2\"",
  "KBS Max Graphite 45 L- Parallel": "42 1/2\"",
  "KBS Max Graphite 55 A- Parallel": "42 1/2\"",
  "KBS Max Graphite 65 R- Parallel": "42 1/2\"",
  "KBS-TGIGraphite-70-R-Iron": "42 1/2\"",
  "KBS-TGIGraphite-80-S-Iron": "42 1/2\"",
  "KBS-Tour-85H-S-Hyb": "43 1/2\"",
  "KBS-Tour-95H-X-Hyb": "43 1/2\"",
  "MCA Tensei AV X-Link Hybrid Blue 75 R": "43 1/2\"",
  "MCA Tensei AV X-Link Hybrid Blue 75 S": "43 1/2\"",
  "MCA Tensei AV X-Link Hybrid White 85 S": "43 1/2\"",
  "MCA Tensei AV X-Link Hybrid White 85 X": "43 1/2\"",
  "Mitsubishi MMT 50 L- Parallel": "43 1/2\"",
  "Mitsubishi MMT 60 A- Parallel": "43 1/2\"",
  "Mitsubishi MMT 70 R- Parallel": "43 1/2\"",
  "Mitsubishi MMT 80 S- Parallel": "43 1/2\"",
  "Project X Cypher 2.0 40i 4.0 - Parallel": "42 1/2\"",
  "Project X Cypher 2.0 50i 5.0 - Parallel": "42 1/2\"",
  "Project X Cypher 2.0 60i 5.5 - Parallel": "42 1/2\"",
  "Project X Denali Blue Hybrid 80 5.5": "43 1/2\"",
  "Project X Denali Blue Hybrid 80 6.0": "43 1/2\"",
  "Project X Denali Blue Hybrid 80 6.5": "43 1/2\"",
  "Tour AD DI Hyb 85- S": "43 1/2\"",
  "Tour AD DI Hyb 85- X": "43 1/2\"",
  "Tour AD IZ Hyb 6- R2": "43 1/2\"",
  "Tour AD IZ Hyb 7- R": "43 1/2\"",
  "UST Recoil 55 Dart F1- L": "42 1/2\"",
  "UST Recoil 65 Dart F2- A": "42 1/2\"",
  "UST Recoil 75 Dart F3- R": "42 1/2\"",
  "UST Recoil 75 Dart F4- S": "42 1/2\""
  };

  const shaftMinList = {
  "Accra iSeries 50i": "36 1/4\"",
  "Accra iSeries 60i": "36 1/4\"",
  "Accra iSeries 70i": "36 1/4\"",
  "Accra iSeries 80i": "36 1/4\"",
  "Aerotech SteelFiber Private Reserve 110 S - Parallel": "33 1/4\"",
  "Aerotech SteelFiber Private Reserve 60 A - Parallel": "33 1/4\"",
  "Aerotech SteelFiber Private Reserve 70 R - Parallel": "33 1/4\"",
  "Aerotech SteelFiber Private Reserve 95 R - Parallel": "33 1/4\"",
  "Aerotech SteelFiber Private Reserve 95 S - Parallel": "33 1/4\"",
  "Fujikura Ventus Blue 7 R Hyb": "35 3/4\"",
  "Fujikura Ventus Blue 8 S Hyb": "35 1/4\"",
  "Fujikura Ventus Blue 9 X Hyb": "34 3/4\"",
  "KBS Max Graphite 45 L- Parallel": "38\"",
  "KBS Max Graphite 55 A- Parallel": "38\"",
  "KBS Max Graphite 65 R- Parallel": "38\"",
  "KBS-TGIGraphite-70-R-Iron": "33 1/4\"",
  "KBS-TGIGraphite-80-S-Iron": "33 1/4\"",
  "KBS-Tour-85H-S-Hyb": "33\"",
  "KBS-Tour-95H-X-Hyb": "36\"",
  "MCA Tensei AV X-Link Hybrid Blue 75 R": "35 1/4\"",
  "MCA Tensei AV X-Link Hybrid Blue 75 S": "35 1/4\"",
  "MCA Tensei AV X-Link Hybrid White 85 S": "35 3/4\"",
  "MCA Tensei AV X-Link Hybrid White 85 X": "35 3/4\"",
  "Mitsubishi MMT 50 L- Parallel": "36 1/2\"",
  "Mitsubishi MMT 60 A- Parallel": "36 1/2\"",
  "Mitsubishi MMT 70 R- Parallel": "36 1/2\"",
  "Mitsubishi MMT 80 S- Parallel": "36 1/2\"",
  "Project X Cypher 2.0 40i 4.0 - Parallel": "33\"",
  "Project X Cypher 2.0 50i 5.0 - Parallel": "33\"",
  "Project X Cypher 2.0 60i 5.5 - Parallel": "33\"",
  "Project X Denali Blue Hybrid 80 5.5": "37 1/4\"",
  "Project X Denali Blue Hybrid 80 6.0": "36 1/2\"",
  "Project X Denali Blue Hybrid 80 6.5": "36 1/4\"",
  "Tour AD DI Hyb 85- S": "34 1/4\"",
  "Tour AD DI Hyb 85- X": "34 1/4\"",
  "Tour AD IZ Hyb 6- R2": "35 3/4\"",
  "Tour AD IZ Hyb 7- R": "36\"",
  "UST Recoil 55 Dart F1- L": "33\"",
  "UST Recoil 65 Dart F2- A": "33\"",
  "UST Recoil 75 Dart F3- R": "33\"",
  "UST Recoil 75 Dart F4- S": "33\""
  };

  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Accra iSeries 50i");

  // --- Calcular resultados ---
  const results = useMemo(() => {
    const shaftLengthMax = shaftMaxList[selectedShaft] ?? "No disponible";
    const shaftLengthMin = shaftMinList[selectedShaft] ?? "No disponible";

    return {
      result_shaft_Max: shaftLengthMax,
      result_shaft_Min: shaftLengthMin,
    };
  }, [selectedShaft]); 

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Hybrid Length Calculator</h1>
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