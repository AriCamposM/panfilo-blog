import React from 'react';
import { UserLogStatusContext } from '../../contexts/UserLogStatusContext';

function AuthModal({ closePopups, LogOutClick }) {
  const isLoggedIn = React.useContext(UserLogStatusContext);

  const [activeTab, setActiveTab] = React.useState('signin');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6 relative">
        <button
          onClick={closePopups}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <img
            className="w-6 h-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC"
          />
        </button>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-pink-700">
            {isLoggedIn ? 'Account' : 'Sign In / Sign Up'}
          </h2>
          {isLoggedIn ? (
            <div className="text-center">
              <p className="mb-4">You are logged in.</p>
              <button
                onClick={LogOutClick}
                className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('signin')}
                    className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'signin'
                        ? 'border-pink-500 text-pink-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setActiveTab('signup')}
                    className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'signup'
                        ? 'border-pink-500 text-pink-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setActiveTab('admin')}
                    className={`w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'admin'
                        ? 'border-pink-500 text-pink-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Admin
                  </button>
                </nav>
              </div>
              {activeTab === 'signin' ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    closePopups();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="signin-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signin-email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signin-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="signin-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                  >
                    Sign In
                  </button>
                </form>
              ) : activeTab === 'signup' ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    closePopups();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="signup-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="signup-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signup-email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="signup-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                  >
                    Sign Up
                  </button>
                </form>
              ) : (
                // Admin Login Form
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    closePopups();
                    //Place Admin login logic here
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="admin-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Admin Email
                    </label>
                    <input
                      type="email"
                      id="admin-email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="admin-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Admin Password
                    </label>
                    <input
                      type="password"
                      id="admin-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                  >
                    Log In as Admin
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
