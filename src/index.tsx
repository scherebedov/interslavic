import * as React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainReducer } from 'reducers';

/* tslint:disable */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then((registration) => {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch((error) => {
            console.log('Service worker registration failed, error:', error);
        });
}

declare global {
    interface Window { dataLayer: any[]; }
}

function gtag(...args){
    window.dataLayer.push(...args);
}

if (process.env.NODE_ENV === 'production') {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-149580301-1');
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());

    gtag('config', 'UA-149580301-1');
}

const store = createStore(mainReducer);

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app'),
);
