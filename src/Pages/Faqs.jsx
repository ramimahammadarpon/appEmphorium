import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

const Faqs = () => {
  const faqsData = useLoaderData();
  useEffect(() => {
      document.title = "App Emphorium | Login";
    }, []);
  return (
    <div className="text-[#001219]">
      <div className="my-5 mx-5 min-h-screen lg:my-10 lg:mx-20">
        {faqsData.map(data => <div key={data.id} className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-secondary">
           {data.question}
          </div>
          <div className="collapse-content text-sm text-primary">
            {data.answer}
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Faqs;
