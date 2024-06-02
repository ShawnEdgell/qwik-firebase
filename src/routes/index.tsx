// src/routes/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div class="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 class="mb-6 text-5xl font-extrabold text-gray-800">
          Welcome to Qwik
        </h1>
        <p class="mb-4 text-lg text-gray-600">
          Discover the power of ultra-fast, high-performance web development
          with Qwik. Build reactive and engaging web applications effortlessly.
        </p>
        <button class="rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik: Fast and Reactive Web Development",
  meta: [
    {
      name: "description",
      content:
        "Discover the power of ultra-fast, high-performance web development with Qwik. Build reactive and engaging web applications effortlessly.",
    },
  ],
};
