import React from "react";
import { plans } from "@/constants/plans";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  features: string[];
  description: string;
  button: string;
  style: string;
}

interface PlanCardProps {
  plan: Plan;
}

// Komponen PlanCard
const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div
      className={`max-w-sm p-6 m-4 border border-gray-200 rounded-lg shadow-lg ${plan.style}`}
    >
      <h2 className="mb-4 text-2xl font-bold">{plan.name}</h2>
      <p className="mb-4 text-lg">{plan.price}</p>
      <ul className="mb-4 list-disc list-inside">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="mb-4">{plan.description}</p>
      <button className="px-4 py-2 font-bold text-white bg-neutral-500 rounded hover:bg-neutral-700">
        {plan.button}
      </button>
    </div>
  );
};

// Komponen Price
const Price: React.FC = () => {
  return (
    <div className="py-20" id="pricing">
      <h1
        className="text-4xl pb-5 md:text-7xl px-6 text-slate-300 text-center bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      >
        Simple Pricing
        <br />
        Choose your plan
      </h1>
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Price;
