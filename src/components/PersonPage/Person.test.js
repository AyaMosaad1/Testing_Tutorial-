import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render person name when data has loaded", async () => {
    render( <PersonPage id={1} />);
   // expect(screen.getBy("Loading ...")).toBeInTheDocument();
    expect(await screen.findByText("German Howey")).toBeInTheDocument();
  });