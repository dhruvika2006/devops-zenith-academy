
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Award, 
  Target, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Star,
  GitBranch,
  Container,
  Shield,
  Zap,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const userStats = {
    coursesCompleted: 3,
    totalCourses: 10,
    hoursLearned: 24,
    streakDays: 7,
    totalPoints: 2840,
    level: 5,
    nextLevelPoints: 3000,
  };

  const badges = [
    { name: 'Git Master', icon: GitBranch, color: 'text-orange-400', earned: true },
    { name: 'Container Pro', icon: Container, color: 'text-blue-400', earned: true },
    { name: 'Security Expert', icon: Shield, color: 'text-green-400', earned: false },
    { name: 'Speed Learner', icon: Zap, color: 'text-yellow-400', earned: true },
  ];

  const recentActivity = [
    {
      type: 'course_completed',
      title: 'Completed Git & GitHub Fundamentals',
      points: 500,
      date: '2 days ago',
      icon: Trophy,
      color: 'text-yellow-400',
    },
    {
      type: 'badge_earned',
      title: 'Earned Container Pro badge',
      points: 200,
      date: '1 week ago',
      icon: Award,
      color: 'text-blue-400',
    },
    {
      type: 'quiz_passed',
      title: 'Passed Docker Basics Quiz',
      points: 100,
      date: '1 week ago',
      icon: Target,
      color: 'text-green-400',
    },
    {
      type: 'streak',
      title: '7-day learning streak achieved',
      points: 150,
      date: '3 days ago',
      icon: TrendingUp,
      color: 'text-purple-400',
    },
  ];

  const coursesInProgress = [
    {
      title: 'Docker for Developers',
      progress: 65,
      modules: { completed: 13, total: 20 },
      timeLeft: '2.5 hours',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'CI/CD Pipeline Mastery',
      progress: 30,
      modules: { completed: 6, total: 20 },
      timeLeft: '4.9 hours',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Kubernetes Essentials',
      progress: 15,
      modules: { completed: 3, total: 20 },
      timeLeft: '6.8 hours',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 4520, avatar: '🚀' },
    { rank: 2, name: 'Sarah Wilson', points: 4100, avatar: '⭐' },
    { rank: 3, name: 'Mike Johnson', points: 3850, avatar: '🔥' },
    { rank: 4, name: 'You', points: 2840, avatar: '👤', isUser: true },
    { rank: 5, name: 'Emma Davis', points: 2650, avatar: '💎' },
  ];

  const progressToNextLevel = ((userStats.totalPoints % 1000) / 1000) * 100;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Learning Dashboard</h1>
          <p className="text-slate-400">Track your progress and achievements in DevOps mastery</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Courses Completed</p>
                  <p className="text-2xl font-bold text-white">
                    {userStats.coursesCompleted}/{userStats.totalCourses}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Hours Learned</p>
                  <p className="text-2xl font-bold text-white">{userStats.hoursLearned}</p>
                </div>
                <Clock className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Learning Streak</p>
                  <p className="text-2xl font-bold text-white">{userStats.streakDays} days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Points</p>
                  <p className="text-2xl font-bold text-white">{userStats.totalPoints}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Level Progress */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">Level {userStats.level}</span>
                  <span className="text-slate-300">
                    {userStats.totalPoints} / {userStats.nextLevelPoints} XP
                  </span>
                </div>
                <Progress value={progressToNextLevel} className="h-3 mb-4" />
                <p className="text-slate-400 text-sm">
                  {userStats.nextLevelPoints - userStats.totalPoints} XP to next level
                </p>
              </CardContent>
            </Card>

            {/* Courses in Progress */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Courses in Progress</CardTitle>
                <CardDescription className="text-slate-400">
                  Continue your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {coursesInProgress.map((course, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                    <div className={`h-1 bg-gradient-to-r ${course.color} rounded-full mb-3`} />
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white">{course.title}</h4>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {course.progress}%
                      </Badge>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>
                        {course.modules.completed}/{course.modules.total} modules
                      </span>
                      <span>{course.timeLeft} remaining</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                          <Icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{activity.title}</p>
                          <div className="flex items-center space-x-2 text-xs text-slate-400">
                            <span>+{activity.points} XP</span>
                            <span>•</span>
                            <span>{activity.date}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badges */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Achievements</CardTitle>
                <CardDescription className="text-slate-400">
                  Badges you've earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          badge.earned
                            ? 'bg-slate-700/30 border-slate-600'
                            : 'bg-slate-800/30 border-slate-700 opacity-50'
                        }`}
                      >
                        <Icon className={`h-8 w-8 ${badge.color} mx-auto mb-2`} />
                        <p className="text-center text-sm text-white font-medium">
                          {badge.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Leaderboard</CardTitle>
                <CardDescription className="text-slate-400">
                  Top learners this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        user.isUser ? 'bg-blue-600/20 border border-blue-500/30' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm">
                        {user.rank}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${user.isUser ? 'text-blue-400' : 'text-white'}`}>
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-400">{user.points} XP</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">This Week</span>
                  <span className="text-white">12 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Average Session</span>
                  <span className="text-white">45 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Quizzes Passed</span>
                  <span className="text-white">23/25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Labs Completed</span>
                  <span className="text-white">18/20</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
