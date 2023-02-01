import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

  return (
    <Suspense fallback={<div style={{color:'red'}}>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path}
           path={path}
           element={element}/>
        ))}
      </Routes> 
    </Suspense>
  );
};

export default AppRouter;
