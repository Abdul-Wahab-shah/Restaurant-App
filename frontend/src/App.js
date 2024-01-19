import { Route, NavLink, Routes } from 'react-router-dom';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import Add_review from './Components/Add_review';
import Login from './Components/Login';
import Restaurants_list from './Components/Restaurants_list';
import Restaurants from './Components/Restaurants';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/restaurants" className="nav-link" activeClassName="active">
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            {user ? (
              <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                Logout {user.name}
              </a>
            ) : (
              <NavLink to="/login" className="nav-link" activeClassName="active">
                Login
              </NavLink>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          {/* ... (existing Route components) */}
          <Route exact path={["/", "/restaurants"]} component={Restaurants_list} />
//           <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <Add_review {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurants {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Routes>
      </div>
    </div>
  );
}
//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/restaurants" className="navbar-brand">
//           Restaurant Reviews
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/Restaurants"} className="nav-link">
//               Restaurants
//             </Link>
//           </li>
//           <li className="nav-item" >
//             { user ? (
//               <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
//                 Logout {user.name}
//               </a>
//             ) : (            
//             <Link to={"/login"} className="nav-link">
//               Login
//             </Link>
//             )}

//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//         <Routes>
//           <Route exact path={["/", "/restaurants"]} component={Restaurants_list} />
//           <Route 
//             path="/restaurants/:id/review"
//             render={(props) => (
//               <Add_review {...props} user={user} />
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

export default App;