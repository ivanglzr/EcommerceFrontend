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
      <input
        className="py-2 px-4 rounded-xl text-xl text-first-color focus:outline-none"
        type={type}
        id={id}
        name={id}
      />
    </div>
  );
}
