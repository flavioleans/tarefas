/* eslint-disable no-unused-vars */
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes';
import {db, auth} from './firebaseConnection';

export default function App(){
  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}
