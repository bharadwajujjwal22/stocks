import FooterColumn from "./FooterColumn";
import { footerData } from "../assets/footerData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {footerData.map((column,index)=>{
          return (
            <div className="text-center">
              <FooterColumn title = {column.title} items = {column.items}/>
            </div>
          )
        })}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 space-y-2">
        <p>{/* Declaration of copyright */}</p>
        <p>{/* No claim disclaimer */}</p>
      </div>
    </footer>
  );
}
