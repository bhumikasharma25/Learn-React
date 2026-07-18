import React from "react";
import ReactDOM from "react-dom/client";
//React Element
const heading = React.createElement("h1",{},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//JSX

const Title = () => (<h1 id="heading" tabIndex="5">Namaste React from JSX</h1>);
const number = 10000;

//React Component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">{number} Functional Component</h1>
    </div>
);
root.render(<HeadingComponent/>);