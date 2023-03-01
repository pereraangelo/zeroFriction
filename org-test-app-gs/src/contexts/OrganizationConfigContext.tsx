import React, { createContext, useEffect, useState, useMemo } from "react";
import {
  OrganizationConfigType,
  initialOrganizationConfig,
} from "../types/OrganizationConfigType";

interface OrganizationConfigContextType {
  organizationConfig: OrganizationConfigType;
  setOrganizationConfig: React.Dispatch<
    React.SetStateAction<OrganizationConfigType>
  >;
  isDirty: boolean;
  setIsDirty: React.Dispatch<React.SetStateAction<boolean>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  touched: Record<string, boolean>;
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

interface OrganizationConfigProviderProps {
  children: React.ReactNode;
}

export const OrganizationConfigContext =
  createContext<OrganizationConfigContextType>({
    organizationConfig: initialOrganizationConfig,
    setOrganizationConfig: () => {},
    isDirty: false,
    setIsDirty: () => {},
    isValid: false,
    setIsValid: () => {},
    touched: {},
    setTouched: () => {},
  });

export const OrganizationConfigProvider: React.FC<
  OrganizationConfigProviderProps
> = ({ children }) => {
  const [organizationConfig, setOrganizationConfig] =
    useState<OrganizationConfigType>(initialOrganizationConfig);
  const [isDirty, setIsDirty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const contextValue = useMemo(
    () => ({
      organizationConfig,
      setOrganizationConfig,
      isDirty,
      setIsDirty,
      isValid,
      setIsValid,
      touched,
      setTouched,
    }),
    [organizationConfig, isDirty, isValid, touched]
  );

useEffect(() => {
  setIsDirty(Object.values(touched).some(Boolean));
}, [touched]);


  return (
    <OrganizationConfigContext.Provider value={contextValue}>
      {children}
    </OrganizationConfigContext.Provider>
  );
};
