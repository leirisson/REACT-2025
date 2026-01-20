import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { ComponentsButton } from "../page/CoponentsButton";
import { ComponentsCard } from "../page/ComponentsCard";
import { ExercicioOne } from "../page/ExercicioOne";
import { Exercisetwo } from "../page/Exercisetwo";
import { Search } from "../page/Search";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ComponentsButton />} />
        <Route path="/cards" element={<ComponentsCard />} />
        <Route path="/exerciciosOne" element={<ExercicioOne />} />
        <Route path="/exercise-two" element={<Exercisetwo />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
