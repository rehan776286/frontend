import { useRef, useEffect } from "react";

const FloatingInput = ({
  id,
  label,
  type = "text",
  defaultValue = "",
  onChange,
  required = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const label = labelRef.current;

    const updateLabel = () => {
      if (input.value.trim()) {
        console.log("chalega");
        label.classList.add("!top-2", "!text-xs", "!text-blue-600");
      } else {
        console.log("nahi chalae ga");
        label.classList.remove("!top-2", "!text-xs", "!text-blue-600");
      }
    };

    updateLabel(); // On mount (for pre-filled forms)
    input.addEventListener("input", updateLabel);

    return () => input.removeEventListener("input", updateLabel);
  }, []);

  return (
    <div className="relative w-full border border-slate-300 rounded-md px-3 pt-5 pb-1 focus-within:border-blue-600 transition">
      <input
        id={id}
        type={type}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        className="peer w-full text-sm bg-transparent placeholder-transparent focus:outline-none"
        {...rest}
      />
      <label
        htmlFor={id}
        ref={labelRef}
        className="absolute left-3 text-slate-500 text-sm font-medium transition-all duration-200
          top-1/2 -translate-y-1/2
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:translate-y-0
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
