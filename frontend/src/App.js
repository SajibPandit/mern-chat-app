import { Button } from "@chakra-ui/react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chat" component={Chat} />
    </div>
  );
}
