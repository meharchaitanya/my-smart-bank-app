import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppHeader from './components/AppHeader';
import LoginContextProvider from './contexts/LoginContext';
import CartContextProvider from './contexts/CartContext';
import { Provider } from 'react-redux';
import store from './redux/store';


function App1() {

    return (

        <BrowserRouter>
            <Provider store={store}>
                <div className="App">

                    <LoginContextProvider>
                        <CartContextProvider>
                            <AppHeader />
                        </CartContextProvider>
                    </LoginContextProvider>


                </div>
            </Provider>

        </BrowserRouter >
    );
}


export default App1;
