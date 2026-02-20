import { useState, useMemo } from "react";

export default function IronLength() {
  const shaftMaxList = {
    "Accra iSeries 50i": "39 3/4\"",
    "Accra iSeries 60i": "39 3/4\"",
    "Accra iSeries 70i": "39 3/4\"",
    "Accra iSeries 80i": "39 3/4\"",
    "Accra iSteel Green 105 R - Parallel": "39 1/4\"",
    "Accra iSteel Green 115 S - Parallel": "39 1/4\"",
    "Accra iSteel Green 125 X - 7ir": "38 3/4\"",
    "Aerotech SteelFiber Private Reserve 110 S - Parallel": "39 3/4\"",
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": "39 3/4\"",
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": "39 3/4\"",
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": "39 3/4\"",
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": "39 3/4\"",
    "Dynamic Gold 95 R - Parallel": "38 3/4\"",
    "Dynamic Gold 95 S - Parallel": "38 3/4\"",
    "Dynamic Gold MID 115 R - Parallel": "39 1/4\"",
    "Dynamic Gold MID 115 S - Parallel": "39 1/4\"",
    "Dynamic Gold MID 115 X - Parallel": "39 1/4\"",
    "Dynamic-Gold-120-S-7ir": "38 3/4\"",
    "Dynamic-Gold-120-X-7ir": "38 3/4\"",
    "Dynamic-Gold-X100-X-7ir": "38 3/4\"",
    "KBS Max Graphite 45 L- Parallel": "39 3/4\"",
    "KBS Max Graphite 55 A- Parallel": "39 3/4\"",
    "KBS Max Graphite 65 R- Parallel": "39 3/4\"",
    "KBS-CTaper-120-S-7ir": "39 1/4\"",
    "KBS-CTaper-130-X-7ir": "39 1/4\"",
    "KBS-CTaperLite-110-S-7ir": "39 1/4\"",
    "KBS-S-Taper-Lite-R-Parallel": "40 3/4\"",
    "KBS-STaperLite-115-S-7ir": "38 1/4\"",
    "KBS-TGIGraphite-70-R-Iron": "39 3/4\"",
    "KBS-TGIGraphite-80-S-Iron": "39 3/4\"",
    "KBS-Tour-110-R-7ir": "39 1/4\"",
    "KBS-Tour-120-S-7ir": "39 1/4\"",
    "KBS-Tour-130-X-7ir": "39 1/4\"",
    "KBS Tour PVD 110 R - 7ir": "39 1/4\"",
    "KBS Tour PVD 120 S - 7ir": "39 1/4\"",
    "KBS Tour PVD 130 X - 7ir": "39 1/4\"",
    "Mitsubishi MMT 50 L- Parallel": "40 3/4\"",
    "Mitsubishi MMT 60 A- Parallel": "40 3/4\"",
    "Mitsubishi MMT 70 R- Parallel": "40 3/4\"",
    "Mitsubishi MMT 80 S- Parallel": "40 3/4\"",
    "Mitsubishi MMT Taper 105 S - 7ir": "37 3/4\"",
    "Mitsubishi MMT Taper 125 X - 7ir": "37 3/4\"",
    "Nippon Modus Pro 105 R- 7": "39 1/4\"",
    "Nippon-ModusPro-105-S-7ir": "39 1/4\"",
    "Nippon-ModusPro-120-S-7ir": "39 1/4\"",
    "Nippon-ModusPro-120-X-7ir": "39 1/4\"",
    "Nippon-NSPro-950GH-R-7ir": "38 1/4\"",
    "Nippon-NSPro-950GH-S-7ir": "38 1/4\"",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "39 3/4\"",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "39 3/4\"",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "39 3/4\"",
    "Project X Denali Silver 105i 6.0 - Parallel": "40 3/4\"",
    "Project X Denali Silver 50i 4.0 - Parallel": "39 3/4\"",
    "Project X Denali Silver 60i 5.0 - Parallel": "39 3/4\"",
    "Project X Denali Silver 70i 5.5 - Parallel": "40 3/4\"",
    "Project X Denali Silver 80i 6.0 - Parallel": "40 3/4\"",
    "ProjectX-PX-6.5-X-7ir": "39 1/4\"",
    "ProjectX-PXLZ-6.0-S+-7ir": "38 3/4\"",
    "ProjectX-PXLZ-6.5-X-7ir": "38 3/4\"",
    "UST Recoil 55 Dart F1- L": "39 3/4\"",
    "UST Recoil 65 Dart F2- A": "39 3/4\"",
    "UST Recoil 75 Dart F3- R": "39 3/4\"",
    "UST Recoil 75 Dart F4- S": "39 3/4\""
  };

  const shaftMinList = {
    "Accra iSeries 50i": "32 1/2\"",
    "Accra iSeries 60i": "32 1/2\"",
    "Accra iSeries 70i": "32 1/2\"",
    "Accra iSeries 80i": "32 1/2\"",
    "Accra iSteel Green 105 R - Parallel": "29 1/2\"",
    "Accra iSteel Green 115 S - Parallel": "29 1/2\"",
    "Accra iSteel Green 125 X - 7ir": "29 1/2\"",
    "Aerotech SteelFiber Private Reserve 110 S - Parallel": "33 1/2\"",
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": "33 1/2\"",
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": "33 1/2\"",
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": "33 1/2\"",
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": "33 1/2\"",
    "Dynamic Gold 95 R - Parallel": "34\"",
    "Dynamic Gold 95 S - Parallel": "34\"",
    "Dynamic Gold MID 115 R - Parallel": "29 1/2\"",
    "Dynamic Gold MID 115 S - Parallel": "29 1/2\"",
    "Dynamic Gold MID 115 X - Parallel": "29 1/2\"",
    "Dynamic-Gold-120-S-7ir": "28 1/2\"",
    "Dynamic-Gold-120-X-7ir": "28 1/2\"",
    "Dynamic-Gold-X100-X-7ir": "28 1/2\"",
    "KBS Max Graphite 45 L- Parallel": "33 1/4\"",
    "KBS Max Graphite 55 A- Parallel": "33 1/4\"",
    "KBS Max Graphite 65 R- Parallel": "33 1/4\"",
    "KBS-CTaper-120-S-7ir": "26 1/2\"",
    "KBS-CTaper-130-X-7ir": "26 1/2\"",
    "KBS-CTaperLite-110-S-7ir": "26 1/2\"",
    "KBS-S-Taper-Lite-R-Parallel": "32 3/4\"",
    "KBS-STaperLite-115-S-7ir": "28 1/2\"",
    "KBS-TGIGraphite-70-R-Iron": "26 3/4\"",
    "KBS-TGIGraphite-80-S-Iron": "26 3/4\"",
    "KBS-Tour-110-R-7ir": "28 3/4\"",
    "KBS-Tour-120-S-7ir": "28 3/4\"",
    "KBS-Tour-130-X-7ir": "28 3/4\"",
    "KBS Tour PVD 110 R - 7ir": "28 3/4\"",
    "KBS Tour PVD 120 S - 7ir": "28 3/4\"",
    "KBS Tour PVD 130 X - 7ir": "28 3/4\"",
    "Mitsubishi MMT 50 L- Parallel": "32 3/4\"",
    "Mitsubishi MMT 60 A- Parallel": "32 3/4\"",
    "Mitsubishi MMT 70 R- Parallel": "32 3/4\"",
    "Mitsubishi MMT 80 S- Parallel": "32 3/4\"",
    "Mitsubishi MMT Taper 105 S - 7ir": "27\"",
    "Mitsubishi MMT Taper 125 X - 7ir": "27\"",
    "Nippon Modus Pro 105 R- 7": "29 1/4\"",
    "Nippon-ModusPro-105-S-7ir": "29 1/4\"",
    "Nippon-ModusPro-120-S-7ir": "29 1/4\"",
    "Nippon-ModusPro-120-X-7ir": "29 1/4\"",
    "Nippon-NSPro-950GH-R-7ir": "28\"",
    "Nippon-NSPro-950GH-S-7ir": "28\"",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "28 1/4\"",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "28 1/4\"",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "28 1/4\"",
    "Project X Denali Silver 105i 6.0 - Parallel": "31 3/4\"",
    "Project X Denali Silver 50i 4.0 - Parallel": "28 3/4\"",
    "Project X Denali Silver 60i 5.0 - Parallel": "28 1/4\"",
    "Project X Denali Silver 70i 5.5 - Parallel": "32 3/4\"",
    "Project X Denali Silver 80i 6.0 - Parallel": "31 3/4\"",
    "ProjectX-PX-6.5-X-7ir": "28 3/4\"",
    "ProjectX-PXLZ-6.0-S+-7ir": "29 1/2\"",
    "ProjectX-PXLZ-6.5-X-7ir": "29 1/2\"",
    "UST Recoil 55 Dart F1- L": "29 1/4\"",
    "UST Recoil 65 Dart F2- A": "29 1/4\"",
    "UST Recoil 75 Dart F3- R": "29 1/4\"",
    "UST Recoil 75 Dart F4- S": "29 1/4\""
  };

  const shaftMaxOverPlist = {
    "Accra iSeries 50i": "+2 3/4\"",
    "Accra iSeries 60i": "+2 3/4\"",
    "Accra iSeries 70i": "+2 3/4\"",
    "Accra iSeries 80i": "+2 3/4\"",
    "Accra iSteel Green 105 R - Parallel": "+2 1/4\"",
    "Accra iSteel Green 115 S - Parallel": "+2 1/4\"",
    "Accra iSteel Green 125 X - 7ir": "+1 3/4\"",
    "Aerotech SteelFiber Private Reserve 110 S - Parallel": "+2 3/4\"",
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": "+2 3/4\"",
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": "+2 3/4\"",
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": "+2 3/4\"",
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": "+2 3/4\"",
    "Dynamic Gold 95 R - Parallel": "+1 3/4\"",
    "Dynamic Gold 95 S - Parallel": "+1 3/4\"",
    "Dynamic Gold MID 115 R - Parallel": "+2 1/4\"",
    "Dynamic Gold MID 115 S - Parallel": "+2 1/4\"",
    "Dynamic Gold MID 115 X - Parallel": "+2 1/4\"",
    "Dynamic-Gold-120-S-7ir": "+1 3/4\"",
    "Dynamic-Gold-120-X-7ir": "+1 3/4\"",
    "Dynamic-Gold-X100-X-7ir": "+1 3/4\"",
    "KBS Max Graphite 45 L- Parallel": "+2 3/4\"",
    "KBS Max Graphite 55 A- Parallel": "+2 3/4\"",
    "KBS Max Graphite 65 R- Parallel": "+2 3/4\"",
    "KBS-CTaper-120-S-7ir": "+2 1/4\"",
    "KBS-CTaper-130-X-7ir": "+2 1/4\"",
    "KBS-CTaperLite-110-S-7ir": "+2 1/4\"",
    "KBS-S-Taper-Lite-R-Parallel": "+3 3/4\"",
    "KBS-STaperLite-115-S-7ir": "+1 1/4\"",
    "KBS-TGIGraphite-70-R-Iron": "+2 3/4\"",
    "KBS-TGIGraphite-80-S-Iron": "+2 3/4\"",
    "KBS-Tour-110-R-7ir": "+2 1/4\"",
    "KBS-Tour-120-S-7ir": "+2 1/4\"",
    "KBS-Tour-130-X-7ir": "+2 1/4\"",
    "KBS Tour PVD 110 R - 7ir": "+2 1/4\"",
    "KBS Tour PVD 120 S - 7ir": "+2 1/4\"",
    "KBS Tour PVD 130 X - 7ir": "+2 1/4\"",
    "Mitsubishi MMT 50 L- Parallel": "+3 3/4\"",
    "Mitsubishi MMT 60 A- Parallel": "+3 3/4\"",
    "Mitsubishi MMT 70 R- Parallel": "+3 3/4\"",
    "Mitsubishi MMT 80 S- Parallel": "+3 3/4\"",
    "Mitsubishi MMT Taper 105 S - 7ir": "+3/4\"",
    "Mitsubishi MMT Taper 125 X - 7ir": "+3/4\"",
    "Nippon Modus Pro 105 R- 7": "+2 1/4\"",
    "Nippon-ModusPro-105-S-7ir": "+2 1/4\"",
    "Nippon-ModusPro-120-S-7ir": "+2 1/4\"",
    "Nippon-ModusPro-120-X-7ir": "+2 1/4\"",
    "Nippon-NSPro-950GH-R-7ir": "+1 1/4\"",
    "Nippon-NSPro-950GH-S-7ir": "+1 1/4\"",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "+2 3/4\"",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "+2 3/4\"",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "+2 3/4\"",
    "Project X Denali Silver 105i 6.0 - Parallel": "+3 3/4\"",
    "Project X Denali Silver 50i 4.0 - Parallel": "+2 1/4\"",
    "Project X Denali Silver 60i 5.0 - Parallel": "+2 3/4\"",
    "Project X Denali Silver 70i 5.5 - Parallel": "+3 3/4\"",
    "Project X Denali Silver 80i 6.0 - Parallel": "+3 3/4\"",
    "ProjectX-PX-6.5-X-7ir": "+2 1/4\"",
    "ProjectX-PXLZ-6.0-S+-7ir": "+1 3/4\"",
    "ProjectX-PXLZ-6.5-X-7ir": "+1 3/4\"",
    "UST Recoil 55 Dart F1- L": "+2 3/4\"",
    "UST Recoil 65 Dart F2- A": "+2 3/4\"",
    "UST Recoil 75 Dart F3- R": "+2 3/4\"",
    "UST Recoil 75 Dart F4- S": "+2 3/4\""
  };
  const shaftMaxOverXPlist = {
    "Accra iSeries 50i": "+2 1/4\"",
    "Accra iSeries 60i": "+2 1/4\"",
    "Accra iSeries 70i": "+2 1/4\"",
    "Accra iSeries 80i": "+2 1/4\"",
    "Accra iSteel Green 105 R - Parallel": "+1 3/4\"",
    "Accra iSteel Green 115 S - Parallel": "+1 3/4\"",
    "Accra iSteel Green 125 X - 7ir": "+1 1/4\"",
    "Aerotech SteelFiber Private Reserve 110 S - Parallel": "+2 1/4\"",
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": "+2 1/4\"",
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": "+2 1/4\"",
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": "+2 1/4\"",
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": "+2 1/4\"",
    "Dynamic Gold 95 R - Parallel": "+1 1/4\"",
    "Dynamic Gold 95 S - Parallel": "+1 1/4\"",
    "Dynamic Gold MID 115 R - Parallel": "+1 3/4\"",
    "Dynamic Gold MID 115 S - Parallel": "+1 3/4\"",
    "Dynamic Gold MID 115 X - Parallel": "+1 3/4\"",
    "Dynamic-Gold-120-S-7ir": "+1 1/4\"",
    "Dynamic-Gold-120-X-7ir": "+1 1/4\"",
    "Dynamic-Gold-X100-X-7ir": "+1 1/4\"",
    "KBS Max Graphite 45 L- Parallel": "+2 1/4\"",
    "KBS Max Graphite 55 A- Parallel": "+2 1/4\"",
    "KBS Max Graphite 65 R- Parallel": "+2 1/4\"",
    "KBS-CTaper-120-S-7ir": "+1 3/4\"",
    "KBS-CTaper-130-X-7ir": "+1 3/4\"",
    "KBS-CTaperLite-110-S-7ir": "+1 3/4\"",
    "KBS-S-Taper-Lite-R-Parallel": "+3 1/4\"",
    "KBS-STaperLite-115-S-7ir": "+3/4\"",
    "KBS-TGIGraphite-70-R-Iron": "+2 1/4\"",
    "KBS-TGIGraphite-80-S-Iron": "+2 1/4\"",
    "KBS-Tour-110-R-7ir": "+1 3/4\"",
    "KBS-Tour-120-S-7ir": "+1 3/4\"",
    "KBS-Tour-130-X-7ir": "+1 3/4\"",
    "KBS Tour PVD 110 R - 7ir": "+1 3/4\"",
    "KBS Tour PVD 120 S - 7ir": "+1 3/4\"",
    "KBS Tour PVD 130 X - 7ir": "+1 3/4\"",
    "Mitsubishi MMT 50 L- Parallel": "+3 1/4\"",
    "Mitsubishi MMT 60 A- Parallel": "+3 1/4\"",
    "Mitsubishi MMT 70 R- Parallel": "+3 1/4\"",
    "Mitsubishi MMT 80 S- Parallel": "+3 1/4\"",
    "Mitsubishi MMT Taper 105 S - 7ir": "+1/4\"",
    "Mitsubishi MMT Taper 125 X - 7ir": "+1/4\"",
    "Nippon Modus Pro 105 R- 7": "+1 3/4\"",
    "Nippon-ModusPro-105-S-7ir": "+1 3/4\"",
    "Nippon-ModusPro-120-S-7ir": "+1 3/4\"",
    "Nippon-ModusPro-120-X-7ir": "+1 3/4\"",
    "Nippon-NSPro-950GH-R-7ir": "+3/4\"",
    "Nippon-NSPro-950GH-S-7ir": "+3/4\"",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "+2 1/4\"",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "+2 1/4\"",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "+2 1/4\"",
    "Project X Denali Silver 105i 6.0 - Parallel": "+3 1/4\"",
    "Project X Denali Silver 50i 4.0 - Parallel": "+1 3/4\"",
    "Project X Denali Silver 60i 5.0 - Parallel": "+2 1/4\"",
    "Project X Denali Silver 70i 5.5 - Parallel": "+3 1/4\"",
    "Project X Denali Silver 80i 6.0 - Parallel": "+3 1/4\"",
    "ProjectX-PX-6.5-X-7ir": "+1 3/4\"",
    "ProjectX-PXLZ-6.0-S+-7ir": "+1 1/4\"",
    "ProjectX-PXLZ-6.5-X-7ir": "+1 1/4\"",
    "UST Recoil 55 Dart F1- L": "+2 1/4\"",
    "UST Recoil 65 Dart F2- A": "+2 1/4\"",
    "UST Recoil 75 Dart F3- R": "+2 1/4\"",
    "UST Recoil 75 Dart F4- S": "+2 1/4\""
  };
  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Accra iSeries 50i");

  // --- Calcular resultados ---
  const results = useMemo(() => {
    const shaftLengthMax = shaftMaxList[selectedShaft] ?? "Not available";
    const shaftLengthMin = shaftMinList[selectedShaft] ?? "Not available";
    const shaftLengthMaxOverP = shaftMaxOverPlist[selectedShaft] ?? "Not available";
    const shaftLengthMaxOverXP = shaftMaxOverXPlist[selectedShaft] ?? "Not available";


    return {
      result_shaft_Max: shaftLengthMax,
      result_shaft_Min: shaftLengthMin,
      result_shaft_Max_P: shaftLengthMaxOverP,
      result_shaft_Max_XP: shaftLengthMaxOverXP,
    };
  }, [selectedShaft]); 

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Iron Length Calculator</h1>
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
              <span>Maximum Length (7 Iron)</span>
              <span style={styles.resultBox}>{results.result_shaft_Max}</span>
            </div>
            <div style={styles.resultRow}>
              <span>Minimum Length (7 Iron)</span>
              <span style={styles.resultBox}>{results.result_shaft_Min}</span>
            </div>
            <div style={styles.resultRow}>
              <span>Maximum Length Over P, T, CB, ST</span>
              <span style={styles.resultBox}>{results.result_shaft_Max_P}</span>
            </div>
            <div style={styles.resultRow}>
              <span>Maximum Lengths over XP, Black Ops, Wildcat</span>
              <span style={styles.resultBox}>{results.result_shaft_Max_XP}</span>
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