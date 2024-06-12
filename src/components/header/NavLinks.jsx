import { Profile, dashboard, Jobs, Company, Candidates, Interviews, MeetingRequests, Templates, AccountSettings, ChangePassword, Logout } from "../../helper/Icons/Icon";

const NavLinks = [
  { url: '/Profile', id: 't-1', title: 'Profile', icon: Profile },
  { url: '/dashboard', id: 't-2', title: 'Dashboard', icon: dashboard },
  { url: '/accounts', id: 't-3', title: ' Accounts', icon: Company },
  { url: '/users', id: 't-3', title: ' Users', icon: Candidates },
  /*
  { url: '/jobs', id: 't-3', title: 'Jobs', icon: Jobs },
  { url: '/companies', id: 't-5', title: ' Company', icon: Candidates },
  { url: '/candidates', id: 't-4', title: 'Candidates', icon: Company },

  { url: '/interviews', id: 't-6', title: 'Interviews', icon: Interviews },
  { url: '/meeting-requests', id: 't-7', title: 'Meeting Requests', icon: MeetingRequests },
  { url: '/interview-template', id: 't-8', title: 'Templates', icon: Templates },
   */
  { url: '/users', id: 't-9', title: 'Account Settings', icon: AccountSettings },
  { url: '/change-password', id: 't-10', title: 'Change Password', icon: ChangePassword },
  { url: '/logout', id: 't-11', title: 'Logout', icon: Logout },
];

export default NavLinks;
