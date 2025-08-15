import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { GraduationCap, Sparkles } from 'lucide-react';
import { welcomeMessage } from '../data/mockData';

const WelcomePopup = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            {welcomeMessage.title}
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </DialogTitle>
          <DialogDescription className="text-lg font-medium text-blue-700">
            {welcomeMessage.subtitle}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-center px-2">
            {welcomeMessage.message}
          </p>
          <Button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {welcomeMessage.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;