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

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/NotImplemented" element={<NotImplemented />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
