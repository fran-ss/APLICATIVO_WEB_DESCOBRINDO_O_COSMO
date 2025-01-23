import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import './style.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  Icon?: LucideIcon; // Tornado opcional para evitar erros
};

export function Button({ title, Icon, ...rest }: ButtonProps) {
  return (
    <button {...rest} id="btn">
      {Icon && <Icon />}
      {title}
    </button>
  );
}
