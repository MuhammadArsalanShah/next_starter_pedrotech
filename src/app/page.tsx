"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div>
          <h1>Enter You Name</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your name..."
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            className="text-gray-900"
          />
          <button type="submit">Predict Data</button>
        </form>
      </main>
    </div>
  );
}
