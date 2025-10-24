import type { TCustomer, TCustomerDTO } from "./types";

export const toUser = (dto: TCustomerDTO): TCustomer => ({
  id: dto.id,
  firstName: dto.first_name,
  lastName: dto.last_name,
  email: dto.email,
  phoneNumber: dto.phone_number,
  phoneNumberCountryCode: dto.phone_number_country_code,
  address: dto.address,
  zipCode: dto.zip_code,
  taxNumber: dto.tax_number,
});

export const toUserDTO = (customer: TCustomer): TCustomerDTO => ({
  id: customer.id,
  first_name: customer.firstName,
  last_name: customer.lastName,
  email: customer.email,
  phone_number: customer.phoneNumber,
  phone_number_country_code: customer.phoneNumberCountryCode,
  address: customer.address,
  zip_code: customer.zipCode,
  tax_number: customer.taxNumber,
});
