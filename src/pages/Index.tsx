
// We update the index page to add a navigation link to the new Bimestres page
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
      <nav>
        <Link
          to="/bimestres"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold shadow hover:bg-primary/90 transition"
        >
          Ver Cronograma de Bloques/Bimestres
        </Link>
      </nav>
    </div>
  );
};

export default Index;
