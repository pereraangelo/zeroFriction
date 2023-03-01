import React, { ChangeEvent } from "react";
import { AddressType } from "../../types/OrganizationConfigType";
import { Col, Label, Form, FormGroup, Input, CardHeader } from "reactstrap";

interface Props {
  address: AddressType;
  onAddressChange: (address: AddressType) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: Record<string, boolean>;
}
const AddressInput: React.FC<Props> = ({
  address,
  onAddressChange,
  handleBlur,
  touched,
}) => {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onAddressChange({
      ...address,
      [name]: value,
    });
  };

  return (
    <div data-testid="address-input">
      <CardHeader className="text-center bg-transparent mb-2">Address</CardHeader>

      <Form>
        <FormGroup>
          <Col sm={12} md={12}>
            <Label for="streetName">Street Name:</Label>
            <Input
              type="text"
              id="streetName"
              value={address.streetName}
              onChange={handleInputChange}
              name="streetName"
              invalid={touched.streetName && address.streetName.trim() === ""}
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="streetNumber">Street Number:</Label>
            <Input
              type="number"
              id="streetNumber"
              value={address.streetNumber}
              onChange={handleInputChange}
              name="streetNumber"
              invalid={touched.streetNumber && !address.streetNumber}
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="postalCode">Postal Code:</Label>
            <Input
              type="number"
              id="postalCode"
              value={address.postalCode}
              onChange={handleInputChange}
              name="postalCode"
              invalid={touched.postalCode && !address.postalCode}
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="city">City:</Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleInputChange}
              invalid={touched.city && address.city.trim() === ""}
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="country">Country:</Label>
            <Input
              type="text"
              id="country"
              name="country"
              value={address.country}
              onChange={handleInputChange}
              invalid={touched.country && address.country.trim() === ""}
              onBlur={handleBlur}
            ></Input>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddressInput;
