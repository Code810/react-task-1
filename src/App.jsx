
import './App.css'
import Input from './components/Input'

function App() {

  return (
    <>
  <div className='input-area'>
  <Input type={"text"} name={"First Name"}/>
  <Input type={"text"} name={"Last Name"}/>
  <Input type={"email"} name={"Email"}/>
  <Input type={"password"} name={"Password"}/>
  <Input type={"number"} name={"Age"}/>
  <Input type={"submit"} name={"submit"}/>
  </div>
    </>
  )
}

export default App
