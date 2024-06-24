// components/Tabs.tsx
'use client';

import React, { useState } from 'react';

interface Tab {
  name: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 text-blue-100 px-4 mt-8 font-semibold ${activeTab === index ? 'border-b-2 border-red-50 text-red-50' : ''} focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
