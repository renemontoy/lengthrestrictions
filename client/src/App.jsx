import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import NavBarLength from "./navlength";
import DriverLength from "./LenghtDriver";
import SecretWeaponLength from "./LengthSecretWeapon";
import FairwayLength from "./LengthFairway";
import HybridLength from "./LenghtHybrid";
import IronLength from "./LenghtIrons";
import PutterLength from "./LenghtPutter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección */}
        <Route path="/" element={<Navigate to="/putter" replace />} />

        {/* Ruta padre con Layout */}
        <Route path="/" element={<NavBarLength />}>
          <Route path="putter" element={<PutterLength />} />
          <Route path="driver" element={<DriverLength />} />
          <Route path="secretweapon" element={<SecretWeaponLength />} />
          <Route path="fairway" element={<FairwayLength />} />
          <Route path="hybrid" element={<HybridLength />} />
          <Route path="iron" element={<IronLength />} />

           </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;