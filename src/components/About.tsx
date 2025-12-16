import React from 'react';
import { Code, Palette, Server,Briefcase,MapPin , Smartphone, GraduationCap, Award, Calendar, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
   
  const workExperience = [
    {
      id: 2,
      position: "Full Stack Developer Intern",
      company: "NIELIT Gorakhpur",
      duration: "May 2025 - Oct 2025",
      location: "Gorakhpur UP",
      description: "Enhanced the NIELIT SkillHub portal by developing dynamic and responsive features using PHP,MySQL,HTML,CSS,Javascript.",
      responsibilities: [
        "Integrated a secure payment gateway for online course fee transactions post-application.",
        "Collaborated with backend developers to connect MySQL databases and RESTful PHP APIs with the frontend.",
        "Performed bug diagnosis and fixes for both functional issues and UI inconsistencies.",
        // "Implemented CI/CD pipelines reducing deployment time by 60%",
        // "Conducted code reviews and established coding standards for the team"
      ],
      achievements: [
        "Successfully deployed a secure online payment solution, improving convenience for students.",
        "Enhanced portal usability and responsiveness, resulting in better cross-device compatibility.",
        "Improved system stability by resolving recurring functional and UI bugs.",
        "Contributed to a seamless user experience through efficient backend–frontend integration."
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "javascript", "PHP", "Mysql", "SQL","payu"],
      companyUrl: "https://www.nielit.gov.in/gorakhpur/index.php"
    },
    {
  id: 1,
  position: "Jr. Resource Person (Software Development)",
  company: "NIELIT Gorakhpur",
  duration: "Nov 2025 – Present",
  location: "Gorakhpur, Uttar Pradesh",
  description:
    "Working as a Full Stack Developer on the NIELIT SkillHub portal after successful completion of internship, with increased responsibilities in development, maintenance, and system enhancement.",
  responsibilities: [
    "Independently developing and maintaining backend modules using PHP and MySQL.",
    "Enhancing existing frontend components for better responsiveness and usability using HTML, CSS, Bootstrap, and JavaScript.",
    "Managing secure online payment workflows for course fee transactions.",
    "Handling application logic, sessions, validations, and database optimizations.",
    "Fixing production-level bugs and improving overall system stability.",
    "Coordinating with administrative and technical teams for feature updates and deployments."
  ],
  achievements: [
    "Transitioned from intern to full-time developer based on performance and contribution.",
    "Improved reliability of the SkillHub portal through continuous bug fixes and enhancements.",
    "Optimized payment and application workflows for smoother student onboarding.",
    "Played a key role in maintaining a production-level government platform."
  ],
  technologies: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "PHP",
    "MySQL",
    "SQL",
    "PayU"
  ],
  companyUrl: "https://www.nielit.gov.in/gorakhpur/index.php"
}

  ];
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'HTML,CSS,React, Javascript, Tailwind CSS, Next.js',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, MySQL,PHP',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS, Android',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, User Research, Prototyping',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const education = [
    {
      degree: 'M.Tech(Computer Science)(NIELIT C-LEVEL(IT))',
      institution: 'National Institute Of Electronics and Information Technology (NIELIT) New Delhi',
      year: '2025-Present',
      achievements: [
        'Appearing',
        // 'Research in Machine Learning and AI',
        // 'Published 3 papers in top-tier conferences',
        // 'Teaching Assistant for Advanced Algorithms'
      ],
      coreSubjects: [
        'Advanced Computer Graphics  ',
        'Advanced Computer Networks ',
        'Mathematical Methods for Computing  ',
        'Advanced Algorithms ',
        'Data Warehousing and Data Mining ',
        'Multimedia Systems  ',
        'Digital Image Processing and Computer Vision  ',
        'Information Security ',
        'Soft Computing ',
        'Software Systems  ',
        'Machine Learning',
        'Digital Signal Processing '
    
      ],
      link: '',
      linkText: 'Certificate',
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'MCA(NIELIT B-LEVEL(IT))',
      institution: 'National Institute Of Electronics and Information Technology (NIELIT) Gorakhpur',
      year: '2022 - 2025',
      achievements: [
        'Graduated  with 74%',
        // 'Research in Machine Learning and AI',
        // 'Published 3 papers in top-tier conferences',
        // 'Teaching Assistant for Advanced Algorithms'
      ],
      coreSubjects: [
        'Management Fundamentals & Information Systems ',
        'Discrete Structures ',
        'Software Engineering ',
        'Operating Systems ',
        'Computer based Statistical & Numerical Methods',
        'Professional & Business Communication ',
        'Advanced Database Technologies ',
        'Computer Graphics & Multimedia ',
        'IOT & Cloud Services',
        'Software Project Management ',
        'Artificial Intelligence and Machine Learning',
        'Web Technologies',
        'Employability Skills'
      ],
      link: 'https://www.dropbox.com/scl/fi/9jza1dgsowjxx5ia07ydt/B-LevelCertificate.pdf?rlkey=8l50lkv46ichaev5abgfux1qd&st=6eyc0onv&dl=0',
      linkText: 'Certificate',
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Bachelor of Science in Mathematics and Computing',
      institution: 'Siddharth University, Siddharth Nagar',
      year: '2021 - 2024',
      achievements: [
        'Graduated  with 7.75 CGPA',
        // 'President of Computer Science Society',
        // 'Winner of Annual Hackathon 2019',
        // "Dean's List for 6 consecutive semesters"
      ],
      coreSubjects: [
        // 'Data Structures & Algorithms',
        // 'Software Engineering',
        // 'Computer Networks',
        // 'Operating Systems',
        // 'Web Development'
      ],
      link: 'https://www.dropbox.com/scl/fi/v49cgcq5m9fygetysy3xq/B.scFinalGradeSheet.pdf?rlkey=ej25vywfwbsb94dnmyf0mt2wo&st=0ax1sgf4&dl=0',
      linkText: 'Certificate',
      color: 'from-emerald-500 to-blue-500'
    },
    {
      degree: 'NIELIT A-LEVEL(IT) (Equi. to Adv. Diploma In Computer Application)',
      institution: 'National Institute Of Electronics and Information Technology (NIELIT) Gorakhpur',
      year: '2019-2021',
      achievements: [
        'Passed with 74 %',
        // 'Built 5 full-stack applications',
        // 'Mentored junior developers',
        // 'Certificate of Excellence'
      ],
      coreSubjects: [
        'Computer System Architecture',
        'Structured System Analysis & Design ',
        ' Data Structure through C++ ',
        'Introduction to DBMS ',
        'Basics of OS, Unix & Shell Programming ',
        'Data Communication and Network Technologies ',
        'Introduction to Object Oriented Programming Through JAVA'
      ],
      link: 'https://www.dropbox.com/scl/fi/4zrelzpdz2ujgtqe918dx/A_LEVEL.pdf?rlkey=gbk9hos7yzw84ds0k1nh5h7or&st=2lhugbll&dl=0',
      linkText: 'Certificate',
      color: 'from-purple-500 to-pink-500'
    },
    // {
    //   degree: 'NIELIT O-LEVEL(IT) (Equi. to Diploma in Computer Application)',
    //   institution: 'National Institute Of Electronics and Information Technology (NIELIT) Gorakhpur',
    //   year: '2017-2019',
    //   achievements: [
    //     'Passed with 74 %',
    //     // 'Built 5 full-stack applications',
    //     // 'Mentored junior developers',
    //     // 'Certificate of Excellence'
    //   ],
    //   coreSubjects: [
    //     'Programming through Python',
    //     'Information Communication Technology',
    //     ' Internet Technology and Web Design',
    //     // 'Introduction to DBMS ',
        
    //   ],
    //   link: 'https://www.dropbox.com/scl/fi/026vvlm80g76473lpapes/O_LEVEL_SIgned.pdf?rlkey=me6yri7wy7yvvm447f87j9zwv&st=wri4mdod&dl=0',
    //   linkText: 'Certificate',
    //   color: 'from-purple-500 to-pink-500'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Passionate Developer & Creative Thinker
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello, I'm Abhishek Yadav, a professional with a background in computer science. I completed my B-LEVEL(IT) course from National Institute of Electronics and Information Technology. This course is Professionally equivalent to a Master of Computer Applications (MCA).My expertise lies in full-stack web development. I'm proficient in both frontend and backend technologies, allowing me to create robust and interactive web applications. My skill set includes but is not limited to HTML, CSS, JavaScript for frontend development, and technologies such as Node.js, Express.js, and databases like MongoDB or SQL for backend development. Additionally, I have experience working with frameworks like React.js and Next.js, which enables me to build dynamic and scalable web solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {['HTML','CSS','JavaScript', 'React', 'Node.js','PHP','MongoDB', 'MySQL', 'SQL','TypeScript', 'Vercel'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Working"
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
          </div>
          {/* 🔹 Work Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {workExperience.map((work) => (
              <div
                key={work.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {work.position}
                    </h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {work.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {work.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {work.location}
                      </div>
                    </div>
                  </div>
                  <a
                    href={work.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 mt-4 lg:mt-0 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Visit Company
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Responsibilities & Achievements */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-2">
                      {work.responsibilities.map((res, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {work.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>


          {/* Education */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
                Education & Achievements
              </h3>
              <div className="w-40 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} className="relative" variants={itemVariants}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.year}</span>
                        </div>
                        {/* Degree Link */}
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                        >
                          <LinkIcon className="w-4 h-4 mr-2" />
                          {edu.linkText}
                        </a>
                      </div>
                      <div className={`hidden lg:block w-20 h-20 bg-gradient-to-r ${edu.color} rounded-2xl flex-shrink-0 ml-6`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <GraduationCap className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Achievements + Core Subjects */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        {edu.achievements.map((ach, i) => (
                          <motion.div key={i} className="flex items-start space-x-3 mb-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                            <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{ach}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Core Subjects</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coreSubjects.map((subject, i) => (
                            <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, i) => (
              <motion.div key={i} className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700" variants={itemVariants} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.3 }}>
                <motion.div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6`} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
