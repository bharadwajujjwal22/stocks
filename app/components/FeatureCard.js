import { featuresData } from "../assets/featuresData";
export default function FeatureCard({ feature }) {
    return (
      <div className ='bg-white rounded-xl shadow-md p-6 flex-col items-left text-left'> 
        <img src={feature.image} alt = 'Live Trading'
        className ='w-16 h-16 mb-4'/>
        <h3 className =  'text-lg font-semibold text-gray-800 mb-2'>{feature.title}</h3>
        <p className = 'text-gray-800 text-sm'>{feature.description}</p>
        </div>
    );
  }