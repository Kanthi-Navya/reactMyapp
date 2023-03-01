import React from 'react';
import Login from './Login';
import Registration from './Registration';

const Header = () => {
	return (
		<div>
				<p>Header</p>
		</div>
	)
};

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Header/>
      <p>Registration</p>
      <Registration />
      <p>Login</p>
      <Login />
      <div >
        {/* <NavLink to="/contact">
          Contact
        </NavLink> */}
      </div>
    </div>
  );
};

export default HomePage ;

// export default HomePage;
