import { motion } from 'framer-motion';

export default function Overline({ type: Type, content, className }) {
  return (
    <Type
      className={`uppercase text-xs font-semibold tracking-px3 ${
        className ? className : null
      }`}
    >
      {content}
    </Type>
  );
}
