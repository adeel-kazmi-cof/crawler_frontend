import { adduser ,crossicon,faplusicon,faminusicon,fileupploed,btnplus,expirtime,Video,copyicon,ringcopy,readcopy,textquestion,mcqQuestion} from "../../helper/Icons/Icon"
export const postjobfiled = [
  { id: "JobType", text: "Job Type", options: [
      { value: "a", label: "Select the job type" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "companyJobType", text: "Company", options: [
      { value: "a", label: "Select company name or enter" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    // Add other form field data objects here
    { id: "InterviewTemplate", text: "Interview Template", options: [
      { value: "a", label: "Default" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "DesignatedUser", text: "Designated Follow-up User", options: [
      { value: "a", label: "Adam Russell" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "industry", text: "Industry", options: [
      { value: "a", label: "Select the industry" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "WorkAuthorization", text: "Work Authorization", options: [
      { value: "a", label: "Select your work authorization status" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "city", text: "City", options: [
      { value: "a", label: "Select city" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "State", text: "State", options: [
      { value: "a", label: "Select state" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "Country", text: "Country", options: [
      { value: "a", label: "Select country" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "ZipCode", text: "Zip Code",type:"text" ,placeholder:"Enter ZIP code"  },
    { id: "JobExpirationDate", text: "Job Expiration Date",type:"date" ,placeholder:"Select job expiration date"  },
   
    { id: "WorkspaceType", text: "Workspace Type", options: [
      { value: "a", label: "Select workspace type" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
    { id: "payType", text: "Pay Type", options: [
      { value: "a", label: "Select pay type" },
      { value: "b", label: "Option B" },
      { value: "c", label: "Option C" },
    ] },
];




  // share candidate

  export const questionSettingsfiled = [
    { icon: Video, text: 'Question 1 - Video Response', question: 'video' },
    { icon: ringcopy, text: 'Question 2 - Audio Response', question: 'audio' },
    { icon: mcqQuestion, text: 'Question 3 - MCQ Response', question: 'mcq' },
    { icon: textquestion, text: 'Question 4 - Text Response', question: 'text' },
    { icon: btnplus, text: 'Question 5 - File Upload Response', question: 'fileUpload' }
  ];


  // CandidateResponses filed

  