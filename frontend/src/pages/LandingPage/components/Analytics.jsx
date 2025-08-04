import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      icon: Users,
      title: "Active Users",
      value: "2.4M+",
      growth: "+15%",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: Briefcase,
      title: "Jobs Posted",
      value: "150K+",
      growth: "+22%",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: Target,
      title: "Successful Hires",
      value: "89K+",
      growth: "+18%",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: TrendingUp,
      title: "Match Rate",
      value: "94%",
      growth: "+8%",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Platform <span className="text-blue-600">Analytics</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real-time insights and data-driven results that showcase the power of our platform.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition min-w-[250px]"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-500">{stat.growth}</span>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
