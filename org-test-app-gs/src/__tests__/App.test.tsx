import { render, screen } from "@testing-library/react";
import App from "../App";

 

describe("App", () => {
  it("renders the top section and body components", () => {
    const { getByTestId } = render(<App />);
     
    expect(getByTestId("top-section")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
   });
});

