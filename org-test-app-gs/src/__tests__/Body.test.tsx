import { render } from "@testing-library/react";
import Body from "../components/Body";

describe("Body", () => {
  it("renders the OrganizationConfigInput, AddressInput, and ContactDetailInput components with the correct props", () => {
    const { getByTestId } = render(<Body />);
    
    expect(getByTestId("organization-config-input")).toBeInTheDocument();
    expect(getByTestId("address-input")).toBeInTheDocument();
    expect(getByTestId("contact-detail-input")).toBeInTheDocument();
  });
});
