
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  Container, 
  Cloud, 
  Settings, 
  Shield, 
  Monitor,
  Play,
  Clock,
  Users,
  Star,
  Filter
} from 'lucide-react';

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 'git-github',
      title: 'Git & GitHub Fundamentals',
      description: 'Master version control, branching strategies, and collaborative development workflows.',
      icon: GitBranch,
      level: 'Beginner',
      category: 'Version Control',
      duration: '4 hours',
      modules: 12,
      students: 15420,
      rating: 4.8,
      progress: 0,
      color: 'from-orange-500 to-red-600',
      skills: ['Git Basics', 'Branching', 'Merging', 'GitHub Actions'],
    },
    {
      id: 'docker',
      title: 'Docker for Developers',
      description: 'Learn containerization, Docker Compose, and container orchestration fundamentals.',
      icon: Container,
      level: 'Intermediate',
      category: 'Containerization',
      duration: '6 hours',
      modules: 18,
      students: 12350,
      rating: 4.9,
      progress: 25,
      color: 'from-blue-500 to-cyan-600',
      skills: ['Docker Basics', 'Dockerfile', 'Docker Compose', 'Container Networks'],
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes Essentials',
      description: 'Container orchestration, deployments, services, and cloud-native applications.',
      icon: Monitor,
      level: 'Advanced',
      category: 'Orchestration',
      duration: '8 hours',
      modules: 24,
      students: 8920,
      rating: 4.7,
      progress: 0,
      color: 'from-purple-500 to-pink-600',
      skills: ['Pods', 'Services', 'Deployments', 'ConfigMaps'],
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipeline Mastery',
      description: 'Build automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.',
      icon: Settings,
      level: 'Intermediate',
      category: 'CI/CD',
      duration: '7 hours',
      modules: 20,
      students: 11200,
      rating: 4.8,
      progress: 60,
      color: 'from-green-500 to-teal-600',
      skills: ['Jenkins', 'GitHub Actions', 'Pipeline Design', 'Automation'],
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Fundamentals',
      description: 'Deploy and manage applications on Amazon Web Services cloud platform.',
      icon: Cloud,
      level: 'Intermediate',
      category: 'Cloud Platforms',
      duration: '10 hours',
      modules: 28,
      students: 9800,
      rating: 4.6,
      progress: 0,
      color: 'from-yellow-500 to-orange-600',
      skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
    },
    {
      id: 'terraform',
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning with Terraform and best practices.',
      icon: Monitor,
      level: 'Advanced',
      category: 'Infrastructure',
      duration: '6 hours',
      modules: 16,
      students: 7500,
      rating: 4.9,
      progress: 0,
      color: 'from-indigo-500 to-purple-600',
      skills: ['Terraform', 'HCL', 'State Management', 'Modules'],
    },
    {
      id: 'monitoring',
      title: 'DevOps Monitoring & Observability',
      description: 'Implement comprehensive monitoring, logging, and alerting solutions.',
      icon: Shield,
      level: 'Advanced',
      category: 'Monitoring',
      duration: '5 hours',
      modules: 14,
      students: 6200,
      rating: 4.7,
      progress: 0,
      color: 'from-red-500 to-pink-600',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerting'],
    },
    {
      id: 'ansible',
      title: 'Configuration Management',
      description: 'Automate configuration and deployment with Ansible playbooks.',
      icon: Settings,
      level: 'Intermediate',
      category: 'Automation',
      duration: '5 hours',
      modules: 15,
      students: 8100,
      rating: 4.5,
      progress: 0,
      color: 'from-cyan-500 to-blue-600',
      skills: ['Ansible', 'Playbooks', 'Roles', 'Inventory'],
    },
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'Version Control', 'Containerization', 'Orchestration', 'CI/CD', 'Cloud Platforms', 'Infrastructure', 'Monitoring', 'Automation'];

  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              DevOps Course Catalog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of hands-on DevOps courses. 
              Learn at your own pace with interactive labs and real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <span className="text-slate-300 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-400 text-sm">Level:</span>
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"}
                >
                  {level}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-400 text-sm">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <Badge className={`border ${getLevelColor(course.level)}`}>
                        {course.level}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-white text-lg leading-tight">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {course.progress > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Progress</span>
                          <span className="text-slate-300">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          +{course.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-slate-300">{course.rating}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link to={`/learn/${course.id}`}>
                          <Play className="h-4 w-4 mr-2" />
                          {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-lg">No courses found matching your filters.</div>
              <Button
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
                variant="outline"
                className="mt-4 border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
