import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePopup from "./components/WelcomePopup";
import GradeCard from "./components/GradeCard";
import GradePage from "./components/GradePage";
import { Toaster } from "./components/ui/toaster";
import { gradeData } from "./data/mockData";
import { Calculator, Users, Sparkles } from "lucide-react";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleGradeSelect = (gradeKey) => {
    setSelectedGrade(gradeKey);
  };

  const handleBackToMenu = () => {
    setSelectedGrade(null);
  };

  if (selectedGrade) {
    return (
      <GradePage 
        grade={gradeData[selectedGrade]} 
        onBack={handleBackToMenu}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <WelcomePopup 
        isOpen={showWelcome} 
        onClose={() => setShowWelcome(false)} 
      />
      
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Math Explorers
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plataforma educativa con simuladores interactivos para todos los niveles académicos
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Para estudiantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calculator className="w-4 h-4" />
                <span>{Object.values(gradeData).reduce((total, grade) => total + grade.simulators.length, 0)} simuladores</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Selecciona tu Nivel Educativo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada nivel contiene simuladores especializados diseñados para reforzar los conceptos matemáticos correspondientes a tu grado académico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(gradeData).map(([key, grade]) => (
            <GradeCard
              key={key}
              grade={grade}
              onClick={() => handleGradeSelect(key)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2">
              <Calculator className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700">Math Explorers</span>
            </div>
            <p className="text-gray-500 text-sm">
              Haciendo que el aprendizaje de las matemáticas sea interactivo y divertido
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
