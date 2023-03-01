import React, { useContext } from "react";
import { OrganizationConfigContext } from "../contexts/OrganizationConfigContext";
import { initialOrganizationConfig } from "../types/OrganizationConfigType";
import { Col, Row, Card, Button, Label } from "reactstrap";
import RenderValidationMessages from "./Validation";

const TopSection: React.FC = () => {
  const {
    organizationConfig,
    isDirty,
    isValid,
    setOrganizationConfig,
    setIsValid,
    setTouched,
  } = useContext(OrganizationConfigContext);

  const handleSave = () => {
    // Save organization data
    console.log("Organization saved:", organizationConfig);

    // Mark form as not dirty
    setTouched({});

    // Mark form as valid
    setIsValid(true);
  };

  const handleCancel = () => {
    // Reset organization data
    setOrganizationConfig(initialOrganizationConfig);

    // Mark form as not dirty
    setTouched({});

    // Mark form as invalid
    setIsValid(false);
  };

  return (
    <>
      <Card className="p-4" data-testid="top-section" >
        <Row>
          <Col md={8} className="text-start">
            {!isDirty ? (
              <Label>Welcome! Please complete the form below. </Label>
            ) : (
              <RenderValidationMessages />
            )}
          </Col>
          <Col
            md={4}
            className="text-end align-items-center justify-content-end d-flex "
          >
            {isDirty && (
              <Button onClick={handleCancel} className="mx-2">
                Cancel
              </Button>
            )}
            <Button
              onClick={handleSave}
              disabled={!isValid || !isDirty}
              color="primary"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default TopSection;
