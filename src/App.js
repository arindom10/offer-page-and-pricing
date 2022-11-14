import "./App.css";
import AssignmentMark from "./components/AssignmentMark/AssignmentMark";
import NavBar from "./components/NavBar/NavBar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <h1 className="text-5xl font-bold underline">
                There is a big Deal
            </h1>
            <p>This is just a paragraph</p>
            <Pricing></Pricing>
            <AssignmentMark></AssignmentMark>
            <PhoneBar></PhoneBar>
        </div>
    );
}

export default App;
