import React, { ChangeEvent } from "react";
import { ContactDetailType } from "../../types/OrganizationConfigType";
import { Col, Label, Form, FormGroup, Input, CardHeader } from "reactstrap";

interface Props {
  contactDetails: ContactDetailType;
  onContactDetailsChange: (contactDetails: ContactDetailType) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: Record<string, boolean>;
}

const ContactDetailInput: React.FC<Props> = ({
  contactDetails,
  onContactDetailsChange,
  handleBlur,
  touched,
}) => {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onContactDetailsChange({
      ...contactDetails,
      [name]: value,
    });
  };

  return (
    <div data-testid="contact-detail-input">
      <CardHeader className="text-center bg-transparent mb-2 ">
        Contact Details
      </CardHeader>
      <Form>
        <FormGroup>
          <Col sm={12} md={12}>
            <Label for="emailAddress">Email address:</Label>
            <Input
              type="email"
              id="emailAddress"
              value={contactDetails.emailAddress}
              onChange={handleInputChange}
              name="emailAddress"
              invalid={
                touched.emailAddress &&
                (contactDetails.emailAddress.trim() === "" ||
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    contactDetails.emailAddress.trim()
                  ))
              }
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="telephone">Telephone:</Label>
            <Input
              type="tel"
              id="telephone"
              value={contactDetails.telephone}
              onChange={handleInputChange}
              name="telephone"
              invalid={
                touched.telephone &&
                (contactDetails.telephone.trim() === "" ||
                  !/^\d+$/.test(contactDetails.telephone.trim()))
              }
              onBlur={handleBlur}
              maxLength={11}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="website">Website:</Label>
            <Input
              type="url"
              id="website"
              value={contactDetails.website}
              onChange={handleInputChange}
              name="website"
              invalid={touched.website && contactDetails.website.trim() === ""}
              onBlur={handleBlur}
            ></Input>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ContactDetailInput;
