import {
  Brain,
  Code2,
  Database,
  type LucideIcon,
} from "lucide-react";

export type ProjectBannerId =
  | "rag-resume"
  | "neuro-rag"
  | "mri-ct"
  | "readmission"
  | "logistics"
  | "counselling"
  | "swiggy"
  | "music";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  icon: LucideIcon;
  bannerId: ProjectBannerId;
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "RAG-Based Resume Analyzer",
    description:
      "AI-powered resume analysis platform using Retrieval-Augmented Generation, semantic search, and NLP-based intelligent recommendations.",
    tags: ["Python", "NLP", "RAG", "Vector Embeddings"],
    features: ["Resume Parsing", "Semantic Search", "Skill Analysis", "Intelligent Recommendations"],
    icon: Brain,
    bannerId: "rag-resume",
    github: "https://github.com/vinonachi/Resume-Analyzer",
    featured: true,
  },
  {
    title: "Neuro RAG — MRI Intelligence",
    description:
      "Retrieval-augmented generation system for neuroimaging workflows, combining semantic search with clinical MRI context.",
    tags: ["RAG", "MRI", "LLM", "Python"],
    features: ["Semantic Retrieval", "Medical Imaging", "Context-Aware QA"],
    icon: Brain,
    bannerId: "neuro-rag",
    github: "https://github.com/vinonachi/NeuroRAG_MRI",
    featured: true,
  },
  {
    title: "MRI-to-CT Image Translation using CycleGAN",
    description:
      "Research-based healthcare AI project focused on MRI-to-CT synthetic image generation for tumor-focused medical imaging applications.",
    tags: ["CycleGAN", "GANs", "Healthcare AI"],
    features: ["Medical Image Synthesis", "Tumor-Focused Translation", "Deep Learning Architecture"],
    icon: Database,
    bannerId: "mri-ct",
    github: "https://github.com/vinonachi/MRI-to-synthetic-CT-using-GAN",
    featured: true,
  },
  {
    title: "Hospital Readmission Prediction",
    description:
      "Machine Learning system developed to predict hospital patient readmission using healthcare datasets with explainable AI insights.",
    tags: ["XGBoost", "XAI", "Python", "Healthcare"],
    features: ["Predictive Analytics", "Feature Engineering", "Model Interpretability"],
    icon: Database,
    bannerId: "readmission",
    live: "https://www.kaggle.com/code/vinothini2005/patient-readmission-using-xgboost-and-xai",
  },
  {
    title: "Logistics Services Website",
    description:
      "Responsive logistics platform with structured service listings and optimized UI design.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive Layout", "Service Pages", "Modern UI"],
    icon: Code2,
    bannerId: "logistics",
    github: "https://github.com/vinonachi/logistic_services",
  },
  {
    title: "Counselling Website",
    description:
      "Mental wellness platform with calming user interface and structured informational pages.",
    tags: ["HTML", "CSS", "UX"],
    features: ["Accessible Design", "Calming UI", "Information Architecture"],
    icon: Code2,
    bannerId: "counselling",
  },
  {
    title: "Swiggy Clone App",
    description:
      "Frontend-based food delivery application clone featuring restaurant listings and cart functionality.",
    tags: ["Java", "HTML", "CSS"],
    features: ["Restaurant Listings", "Cart Flow", "Responsive UI"],
    icon: Code2,
    bannerId: "swiggy",
  },
  {
    title: "Mobile Music App",
    description:
      "Music player application with playlist management and offline functionality.",
    tags: ["Mobile App", "UI Design"],
    features: ["Playlists", "Offline Mode", "Player Controls"],
    icon: Code2,
    bannerId: "music",
    github: "https://github.com/vinonachi/Music-app",
  },
];

export const publication = {
  title:
    "CycleGAN-Based MRI-to-CT Image Synthesis for Tumor-Centric Medical Image Translation",
  description:
    "Published research chapter exploring CycleGAN-based synthetic CT generation from MRI scans, with a focus on tumor-centric medical image translation for clinical imaging workflows.",
  link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003674825-17/cyclegan-based-mri-ct-image-synthesis-tumor-centric-medical-image-translation-poornima-devi-vinothini-priyadharshini",
  tags: ["Healthcare AI", "CycleGAN", "Medical Imaging", "Research Publication"],
  publisher: "Taylor & Francis",
};

export type Internship = {
  title: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
  certificate?: string;
};

