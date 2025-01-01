import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <Image
          src="/personal-portfolio/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="mx-auto rounded-full mb-6"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Alp Tamer</h1>
        <h2 className="text-xl text-gray-600 mb-4">AI & Computer Vision Engineer</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
        I have worked in 3 companies in Computer Vision and Machine Learning for about 3 years and continue to work in one of them. I am actively working on ML pipelines in this company, which provides retail companies with AI-supported shelf product reporting services
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900">
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Gmail
            </span>
          </a>
          <a href="https://github.com/Alparslan-Tamer" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </span>
          </a>
          <a href="https://www.linkedin.com/in/alparslantamer/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </span>
          </a>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">EXPERIENCE</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">CV & ML Engineer</h3>
              <p className="text-gray-600">Vispera • 2023 - Present</p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>We have made optimizations and improvements on ML pipelines (Recognition, Reading, and Detection
                  Tasks). After these operations, we have achieved a nearly 80 percent reduction in GPU expenses on Azure.</li>
                <li>We performed filtering and data balancing tasks for the data used in model training. With this preprocessing of the data, we saved a lot of model training time.</li>
                <li>We developed the Similarity Sorting Project, which saved a lot of money on the data labeling budget.</li>
                <li>I have been involved in the research and code implementation of new models for Recognition, Detection,
                and Reading tasks.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tensorflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Azure ML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">QDrant</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Microsoft Azure</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Open Metric Learning</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">AI & Computer Vision Engineer</h3>
              <p className="text-gray-600">MOVE ON • 2022 - 2023</p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>I was the main contributor to the TASAI autonomous tractor kit project, where I played a key role in Image
Processing and Model development. This product was a great success in the field and is now actively
sold around the world.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PyQt5</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Computer Vision Engineer</h3>
              <p className="text-gray-600">Ravinspect Tech • 2022 - 2023</p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>My main task can be summarized as processing images taken by the drone during the warehouse count
with image processing techniques, obtaining the desired information from these images with the support
of artificial intelligence, and making improvements</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ROS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tensorflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pytorch</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-sm">PyTorch, TensorFlow, Open Metric Learning</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Computer Vision</h3>
              <p className="text-gray-600 text-sm">OpenCV, Image Processing, Object Detection</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Cloud & DevOps</h3>
              <p className="text-gray-600 text-sm">Azure ML, AWS, Docker</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Programming</h3>
              <p className="text-gray-600 text-sm">Python, ROS, PyQt5</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Databases</h3>
              <p className="text-gray-600 text-sm">PostgreSQL, QDrant</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Tools & Frameworks</h3>
              <p className="text-gray-600 text-sm">Git, Linux, CI/CD</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">EDUCATION</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Electronics and Communication Engineering</h3>
            <p className="text-gray-600">Kocaeli University • 2016 - 2022</p>
            <p className="mt-2 text-gray-700">GPA: 2.9/4.0</p>
          </div>
        </section>
      </main>
    </div>
  );
}
