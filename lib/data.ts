export const programs = [
  ["mental-health", "Mental Health & Wellness", "Counselling, psychiatry access, awareness camps, and crisis support for students and communities."],
  ["education", "Education", "School support, learning materials, remedial classes, and teacher/community engagement."],
  ["scholarships", "Scholarships", "Need-based scholarships that protect continuity for promising students."],
  ["student-development", "Student Development", "Mentoring, leadership, life skills, career readiness, and peer learning."],
  ["healthcare", "Healthcare", "Preventive health camps, primary care referrals, medicines, and wellness outreach."],
  ["social-welfare", "Social Welfare", "Family support, inclusion initiatives, livelihood linkages, and dignity services."],
  ["research-innovation", "Research & Innovation", "Applied research, pilots, knowledge products, and innovation grants."],
  ["skill-development", "Skill Development", "Vocational training, digital skills, employability, and micro-enterprise readiness."],
  ["rural-development", "Rural Development", "Village-level education, health, water, sanitation, and community infrastructure projects."],
  ["disaster-relief", "Disaster Relief", "Emergency response, relief kits, rehabilitation support, and resilience planning."],
] as const;

export const programServices: Record<string, string[]> = {
  "mental-health": [
    "Psychological Counselling",
    "Student Counselling",
    "Career Counselling",
    "Family Counselling",
    "Psychiatric Consultation",
    "Therapy Services",
    "Anger Management",
    "Depression Support",
    "Anxiety Management",
    "Suicide Prevention",
    "Crisis Intervention",
    "Emotional Support Helpline",
    "Community Mental Health",
    "Mental Health Camps",
    "School Mental Wellness Program",
  ],
  education: [
    "Schools",
    "Colleges",
    "Universities",
    "Digital Learning",
    "Coaching Centres",
    "Vocational Education",
    "Hostels",
    "Educational Research",
    "Teacher Training",
  ],
  scholarships: [
    "Merit Scholarships",
    "Need-based Scholarships",
    "School Fee Assistance",
    "Higher Education Support",
    "Book Bank",
    "Uniform Support",
    "Laptop Assistance",
    "Educational Loans",
  ],
  healthcare: [
    "Medical Camps",
    "Health Centres",
    "Hospitals",
    "Mobile Clinics",
    "Diagnostic Centres",
    "Rehabilitation",
    "Preventive Healthcare",
    "Medicine Distribution",
    "Free Treatment",
  ],
  "social-welfare": [
    "Food Distribution",
    "Clothing Distribution",
    "Shelter Support",
    "Elderly Care",
    "Widow Support",
    "Orphan Support",
    "Disability Support",
    "Monthly Financial Assistance",
  ],
  "skill-development": [
    "Computer Training",
    "Spoken English",
    "Entrepreneurship",
    "Employment Assistance",
    "Technical Training",
    "Women's Skill Development",
    "Rural Skill Centres",
  ],
  "rural-development": [
    "Drinking Water",
    "Sanitation",
    "Agriculture",
    "Dairy Development",
    "Animal Husbandry",
    "Rural Schools",
    "Rural Healthcare",
    "Community Development",
  ],
  "disaster-relief": [
    "Flood Relief",
    "Earthquake Relief",
    "Pandemic Response",
    "Emergency Medical Support",
    "Relief Camps",
    "Food Assistance",
  ],
};

export const events = [
  ["12 Jul", "Student Wellness Workshop", "Delhi", "Mental Health Camps"],
  ["26 Jul", "Scholarship Orientation", "Online", "Webinars"],
  ["18 Aug", "Community Health Camp", "Lucknow", "Medical Camps"],
];

export const news = [
  ["2026-06-10", "IRODOV opens applications for annual scholarship cohort"],
  ["2026-05-22", "Mental wellness helpline expands counselling hours"],
  ["2026-04-30", "Rural STEM learning pilot reaches new partner schools"],
];

export const trustees = [
  ["Dr. Ananya Rao", "Chairperson", "Education leader with two decades of institution-building experience."],
  ["Mr. Vivek Sharma", "Managing Trustee", "Social sector strategist focused on transparent program delivery."],
  ["Ms. Nandita Sen", "Trustee", "Mental health advocate and community partnership specialist."],
  ["Prof. Arvind Menon", "Trustee", "Research mentor supporting science education and innovation."],
];

export const docs = [
  ["Trust Deed", "2024", "Legal"],
  ["Registration Certificate", "2024", "Compliance"],
  ["PAN Card", "2024", "Tax"],
  ["12A Certificate", "2024", "Tax"],
  ["80G Certificate", "2024", "Tax"],
  ["Audit Report 2023", "2023", "Finance"],
  ["Audit Report 2022", "2022", "Finance"],
  ["Audit Report 2021", "2021", "Finance"],
  ["Financial Statement 2023", "2023", "Finance"],
  ["Financial Statement 2022", "2022", "Finance"],
  ["Utilization Report 2023", "2023", "Impact"],
  ["Board Meeting Minutes", "2024", "Governance"],
];

export const placeholder = (text: string, size = "800x520") =>
  `https://placehold.co/${size}/1E5FA8/FFFFFF/png?text=${encodeURIComponent(text)}`;
