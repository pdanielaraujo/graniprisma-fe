import type { TUser, TUserDTO } from "./types";

export const toUser = (dto: TUserDTO): TUser => ({
  id: dto.id,
  name: dto.name,
  email: dto.email,
  phoneNumber: dto.phone_number,
  phoneNumberCountryCode: dto.phone_number_country_code,
  taxNumber: dto.tax_number,
});

export const toUserDTO = (user: TUser): TUserDTO => ({
  id: user.id,
  name: user.name,
  email: user.email,
  phone_number: user.phoneNumber,
  phone_number_country_code: user.phoneNumberCountryCode,
  tax_number: user.taxNumber,
});
