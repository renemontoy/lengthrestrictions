import { useState, useMemo } from "react";

// Opciones compartidas. Mantenerlas fuera del componente evita recrearlas
// cada vez que cambia una selección.

const CLUBS = [
  "17°",
  "19°",
  "22°",
  "25°",
  "28°",
  "31°",
  "34°",
];

// Longitudes por número de hierro y shaft.
// Las medidas ya incluyen el símbolo de pulgadas para mostrarse directamente.
const HYBRID_LENGTHS = {
  "17°": {
    "Accra iSeries 50i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 60i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 70i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 80i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "43 1/2\"", minimum: "34 3/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "43 1/2\"", minimum: "34 1/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "43 1/2\"", minimum: "34 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "43 1/2\"", minimum: "36\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "42 1/2\"", minimum: "33 1/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "43 1/2\"", minimum: "33\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "43 1/2\"", minimum: "36\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "43 1/2\"", minimum: "35 3/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "43 1/2\"", minimum: "31 1/2\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "43 1/2\"", minimum: "31\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "43 1/2\"", minimum: "33\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "43 1/2\"", minimum: "35 1/2\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "42 1/2\"", minimum: "32 1/2\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "43 1/2\"", minimum: "35 1/2\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "42 1/2\"", minimum: "33\"" },
  },

  "19°": {
    "Accra iSeries 50i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 60i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 70i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },
    "Accra iSeries 80i": { maximum: "42 1/2\"", minimum: "36 1/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "42 1/2\"", minimum: "33 1/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "43 1/2\"", minimum: "34 3/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "43 1/2\"", minimum: "34 1/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "43 1/2\"", minimum: "34 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "43 1/2\"", minimum: "36\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "42 1/2\"", minimum: "38\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "42 1/2\"", minimum: "33 1/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "43 1/2\"", minimum: "33\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "43 1/2\"", minimum: "36\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "43 1/2\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "43 1/2\"", minimum: "35 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "43 1/2\"", minimum: "35 3/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "43 1/2\"", minimum: "31 1/2\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "43 1/2\"", minimum: "31\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "43 1/2\"", minimum: "33\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "43 1/2\"", minimum: "35 1/2\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "42 1/2\"", minimum: "32 1/2\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "42 1/2\"", minimum: "33\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "43 1/2\"", minimum: "36 1/2\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "43 1/2\"", minimum: "35 1/2\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "42 1/2\"", minimum: "33\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "42 1/2\"", minimum: "33\"" },
  },

  "22°": {
    "Accra iSeries 50i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 60i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 70i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 80i": { maximum: "42\"", minimum: "35 3/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "43\"", minimum: "35 1/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "43\"", minimum: "34 3/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "43\"", minimum: "34 1/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "43\"", minimum: "33 3/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "43\"", minimum: "33 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "43\"", minimum: "35 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "43\"", minimum: "35 1/2\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "42\"", minimum: "32 3/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "42\"", minimum: "32 3/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "43\"", minimum: "32 1/2\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "43\"", minimum: "35 1/2\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "43\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "43\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "43\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "43\"", minimum: "35 1/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "43\"", minimum: "36\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "43\"", minimum: "31\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "43\"", minimum: "30 1/2\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "43\"", minimum: "32 1/2\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "43\"", minimum: "35\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "42\"", minimum: "32\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "43\"", minimum: "36\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "43\"", minimum: "35\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "42\"", minimum: "32 1/2\"" },
  },

  "25°": {
    "Accra iSeries 50i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 60i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 70i": { maximum: "42\"", minimum: "35 3/4\"" },
    "Accra iSeries 80i": { maximum: "42\"", minimum: "35 3/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "42\"", minimum: "32 3/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "43\"", minimum: "35 1/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "43\"", minimum: "34 3/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "43\"", minimum: "34 1/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "43\"", minimum: "33 3/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "43\"", minimum: "33 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "43\"", minimum: "35 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "43\"", minimum: "35 1/2\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "42\"", minimum: "37 1/2\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "42\"", minimum: "32 3/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "42\"", minimum: "32 3/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "43\"", minimum: "32 1/2\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "43\"", minimum: "35 1/2\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "43\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "43\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "43\"", minimum: "35 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "43\"", minimum: "35 1/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "43\"", minimum: "36\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "43\"", minimum: "36\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "43\"", minimum: "31\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "43\"", minimum: "30 1/2\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "43\"", minimum: "32 1/2\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "43\"", minimum: "35\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "42\"", minimum: "32\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "42\"", minimum: "32 1/2\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "43\"", minimum: "36\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "43\"", minimum: "35\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "42\"", minimum: "32 1/2\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "42\"", minimum: "32 1/2\"" },
  },
  "28°": {
    "Accra iSeries 50i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 60i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 70i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 80i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "42 1/2\"", minimum: "33 3/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "42 1/2\"", minimum: "35\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "42 1/2\"", minimum: "32\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "42 1/2\"", minimum: "35\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "42 1/2\"", minimum: "34 3/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "42 1/2\"", minimum: "30 1/2\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "42 1/2\"", minimum: "30\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "42 1/2\"", minimum: "32\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "31 1/2\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "41 1/2\"", minimum: "32\"" },
  },

  "31°": {
    "Accra iSeries 50i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 60i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 70i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 80i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "42 1/2\"", minimum: "33 3/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "42 1/2\"", minimum: "35\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "42 1/2\"", minimum: "32\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "42 1/2\"", minimum: "35\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "42 1/2\"", minimum: "34 3/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "42 1/2\"", minimum: "30 1/2\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "42 1/2\"", minimum: "30\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "42 1/2\"", minimum: "32\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "31 1/2\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "41 1/2\"", minimum: "32\"" },
  },
 
  "34°": {
    "Accra iSeries 50i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 60i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 70i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },
    "Accra iSeries 80i": { maximum: "41 1/2\"", minimum: "35 1/4\"" },

    "Aerotech SteelFiber Private Reserve 110 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 60 A - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 70 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 R - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "Aerotech SteelFiber Private Reserve 95 S - Parallel": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "Fujikura Ventus Blue 7 R Hyb": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Fujikura Ventus Blue 8 S Hyb": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "Fujikura Ventus Blue 9 X Hyb": { maximum: "42 1/2\"", minimum: "33 3/4\"" },

    "Graphite Design Tour AD DI Hyb 85- S": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD DI Hyb 85- X": { maximum: "42 1/2\"", minimum: "33 1/4\"" },
    "Graphite Design Tour AD IZ Hyb 6- R2": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "Graphite Design Tour AD IZ Hyb 7- R": { maximum: "42 1/2\"", minimum: "35\"" },

    "KBS Max Graphite 45 L- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 55 A- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },
    "KBS Max Graphite 65 R- Parallel": { maximum: "41 1/2\"", minimum: "37\"" },

    "KBS-TGIGraphite-70-R-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },
    "KBS-TGIGraphite-80-S-Iron": { maximum: "41 1/2\"", minimum: "32 1/4\"" },

    "KBS-Tour-85H-S-Hyb": { maximum: "42 1/2\"", minimum: "32\"" },
    "KBS-Tour-95H-X-Hyb": { maximum: "42 1/2\"", minimum: "35\"" },

    "MCA Tensei AV X-Link Hybrid Blue 75 R": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid Blue 75 S": { maximum: "42 1/2\"", minimum: "34 1/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 S": { maximum: "42 1/2\"", minimum: "34 3/4\"" },
    "MCA Tensei AV X-Link Hybrid White 85 X": { maximum: "42 1/2\"", minimum: "34 3/4\"" },

    "Mitsubishi MMT 50 L- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 60 A- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 70 R- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Mitsubishi MMT 80 S- Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },

    "Project X Cypher 2.0 40i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 50i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Cypher 2.0 60i 5.5 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },

    "Project X Denali Frost Blue Hybrid 70 5.5": { maximum: "42 1/2\"", minimum: "30 1/2\"" },
    "Project X Denali Frost Blue Hybrid 70 6.0": { maximum: "42 1/2\"", minimum: "30\"" },
    "Project X Denali Frost Blue Hybrid 80 6.5": { maximum: "42 1/2\"", minimum: "32\"" },

    "Project X Denali Silver 105i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },
    "Project X Denali Silver 50i 4.0 - Parallel": { maximum: "41 1/2\"", minimum: "31 1/2\"" },
    "Project X Denali Silver 60i 5.0 - Parallel": { maximum: "41 1/2\"", minimum: "32\"" },
    "Project X Denali Silver 70i 5.5 - Parallel": { maximum: "42 1/2\"", minimum: "35 1/2\"" },
    "Project X Denali Silver 80i 6.0 - Parallel": { maximum: "42 1/2\"", minimum: "34 1/2\"" },

    "UST Recoil 55 Dart F1- L": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 65 Dart F2- A": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F3- R": { maximum: "41 1/2\"", minimum: "32\"" },
    "UST Recoil 75 Dart F4- S": { maximum: "41 1/2\"", minimum: "32\"" },
  },
};

export default function HybridLength() {
  // --- Estado del formulario ---
  const [selectedShaft, setSelectedShaft] = useState("Accra iSeries 50i");


  // Todos los hierros utilizan la misma estructura de HYBRID_LENGTHS.
  const clubLengths = useMemo(() => {
    return CLUBS.map((club) => {
      const lengths = HYBRID_LENGTHS[club]?.[selectedShaft];

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
        <h1 style={styles.title}>Hybrid Length Calculator</h1>
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
              {Object.keys(HYBRID_LENGTHS["17°"]).map((item) => (
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
