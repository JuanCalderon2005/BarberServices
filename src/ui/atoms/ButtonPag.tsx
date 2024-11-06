interface ButtonPagProps {
    onClick: (e: React.FormEvent) => void;
    label: string;
}

export default function ButtonPag({ onClick, label }: ButtonPagProps) {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}