export const internships: Internship[] = [
  {
    title: "Web Development Intern",
    organization: "Basis Cloud Solutions",
    duration: "May 2024 – July 2024",
    description:
      "Developed a responsive Logistics Services Website with modern frontend design, service management pages, and structured UI implementation.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    certificate: "/certificates/internship_BCS.png",
  },
  {
    title: "Web Development Intern",
    organization: "Sri Ramachandra University",
    duration: "May 2023 – July 2023",
    description:
      "Designed and developed a Counselling Website focused on accessibility, user-friendly navigation, and a calming UI experience.",
    skills: ["Frontend Development", "UI Design", "Responsive Web Design"],
  },
  {
    title: "Machine Learning Intern",
    organization: "Geosensing and Imaging Consultancy",
    duration: "Internship Completed",
    description:
      "Applied machine learning and data analytics techniques to research-oriented imaging and consultancy workflows.",
    skills: ["Machine Learning", "Data Analytics", "Python", "Research"],
    certificate: "/certificates/ml_internship.png",
  },
];

export type CertificateItem = {
  title: string;
  issuer: string;
  image: string;
};

export const certificates: CertificateItem[] = [
  { title: "AWS Cloud", issuer: "Amazon Web Services", image: "/certificates/AWS_Cloud.jpg" },
  { title: "AWS AI", issuer: "Amazon Web Services", image: "/certificates/AWS_AI.png" },
  { title: "Google Generative AI", issuer: "Google", image: "/certificates/google_genAI.png" },
  { title: "IBM AI", issuer: "IBM", image: "/certificates/IBM.png" },
  { title: "Machine Learning Basics", issuer: "Professional Certification", image: "/certificates/basic_of_ml.png" },
  { title: "Python for Data Science", issuer: "IBM / Coursera", image: "/certificates/python_for_DS.png" },
  { title: "Scaler Python Programming", issuer: "Scaler Academy", image: "/certificates/scaler.png" },
  { title: "Research Day Achievement", issuer: "SRET", image: "/certificates/research_day_SRET.jpg" },
  { title: "Web Design Certification", issuer: "Professional Certification", image: "/certificates/webdesign.jpg" },
];

export type ParticipationEvent = {
  title: string;
  tag: string;
  certificate: string;
};

export const participationEvents: ParticipationEvent[] = [
  {
    title: "Hackathon Participation",
    tag: "Hackathon",
    certificate: "/certificates/hackerthon.jpg",
  },
  {
    title: "Research Day Participation",
    tag: "Research",
    certificate: "/certificates/research_day_SRET.jpg",
  },
  {
    title: "Science Exhibition Participation",
    tag: "Science Exhibition",
    certificate: "/certificates/expo.png",
  },
  {
    title: "Industry Conclave Participation",
    tag: "Conclave",
    certificate: "/certificates/participation_3.png",
  },
  {
    title: "Volunteer Participation",
    tag: "Volunteer",
    certificate: "/certificates/volunteer.png",
  },
];

export type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  stat?: { value: number; label: string; suffix?: string };
  certificate?: string;
  variant: "emerald" | "amber" | "cyan";
};

export const achievements: Achievement[] = [
  {
    title: "First Prize",
    subtitle: "Conference Paper Presentation",
    description:
      "Awarded First Prize for presenting a research paper during an academic conference hosted by the college.",
    stat: { value: 1, label: "First Prize", suffix: "st" },
    variant: "emerald",
  },
  {
    title: "3rd Prize",
    subtitle: "Research Day 2025",
    description:
      'Awarded for presenting "MRI-to-CT Image Synthesis for Tumor-Focused Image Translation Using GAN".',
    stat: { value: 3, label: "Research Day Rank", suffix: "rd" },
    certificate: "/certificates/research_day_SRET.jpg",
    variant: "amber",
  },
  {
    title: "Research Publication",
    subtitle: "Taylor & Francis",
    description: publication.title,
    variant: "cyan",
  },
];

export const contact = {
  email: "vinonachi21@gmail.com",
  phone: "9500817691",
  linkedin: "https://www.linkedin.com/in/vinothini-n-6ba9ab273",
  github: "https://github.com/vinonachi",
  location: "Chennai, Tamil Nadu, India",
};

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "Java", level: 3 },
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 5 },
      { name: "Deep Learning", level: 4 },
      { name: "NLP", level: 4 },
      { name: "RAG Systems", level: 4 },
      { name: "GANs", level: 4 },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Pandas", level: 5 },
      { name: "NumPy", level: 4 },
      { name: "Data Visualization", level: 4 },
      { name: "Feature Engineering", level: 4 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Responsive Web Design", level: 5 },
      { name: "Frontend Development", level: 4 },
      { name: "UI/UX Design", level: 4 },
    ],
  },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "RAG Systems",
  "NLP",
  "Healthcare AI",
  "Frontend Web Development",
  "Data Analytics",
];
