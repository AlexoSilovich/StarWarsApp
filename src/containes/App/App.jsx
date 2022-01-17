import PeoplePage from "@containes/PeoplePage";
import HomePage from "@containes/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
