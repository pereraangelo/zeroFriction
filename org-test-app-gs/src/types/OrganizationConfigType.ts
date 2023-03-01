export interface AddressType {
  streetName: string;
  streetNumber: number;
  postalCode: number;
  city: string;
  country: string;
}

export interface ContactDetailType {
  emailAddress: string;
  telephone: string;
  website: string;
}

export interface OrganizationConfigType {
  migrationMode: boolean;
  code: string;
  description: string;
  bankAccount: string;
  vatAccountNumber: string;
  companyAccountNumber: string;
  contactDetails: ContactDetailType;
  address: AddressType;
}

export const initialOrganizationConfig: OrganizationConfigType = {
  migrationMode: false,
  code: "",
  description: "",
  bankAccount: "",
  vatAccountNumber: "",
  companyAccountNumber: "",
  contactDetails: {
    emailAddress: "",
    telephone: "",
    website: "",
  },
  address: {
    streetName: "",
    streetNumber: 0,
    postalCode: 0,
    city: "",
    country: "",
  },
};
