"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setinputVal] = useState("");
  const {push} = useRouter()
  const handlesubmit =(event :FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-500 dark:from-black dark:to-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Enter your name</h1>
        <form onSubmit={handlesubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setinputVal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}
