import React, { useContext, useEffect, useMemo } from "react";
import { Label } from "reactstrap";
import { OrganizationConfigContext } from "../contexts/OrganizationConfigContext";

const RenderValidationMessages = () => {
  const { organizationConfig, setIsValid, touched } = useContext(
    OrganizationConfigContext
  );

  // implementation of validation messages rendering
  const errors: string[] = useMemo(() => {
    const errorList = [];

    // Validate name
    if (organizationConfig.code.trim() === "" && touched.code) {
      errorList.push("Code is required");
    }
    if (organizationConfig.description.trim() === "" && touched.description) {
      errorList.push("Description is required");
    }
    if (organizationConfig.bankAccount.trim() === "" && touched.bankAccount) {
      errorList.push("BankAccount is required");
    }
    if (
      organizationConfig.vatAccountNumber.trim() === "" &&
      touched.vatAccountNumber
    ) {
      errorList.push("VatAccountNumber is required");
    }
    if (
      organizationConfig.companyAccountNumber.trim() === "" &&
      touched.companyAccountNumber
    ) {
      errorList.push("CompanyAccountNumber is required");
    }

    // Validate address
    if (
      organizationConfig.address.streetName.trim() === "" &&
      touched.streetName
    ) {
      errorList.push("Street Name is required");
    }
    if (organizationConfig.address.city.trim() === "" && touched.city) {
      errorList.push("City is required");
    }

    if (!organizationConfig.address.streetNumber && touched.streetNumber) {
      errorList.push("Street Number is required");
    }
    if (!organizationConfig.address.postalCode && touched.postalCode) {
      errorList.push("Postal Code is required");
    }
    if (organizationConfig.address.country.trim() === "" && touched.country) {
      errorList.push("Country is required");
    }

    // Validate contact details
    if (
      !organizationConfig.contactDetails.telephone.trim() &&
      touched.telephone
    ) {
      errorList.push("Telephone number is required");
    } else if (
      organizationConfig.contactDetails.telephone.trim().length > 11 &&
      touched.telephone
    ) {
      errorList.push("Telephone number is not validated");
    } else if (
      !/^\d+$/.test(organizationConfig.contactDetails.telephone.trim()) &&
      touched.telephone
    ) {
      errorList.push("Telephone number should only contain digits");
    }

    if (
      !organizationConfig.contactDetails.emailAddress.trim() &&
      touched.emailAddress
    ) {
      errorList.push("Email address is required");
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        organizationConfig.contactDetails.emailAddress
      ) &&
      touched.emailAddress
    ) {
      errorList.push("Invalid email address");
    }

    if (!organizationConfig.contactDetails.website.trim() && touched.website) {
      errorList.push("Website is required");
    }

    return errorList;
  }, [organizationConfig, touched]);

  useEffect(() => {
    errors.length > 0 ? setIsValid(false) : setIsValid(true);
  }, [errors]);

  if (errors.length > 0) {
    return (
      <div className="error p-3 m-3">
        <Label> Kindly review the following error messages carefully.</Label>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};
export default RenderValidationMessages;
