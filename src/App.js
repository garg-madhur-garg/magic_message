
import React, { useState } from 'react';
import './App.css';


function App() {
  const [inp, setInp] = useState('');
  const [coun, setCoun] = useState('');

  const search = (e) => {
    // alert(`https://api.whatsapp.com/send/?phone=${inp}`)
    window.open(`https://api.whatsapp.com/send/?phone=${coun}${inp}`);
    // window.open(`https://wa.me/${coun}${inp}`, '_blank');
    e.preventDefault();
    setInp("");
    setCoun("");
    window.close(`https://api.whatsapp.com/send/?phone=${coun}${inp}&text&app_absent=0`);

  }

  return (
    <div className="App">
      <div>
        <input type={Number} value={coun} onChange={(e) => setCoun(e.target.value)} required placeholder="Country Code" autoFocus />
      </div>
      <div>
        <input type={Number} value={inp} onChange={(e) => setInp(e.target.value)} required placeholder="Contact Number" autoFocus />
      </div>
      <div>
        <button onClick={search} >Start Chatting</button>
      </div>


      {/* {console.log(`https://api.whatsapp.com/send/?phone=${inp}`)} */}


    </div>
  );


}



export default App;
