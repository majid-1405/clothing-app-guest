export default function ContactPage() {
  return (
    <section className="bg-white border border-gray-100 rounded-xl mt-30 mb-20 mx-6">
      <div className="container px-6 py-6 mx-auto">
        <div>
          <p className=" text-gray-900 font-integral text-3xl">Contact us</p>
          <h1 className="mt-2 font-semibold text-gray-800 md:text-xl">
            Chat to our team
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Wed love to hear from you. Please fill out this form or shoot us an email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              {
                title: "Email",
                description: "Our friendly team is here to help.",
                value: "hello@merakiui.com",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                ),
              },
              {
                title: "Live chat",
                description: "Our friendly team is here to help.",
                value: "Start new chat",
                icon: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </>
                ),
              },
              {
                title: "Office",
                description: "Come say hello at our office HQ.",
                value: "100 Smith Street Collingwood VIC 3066 AU",
                icon: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </>
                ),
              },
              {
                title: "Phone",
                description: "Mon-Fri from 8am to 5pm.",
                value: "+1 (555) 000-0000",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                ),
              },
            ].map((item, i) => (
              <div key={i}>
                <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    {item.icon}
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 ">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                <p className="mt-2 text-sm text-gray-900 ">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-4 py-6 rounded-lg bg-gray-100 ">
            <form>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-900 ">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-900 ">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                <textarea
                  placeholder="Message"
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition font-gothic"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


