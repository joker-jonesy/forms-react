import React from "react";

function App() {

    const [items, setItems]=React.useState(
        [
            {
                name:"Luke",
                address:"Some Place in Michigan"
            },
            {
                name:"Steven",
                address:"Some Place in New York"
            },
            {
                name:"Lisa",
                address:"Some Place in New York"
            },
            {
                name:"Austin",
                address:"Some Place in Washington"
            },
            {
                name:"Gus",
                address:"Some Place in New York"
            },
        ]
    )

  return (
    <div className="App">
      <form>
        <input type={"text"} placeholder={"name...."}/>
        <input type={"text"} placeholder={"address...."}/>
          <input type={"submit"} value={"Submit"}/>
      </form>
        {
            items.map((itm,idx)=>
            <div key={idx}>
                <h1>{itm.name}</h1>
                <h3>{itm.address}</h3>
            </div>
            )
        }
    </div>
  );
}

export default App;
