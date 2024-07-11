
import {
  BrowserRouter,
  useLocation
} from "react-router-dom";
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';
import AppRouter from "./AppRouter"

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  // Define an array of paths where Navbar and Footer should not be displayed
  const excludePaths = ['/login', '/sign-up', '/tools/design-studio', '/dashboard', '/tools/copywriting', '/tools/transcriber', '/tools/voice-over', '/tools/image-generator'];

  // Check if the current location matches any of the excluded paths
  const shouldDisplayNavbarAndFooter = !excludePaths.includes(location.pathname);

  return (
    <>
      {shouldDisplayNavbarAndFooter && <Navbar />}

      <AppRouter />

      {shouldDisplayNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
