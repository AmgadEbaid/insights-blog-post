"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Search, Bell, Bookmark, User } from "lucide-react";

export default function TabBar({ userId }: { userId: string }) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "Favourite", label: "favourite stories" },
    { id: "about", label: "About" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-start gap-8">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/author/${userId}/${tab.id}`}
              className={`flex flex-col items-center py-4  relative ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-sm mt-1">{tab.label}</span>
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
