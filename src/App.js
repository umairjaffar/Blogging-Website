import { BrowserRouter } from "react-router-dom";
import BlogFooter from "./Components/BlogFooter";
import Header from "./Components/HeaderNav";
import NavRoutes from "./navRoutes/NavRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavRoutes />
        <BlogFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
