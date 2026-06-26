export type MenuItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = MenuItem & {
  children?: MenuItem[];
};

export type RevealVariant = "dark" | "light" | "blue" | "teal" | "navy";

export const serviceMenuItems: MenuItem[] = [
  { label: "X-Ray", href: "/services/x-ray" },
  { label: "Ultrasound", href: "#services" },
  { label: "Open MRI", href: "#mri-overview" },
  { label: "3D Mammography", href: "#services" },
  { label: "DEXA", href: "#services" },
  { label: "CT Scans", href: "#services" },
  { label: "3D Breast Ultrasound", href: "#services" },
];

export const preventiveMenuItems: MenuItem[] = [
  { label: "Lung Cancer Screening", href: "#services" },
  { label: "Cardiac Scoring", href: "#services" },
  { label: "Whole-Body MRI", href: "#whole-body" },
];

export const navItems: NavItem[] = [
  { label: "About", href: "#trust" },
  { label: "Services", href: "#services", children: serviceMenuItems },
  {
    label: "Preventive Screening Tests",
    href: "#mri-reveal",
    children: preventiveMenuItems,
  },
  { label: "Whole Body MRI", href: "#whole-body" },
  { label: "Appointment", href: "#contact" },
  { label: "Make Payment", href: "#contact" },
  { label: "Contact us", href: "#contact" },
];

export const mriFeatureCards = [
  {
    title: "Open MRI",
    eyebrow: "Comfort-first imaging",
    description:
      "High-field open MRI imaging in a more accessible, less claustrophobic setting for patients with anxiety, size concerns, or mobility limitations.",
    accent: "#46d7c8",
  },
  {
    title: "3D Breast Imaging",
    eyebrow: "Dense breast clarity",
    description:
      "3D mammography paired with automated 3D breast ultrasound for detailed evaluation and stronger screening confidence.",
    accent: "#7faecc",
  },
  {
    title: "CT Scans",
    eyebrow: "Fast diagnostic answers",
    description:
      "Advanced CT capability for lung screening, cardiac calcium scoring, and urgent diagnostic studies with STAT reporting available.",
    accent: "#f4f7f6",
  },
];

export const trustBlocks = [
  {
    title: "Accredited Clinical Standards",
    description:
      "ACR-accredited imaging protocols, quality assurance, and board-certified radiologists support every exam with consistent clinical rigor.",
  },
  {
    title: "Comprehensive Imaging In One Location",
    description:
      "Open MRI, CT, 3D mammography, 3D breast ultrasound, DEXA, X-Ray, Ultrasound, and Whole-Body MRI are coordinated through one independent center.",
  },
  {
    title: "Built Around Patient Access",
    description:
      "Same-day reporting, STAT reads by request, walk-in availability, private parking, and extended Wednesday hours keep care moving.",
  },
];

export const timelinePoints = [
  "Brain, spine, chest, abdomen, pelvis, and major organ systems",
  "No ionizing radiation and no routine contrast agents",
  "Reviewed by board-certified radiologists and shared with your physician",
];

export const revealItems: { text: string; variant: RevealVariant }[] = [
  { text: "Early-stage cancers and tumors", variant: "dark" },
  { text: "Neurological abnormalities", variant: "light" },
  { text: "Cardiovascular and vascular changes", variant: "navy" },
  { text: "Organ health abnormalities", variant: "light" },
  { text: "Spinal and musculoskeletal conditions", variant: "blue" },
  { text: "Inflammatory changes", variant: "teal" },
  { text: "Liver and kidney irregularities", variant: "light" },
  { text: "Pancreatic and abdominal findings", variant: "blue" },
  { text: "Joint and cartilage degeneration", variant: "teal" },
  { text: "Hidden structural abnormalities", variant: "dark" },
  { text: "Chronic disease indicators", variant: "navy" },
  { text: "Preventive whole-body insights", variant: "light" },
];

export const radiologyServices = [
  {
    title: "3D Mammography",
    description:
      "Tomosynthesis-based breast imaging for greater sensitivity, fewer false positives, and more confident screening for dense tissue.",
  },
  {
    title: "3D Breast Ultrasound",
    description:
      "Automated whole-breast ultrasound with fast acquisition and detailed supplemental screening for dense or heterogeneous breast tissue.",
  },
  {
    title: "CT Scans",
    description:
      "Diagnostic CT, low-dose lung cancer screening, cardiac calcium scoring, and total body CT with urgent reporting available.",
  },
  {
    title: "Open MRI",
    description:
      "High-field open MRI for clinical-grade imaging with improved patient comfort, accessibility, and anxiety-sensitive positioning.",
  },
  {
    title: "Ultrasound",
    description:
      "Doppler-capable ultrasound for abdominal, pelvic, vascular, soft-tissue, and musculoskeletal evaluations.",
  },
  {
    title: "X-Ray",
    description:
      "Computerized digital radiography for chest, bone, spine, and abdominal studies with prompt physician access to results.",
  },
  {
    title: "DEXA Scan",
    description:
      "Dual-energy X-ray absorptiometry for bone mineral density assessment at the lumbar spine and hip.",
  },
];

export const testimonials = [
  {
    name: "Jessica Smith",
    role: "Open MRI Patient",
    avatar: "/patient-avatar.jpg",
    text: "The team explained every step and helped ease my anxiety. The open MRI felt calm and comfortable, and my doctor received the results quickly.",
  },
  {
    name: "Maria Johnson",
    role: "CT Scan Patient",
    avatar: "/patient-avatar.jpg",
    text: "I arrived nervous for my CT scan, but the staff made the visit smooth from check-in to completion. The care felt personal and efficient.",
  },
  {
    name: "Alan Peterson",
    role: "Preventive Screening Patient",
    avatar: "/patient-avatar.jpg",
    text: "Harding felt more advanced than a typical imaging center. Scheduling was simple, parking was easy, and the appointment stayed right on time.",
  },
];

export const towns = [
  "Denville NJ",
  "Morristown NJ",
  "Bernardsville NJ",
  "Morris County NJ",
  "Chatham NJ",
  "Morris Plains NJ",
  "Randolph NJ",
  "Parsippany NJ",
  "Warren NJ",
  "Bedminster NJ",
  "Summit NJ",
  "Bridgewater NJ",
  "Hanover NJ",
  "Chester NJ",
  "Mendham NJ",
  "Madison NJ",
  "Florham Park NJ",
  "Cedar Knolls NJ",
  "Berkeley Heights NJ",
];
