export const Input = ({ label, className = "", ...props }: any) => (
  <div className="flex flex-col gap-2 w-full text-left">
    <label className="text-xs font-black text-slate-400 uppercase ml-2">{label}</label>
    <input
      {...props}
      className={`w-full p-4 bg-slate-100 rounded-2xl outline-none border border-transparent focus:border-pink-400 focus:ring-2 focus:ring-pink-500 transition ${className}`}
    />
  </div>
)