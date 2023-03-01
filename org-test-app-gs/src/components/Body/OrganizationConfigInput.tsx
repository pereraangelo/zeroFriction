import React from "react";
import { OrganizationConfigType } from "../../types/OrganizationConfigType";
import { Col, Label, Form, FormGroup, Input, CardHeader } from "reactstrap";

type Props = {
  organizationConfig: OrganizationConfigType;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: Record<string, boolean>;
};

export const OrganizationConfigInput: React.FC<Props> = ({
  organizationConfig,
  onInputChange,
  handleBlur,
  touched,
}) => {
  return (
    <>
      <CardHeader className="text-center bg-transparent " data-testid="organization-config-input" >
        Organization Details
      </CardHeader>
      <Form>
        <FormGroup>
          <Col sm={12} md={12}>
            <Label for="migration-mode">Migration Mode:</Label>
            <Input
              type="checkbox"
              id="migration-mode"
              checked={organizationConfig.migrationMode}
              onChange={onInputChange}
              name="migrationMode"
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="code">Code:</Label>
            <Input
              type="text"
              id="code"
              value={organizationConfig.code}
              onChange={onInputChange}
              name="code"
              invalid={touched.code && organizationConfig.code.trim() === ""}
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="description">Description:</Label>
            <Input
              type="text"
              id="description"
              value={organizationConfig.description}
              onChange={onInputChange}
              name="description"
              invalid={
                touched.description &&
                organizationConfig.description.trim() === ""
              }
              onBlur={handleBlur}
            ></Input>
          </Col>
          <Col sm={12} md={12}>
            <Label for="bank-account">Bank Account:</Label>
            <Input
              type="text"
              id="bank-account"
              value={organizationConfig.bankAccount}
              onChange={onInputChange}
              name="bankAccount"
              invalid={
                touched.bankAccount &&
                organizationConfig.bankAccount.trim() === ""
              }
              onBlur={handleBlur}
            ></Input>
          </Col>

          <Col sm={12} md={12}>
            <Label for="vat-account-number">VAT Account Number:</Label>
            <Input
              type="text"
              id="vat-account-number"
              value={organizationConfig.vatAccountNumber}
              onChange={onInputChange}
              name="vatAccountNumber"
              invalid={
                touched.vatAccountNumber &&
                organizationConfig.vatAccountNumber.trim() === ""
              }
              onBlur={handleBlur}
            ></Input>
          </Col>

          <Col sm={12} md={12}>
            <Label for="company-account-number"> Company Account Number:</Label>
            <Input
              type="text"
              id="company-account-number"
              value={organizationConfig.companyAccountNumber}
              onChange={onInputChange}
              name="companyAccountNumber"
              onBlur={handleBlur}
              invalid={
                touched.companyAccountNumber &&
                organizationConfig.companyAccountNumber.trim() === ""
              }
            ></Input>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default OrganizationConfigInput;
