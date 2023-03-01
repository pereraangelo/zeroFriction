import React from "react";
import { render } from "@testing-library/react";
import { OrganizationConfigContext } from "../contexts/OrganizationConfigContext";
import RenderValidationMessages from "../components/Validation";

const contextValuesss = {
  organizationConfig: {
    migrationMode: false,
    code: "",
    description: "",
    bankAccount: "",
    vatAccountNumber: "",
    companyAccountNumber: "",
    address: {
      streetName: "",
      city: "",
      streetNumber: 0,
      postalCode: 0,
      country: "",
    },
    contactDetails: {
      telephone: "",
      emailAddress: "",
      website: "",
    },
  },
  setOrganizationConfig: jest.fn(),
  setIsValid: jest.fn(),
  isDirty: false,
  setIsDirty: jest.fn(),
  isValid: false,
  setTouched: jest.fn(),
  touched: {
    code: true,
    description: true,
    bankAccount: true,
    vatAccountNumber: true,
    companyAccountNumber: true,
    streetName: true,
    city: true,
    streetNumber: true,
    postalCode: true,
    country: true,
    telephone: true,
    emailAddress: true,
    website: true,
  },
};

describe("RenderValidationMessages", () => {
  it("should render error messages when there are validation errors", () => {

    const { getByText, getAllByText } = render(
      <OrganizationConfigContext.Provider value={contextValuesss}>
        <RenderValidationMessages />
      </OrganizationConfigContext.Provider>
    );

    expect(
      getByText(/kindly review the following error messages carefully/i)
    ).toBeInTheDocument();
    expect(getAllByText(/code is required/i)).toHaveLength(2);
    expect(getByText(/description is required/i)).toBeInTheDocument();
    expect(getByText(/bankaccount is required/i)).toBeInTheDocument();
    expect(getByText(/vataccountnumber is required/i)).toBeInTheDocument();
    expect(getByText(/companyaccountnumber is required/i)).toBeInTheDocument();
    expect(getByText(/street name is required/i)).toBeInTheDocument();
    expect(getByText(/city is required/i)).toBeInTheDocument();
    expect(getByText(/street number is required/i)).toBeInTheDocument();
    expect(getByText(/postal code is required/i)).toBeInTheDocument();
    expect(getByText(/country is required/i)).toBeInTheDocument();
    expect(getByText(/telephone number is required/i)).toBeInTheDocument();
    expect(getByText(/email address is required/i)).toBeInTheDocument();
    expect(getByText(/website is required/i)).toBeInTheDocument();
  });
});
 