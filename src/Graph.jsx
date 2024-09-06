import { useRouteError } from "react-router-dom";
import PizzaGraph from "./components/PizzaGraph";
import LessBuildingGraph from "./components/LessBuildingGraph"; 

import { Link } from "react-router-dom";

export default function Graph() {

  return (
    <>  
      <Link to={`/`}>VOLTAR</Link>
      <div>
        <PizzaGraph/>
        <LessBuildingGraph/>
      </div>
    </>
  );
}