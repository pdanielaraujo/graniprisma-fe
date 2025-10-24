import type { TSupplier, TSupplierDTO } from "./types";

export const toUser = (dto: TSupplierDTO): TSupplier => ({
  id: dto.id,
  name: dto.name,
  email: dto.email,
  phoneNumber: dto.phone_number,
  phoneNumberCountryCode: dto.phone_number_country_code,
  taxNumber: dto.tax_number,
});

export const toUserDTO = (supplier: TSupplier): TSupplierDTO => ({
  id: supplier.id,
  name: supplier.name,
  email: supplier.email,
  phone_number: supplier.phoneNumber,
  phone_number_country_code: supplier.phoneNumberCountryCode,
  tax_number: supplier.taxNumber,
});
