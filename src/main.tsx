import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

  const root = document.getElementById("root");

  if(root) {
    const rootElem = ReactDOM.createRoot(root);
    rootElem.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }

