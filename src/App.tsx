import { BrowserRouter, Routes, Route } from "react-router";
import SignInLayout from "./modules/common/layouts/SignInLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInLayout />}>
          <Route
            path="/"
            element={
              <div className="flex h-screen items-center justify-center">
                Hola Mundo
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
