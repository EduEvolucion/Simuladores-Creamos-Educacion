import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const GradeCard = ({ grade, onClick }) => {
  const IconComponent = LucideIcons[grade.icon] || LucideIcons.BookOpen;
  
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className={`bg-gradient-to-br ${grade.color} p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white bg-opacity-10 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white bg-opacity-5 transform -translate-x-8 translate-y-8"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{grade.title}</h3>
                <p className="text-white text-opacity-90 text-sm">
                  {grade.simulators.length} simuladores disponibles
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <Button 
            onClick={onClick}
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-medium py-3 rounded-lg transition-all duration-200"
          >
            Explorar Simuladores
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeCard;