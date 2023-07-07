import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './component/Body';
import Head from './component/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './component/WatchPage';
import MainContainer from './component/MainContainer';

const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<Body/>,
        children: [
            {
                path:'/',
                element:<MainContainer/>
            },
            {
                path: 'watch',
                element: <WatchPage/>
            }
           
        ]
    }
])

const App = () => {
    return(
        <Provider store = {store}>
            <div className=''> 
                <Head/>
                <RouterProvider router={myRouter}/>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);