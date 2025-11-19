import Sidebar from './components/Sidebar';
import RightBar from './components/RightBar';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="min-h-screen bg-pastel-bg text-pastel-text font-sans">
      
      {/* 1. Colonne Gauche : Navigation */}
      <Sidebar />

      {/* 2. Colonne Centrale : Contenu Scrollable */}
      {/* On ajoute une marge à gauche (ml-64) pour ne pas être caché par la sidebar */}
      <div className="ml-64 mr-0 lg:mr-80 p-10 min-h-screen flex flex-col items-center">
        
        {/* Container centré pour les posts, limité en largeur pour l'esthétique */}
        <div className="w-full max-w-2xl mt-4">
          
          {/* Zone de Stories (Optionnel mais courant) */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {['Moi', 'Alice', 'Bob', 'Chloé'].map((user, i) => (
                <div key={i} className="flex flex-col items-center space-y-1 min-w-[80px] cursor-pointer">
                    <div className="w-16 h-16 rounded-full ring-2 ring-pastel-primary ring-offset-2 bg-gray-200 hover:scale-105 transition"></div>
                    <span className="text-xs font-medium">{user}</span>
                </div>
            ))}
          </div>

          {/* Les Posts */}
          <PostCard 
            username="Design_Lover" 
            image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
            avatarColor="bg-pastel-primary"
          />
          
          <PostCard 
            username="Travel_Addict" 
            image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
            avatarColor="bg-pastel-secondary"
          />

             <PostCard 
            username="Foodie_Life" 
            image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
            avatarColor="bg-pastel-accent"
          />
        </div>

      </div>

      {/* 3. Colonne Droite : Suggestions */}
      <RightBar />
      
    </div>
  );
}

export default App;