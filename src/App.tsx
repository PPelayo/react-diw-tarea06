import "./css/base.css";
import "./css/colors.css";
import "./css/common.css";
import "./css/icons.css";
import "./css/index.css";
import Index from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotImplemented from "./pages/notImplemented";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import CartPage from "./pages/CartPage";
import AboutUsPage from "./pages/AboutUs";
import MerchandasingPage from "./pages/MerchandasingPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename={import.meta.env.DEV ? '/' : 'react-diw-tarea06'}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/NotImplemented" element={<NotImplemented />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/merchandasing" element={<MerchandasingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
