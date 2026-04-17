interface Props { text: string; variant?: 'primary' | 'outline'; className?: string }
export const Button = ({ text, variant = 'primary', className = "" }: Props) => (
  <button className={`px-8 py-3 rounded-full font-bold transition-all active:scale-95 ${
    variant === 'primary' ? "bg-pink-600 text-white hover:bg-pink-700" : "border-2 border-pink-600 text-pink-600 hover:bg-pink-50"
  } ${className}`}>
    {text}
  </button>
)