import { UserPlus } from 'lucide-react';

export default function RightBar() {
  const suggestions = ["Sophie_Art", "Lucas_Dev", "Emma_Nature", "Tom_Photo"];

  return (
    <div className="fixed right-0 top-0 h-screen w-80 p-8 hidden lg:block">
      {/* Suggestions d'amis  */}
      <div className="bg-white dark:bg-[#151a30] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/10">
        <h2 className="font-bold text-gray-700 dark:text-white mb-4">Suggestions pour vous</h2>
        <div className="space-y-4">
          {suggestions.map((name, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pastel-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {name[0]}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{name}</span>
              </div>
              <button className="text-pastel-primary hover:text-pastel-accent transition">
                <UserPlus size={20} /> {/* [cite: 19] Ajouter des amis */}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-400">
        © 2025 SocialPastel • Confidentialité • Conditions
      </div>
    </div>
  );
}