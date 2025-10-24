export type TCustomer = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  phoneNumberCountryCode: string;
  address: string;
  zipCode: string;
  taxNumber: string;
};

export type TCustomerDTO = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
  phone_number_country_code: string;
  address: string;
  zip_code: string;
  tax_number: string;
};

/*
  THIS IS AN EXAMPLE TYPE FOR CREATING COLUMNS. GO TO /features/customer/utils/columns.ts
*/
export type TPerson = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
