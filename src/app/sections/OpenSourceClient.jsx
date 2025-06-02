"use client";
import { Card, CardWrapper } from "@/components/Card";
import { useState } from "react";

export default function OpenSourceClient({ articles }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <CardWrapper>
        {articles.map((article, i) => (
          <Card
            key={i}
            title={article.title}
            onClick={() => setOpenIndex(i)}
            className="flex flex-col justify-end p-0 overflow-hidden h-48 w-48 relative cursor-pointer"
          >
            {article.image && (
              <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
            )}
            <div className="relative z-10 mt-auto w-full text-black p-3 text-center font-semibold" style={{ minHeight: "3em" }}>
              {article.title}
            </div>
          </Card>
        ))}
      </CardWrapper>
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpenIndex(null)}>
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl" onClick={() => setOpenIndex(null)}>
              &times;
            </button>
            {articles[openIndex].image && (
              <img
                src={articles[openIndex].image}
                alt={articles[openIndex].title}
                className="w-32 h-32 object-contain mx-auto mb-4 rounded-lg shadow"
              />
            )}
            <h2 className="text-xl font-bold mb-2 text-center">{articles[openIndex].title}</h2>
            <p className="whitespace-pre-line mb-4 text-gray-700">{articles[openIndex].content}</p>
            <a href={articles[openIndex].url} target="_blank" rel="noopener" className="text-blue-600 underline block text-center">
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
