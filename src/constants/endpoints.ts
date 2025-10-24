// API ENDPOINTS CONST
// example:

// export const API_ENDPOINTS = {
//   employees: {
//     list: "/employees",
//     detail: (id: string) => `/employees/${id}`,
//     create: "/employees",
//   },
//   projects: {
//     list: "/projects",
//     detail: (id: string) => `/projects/${id}`,
//   },
// } as const;

// Usage

// import { http } from "@/shared/lib/httpClient";
// import { API_ENDPOINTS } from "@/shared/api/endpoints";

// export const EmployeesApi = {
//   list: () => http(API_ENDPOINTS.employees.list),
//   get: (id: string) => http(API_ENDPOINTS.employees.detail(id)),
// };
