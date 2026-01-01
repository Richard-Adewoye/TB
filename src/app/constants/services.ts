// constants/services.ts
import { Sofa, BookOpen, Users, Book } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const services: Service[] = [
  {
    id: "therapy",
    title: "Therapy",
    description:
      "One-on-one or couples sessions focused on deep emotional repair and clarity.",
    icon: Sofa,
    href: "/services/therapy",
  },
  {
    id: "live-class",
    title: "Live Class",
    description:
      "Live, instructor-led classes with expert guidance and community support.",
    icon: Users,
    href: "/services/live-classes",
  },
  {
    id: "self-paced",
    title: "Self-Paced Class",
    description:
      "Flexible, self-paced programs designed to fit your schedule.",
    icon: BookOpen,
    href: "/services/self-paced",
  },
  {
    id: "books",
    title: "Books",
    description:
      "A curated collection of relationship-focused books for deeper understanding.",
    icon: Book,
    href: "/resources/books",
  },
];
