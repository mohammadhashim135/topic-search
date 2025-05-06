'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Topic = {
  id: number;
  name: string;
  category: string;
};

const topics: Topic[] = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Quantum Mechanics", category: "Physics" },
  { id: 3, name: "Relativity", category: "Physics" },
  { id: 4, name: "Algebra", category: "Mathematics" },
  { id: 5, name: "Calculus", category: "Mathematics" },
  { id: 6, name: "Python", category: "Programming Language" }
];

export default function TopicSearch() {
  const [query, setQuery] = useState('');

  const filtered = topics.filter(topic =>
    topic.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Topics</h1>

      <div className="relative">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-3 left-4" />
        <input
          type="text"
          placeholder="Search for a topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {filtered.length > 0 ? (
          filtered.map(topic => (
            <div
              key={topic.id}
              className="p-4 bg-gray-100 border border-gray-200 rounded-lg hover:shadow transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{topic.name}</h2>
              <p className="text-gray-600 mt-1">Category: {topic.category}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-4">No topics found</p>
        )}
      </div>
    </div>
  );
}
