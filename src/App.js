import React from "react";
import  ReactDOM  from "react-dom/client";
import "../App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetails from "./components/Pages/RestaurantDetails";
import Cart from "./components/Pages/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./components/Footer";
import Error404 from "./components/Pages/Error404";
const App = () => {
  return (
    <Provider store={store}>
    <div className="main-container">
      <Header />
      <Outlet/>
       <Footer/>
    </div>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error404/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// export default App;
