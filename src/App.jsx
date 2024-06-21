import Gradient from "./Gradient";

function App() {
  return (
    <div className="relative  text-slate-100 max-w-xl mx-auto mt-20 p-4 border border-slate-400 flex">
      <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl">Gradient Generator</h1>
        <p className="text-center mb-6">Bring styles to your apps</p>
        <p className="mb-1">color, min2 , max5</p>
        <div className="flex mb-2">
          <input type="color" />
          <input type="color" />
        </div>
        <div className="mb-5">
          <button>+</button>
          <button>-</button>
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
