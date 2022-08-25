import React from "react";

function App() {

    const [form, setForm]=React.useState({
        name:"",
        address:""
    });
    const [items, setItems] = React.useState(
        [
            {
                name: "Luke",
                address: "Some Place in Michigan"
            },
            {
                name: "Steven",
                address: "Some Place in New York"
            },
            {
                name: "Lisa",
                address: "Some Place in New York"
            },
            {
                name: "Austin",
                address: "Some Place in Washington"
            },
            {
                name: "Gus",
                address: "Some Place in New York"
            },
        ]
    )
    const [list, setList]=React.useState([])

    React.useEffect(()=>{
        setList(items);
    });

    const handleChange = prop=> event=>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();

        setItems([...items,form]);
        setForm({
            name:"",
            address:""
        })

        // let newList = items;
        //
        // newList.push(form);
        //
        // setItems(newList)
        // console.log(items);
    }

    let itemsEle = list.map((itm, idx) =>
        <div key={idx}>
            <h1>{itm.name}</h1>
            <h3>{itm.address}</h3>
        </div>
    )


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={form.name} onChange={handleChange("name")} placeholder={"name...."}/>
                <input type={"text"} value={form.address} onChange={handleChange("address")} placeholder={"address...."}/>
                <input type={"submit"} value={"Submit"}/>
            </form>
            {itemsEle}
        </div>
    );
}

export default App;
