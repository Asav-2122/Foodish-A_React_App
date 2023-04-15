import React from "react";
import  ReactDOM  from "react-dom/client";
import "../App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetails from "./components/Pages/RestaurantDetails";
import Cart from "./components/Pages/Cart";
const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet/>
      {/* <Body /> */}
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
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
