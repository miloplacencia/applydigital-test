import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Index from "./pages";
import Favorites from "./pages/favorites";

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="favorites" element={<Favorites />} />
          <Route index element={<Index />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
