import React from 'react';
import { employerFeatures, JobSeekerFetures } from '../../../utils/data';
import { Toaster } from 'react-hot-toast';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Everything You Need to <span className="text-blue-600">Succeed</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for your next opportunity or the perfect candidate,
            we have the tools and features to make it happen.
          </p>
        </div>

        {/* Job Seeker Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">For Job Seekers</h3>
            <div className="h-1 w-24 bg-blue-600 mt-2 rounded" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JobSeekerFetures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employer Section */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">For Employers</h3>
            <div className="h-1 w-24 bg-green-600 mt-2 rounded" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employerFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <feature.icon className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Features;
