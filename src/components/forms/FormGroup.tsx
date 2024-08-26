import { inputStyles } from "@/css/styles";

export default function FormGroup({
  name,
  id,
  type,
}: {
  name: string;
  id: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-2xl" htmlFor={id}>
        {name}
      </label>
      <input className={inputStyles} type={type} id={id} name={id} />
    </div>
  );
}
