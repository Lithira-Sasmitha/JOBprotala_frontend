import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus
} from "lucide-react";

// Job Seeker Features
export const JobSeekerFetures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "Automatically match you with jobs that suit your skills and preferences.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create a professional resume using our guided builder tools.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Chat directly with employers and get updates on your applications.",
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description: "Take tests to validate your skills and increase your job chances.",
  },
];

// Employer Features
export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Access a large database of qualified job seekers instantly.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track job post performance and hiring trends with real-time data.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description: "Ensure quality hiring with pre-verified candidate profiles.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description: "Accelerate your recruitment process with powerful tools.",
  },
];

// Navigation Menu for Employer Panel
export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

// Job Categories (15 items)
export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Information Technology", label: "Information Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Education", label: "Education" },
  { value: "Finance", label: "Finance" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Construction", label: "Construction" },
  { value: "Legal", label: "Legal" },
  { value: "Customer Service", label: "Customer Service" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Transportation", label: "Transportation" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Real Estate", label: "Real Estate" },
];

// Job Types (5 items)
export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
];
