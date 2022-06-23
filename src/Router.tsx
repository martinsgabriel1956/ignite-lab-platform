import { Route, Routes } from "react-router-dom";
import { Event, LandingPage } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}