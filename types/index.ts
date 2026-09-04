export type UserRole =
  | "Super Admin"
  | "HR Manager"
  | "Payroll Officer"
  | "Manager"
  | "Employee"
  | "Recruiter";

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  branch: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Probation";
  joiningDate: string;
  status: "Active" | "Inactive" | "On Leave";
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
  iconName: string;
  roles: UserRole[];
}
