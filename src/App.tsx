import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen">
              Home
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
