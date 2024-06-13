import './App.css';
import Button from './components/Button';
import { useState } from 'react';


function App() {
 
let [value, setValue] = useState('')
function handleClick(e) {
  e = setValue(value + e.target.value) 
}
function del(e){
  e = setValue(value.slice(0, -1))
}
function evall(e){
  e = setValue(eval(value))
}
  return (
    <div className="bg-blue-900 h-screen flex flex-col items-center justify-center">
      <div>
<input type="text" value={value}
            className="w-96 shadow-md text-3xl shadow-blue-500/50 p-8 m-1 rounded-lg bg-white" disabled></input>
            </div>   
    
      <div className='m-5 p-3 rounded-lg'>
      <div className='flex'>
      <Button onClick={handleClick} value="7" text={'7'}/>
      <Button onClick={handleClick} value="8" text={'8'}/>
      <Button onClick={handleClick} value="9" text={'9'}/>
      <Button onClick={del} value="del" text={'DEL'}/>
      </div>
      <div className='flex'>
      <Button onClick={handleClick} value="4"text={'4'}/>
      <Button onClick={handleClick} value="5" text={'5'}/>
      <Button onClick={handleClick} value="6" text={'6'}/>
      <Button onClick={handleClick} value="+" text={'+'}/>
      </div>
      <div className='flex'>
      <Button onClick={handleClick} value="1" text={'1'}/>
      <Button onClick={handleClick} value="2" text={'2'}/>
      <Button onClick={handleClick} value="3" text={'3'}/>
      <Button onClick={handleClick} value="-" text={'-'}/>
      </div>
      <div className='flex'>
      <Button onClick={handleClick} value="." text={'.'}/>
      <Button onClick={handleClick} value="0" text={'0'}/>
      <Button onClick={handleClick} value="/" text={'/'}/>
      <Button onClick={handleClick} value="*" text={'x'}/>
      </div>
      <div className='flex'>
      <button  onClick={e => setValue('')}
value="reset"
       className='font-bold bg-white text-blue-400 w-48 h-20 p-5 m-2 text-3xl shadow-md shadow-blue-500/50 rounded-full'>RESET</button>
      <button onClick={evall} value="="
      className='font-bold bg-blue-600 text-white w-48 h-20 p-5 m-2 text-3xl shadow-md shadow-blue-500/50 rounded-full'>=</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
