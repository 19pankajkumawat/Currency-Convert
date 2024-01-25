import { useState} from 'react'
import {InputBox} from './Commponent'
import UseCurrencyInfo from './HOOKS/UseCurrencyinfo'
import './App.css'
// import UseCurrencyInfo from './HOOKS/UseCurrencyinfo'

function App() {
const [amount,setAmount] = useState(0)
const [from,setFrom] = useState("usd")
const [to,setTo] = useState("inr")
const [convertedAmount,setConvertedAmount]= useState(0)

const curencyInfo = UseCurrencyInfo(from)
const option = Object.keys(curencyInfo)

const swap = () =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {setConvertedAmount(amount * curencyInfo[to])}
  return (

    <div className='w-full h-screen flex flex-wrap justify-center item-center bg- 
     cover bg-no-repeat'
    style=
  {{backgroundImage:`url('https://w0.peakpx.com/wallpaper/640/819/HD-wallpaper-beautiful-city-city-evening-sky-buillding.jpg')`,}}>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5
        backdrop-blur-sm bg-white/30">
          <form 
                onSubmit={(e) => {
                e.preventDefault();
                convert()
          }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label ="Form"
              amount = {amount}
              currencyOption = {option}
              onCurrencyChange = {(currency) => setAmount(amount)}
              selectCurrency = {from}
              onAmountChange ={(amount)=>setAmount(amount)}
                />
            </div>
            <div className="relative w-full h-1/5">
              <button 
              type="button"
              className="sticky left-0-translate-x-1/2-translate-y-1/2 border- 
              white rounded-md bg-blue-600 text-white px-2 py-0.5" 
               onClick={swap} >
                swap

        </button>              
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
               label="To" 
              amount = {convertedAmount}
              currencyOption = {option}
              onCurrencyChange = {(currency) => setTo(currency)}
              selectCurrency = {from}
              // onAmountChange ={(amount)=>setAmount(amount)}
              amountDisable
               />
            </div>
            <button type="submited" 
            className='w-full bg-blue-600 text-white px-p py-3 rounded-lg'>

              Convert{from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      </div>
    
  );
}

export default App
