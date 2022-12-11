import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    //Input changes are being saved to variable
    const [change, setChange] = useState(0)
    const handleChange = (changes) => {
        setChange(changes.target.value)
    }

    //Convert binary to decimal
    const convertToDecimal = () => {
        let input = change.split("")
        input.reverse()
        let power = 1;
        let result = 0;
        for(let i=0; i<=input.length; i++){
            if(input[i]==="1"){
                result += power
                power*=2
            }else{
                power*=2
            }
        }
        document.getElementById('result').innerHTML = '<span>'+result+'</span>'
    }

    //Check if every digit is 0 or 1
    const inputCheck = (event) => {
        event.preventDefault()
        for (let i = 0; i < change.length; i++) {
            if (change[i] !== '0' && change[i] !== '1') {
                document.getElementById('result').innerHTML = '<span style="color: red">error: input can only handle 1s and 0s</span>';
                break
            } else {
                document.getElementById('result').innerHTML = '';
                convertToDecimal()
            }
        }
    }
    //Return view of app
    return (
        <div>
            <div className='input-class'>
                <form onSubmit={inputCheck}>
                    <label htmlFor='binary-input'>Input binary</label><br/>
                    <input type='text' id='binary-input' onChange={handleChange}/><br/>
                    <input type='submit' value='Convert'  />
                </form>
                <p id='result'></p>
            </div>
        </div>
      )
    }

export default App;
