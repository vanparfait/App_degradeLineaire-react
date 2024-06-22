import { useSelector } from "react-redux";
import Gradient from "./Gradient";
import ColorInput from "./components/inputs/ColorInput";
import AddRemoveColor from "./components/AddRemoveColor";

function App() {
  const gradientValue = useSelector((state) => state.gradient);
  console.log(gradientValue);
  return (
    <div className="relative  text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">
      <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl">Gradient Generator</h1>
        <p className="text-center mb-6">Bring styles to your apps</p>
        <p className="mb-1">color, min 2 , max 5</p>
        <div className="flex mb-2">
          {gradientValue.colors.map((obj) => (
            <ColorInput
              id={obj.id}
              color={obj.value}
              // position={obj.position}
              key={obj.id}
            />
          ))}
        </div>
        <div className="mb-5">
          <AddRemoveColor action="add" sign="+" />
          <AddRemoveColor action="remove" sign="-" />
        </div>
        <p>Pick and change a color position's</p>
        {/* select color */}

        <p>color's position</p>

        {/* range color */}
        <p>Gradient global angle</p>
        {/* range angle */}

        {/* open modal button */}
      </div>
      <Gradient />
    </div>
  );
}

export default App;
