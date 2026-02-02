// Type declarations for lucide-react icons

declare module 'lucide-react' {
  export interface LucideIconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  }

  export const Facebook: React.FC<LucideIconProps>;
  export const Twitter: React.FC<LucideIconProps>;
  export const Linkedin: React.FC<LucideIconProps>;
  export const Instagram: React.FC<LucideIconProps>;
  export const Menu: React.FC<LucideIconProps>;
  export const X: React.FC<LucideIconProps>;
}