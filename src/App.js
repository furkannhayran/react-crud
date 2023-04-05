import { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true }
];
function App() {
  // const [data, setData] = useState([])
  // const textChange = (e) => {
  //   if (e.target.style.textDecoration === "") {
  //     e.target.style = "text-decoration:line-through"
  //   } else if (e.target.style.textDecoration === 'line-through') {
  //     e.target.style = ""
  //   }
  // }
  // const handleChange = (e) => {
  //   // debugger
  //   setData(e.target.value)
  // }
  // const handleClick = () => {
  //   const pragraf =
  //     `
  //     <p onClick={e => textChange(e)}>${data ? data : ""}</p>
  //     `
  //     console.log(pragraf)
  //   document.querySelector(".Content").append("<h2>dwa</h2>")
  //   // React.findDOMNode("<h2>Yeah </h2>")
  //   setData("")
  // }
  const [liste, setListe] = useState(INITIAL_STATE)
  const [val, setVal] = useState("")
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input value={val} onChange={e => setVal(e.target.value)} placeholer="listeye ekle" />
        <button onClick={() => {
          setListe([...liste,
          {
            id: Date.now(),
            baslik: val,
            tamamlandi: false
          }])
          setVal("")
        }
        }
        >Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setListe(
                liste.map(el =>
                  el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el
                )
              )
            }}
            className={item.tamamlandi ? "yapildi" : ""}
          >{item.baslik}</div>
        ))}
      </div>
      <button onClick={() =>
        setListe(
          liste.filter(item =>
            !item.tamamlandi 
          )
        )

      } className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}

export default App;



    // <div className="App">
    //   <h1>Yapılacaklar Listesi</h1>
    //   <div className='navbar'>
    //     <input onChange={e => handleChange(e)} />
    //     <button onClick={e =>handleClick()}>EKLE</button>
    //   </div>
    //   <hr></hr>
    //   <div className='Content'>
    //   </div>
    //   <button className='clear'>Tamamlananları temizle</button>
    // </div>