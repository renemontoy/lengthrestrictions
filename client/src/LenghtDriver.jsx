import { useState, useMemo } from "react";

export default function DriverLength() {
  const shaftMaxList = {
  "Fujikura Pro Blue 50 - R": "48\"",
  "Fujikura Pro Blue 50 - R2": "48\"",
  "Fujikura Pro Blue 60 - R": "48\"",
  "Fujikura Pro Blue 60 - S": "48\"",
  "Fujikura Pro Blue 60 - X": "48\"",
  "Fujikura Pro Blue 70 - S": "48\"",
  "Fujikura Pro Blue 70 - X": "48\"",
  "Fujikura Ventus VeloCore+ Black 6 - S": "48\"",
  "Fujikura Ventus VeloCore+ Black 6 - X": "48\"",
  "Fujikura Ventus VeloCore+ Black 7 - S": "48\"",
  "Fujikura Ventus VeloCore+ Black 7 - X": "48\"",
  "Fujikura Ventus VeloCore+ Blue 5 - R": "48\"",
  "Fujikura Ventus VeloCore+ Blue 5 - S": "48\"",
  "Fujikura Ventus VeloCore+ Blue 6 - S": "48\"",
  "Fujikura Ventus VeloCore+ Blue 6 - X": "48\"",
  "Fujikura Ventus VeloCore+ Blue 7 - S": "48\"",
  "Fujikura Ventus VeloCore+ Blue 7 - X": "48\"",
  "Fujikura Ventus VeloCore+ Red 5 - R": "48\"",
  "Fujikura Ventus VeloCore+ Red 5 - R2": "48\"",
  "Fujikura Ventus VeloCore+ Red 5 - S": "48\"",
  "Fujikura Ventus VeloCore+ Red 6 - S": "48\"",
  "Grand Bassara 29 L": "48\"",
  "MCA Diamana 2023 S+ 60g- R": "48\"",
  "MCA Diamana 2023 S+ 60g- S": "48\"",
  "MCA Diamana 2023 S+ 60g- X": "48\"",
  "MCA Diamana 2023 S+ 70g- S": "48\"",
  "MCA Diamana 2023 S+ 70g- X": "48\"",
  "MCA Tensei AV X-Link Blue 55 R": "48\"",
  "MCA Tensei AV X-Link Blue 65 R": "48\"",
  "MCA Tensei AV X-Link Blue 65 S": "48\"",
  "MCA Tensei AV X-Link Blue 75 S": "48\"",
  "MCA Tensei AV X-Link White 65 S": "48\"",
  "MCA Tensei AV X-Link White 65 X": "48\"",
  "MCA Tensei AV X-Link White 75 S": "48\"",
  "MCA Tensei AV X-Link White 75 X": "48\"",
  "Project X Cypher 2.0 40 4.0": "47\"",
  "Project X Cypher 2.0 40 5.0": "48\"",
  "Project X Cypher 2.0 40 5.5": "48\"",
  "Project X Cypher 2.0 50 5.5": "48\"",
  "Project X Cypher 2.0 50 6.0": "48\"",
  "Project X Denali Blue 50 5.0": "48\"",
  "Project X Denali Blue 50 5.5": "48\"",
  "Project X Denali Blue 50 6.0": "48\"",
  "Project X Denali Blue 60 5.5": "48\"",
  "Project X Denali Blue 60 6.0": "48\"",
  "Project X Denali Blue 60 6.5": "48\"",
  "Project X Denali Blue 70 6.5": "48\"",
  "Project X Denali Red 40 4.0": "48\"",
  "Project X Denali Red 50 5.0": "48\"",
  "Project X Denali Red 50 5.5": "48\"",
  "Project X Denali Red 50 6.0": "48\"",
  "Project X Denali Red 60 5.5": "48\"",
  "Project X Denali Red 60 6.0": "48\"",
  "Project X HZRDUS GEN5 Black 60 6.0": "48\"",
  "Project X HZRDUS GEN5 Black 60 6.5": "48\"",
  "Project X HZRDUS GEN5 Black 70 6.0": "48\"",
  "Project X HZRDUS GEN5 Black 70 6.5": "48\"",
  "Project X HZRDUS GEN5 Black 80 6.5": "48\"",
  "Tour AD HD 4- R2": "48\"",
  "Tour AD HD 5- R": "48\"",
  "Tour AD HD 5- S": "48\"",
  "Tour AD IZ 5- R": "48\"",
  "Tour AD IZ 5- R2": "48\"",
  "Tour AD VF 5 - S": "48\"",
  "Tour AD VF 5 - X": "48\"",
  "Tour AD VF 6 - S": "48\"",
  "Tour AD VF 6 - X": "48\"",
  "Tour AD VF 7 - S": "48\"",
  "Tour AD VF 7 - X": "48\"",
  "Tour AD XC 4 - R2": "48\"",
  "Tour AD XC 5 - R": "48\"",
  "Tour AD XC 5 - S": "48\"",
  "Tour AD XC 6- S": "48\"",
  "Tour AD XC 6- X": "48\"",
  "Tour AD XC 7-X": "48\""
  };

  const shaftMinList = {
  "Fujikura Pro Blue 50 - R": "38 3/4\"",
  "Fujikura Pro Blue 50 - R2": "38 1/2\"",
  "Fujikura Pro Blue 60 - R": "38 1/4\"",
  "Fujikura Pro Blue 60 - S": "38 3/4\"",
  "Fujikura Pro Blue 60 - X": "38 1/4\"",
  "Fujikura Pro Blue 70 - S": "37 3/4\"",
  "Fujikura Pro Blue 70 - X": "38 1/2\"",
  "Fujikura Ventus VeloCore+ Black 6 - S": "37 1/2\"",
  "Fujikura Ventus VeloCore+ Black 6 - X": "37 1/2\"",
  "Fujikura Ventus VeloCore+ Black 7 - S": "38\"",
  "Fujikura Ventus VeloCore+ Black 7 - X": "38 1/2\"",
  "Fujikura Ventus VeloCore+ Blue 5 - R": "37 1/2\"",
  "Fujikura Ventus VeloCore+ Blue 5 - S": "37 1/2\"",
  "Fujikura Ventus VeloCore+ Blue 6 - S": "38\"",
  "Fujikura Ventus VeloCore+ Blue 6 - X": "38\"",
  "Fujikura Ventus VeloCore+ Blue 7 - S": "38\"",
  "Fujikura Ventus VeloCore+ Blue 7 - X": "38\"",
  "Fujikura Ventus VeloCore+ Red 5 - R": "36 1/4\"",
  "Fujikura Ventus VeloCore+ Red 5 - R2": "36 1/4\"",
  "Fujikura Ventus VeloCore+ Red 5 - S": "36 1/4\"",
  "Fujikura Ventus VeloCore+ Red 6 - S": "36 1/4\"",
  "Grand Bassara 29 L": "35 1/4\"",
  "MCA Diamana 2023 S+ 60g- R": "35 1/4\"",
  "MCA Diamana 2023 S+ 60g- S": "35 1/4\"",
  "MCA Diamana 2023 S+ 60g- X": "35 1/4\"",
  "MCA Diamana 2023 S+ 70g- S": "35 1/4\"",
  "MCA Diamana 2023 S+ 70g- X": "35 1/4\"",
  "MCA Tensei AV X-Link Blue 55 R": "37 1/4\"",
  "MCA Tensei AV X-Link Blue 65 R": "37 1/4\"",
  "MCA Tensei AV X-Link Blue 65 S": "37 1/4\"",
  "MCA Tensei AV X-Link Blue 75 S": "36 1/4\"",
  "MCA Tensei AV X-Link White 65 S": "37 1/2\"",
  "MCA Tensei AV X-Link White 65 X": "37 1/2\"",
  "MCA Tensei AV X-Link White 75 S": "37 1/2\"",
  "MCA Tensei AV X-Link White 75 X": "37 1/2\"",
  "Project X Cypher 2.0 40 4.0": "35 1/2\"",
  "Project X Cypher 2.0 40 5.0": "34 1/4\"",
  "Project X Cypher 2.0 40 5.5": "34 1/4\"",
  "Project X Cypher 2.0 50 5.5": "34 1/4\"",
  "Project X Cypher 2.0 50 6.0": "34 1/4\"",
  "Project X Denali Blue 50 5.0": "36\"",
  "Project X Denali Blue 50 5.5": "37\"",
  "Project X Denali Blue 50 6.0": "35 3/4\"",
  "Project X Denali Blue 60 5.5": "34 1/4\"",
  "Project X Denali Blue 60 6.0": "34\"",
  "Project X Denali Blue 60 6.5": "35\"",
  "Project X Denali Blue 70 6.5": "36 1/4\"",
  "Project X Denali Red 40 4.0": "35 3/4\"",
  "Project X Denali Red 50 5.0": "36\"",
  "Project X Denali Red 50 5.5": "37\"",
  "Project X Denali Red 50 6.0": "35 3/4\"",
  "Project X Denali Red 60 5.5": "34 1/4\"",
  "Project X Denali Red 60 6.0": "34\"",
  "Project X HZRDUS GEN5 Black 60 6.0": "32\"",
  "Project X HZRDUS GEN5 Black 60 6.5": "32 1/2\"",
  "Project X HZRDUS GEN5 Black 70 6.0": "32\"",
  "Project X HZRDUS GEN5 Black 70 6.5": "34\"",
  "Project X HZRDUS GEN5 Black 80 6.5": "34\"",
  "Tour AD HD 4- R2": "38 1/4\"",
  "Tour AD HD 5- R": "39\"",
  "Tour AD HD 5- S": "39\"",
  "Tour AD IZ 5- R": "39 3/4\"",
  "Tour AD IZ 5- R2": "39 3/4\"",
  "Tour AD VF 5 - S": "38 3/4\"",
  "Tour AD VF 5 - X": "38 3/4\"",
  "Tour AD VF 6 - S": "39 1/2\"",
  "Tour AD VF 6 - X": "39 1/2\"",
  "Tour AD VF 7 - S": "39 1/2\"",
  "Tour AD VF 7 - X": "39 1/2\"",
  "Tour AD XC 4 - R2": "38 1/2\"",
  "Tour AD XC 5 - R": "39 1/2\"",
  "Tour AD XC 5 - S": "39\"",
  "Tour AD XC 6- S": "39 3/4\"",
  "Tour AD XC 6- X": "39 1/2\"",
  "Tour AD XC 7-X": "39 1/2\""
  };

  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Fujikura Pro Blue 50 - R");

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
        <h1 style={styles.title}>Driver Length Calculator</h1>
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