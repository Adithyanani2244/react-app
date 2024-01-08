import logo from './logo.svg';
import './App.css';
import { toBeEnabled } from '@testing-library/jest-dom/matchers';
import Button from './components/buttoncomponents/button';
import List from './components/listcoponents/ul/orlist';
import Unorder from './components/listcoponents/or/or';
import Form from './components/formscomponents/form';


function App() {
  return (
    <div>
      
    <div>
      <h1>Hello World</h1>
      <div><hr></hr></div>
    </div>
    <div><h1>TABLE</h1></div>
   <table>
   
      <th>
        sl no 
      </th>
      <th>
        name
      </th>
    <th>graduation</th>
    <th>passed out</th>
    

     <tr>
      <tbody>
      <td>
        1
      </td>
      <td>
        adithya
      </td>
      <td>btech</td>
      <td>2023</td>
      </tbody>
     </tr>

     </table>
     <div><hr></hr></div>
     
     
  <div>
    <div>
      <div><h1>BUTTON </h1></div>
    <Button/>
    <Button/>
    <Button/>
    <div>
      <h1> Order list & Unorder list </h1>
    </div>
    <List/>
    <Unorder/></div>








    <div><h1>adithya</h1></div>
    <div><hr></hr></div>

    <div>
      <div><h1>Forms</h1></div>
      <Form/>

      
    </div>
    </div>
    </div> 
    
    
  )

 
}

export default App;
