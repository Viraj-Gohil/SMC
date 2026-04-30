'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface Faculty {
  id: string;
  name: string;
  specialization: string;
  subjects: string[];
  experience: string;
  qualifications: string[];
  bio: string;
}

const facultyData: Faculty[] = [
  {
    id: '1',
    name: 'Hitesh Sir',
    specialization: 'Accounts (11th & 12th)',
    subjects: ['Accounts - 11th', 'Accounts - 12th'],
    experience: '20+ years',
    qualifications: ['M.Com', 'B.Ed', 'Commerce Faculty'],
    bio: 'Focused on strong accounting fundamentals and exam-oriented preparation.'
  },
  {
    id: '2',
    name: 'Bhargav Sir',
    specialization: ' OCM & Economics (11th & 12th)',
    subjects: ['Organization of Commerce and Management (OCM)', 'Economics'],
    experience: '8+ years',
    qualifications: ['M.A. Economics', 'Arts & Commerce Faculty'],
    bio: 'Specializes in clear concept building for OCM and Economics students.'
  },
  {
    id: '3',
    name: 'Prashant Sir',
    specialization: 'Gujarati & Sanskrit (10th)',
    subjects: ['Gujarati - 10th', 'Sanskrit - 10th'],
    experience: '20+ years',
    qualifications: ['B.A.', 'M.A.', 'B.Ed'],
    bio: 'Dedicated to language mastery and confident board exam performance for Class 10th.'
  }
];

export function FacultySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8" style={{ background: '#F5C518' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#F5C518' }}>
              Our Team
            </span>
            <div className="h-1 w-8" style={{ background: '#F5C518' }}></div>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1D3461' }}>
            Meet Our Expert Faculty
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#3a4a6b' }}>
            Experienced educators dedicated to unlocking your potential. Each faculty member brings years of expertise and a passion for teaching excellence.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facultyData.map((faculty) => (
            <motion.div
              key={faculty.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" 
                style={{ background: 'linear-gradient(135deg, rgba(29, 52, 97, 0.2), rgba(245, 197, 24, 0.2))' }}>
              </div>

              {/* Card */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border border-white/50">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg, rgba(29, 52, 97, 0.1), rgba(245, 197, 24, 0.1))' }}>
                  {/* Decorative shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl font-bold"
                      style={{ background: 'rgba(29, 52, 97, 0.1)', color: '#F5C518' }}>
                      {faculty.name.charAt(0)}{faculty.name.split(' ')[1].charAt(0)}
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-semibold" style={{ color: '#F5C518' }}>
                      {faculty.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#1D3461' }}>
                    {faculty.name}
                  </h3>
                  
                  <p className="text-sm font-semibold mb-3" style={{ color: '#F5C518' }}>
                    {faculty.specialization}
                  </p>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#3a4a6b' }}>
                    {faculty.bio}
                  </p>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {faculty.subjects.slice(0, 2).map((subject, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="text-xs"
                        style={{ background: 'rgba(245, 197, 24, 0.1)', color: '#F5C518', border: '1px solid rgba(245, 197, 24, 0.3)' }}
                      >
                        {subject}
                      </Badge>
                    ))}
                    {faculty.subjects.length > 2 && (
                      <Badge 
                        variant="secondary"
                        className="text-xs"
                        style={{ background: 'rgba(29, 52, 97, 0.1)', color: '#1D3461', border: '1px solid rgba(29, 52, 97, 0.3)' }}
                      >
                        +{faculty.subjects.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Qualifications Summary */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold mb-2" style={{ color: '#1D3461' }}>
                      Qualifications
                    </p>
                    <ul className="text-xs space-y-1" style={{ color: '#3a4a6b' }}>
                      {faculty.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full" style={{ background: '#F5C518' }}></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl px-8 py-6 border border-accent/20"
            style={{ background: 'linear-gradient(135deg, rgba(29, 52, 97, 0.05), rgba(245, 197, 24, 0.05))', borderColor: 'rgba(245, 197, 24, 0.2)' }}>
            <p className="text-lg font-semibold mb-4" style={{ color: '#1D3461' }}>
              Ready to learn from the best?
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: '#F5C518', color: '#1D3461' }}
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
