
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Terminal, GitBranch, Cloud, Settings } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const terminalLines = [
    '$ git clone https://github.com/devops-mastery',
    '$ docker build -t my-app .',
    '$ kubectl apply -f deployment.yaml',
    '$ terraform plan && terraform apply',
  ];

  useEffect(() => {
    const currentLine = terminalLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentCharIndex(0);
        setCurrentLineIndex(prev => (prev + 1) % terminalLines.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <GitBranch className="h-12 w-12 text-blue-400" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-pulse delay-1000">
        <Cloud className="h-16 w-16 text-purple-400" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20 animate-pulse delay-2000">
        <Settings className="h-10 w-10 text-green-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                DevOps
              </span>{' '}
              From Scratch
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Learn, practice, and build real-world DevOps skills through interactive modules.
              From Git basics to Kubernetes orchestration, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Link to="/courses">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800">
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Courses
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-slate-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm">Interactive Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Hands-on Labs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Students</div>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 max-w-md w-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm">terminal</span>
                </div>
              </div>
              
              <div className="font-mono text-sm">
                <div className="text-green-400 mb-2">Welcome to DevOps Academy</div>
                <div className="text-blue-400 mb-4">Starting your journey...</div>
                <div className="text-slate-300 min-h-[1.5rem]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
