import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import {
  Users,
  Dumbbell,
  CreditCard,
  Activity,
  TrendingUp,
  Calendar,
  Trophy,
  Star,
  BarChart3,
  PieChart,
  Clock,
  Target
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "248",
    change: "+12.4%",
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Active Sessions",
    value: "8",
    change: "+2 this month",
    icon: Dumbbell,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Coaches Available",
    value: "14",
    change: "+1 new",
    icon: Activity,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Monthly Revenue",
    value: "₹3.2L",
    change: "+18.3%",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500"
  }
];

const recentActivities = [
  {
    student: "Aarav Sharma",
    action: "Completed Session",
    program: "High Performance",
    time: "2 hours ago"
  },
  {
    student: "Diya Patel",
    action: "New Enrollment",
    program: "Beginner",
    time: "4 hours ago"
  },
  {
    student: "Rahul Menon",
    action: "Payment Received",
    program: "Intermediate",
    time: "6 hours ago"
  },
  {
    student: "Sara Khan",
    action: "Marked Present",
    program: "Kids",
    time: "8 hours ago"
  }
];

const upcomingSessions = [
  {
    time: "10:00 AM",
    student: "Vikram Singh",
    program: "Advanced",
    coach: "Coach Rajesh"
  },
  {
    time: "11:30 AM",
    student: "Priya Sharma",
    program: "Intermediate",
    coach: "Coach Sneha"
  },
  {
    time: "2:00 PM",
    student: "Arjun Kumar",
    program: "Beginner",
    coach: "Coach Amit"
  }
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, Coach!
              </h1>
              <p className="text-slate-300">
                Here's what's happening at your academy today.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-slate-900" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-green-400">{stat.change}</div>
                  </div>
                </div>
                <h3 className="text-slate-300 font-medium">{stat.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Charts and Activities */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 border border-slate-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Performance Overview</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-400 text-slate-900 rounded-lg text-sm font-medium">
                  This Month
                </button>
                <button className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700">
                  Last Month
                </button>
              </div>
            </div>
            <div className="h-64 bg-slate-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                <p className="text-slate-400">Chart visualization coming soon</p>
              </div>
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
          >
            <h2 className="text-xl font-bold text-white mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      {activity.student} - {activity.action}
                    </p>
                    <p className="text-slate-400 text-xs">{activity.program}</p>
                    <p className="text-slate-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Sessions and Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Today's Sessions</h2>
              <Calendar className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{session.student}</p>
                    <p className="text-slate-400 text-sm">{session.program} • {session.coach}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 font-bold">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 p-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                <Users className="w-6 h-6 mx-auto mb-2" />
                Add Student
              </button>
              <button className="bg-slate-800 text-white p-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                Schedule Session
              </button>
              <button className="bg-slate-800 text-white p-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300">
                <Target className="w-6 h-6 mx-auto mb-2" />
                View Reports
              </button>
              <button className="bg-slate-800 text-white p-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300">
                <Trophy className="w-6 h-6 mx-auto mb-2" />
                Tournaments
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

