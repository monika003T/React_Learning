//create element its a core react 
   
    const heading= React.createElement("h1",{},"HELLO WORLD FROM REACT")
    //we need a root to render its, react dom is used 
    const root=ReactDOM.createRoot(document.getElementById('root'))
    //render heading
    root.render(heading);
