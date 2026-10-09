import { useState, useMemo } from "react";

// Opciones compartidas. Mantenerlas fuera del componente evita recrearlas
// cada vez que cambia una selección.

const CLUBS = [
  "3 Wood",
  "4 Wood",
  "5 Wood",
  "7 Wood",
  "9 Wood",
  "11 Wood",
];

// Longitudes por número de hierro y shaft.
// Las medidas ya incluyen el símbolo de pulgadas para mostrarse directamente.
const FAIRWAY_LENGTHS = {
  "3 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "46 3/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "46 3/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "46 3/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "45 3/4\"", minimum: "41 3/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "46 3/4\"", minimum: "35\"" },

    "Grand Bassara 29 L": { maximum: "46 3/4\"", minimum: "34\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "46 3/4\"", minimum: "32 3/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "46 3/4\"", minimum: "32 3/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "46 3/4\"", minimum: "40 3/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "46 3/4\"", minimum: "41 1/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "46 3/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "46 3/4\"", minimum: "38 3/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "46 3/4\"", minimum: "38 3/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "46 3/4\"", minimum: "37\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "46 3/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "46 3/4\"", minimum: "37 3/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "46 3/4\"", minimum: "38 1/2\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "46 3/4\"", minimum: "38 1/2\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "46 3/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "46 3/4\"", minimum: "38 1/2\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },

    "KBS PGW 50 - R": { maximum: "46 3/4\"", minimum: "39 1/4\"" },
    "KBS PGW 60 - R": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "KBS PGW 60 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "KBS PGW 60 - X": { maximum: "46 3/4\"", minimum: "38 3/4\"" },
    "KBS PGW 70 - S": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "KBS PGW 70 - X": { maximum: "46 3/4\"", minimum: "37 3/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "46 3/4\"", minimum: "34\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "46 3/4\"", minimum: "35\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "46 3/4\"", minimum: "40 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "46 3/4\"", minimum: "39 3/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "45 3/4\"", minimum: "34 1/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "46 3/4\"", minimum: "33\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "46 3/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "46 3/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "46 3/4\"", minimum: "35 3/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "46 3/4\"", minimum: "30 1/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "46 3/4\"", minimum: "30 1/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "46 3/4\"", minimum: "31 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "46 3/4\"", minimum: "32 3/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "46 3/4\"", minimum: "32 3/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "46 3/4\"", minimum: "39 1/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
  },

  "4 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "46 3/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "46 3/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "46 3/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "45 3/4\"", minimum: "41 3/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "46 3/4\"", minimum: "35\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "46 3/4\"", minimum: "35\"" },

    "Grand Bassara 29 L": { maximum: "46 3/4\"", minimum: "34\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "46 3/4\"", minimum: "32 3/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "46 3/4\"", minimum: "32 3/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "46 3/4\"", minimum: "40 3/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "46 3/4\"", minimum: "41 1/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "46 3/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "46 3/4\"", minimum: "38 3/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "46 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "46 3/4\"", minimum: "38 3/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "46 3/4\"", minimum: "37\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "46 3/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "46 3/4\"", minimum: "37 3/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "46 3/4\"", minimum: "38 1/2\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "46 3/4\"", minimum: "38 1/2\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "46 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "46 3/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "46 3/4\"", minimum: "38 1/2\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "46 3/4\"", minimum: "38 1/4\"" },

    "KBS PGW 50 - R": { maximum: "46 3/4\"", minimum: "39 1/4\"" },
    "KBS PGW 60 - R": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "KBS PGW 60 - S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "KBS PGW 60 - X": { maximum: "46 3/4\"", minimum: "38 3/4\"" },
    "KBS PGW 70 - S": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "KBS PGW 70 - X": { maximum: "46 3/4\"", minimum: "37 3/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "46 3/4\"", minimum: "34\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "46 3/4\"", minimum: "34\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "46 3/4\"", minimum: "36\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "46 3/4\"", minimum: "35\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "46 3/4\"", minimum: "36 1/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "46 3/4\"", minimum: "36 1/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "46 3/4\"", minimum: "40 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "46 3/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "46 3/4\"", minimum: "39 3/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "45 3/4\"", minimum: "34 1/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "46 3/4\"", minimum: "33\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "46 3/4\"", minimum: "33\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "46 3/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "46 3/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "46 3/4\"", minimum: "35 3/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "46 3/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "46 3/4\"", minimum: "35 3/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "46 3/4\"", minimum: "30 1/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "46 3/4\"", minimum: "30 1/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "46 3/4\"", minimum: "31 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "46 3/4\"", minimum: "30 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "46 3/4\"", minimum: "32 3/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "46 3/4\"", minimum: "32 3/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "46 3/4\"", minimum: "39 1/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "46 3/4\"", minimum: "38 1/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "46 3/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "46 3/4\"", minimum: "37 1/4\"" },
  },

  "5 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "46 1/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "46 1/4\"", minimum: "36 3/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "46 1/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "46 1/4\"", minimum: "37\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "46 1/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "46 1/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "46 1/4\"", minimum: "36 3/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "45 1/4\"", minimum: "41 1/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "46 1/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "46 1/4\"", minimum: "36 3/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "46 1/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "46 1/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "46 1/4\"", minimum: "36 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "46 1/4\"", minimum: "36 1/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "46 1/4\"", minimum: "34 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "46 1/4\"", minimum: "34 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "46 1/4\"", minimum: "34 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "46 1/4\"", minimum: "34 1/2\"" },

    "Grand Bassara 29 L": { maximum: "46 1/4\"", minimum: "33 1/2\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "46 1/4\"", minimum: "32 1/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "46 1/4\"", minimum: "32 1/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "46 1/4\"", minimum: "40 1/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "46 1/4\"", minimum: "40 3/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "46 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "46 1/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "46 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "46 1/4\"", minimum: "38 1/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "46 1/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "46 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "46 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "46 1/4\"", minimum: "38 1/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "46 1/4\"", minimum: "36 1/2\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "46 1/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "46 1/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "46 1/4\"", minimum: "38\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "46 1/4\"", minimum: "38\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "46 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "46 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "46 1/4\"", minimum: "37 3/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "46 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "46 1/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "46 1/4\"", minimum: "38\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "46 1/4\"", minimum: "37 3/4\"" },

    "KBS PGW 50 - R": { maximum: "46 1/4\"", minimum: "38 3/4\"" },
    "KBS PGW 60 - R": { maximum: "46 1/4\"", minimum: "35 1/4\"" },
    "KBS PGW 60 - S": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "KBS PGW 60 - X": { maximum: "46 1/4\"", minimum: "38 1/4\"" },
    "KBS PGW 70 - S": { maximum: "46 1/4\"", minimum: "35 1/4\"" },
    "KBS PGW 70 - X": { maximum: "46 1/4\"", minimum: "37 1/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "46 1/4\"", minimum: "33 1/2\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "46 1/4\"", minimum: "33 1/2\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "46 1/4\"", minimum: "33 1/2\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "46 1/4\"", minimum: "33 1/2\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "46 1/4\"", minimum: "33 1/2\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "46 1/4\"", minimum: "35 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "46 1/4\"", minimum: "35 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "46 1/4\"", minimum: "35 1/2\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "46 1/4\"", minimum: "34 1/2\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "46 1/4\"", minimum: "35 3/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "46 1/4\"", minimum: "35 3/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "46 1/4\"", minimum: "40 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "46 1/4\"", minimum: "39 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "46 1/4\"", minimum: "39 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "46 1/4\"", minimum: "39 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "46 1/4\"", minimum: "39 1/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "46 1/4\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "46 1/4\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "46 1/4\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "46 1/4\"", minimum: "32 1/2\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "46 1/4\"", minimum: "33 1/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "46 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "46 1/4\"", minimum: "35 1/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "46 1/4\"", minimum: "34 3/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "46 1/4\"", minimum: "34 3/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "46 1/4\"", minimum: "34 3/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "46 1/4\"", minimum: "35 1/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "46 1/4\"", minimum: "29 3/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "46 1/4\"", minimum: "30 1/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "46 1/4\"", minimum: "29 3/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "46 1/4\"", minimum: "30 1/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "46 1/4\"", minimum: "30 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "46 1/4\"", minimum: "30 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "46 1/4\"", minimum: "32 1/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "46 1/4\"", minimum: "32 1/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "46 1/4\"", minimum: "38 3/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "46 1/4\"", minimum: "37 3/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "46 1/4\"", minimum: "36 1/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "46 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "46 1/4\"", minimum: "36 3/4\"" },
  },

  "7 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "45 3/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "45 3/4\"", minimum: "36 1/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "45 3/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "45 3/4\"", minimum: "36 1/2\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "45 3/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "45 3/4\"", minimum: "35 1/2\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "45 3/4\"", minimum: "36 1/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "44 3/4\"", minimum: "40 3/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "45 3/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "45 3/4\"", minimum: "36 1/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "45 3/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "45 3/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "45 3/4\"", minimum: "35 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "45 3/4\"", minimum: "35 3/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "45 3/4\"", minimum: "34\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "45 3/4\"", minimum: "34\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "45 3/4\"", minimum: "34\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "45 3/4\"", minimum: "34\"" },

    "Grand Bassara 29 L": { maximum: "45 3/4\"", minimum: "33\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "45 3/4\"", minimum: "31 3/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "45 3/4\"", minimum: "31 3/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "45 3/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "45 3/4\"", minimum: "40 1/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "45 3/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "45 3/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "45 3/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "45 3/4\"", minimum: "37 3/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "45 3/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "45 3/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "45 3/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "45 3/4\"", minimum: "37 3/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "45 3/4\"", minimum: "36\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "45 3/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "45 3/4\"", minimum: "36 3/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "45 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "45 3/4\"", minimum: "37 1/2\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "45 3/4\"", minimum: "36 1/2\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "45 3/4\"", minimum: "36 1/2\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "45 3/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "45 3/4\"", minimum: "36 1/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "45 3/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "45 3/4\"", minimum: "37 1/2\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "45 3/4\"", minimum: "37 1/4\"" },

    "KBS PGW 50 - R": { maximum: "45 3/4\"", minimum: "38 1/4\"" },
    "KBS PGW 60 - R": { maximum: "45 3/4\"", minimum: "34 3/4\"" },
    "KBS PGW 60 - S": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "KBS PGW 60 - X": { maximum: "45 3/4\"", minimum: "37 3/4\"" },
    "KBS PGW 70 - S": { maximum: "45 3/4\"", minimum: "34 3/4\"" },
    "KBS PGW 70 - X": { maximum: "45 3/4\"", minimum: "36 3/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "45 3/4\"", minimum: "33\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "45 3/4\"", minimum: "33\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "45 3/4\"", minimum: "33\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "45 3/4\"", minimum: "33\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "45 3/4\"", minimum: "33\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "45 3/4\"", minimum: "35\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "45 3/4\"", minimum: "35\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "45 3/4\"", minimum: "35\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "45 3/4\"", minimum: "34\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "45 3/4\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "45 3/4\"", minimum: "35 1/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "45 3/4\"", minimum: "39 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "45 3/4\"", minimum: "39 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "45 3/4\"", minimum: "39 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "45 3/4\"", minimum: "39 1/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "45 3/4\"", minimum: "38 3/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "44 3/4\"", minimum: "33 1/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "45 3/4\"", minimum: "32\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "45 3/4\"", minimum: "32\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "45 3/4\"", minimum: "32\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "45 3/4\"", minimum: "32\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "45 3/4\"", minimum: "32 3/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "45 3/4\"", minimum: "33 1/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "45 3/4\"", minimum: "34 3/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "45 3/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "45 3/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "45 3/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "45 3/4\"", minimum: "34 3/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "45 3/4\"", minimum: "29 1/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "45 3/4\"", minimum: "29 3/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "45 3/4\"", minimum: "29 1/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "45 3/4\"", minimum: "29 3/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "45 3/4\"", minimum: "30 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "45 3/4\"", minimum: "29 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "45 3/4\"", minimum: "31 3/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "45 3/4\"", minimum: "31 3/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "45 3/4\"", minimum: "38 1/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "45 3/4\"", minimum: "37 1/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "45 3/4\"", minimum: "35 3/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "45 3/4\"", minimum: "36 1/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "45 3/4\"", minimum: "36 1/4\"" },
  },
  "9 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "45 1/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "45 1/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "45 1/4\"", minimum: "35\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "44 1/4\"", minimum: "40 1/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },

    "Grand Bassara 29 L": { maximum: "45 1/4\"", minimum: "32 1/2\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "45 1/4\"", minimum: "31 1/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "45 1/4\"", minimum: "31 1/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "45 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "45 1/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "45 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "45 1/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "45 1/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "45 1/4\"", minimum: "36 1/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "45 1/4\"", minimum: "36 1/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "45 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "45 1/4\"", minimum: "37\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "45 1/4\"", minimum: "36\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "45 1/4\"", minimum: "36\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "45 1/4\"", minimum: "36 1/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "45 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },

    "KBS PGW 50 - R": { maximum: "45 1/4\"", minimum: "37 3/4\"" },
    "KBS PGW 60 - R": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "KBS PGW 60 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "KBS PGW 60 - X": { maximum: "45 1/4\"", minimum: "37 1/4\"" },
    "KBS PGW 70 - S": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "KBS PGW 70 - X": { maximum: "45 1/4\"", minimum: "36 1/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "45 1/4\"", minimum: "32 1/2\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "45 1/4\"", minimum: "39 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "45 1/4\"", minimum: "38 1/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "44 1/4\"", minimum: "32 3/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "45 1/4\"", minimum: "31 1/2\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "45 1/4\"", minimum: "32 1/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "45 1/4\"", minimum: "32 3/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "45 1/4\"", minimum: "34 1/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "45 1/4\"", minimum: "28 3/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "45 1/4\"", minimum: "28 3/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "45 1/4\"", minimum: "29 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "45 1/4\"", minimum: "31 1/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "45 1/4\"", minimum: "31 1/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "45 1/4\"", minimum: "37 3/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
  },

  "11 Wood": {
    "Fujikura Pro Blue 50 - R": { maximum: "45 1/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 50 - R2": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "Fujikura Pro Blue 60 - R": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Fujikura Pro Blue 60 - S": { maximum: "45 1/4\"", minimum: "36\"" },
    "Fujikura Pro Blue 60 - X": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Fujikura Pro Blue 70 - S": { maximum: "45 1/4\"", minimum: "35\"" },
    "Fujikura Pro Blue 70 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },

    "Fujikura Sakura 40 - L": { maximum: "44 1/4\"", minimum: "40 1/4\"" },

    "Fujikura Ventus VeloCore+ Black 6 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 6 - X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Black 7 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },

    "Fujikura Ventus VeloCore+ Blue 5 - R": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 5 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 6 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - S": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "Fujikura Ventus VeloCore+ Blue 7 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },

    "Fujikura Ventus VeloCore+ Red 5 - R": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - R2": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 5 - S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },
    "Fujikura Ventus VeloCore+ Red 6 - S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },

    "Grand Bassara 29 L": { maximum: "45 1/4\"", minimum: "32 1/2\"" },

    "Graphite Design Tour AD DI 5 - S": { maximum: "45 1/4\"", minimum: "31 1/4\"" },
    "Graphite Design Tour AD DI 6 - S": { maximum: "45 1/4\"", minimum: "31 1/4\"" },

    "Graphite Design Tour AD FI 4 - R2": { maximum: "45 1/4\"", minimum: "39 1/4\"" },
    "Graphite Design Tour AD FI 5 - R1": { maximum: "45 1/4\"", minimum: "39 3/4\"" },
    "Graphite Design Tour AD FI 6 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD FI 6 - X": { maximum: "45 1/4\"", minimum: "37 3/4\"" },
    "Graphite Design Tour AD FI 7 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD FI 7 - X": { maximum: "45 1/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD GC 4 - R2": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Graphite Design Tour AD GC 5 - R1": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD GC 5 - S": { maximum: "45 1/4\"", minimum: "38 1/4\"" },
    "Graphite Design Tour AD GC 6 - S": { maximum: "45 1/4\"", minimum: "37 1/4\"" },

    "Graphite Design Tour AD HD 4- R2": { maximum: "45 1/4\"", minimum: "35 1/2\"" },
    "Graphite Design Tour AD HD 5- R": { maximum: "45 1/4\"", minimum: "36 1/4\"" },
    "Graphite Design Tour AD HD 5- S": { maximum: "45 1/4\"", minimum: "36 1/4\"" },

    "Graphite Design Tour AD IZ 5- R": { maximum: "45 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD IZ 5- R2": { maximum: "45 1/4\"", minimum: "37\"" },

    "Graphite Design Tour AD VF 5 - S": { maximum: "45 1/4\"", minimum: "36\"" },
    "Graphite Design Tour AD VF 5 - X": { maximum: "45 1/4\"", minimum: "36\"" },
    "Graphite Design Tour AD VF 6 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 6 - X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 7 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD VF 7 - X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },

    "Graphite Design Tour AD XC 4 - R2": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "Graphite Design Tour AD XC 5 - R": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 5 - S": { maximum: "45 1/4\"", minimum: "36 1/4\"" },
    "Graphite Design Tour AD XC 6- S": { maximum: "45 1/4\"", minimum: "37\"" },
    "Graphite Design Tour AD XC 6- X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "Graphite Design Tour AD XC 7-X": { maximum: "45 1/4\"", minimum: "36 3/4\"" },

    "KBS PGW 50 - R": { maximum: "45 1/4\"", minimum: "37 3/4\"" },
    "KBS PGW 60 - R": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "KBS PGW 60 - S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "KBS PGW 60 - X": { maximum: "45 1/4\"", minimum: "37 1/4\"" },
    "KBS PGW 70 - S": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "KBS PGW 70 - X": { maximum: "45 1/4\"", minimum: "36 1/4\"" },

    "MCA Diamana 2023 S+ 60g- R": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 60g- S": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 60g- X": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 70g- S": { maximum: "45 1/4\"", minimum: "32 1/2\"" },
    "MCA Diamana 2023 S+ 70g- X": { maximum: "45 1/4\"", minimum: "32 1/2\"" },

    "MCA Tensei AV X-Link Blue 55 R": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 R": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 65 S": { maximum: "45 1/4\"", minimum: "34 1/2\"" },
    "MCA Tensei AV X-Link Blue 75 S": { maximum: "45 1/4\"", minimum: "33 1/2\"" },

    "MCA Tensei AV X-Link White 65 S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 65 X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 75 S": { maximum: "45 1/4\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link White 75 X": { maximum: "45 1/4\"", minimum: "34 3/4\"" },

    "Mitsubishi Kai'li Blue 60 - R": { maximum: "45 1/4\"", minimum: "39 1/4\"" },
    "Mitsubishi Kai'li Blue 60 - S": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 60 - X": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - S": { maximum: "45 1/4\"", minimum: "38 3/4\"" },
    "Mitsubishi Kai'li Blue 70 - X": { maximum: "45 1/4\"", minimum: "38 1/4\"" },

    "Project X Cypher 2.0 40 4.0": { maximum: "44 1/4\"", minimum: "32 3/4\"" },
    "Project X Cypher 2.0 40 5.0": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 40 5.5": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 50 5.5": { maximum: "45 1/4\"", minimum: "31 1/2\"" },
    "Project X Cypher 2.0 50 6.0": { maximum: "45 1/4\"", minimum: "31 1/2\"" },

    "Project X Denali Frost Blue 50 5.0": { maximum: "45 1/4\"", minimum: "32 1/4\"" },
    "Project X Denali Frost Blue 50 5.5": { maximum: "45 1/4\"", minimum: "32 3/4\"" },
    "Project X Denali Frost Blue 50 6.0": { maximum: "45 1/4\"", minimum: "34 1/4\"" },
    "Project X Denali Frost Blue 60 5.5": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 60 6.0": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 60 6.5": { maximum: "45 1/4\"", minimum: "33 3/4\"" },
    "Project X Denali Frost Blue 70 6.5": { maximum: "45 1/4\"", minimum: "34 1/4\"" },

    "Project X Denali Frost Red 40 4.0": { maximum: "45 1/4\"", minimum: "28 3/4\"" },
    "Project X Denali Frost Red 50 5.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },
    "Project X Denali Frost Red 50 5.5": { maximum: "45 1/4\"", minimum: "28 3/4\"" },
    "Project X Denali Frost Red 50 6.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },

    "Project X HZRDUS GEN5 Black 60 6.5": { maximum: "45 1/4\"", minimum: "29 3/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.0": { maximum: "45 1/4\"", minimum: "29 1/4\"" },
    "Project X HZRDUS GEN5 Black 70 6.5": { maximum: "45 1/4\"", minimum: "31 1/4\"" },
    "Project X HZRDUS GEN5 Black 80 6.5": { maximum: "45 1/4\"", minimum: "31 1/4\"" },

    "UST LIN-Q Blue CB 55 - A": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q Blue CB 55 - R": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q Blue CB 65 - R": { maximum: "45 1/4\"", minimum: "37 3/4\"" },

    "UST LIN-Q White 65 - S": { maximum: "45 1/4\"", minimum: "36 3/4\"" },
    "UST LIN-Q White 65 - X": { maximum: "45 1/4\"", minimum: "35 1/4\"" },
    "UST LIN-Q White 75 - S": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
    "UST LIN-Q White 75 - X": { maximum: "45 1/4\"", minimum: "35 3/4\"" },
  },
 
};

