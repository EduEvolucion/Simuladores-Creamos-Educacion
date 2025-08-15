import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Play } from 'lucide-react';

const SimulatorCard = ({ simulator, viewMode, onOpenEmbedded, onOpenNewTab }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {simulator.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Button
            onClick={() => onOpenEmbedded(simulator)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-md transition-all duration-200"
          >
            <Play className="w-4 h-4 mr-2" />
            Ver Aquí
          </Button>
          <Button
            onClick={() => onOpenNewTab(simulator)}
            variant="outline"
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 text-sm py-2 rounded-md transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Nueva Pestaña
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulatorCard;