import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, X, Maximize2, Minimize2 } from 'lucide-react';
import SimulatorCard from './SimulatorCard';
import * as LucideIcons from 'lucide-react';

const GradePage = ({ grade, onBack }) => {
  const [embeddedSimulator, setEmbeddedSimulator] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const IconComponent = LucideIcons[grade.icon] || LucideIcons.BookOpen;

  const handleOpenEmbedded = (simulator) => {
    setEmbeddedSimulator(simulator);
    setIsFullscreen(false);
  };

  const handleOpenNewTab = (simulator) => {
    window.open(simulator.url, '_blank', 'noopener,noreferrer');
  };

  const closeEmbedded = () => {
    setEmbeddedSimulator(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${grade.color} text-white py-8 px-6 shadow-lg`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white hover:bg-opacity-20 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Menú Principal
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <IconComponent className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{grade.title}</h1>
              <p className="text-white text-opacity-90 text-lg">
                {grade.simulators.length} simuladores interactivos disponibles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Embedded Simulator View */}
        {embeddedSimulator && (
          <Card className={`mb-8 shadow-2xl ${isFullscreen ? 'fixed inset-4 z-50' : ''}`}>
            <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b">
              <h3 className="font-semibold text-gray-800">{embeddedSimulator.name}</h3>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={toggleFullscreen}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-200"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={closeEmbedded}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:bg-gray-200"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-0">
              <div className={`bg-gray-200 flex items-center justify-center ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-96'}`}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">Simulador: {embeddedSimulator.name}</p>
                  <p className="text-sm text-gray-500">URL: {embeddedSimulator.url}</p>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    Esta es una vista previa. En la implementación final, aquí se mostrará el simulador embebido usando un iframe.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Simulators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {grade.simulators.map((simulator) => (
            <SimulatorCard
              key={simulator.id}
              simulator={simulator}
              onOpenEmbedded={handleOpenEmbedded}
              onOpenNewTab={handleOpenNewTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradePage;