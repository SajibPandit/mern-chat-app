import { Button } from "@chakra-ui/react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";

export default function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}
