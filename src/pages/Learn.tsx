import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Circle,
  Terminal,
  BookOpen,
  Award,
  Clock
} from 'lucide-react';

const Learn = () => {
  const { courseId } = useParams();
  const [currentModule, setCurrentModule] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [quizAnswer, setQuizAnswer] = useState('');

  // Mock course data with actual video URLs
  const course = {
    id: courseId,
    title: 'Git & GitHub Fundamentals',
    modules: [
      {
        title: 'Introduction to Version Control',
        duration: '15 min',
        completed: true,
        content: 'Learn the basics of version control and why it\'s essential for modern development.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        quiz: {
          question: 'What is the primary purpose of version control?',
          options: [
            'To backup files',
            'To track changes and collaborate',
            'To compress files',
            'To encrypt data'
          ],
          correct: 1
        }
      },
      {
        title: 'Setting Up Git',
        duration: '20 min',
        completed: true,
        content: 'Install Git and configure your development environment.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        lab: {
          instruction: 'Configure your Git username and email',
          command: 'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"',
          expected: 'Configuration complete'
        }
      },
      {
        title: 'Basic Git Commands',
        duration: '25 min',
        completed: false,
        content: 'Master the fundamental Git commands for daily development.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        lab: {
          instruction: 'Initialize a new Git repository and make your first commit',
          command: 'git init\ngit add .\ngit commit -m "Initial commit"',
          expected: 'Repository initialized with first commit'
        }
      },
      {
        title: 'Branching and Merging',
        duration: '30 min',
        completed: false,
        content: 'Learn how to create branches and merge changes effectively.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        quiz: {
          question: 'Which command creates a new branch and switches to it?',
          options: [
            'git branch new-branch',
            'git checkout new-branch',
            'git checkout -b new-branch',
            'git merge new-branch'
          ],
          correct: 2
        }
      }
    ]
  };

  const currentModuleData = course.modules[currentModule];
  const progress = (course.modules.filter(m => m.completed).length / course.modules.length) * 100;

  const handleNextModule = () => {
    if (currentModule < course.modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const handlePrevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  const handleRunCode = () => {
    // Simulate code execution
    console.log('Running code:', codeInput);
  };

  const handleVideoToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 bg-slate-800 border-r border-slate-700 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-2">{course.title}</h2>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Progress</span>
                <span className="text-slate-300">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="space-y-2">
              {course.modules.map((module, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentModule(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    currentModule === index
                      ? 'bg-blue-600/20 border border-blue-500/50'
                      : 'bg-slate-700/50 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {module.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-400" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate">
                        {module.title}
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-slate-800 border-b border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {currentModuleData.title}
                </h1>
                <p className="text-slate-400 mt-1">
                  Module {currentModule + 1} of {course.modules.length}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevModule}
                  disabled={currentModule === 0}
                  className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  size="sm"
                  onClick={handleNextModule}
                  disabled={currentModule === course.modules.length - 1}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="content" className="h-full flex flex-col">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-b border-slate-700">
                <TabsTrigger value="content" className="data-[state=active]:bg-slate-700">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="lab" className="data-[state=active]:bg-slate-700">
                  <Terminal className="h-4 w-4 mr-2" />
                  Lab
                </TabsTrigger>
                <TabsTrigger value="quiz" className="data-[state=active]:bg-slate-700">
                  <Award className="h-4 w-4 mr-2" />
                  Quiz
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="flex-1 p-6">
                <div className="max-w-4xl mx-auto">
                  {/* Video Player */}
                  <div className="bg-slate-800 rounded-lg mb-6 overflow-hidden">
                    <div className="aspect-video bg-slate-700 relative">
                      {isPlaying ? (
                        <video
                          src={currentModuleData.videoUrl}
                          controls
                          autoPlay
                          className="w-full h-full"
                          onPause={() => setIsPlaying(false)}
                          onEnded={() => setIsPlaying(false)}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Button
                              size="lg"
                              onClick={handleVideoToggle}
                              className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16"
                            >
                              <Play className="h-8 w-8 ml-1" />
                            </Button>
                            <p className="text-slate-400 mt-4">Video: {currentModuleData.title}</p>
                            <p className="text-slate-500 text-sm mt-1">Click to play</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Learning Objectives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {currentModuleData.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="lab" className="flex-1 p-6">
                <div className="max-w-4xl mx-auto">
                  {currentModuleData.lab ? (
                    <div className="grid lg:grid-cols-2 gap-6">
                      <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                          <CardTitle className="text-white">Instructions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-300 mb-4">
                            {currentModuleData.lab.instruction}
                          </p>
                          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                            <div className="text-slate-400 mb-2">Expected commands:</div>
                            <pre className="text-green-400 whitespace-pre-wrap">
                              {currentModuleData.lab.command}
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center">
                            <Terminal className="h-5 w-5 mr-2" />
                            Terminal
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm min-h-[200px]">
                            <div className="text-green-400 mb-2">$ </div>
                            <textarea
                              value={codeInput}
                              onChange={(e) => setCodeInput(e.target.value)}
                              placeholder="Type your commands here..."
                              className="w-full bg-transparent text-slate-300 resize-none border-none outline-none"
                              rows={8}
                            />
                          </div>
                          <Button
                            onClick={handleRunCode}
                            className="mt-4 bg-green-600 hover:bg-green-700"
                          >
                            Run Commands
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-12 text-center">
                        <Terminal className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-400">No lab exercise for this module.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="quiz" className="flex-1 p-6">
                <div className="max-w-2xl mx-auto">
                  {currentModuleData.quiz ? (
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-white">Knowledge Check</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-slate-300 text-lg">
                          {currentModuleData.quiz.question}
                        </p>
                        <div className="space-y-2">
                          {currentModuleData.quiz.options.map((option, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 cursor-pointer transition-colors"
                            >
                              <input
                                type="radio"
                                name="quiz"
                                value={index}
                                checked={quizAnswer === index.toString()}
                                onChange={(e) => setQuizAnswer(e.target.value)}
                                className="text-blue-600"
                              />
                              <span className="text-slate-300">{option}</span>
                            </label>
                          ))}
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Submit Answer
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-12 text-center">
                        <Award className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-400">No quiz for this module.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
