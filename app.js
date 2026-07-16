import React from "react";
import ReactDOM from "react-dom/client";
/* <div id="parent">
        <div id="child1">
            <h1>Hi i'm h1 tag</h1>
            <h2>Hi i'm h2 tag</h2>
        </div>
        <div id="child2">
            <h1>Hi i'm h1 tag</h1>
            <h2>Hi i'm h2 tag</h2>
        </div>
    </div> */


    const parent = React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child1",key:"child1"},
            [React.createElement("h1",{key:"h1"},"This is Namaste React"),
                React.createElement("h2",{key:"h2"},"My name is Bhumika Sharma")]
        ),
        React.createElement("div",{id:"child2",key:"child2"},
            [React.createElement("h1",{key:"h1"},"Hi i'm h1 tag"),
                React.createElement("h2",{key:"h2"},"Hi i'm h2 tag")])]
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);