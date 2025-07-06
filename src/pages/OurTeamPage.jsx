import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Scissors,
  Palette,
  Code,
  Camera,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OurTeamPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Majid Avindra",
      role: "Fashion Designer & Creative Director",
      image: null,
      description:
        "Mengembangkan platform e-commerce yang memudahkan pelanggan berbelanja fashion online dengan pengalaman yang seamless & Menciptakan koleksi fashion yang trendy dan timeless, dari konsep hingga produksi, dengan sentuhan kreatif yang unik.",
      location: "Jakarta, Indonesia",
      experience: "3+ years",
      achievements: "50+ Collections",
      icon: Code,
      specialty: "E-commerce Development",
    },
    {
      id: 2,
      name: "Fajar",
      role: "Fashion Designer & Creative Director",
      image: null,
      description:
        "Mengembangkan platform e-commerce yang memudahkan pelanggan berbelanja fashion online dengan pengalaman yang seamless & Menciptakan koleksi fashion yang trendy dan timeless, dari konsep hingga produksi, dengan sentuhan kreatif yang unik.",
      location: "Bandung, Indonesia",
      experience: "4+ years",
      achievements: "50+ Collections",
      icon: Palette,
      specialty: "Fashion Design & Styling",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 overflow-hidden">
      {/* Fashion-themed Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-gray-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-gray-400 rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-gray-500 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <Scissors className="w-8 h-8 text-gray-700 mr-3" />
              <h1 className="text-5xl font-integral text-gray-900 tracking-tight">
                Our Team
              </h1>
              <Scissors className="w-8 h-8 text-gray-700 ml-3 scale-x-[-1]" />
            </div>
            <div className="h-1 w-24 bg-gray-800 mx-auto rounded-full"></div>
          </div>
          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-700 leading-relaxed">
            Di balik setiap koleksi fashion yang berkualitas dan layanan terbaik
            kami, ada tim kreatif yang berdedikasi. Kami percaya bahwa fashion
            bukan hanya tentang pakaian, tetapi juga tentang mengekspresikan
            kepribadian dan gaya hidup.
          </p>
          <div className="mt-6 text-sm text-gray-500 font-medium tracking-wider uppercase">
            Fashion • Quality • Innovation
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Fashion-themed Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Fashion Icon Background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <member.icon className="w-16 h-16 text-gray-400" />
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Profile Image with Fashion Frame */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-200 group-hover:border-gray-400 transition-colors duration-300"></div>
                    <div className="w-full h-full bg-gray-100 rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gray-800 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-gray-700 uppercase tracking-wide text-sm mb-2">
                    {member.role}
                  </p>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600 border border-gray-200">
                    {member.specialty}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                  "{member.description}"
                </p>

                {/* Fashion Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                    <MapPin className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-xs text-gray-500 font-medium">
                      {member.location}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-xs text-gray-500 font-medium">
                      {member.experience}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                    <Award className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-xs text-gray-500 font-medium">
                      {member.achievements}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 group border border-gray-200 hover:border-gray-300 hover:scale-110">
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 group border border-gray-200 hover:border-gray-300 hover:scale-110">
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-800 rounded-full transition-all duration-300 group border border-gray-200 hover:border-gray-800 hover:scale-110">
                    <Github className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </button>
                </div>

                {/* Fashion Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Fashion-themed Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative">
            <div className="absolute top-4 left-4 opacity-10">
              <Scissors className="w-6 h-6 text-gray-400" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-10">
              <Palette className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Fashion Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Passionate about fashion and creativity? We're looking for
              talented individuals to help us create amazing clothing
              collections.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="text-center">
                <Scissors className="w-6 h-6 mx-auto mb-1 text-gray-600" />
                <p className="text-xs text-gray-500">Design</p>
              </div>
              <div className="text-center">
                <Camera className="w-6 h-6 mx-auto mb-1 text-gray-600" />
                <p className="text-xs text-gray-500">Photography</p>
              </div>
              <div className="text-center">
                <Code className="w-6 h-6 mx-auto mb-1 text-gray-600" />
                <p className="text-xs text-gray-500">Development</p>
              </div>
            </div>

            <Link
              to="/Careerpage"
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-900 hover:border-black"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
