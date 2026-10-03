// Team roster for the Meet the Team page (src/pages/team.astro).
// To update a person, edit their entry here. Photos live in
// src/assets/images/team/Leads/ and src/assets/images/team/Mentors/.
// Leave `name` out to show a role as "Position open".

export interface TeamMember {
  name?: string;
  role: string;
  detail?: string;
  image?: string;
}

const lead = (file: string) => `~/assets/images/team/Leads/${file}`;
const mentor = (file: string) => `~/assets/images/team/Mentors/${file}`;

export const captains: TeamMember[] = [
  { name: 'Ryan Trammell', role: 'Robot Captain', image: lead('Ryan-Trammell.png') },
  { name: 'Mary Carroll', role: 'MTR Captain', detail: 'More Than Robots', image: lead('Mary-Carroll.png') },
];

export const robotLeads: TeamMember[] = [
  { name: 'Sophia Skowyra', role: 'Fabrication', image: lead('Sophia-Skowyra.png') },
  { name: 'Rob Higgins', role: 'Design', image: lead('Rob-Higgins.png') },
  { name: 'Celia Pursifull', role: 'Controls', image: lead('Celia-Pursifull.png') },
  { name: 'Isaac Martin', role: 'Programming', image: lead('Isaac-Martin.png') },
  {
    name: 'Dantin Naidu',
    role: 'LAD/SS',
    detail: 'Logic and Drive / Scouting and Strategy',
    image: lead('Dantin-Naidu.png'),
  },
  { name: 'Cecelia Langenberg', role: 'Safety', image: lead('Cecelia-Langenberg.png') },
];

export const mtrLeads: TeamMember[] = [
  { name: 'Natalie Schmidt', role: 'Marketing', image: lead('Natalie-Schmidt.png') },
  { role: 'Graphic Design', image: lead('Graphic-Design.png') },
  { role: 'Outreach', image: lead('Outreach.png') },
  { role: 'Fundraising', image: lead('Fundraising.png') },
];

export const mentors: TeamMember[] = [
  { name: 'Austin Hillebrandt', role: 'Mentor', image: mentor('Austin-Hillebrandt.png') },
  { name: 'Dennis Fuglsang', role: 'Mentor', image: mentor('Dennis-Fuglsang.png') },
  { name: 'Derek Ward', role: 'Mentor', image: mentor('Derek-Ward.png') },
  { name: 'Katie Rollins', role: 'Mentor', image: mentor('Katie-Rollins.png') },
  { name: 'Michael Fuglsang', role: 'Mentor', image: mentor('Michael-Fuglsang.png') },
  { name: 'Sarah Walsh', role: 'Mentor', image: mentor('Sarah-Walsh.png') },
  { name: 'Tristan Hellmuth', role: 'Mentor', image: mentor('Tristan-Hellmuth.png') },
];
