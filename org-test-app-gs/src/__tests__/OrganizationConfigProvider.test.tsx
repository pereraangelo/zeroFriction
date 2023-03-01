import React from 'react';
import { render, screen ,fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrganizationConfigProvider, OrganizationConfigContext } from "../contexts/OrganizationConfigContext";
import { initialOrganizationConfig } from "../types/OrganizationConfigType";


describe("OrganizationConfigProvider", () => {
  it('should render without crashing', () => {
    render(
      <OrganizationConfigProvider>
        <div>Test</div>
      </OrganizationConfigProvider>
    );
  });

  it('should provide the correct initial context value', () => {
    const TestComponent = () => {
      const context = React.useContext(OrganizationConfigContext);
      expect(context.organizationConfig).toEqual(initialOrganizationConfig);
      expect(typeof context.setOrganizationConfig).toEqual('function');
      expect(context.isDirty).toEqual(false);
      expect(typeof context.setIsDirty).toEqual('function');
      expect(context.isValid).toEqual(false);
      expect(typeof context.setIsValid).toEqual('function');
      expect(context.touched).toEqual({});
      expect(typeof context.setTouched).toEqual('function');
      return null;
    };

    render(
      <OrganizationConfigProvider>
        <TestComponent />
      </OrganizationConfigProvider>
    );
  });

  it('should update the isDirty state when setTouched is called', () => {
    const TestComponent = () => {
      const { isDirty, setIsDirty, touched, setTouched } = React.useContext(OrganizationConfigContext);

      const handleClick = () => {
        setTouched({ ...touched, name: true });
      };

      return (
        <div>
          <p>{isDirty ? 'Dirty' : 'Clean'}</p>
          <button onClick={handleClick}>Touch Name Field</button>
        </div>
      );
    };

    const { getByText } = render(
      <OrganizationConfigProvider>
        <TestComponent />
      </OrganizationConfigProvider>
    );

    expect(getByText('Clean')).toBeInTheDocument();
    fireEvent.click(getByText('Touch Name Field'));
    expect(getByText('Dirty')).toBeInTheDocument();
  });
  

});
