// import { Route,NavLink, Routes } from "react-router-dom";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import AddReview from "./Components/AddReview";
// import Login from "./Components/Login";
// import RestaurantsList from "./Components/RestaurantsList";
// import Restaurants from "./Components/Restaurants";

// function App() {
//   const [user, setUser] = React.useState(null);

//   async function login(user = null) {
//     setUser(user);
//   }

//   async function logout() {
//     setUser(null);
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/restaurants" className="navbar-brand">
//           Restaurant Reviews
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <NavLink to={"/Restaurants"} className="nav-link">
//               Restaurants
//             </NavLink>
//           </li>
//           <li className="nav-item" >
//             { user ? (
//               <NavLink onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
//                 Logout {user.name}
//               </NavLink>
//             ) : (
//             <NavLink to={"/login"} className="nav-link">
//               Login
//             </NavLink>
//             )}

//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//         <Routes>
//           <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
//           <Route
//             path="/restaurants/:id/review"
//             render={(props) => (
//               <AddReview {...props} user={user} />
//             )}
//           />
//           <Route
//             path="/restaurants/:id"
//             render={(props) => (
//               <Restaurants {...props} user={user} />
//             )}
//           />
//           <Route
//             path="/login"
//             render={(props) => (
//               <Login {...props} login={login} />
//             )}
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }




import { Route, NavLink, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./Components/AddReview.js";
import Login from "./Components/Login.js";
import RestaurantsList from "./Components/RestaurantsList.js";
import Restaurants from "./Components/Restaurants.js";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/restaurants"
              className="nav-link"
              activeclassname="active"
            >
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            {user ? (
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              <NavLink
                to="/login"
                className="nav-link"
                activeclassname="active"
              >
                Login
              </NavLink>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
      
          <Route exact path="/" Component={RestaurantsList} />
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route
            path="/restaurants/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => <Restaurants {...props} user={user} />}
          />
          <Route
            path="/login"
            activeClassName="active"
            render={(props) => <Login {...props} login={login} />}
            
          />
            {/* <Route path="*" element={<NotFoundComponent />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;