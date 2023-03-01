import React, { useContext } from "react";
import { ContactDetailType, AddressType } from "../types/OrganizationConfigType";
import ContactDetailInput from "./Body/ContactDetailInput";
import AddressInput from "./Body/AddressInput";
import OrganizationConfigInput from "./Body/OrganizationConfigInput";
import { OrganizationConfigContext } from "../contexts/OrganizationConfigContext";
import { Col, Row, Card } from "reactstrap";

function Body() {
  const { organizationConfig, setOrganizationConfig, touched, setTouched } =
    useContext(OrganizationConfigContext);

  const handleOrganizationConfigChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setOrganizationConfig((prevOrganizationConfig) => ({
      ...prevOrganizationConfig,
      [name]: value,
    }));
  };

  const handleContactChange = (contactDetails: ContactDetailType) => {
    setOrganizationConfig((prevOrganizationConfig) => ({
      ...prevOrganizationConfig,
      contactDetails: contactDetails,
    }));
  };

  const handleAddressChange = (address: AddressType) => {
    setOrganizationConfig((prevOrganizationConfig) => ({
      ...prevOrganizationConfig,
      address: address,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  return (
    <>
      <Row data-testid="body">
        <Col sm={12} md={4} lg={4}>
          <Card className="p-3 m-3 h-100">
            <OrganizationConfigInput
              organizationConfig={organizationConfig}
              onInputChange={handleOrganizationConfigChange}
              handleBlur={handleBlur}
              touched={touched}
            />
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Card className="p-3 m-3 h-100">
            <AddressInput
              address={organizationConfig.address}
              onAddressChange={handleAddressChange}
              handleBlur={handleBlur}
              touched={touched}
            />
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Card className="p-3 m-3 h-100">
            <ContactDetailInput
              contactDetails={organizationConfig.contactDetails}
              onContactDetailsChange={handleContactChange}
              handleBlur={handleBlur}
              touched={touched}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Body;
