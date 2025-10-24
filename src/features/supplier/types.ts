export type TSupplier = {
  id: string;
  name: string;
  email?: string;
  phoneNumber: string;
  phoneNumberCountryCode: string;
  taxNumber: string;
};

export type TSupplierDTO = {
  id: string;
  name: string;
  email?: string;
  phone_number: string;
  phone_number_country_code: string;
  tax_number: string;
};