export default function FairwayLength() {
  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Fujikura Pro Blue 50 - R");


  // Todos los hierros utilizan la misma estructura de FAIRWAY_LENGTHS.
  const clubLengths = useMemo(() => {
    return CLUBS.map((club) => {
      const lengths = FAIRWAY_LENGTHS[club]?.[selectedShaft];

      return {
        club,
        maximum: lengths?.maximum ?? "XX",
        minimum: lengths?.minimum ?? "XX",
      };
    });
  }, [selectedShaft]);

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Fairway Length Calculator</h1>
        <p style={styles.subtitle}>All lengths assume standard tipping</p>

        <div style={styles.calculator}>
          {/* Columna izquierda: selecciones y restricciones */}
          <div style={styles.leftCol}>


            <div style={styles.fieldGroup}>
              <label style={styles.label}>Shaft</label>
              <select
                style={styles.selectContainer}
                value={selectedShaft}
                onChange={(e) => setSelectedShaft(e.target.value)}
              >
              {Object.keys(FAIRWAY_LENGTHS["3 Wood"]).map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))}
              </select>
            </div>
          </div>

          {/* Columna derecha: tabla de longitudes */}
          <div style={styles.rightCol}>
            <div style={styles.tableHeader}>
              <span />
              <span>Maximum<br />Length</span>
              <span>Minimum<br />Length</span>
            </div>

            {clubLengths.map(({ club, maximum, minimum }) => (
              <div
                key={club}
                style={styles.tableRow}
              >
                <span style={styles.clubName}>{club}</span>
                <span style={maximum !== "XX" ? styles.tableResult : undefined}>
                  {maximum}
                </span>
                <span style={minimum !== "XX" ? styles.tableResult : undefined}>
                  {minimum}
                </span>
              </div>
            ))}
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
      minHeight: "calc(100vh - 60px)",
      boxSizing: "border-box"
    },
    container: { 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "32px 24px",
      width: "100%",
      maxWidth: "1050px",
      margin: "0 auto",
      fontSize: "clamp(10px, 1.1vw, 18px)", // Escala entre 14px y 18px según el ancho
    },
    title: { 
      margin: 0,
      fontSize: "clamp(20px, 1.5vw, 30px)", // Escala de 24px a 32px
      fontWeight: "bold", 
    },
    subtitle: { 
      fontSize: "clamp(10px, 1.15vw, 25px)", 
      color: "#555", 
     },
    calculator: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
      alignItems: "start",
      marginTop: "38px",
      gap: "clamp(38px, 8vw, 110px)",
      width: "100%",
    },
    leftCol: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      width: "100%",
      textAlign: "left",
    },
    rightCol: { 
      width: "100%",
      fontSize: "clamp(13px, 1vw, 16px)",
    },
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    label: {
      fontWeight: 700,
      fontSize: "clamp(16px, 1.2vw, 19px)",
    },
    helperText: {
      color: "#555",
      fontSize: "12px",
    },
    resultRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #aaaaaaff",
      background: "#e0e0e0",
      padding: "15px 16px",
      gap: "18px",
      width: "100%",
      boxSizing: "border-box",
    },
    resultBox: {
      background: "#63ff1bff",
      padding: ".20vw .25vw",
      fontWeight: "bold",
      fontSize: "clamp(14px, 1.5vw, 17px)",
      whiteSpace: "nowrap",
    },
    selectContainer: {
      width: "100%",
      minHeight: "36px",
      padding: "5px 8px",
      border: "1px solid #888",
      borderRadius: "3px",
      background: "#fff",
      fontSize: "clamp(13px, 1.05vw, 17px)",
    },
    tableHeader: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr 1fr",
      alignItems: "end",
      padding: "0 10px 8px",
      color: "#333",
      fontWeight: 700,
      lineHeight: 1.15,
      textAlign: "center",
    },
    tableRow: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr 1fr",
      alignItems: "center",
      minHeight: "34px",
      padding: "0 10px",
      borderBottom: "1px solid #dedede",
      textAlign: "center",
    },
    clubName: {
      fontWeight: 600,
      textAlign: "left",
    },
    tableResult: {
      display: "inline-block",
      justifySelf: "center",
      /*background: "#63ff1bff",*/
      padding: "3px 6px",
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
};
