import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function IconBox({
  icon: Icon,
  size = 20,
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-[#A68249]/20 p-3 text-[#A68249] ${className}`}
    >
      <Icon size={size} />
    </div>
  );
}
