import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter } from 'react-router-dom';
import "../src/css/calendar.css";

import Indexs from './routes/Indexs';
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
        <Provider store={store}>
            <Indexs />
        </Provider>
    </BrowserRouter>


);


