export const FieldConfig = [
  {
    text: "Full Name",
    id: "fullname",
    labelclass: "label-input",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    text: "Work Email",
    id: "workemail",
    className: "label-input",
    type: "email",
    placeholder: "Enter your work email",
    required: true,
  },
  {
    text: "Company Name",
    id: "companyname",
    className: "label-input",
    type: "text",
    placeholder: "Enter your company name",
    required: true,
  },
  {
    text: "Phone Number",
    id: "phonenumber",
    className: "label-input",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    countryCode: "US", // Add the countryCode property for phone number field
  },
];
export const loginFields = [
  {
    text: "Username",
    id: "username",
    name: "email",
    className: "label-input",
    type: "email",
    placeholder: "Enter your Username",
    required: true,
  },
  {
    text: "Password",
    id: "password",
    name: "password",
    className: "label-input",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
]

export const fieldConfigRequestdemo = [
  { text: "Full Name", id: "full-name", type: "text", placeholder: "Enter your full name", className: "label-input", required: true, },
  { text: "Work Email", id: "workemail", type: "email", placeholder: "Enter your valid work email address", className: "label-input", required: true, },
  { text: "Company Name", id: "companyname", type: "text", placeholder: "Enter your company name ", className: "label-input", required: true, },
  { text: "Phone Number", id: "phonenumber", type: "tel", placeholder: "Enter your phone number", className: "label-input", required: true, },
];

export const fieldConfiregister = [
  { text: "Full Name", name:"fullName", id: "full-name", type: "text", placeholder: "Enter your full name", className: "label-input", required: true, },
  { text: "Username", name:"username", id: "user-name", type: "text", placeholder: "Enter Username", className: "label-input", required: true, },
  { text: "Work Email", name:"email", id: "workemail", type: "email", placeholder: "Enter your valid work email address", className: "label-input", required: true, },
  { text: "Password", name:"password", id: "password", type: "password", placeholder: "Enter your new password here", className: "label-input", required: true, },
  { text: "Confirm Password", id: "confirmpassword", type: "password", placeholder: "Enter your confirm password here", className: "label-input", required: true, },
  { text: "Phone Number", name: "phonenumber", id: "phonenumber", type: "tel", placeholder: "Enter your phone number", className: "label-input", required: true, }

];
export const changepasswordfield =[
  { text: "Old Password", id: "oldPassword", className: "label-input", type: "password", placeholder: "Enter your old password here", required: true },
  { text: "New Password", id: "newPassword", className: "label-input", type: "password", placeholder: "Enter your new password here", required: true },
  { text: "Confirm Password", id: "confirmPassword", className: "label-input", type: "password", placeholder: "Enter your confirm password", required: true }
];