"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-red-500">
      {pending ? <p>loading</p> : <p>Submit</p>}
    </button>
  );
}
