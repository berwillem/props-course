import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [compteur, setCompteur] = useState(0);
  const [max, setMax] = useState(false);

  const increment = () => {
    if (compteur < 10) {
      setCompteur(compteur + 1);
    } else {
      setMax(true);
      toast("Max reached");
    }
  };
  const decremnet = () => {
    if (compteur > 0) {
      setCompteur(compteur - 1);
      setMax(false);
    }
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      {compteur}
      <button onClick={decremnet}>-</button>
      {max && <h1>Maximum</h1>}
      <ToastContainer />
    </div>
  );
}
