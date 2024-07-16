import  { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
    <div className='w-auto m-[50px] '>
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="What is VITE"
        checked={activeTab === 1}
        onChange={() => handleTabClick(1)}
      />
      <div
        role="tabpanel"
        className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'}`}
      >
        Vite is a next-generation front-end tool that focuses on providing a fast and efficient development experience.
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Why use VITE"
        checked={activeTab === 2}
        onChange={() => handleTabClick(2)}
      />
      <div
        role="tabpanel"
        className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}
      >
        Vite leverages native ES modules, allowing the browser to handle module imports. This results in a faster initial load time during development.
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Uses of VITE"
        checked={activeTab === 3}
        onChange={() => handleTabClick(3)}
      />
      <div
        role="tabpanel"
        className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 3 ? 'block' : 'hidden'}`}
      >
        Run a local development server with fast hot-reloading and instant updates.
      </div>
    </div>
    </div>
    </>
  );
};

export default Tabs;
