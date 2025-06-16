import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  Container, 
  Cloud, 
  Settings, 
  Shield, 
  Monitor,
  Users,
  Award,
  Zap,
  BookOpen,
  Play,
  ArrowRight,
  Terminal
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Version Control Mastery',
      description: 'Master Git workflows, branching strategies, and collaborative development practices.',
    },
    {
      icon: Container,
      title: 'Containerization',
      description: 'Learn Docker, container orchestration, and microservices architecture patterns.',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Deploy and manage applications on AWS, Azure, and Google Cloud Platform.',
    },
    {
      icon: Settings,
      title: 'CI/CD Pipelines',
      description: 'Build automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.',
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      description: 'Implement DevSecOps practices, monitoring, and observability solutions.',
    },
    {
      icon: Monitor,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning with Terraform, Ansible, and CloudFormation.',
    },
  ];

  const popularCourses = [
    {
      title: 'Git & GitHub Fundamentals',
      description: 'Master version control and collaborative development',
      duration: '4 hours',
      level: 'Beginner',
      students: 15420,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Docker for Developers',
      description: 'Containerize applications and orchestrate with Docker Compose',
      duration: '6 hours',
      level: 'Intermediate',
      students: 12350,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Kubernetes Essentials',
      description: 'Container orchestration and cloud-native deployments',
      duration: '8 hours',
      level: 'Advanced',
      students: 8920,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Master DevOps
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From version control basics to advanced cloud orchestration, our comprehensive curriculum 
              covers all essential DevOps tools and practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Most Popular Courses
            </h2>
            <p className="text-xl text-slate-300">
              Start your DevOps journey with these highly-rated courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-slate-400 text-sm">{course.duration}</span>
                  </div>
                  <CardTitle className="text-white mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{course.students.toLocaleString()} students</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-1" />
                      Start
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Award className="h-12 w-12 text-yellow-400 mx-auto" />
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-slate-400">Certificates Issued</div>
            </div>
            <div className="space-y-2">
              <Users className="h-12 w-12 text-green-400 mx-auto" />
              <div className="text-3xl font-bold text-white">100K+</div>
              <div className="text-slate-400">Active Learners</div>
            </div>
            <div className="space-y-2">
              <BookOpen className="h-12 w-12 text-blue-400 mx-auto" />
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-slate-400">Hands-on Labs</div>
            </div>
            <div className="space-y-2">
              <Zap className="h-12 w-12 text-purple-400 mx-auto" />
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers who are already mastering DevOps with our interactive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Link to="/courses">
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800">
              <Link to="/dashboard">
                View Progress
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Terminal className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">DevOps Academy</span>
            </div>
            <p className="text-slate-400">
              Master the future of software development and operations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
