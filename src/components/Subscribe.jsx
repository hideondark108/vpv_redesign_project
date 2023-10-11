import styles from "../style";

const Subscribe = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} justify-center`}
    style={{
      position: "relative",
      backgroundImage: 'url("http://www.vpv.vn/images/register.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 0,
      }}
    ></div>
    <div style={{ zIndex: 1 }}>
      <div className="max-w-md mx-auto">
        <form
          className=" shadow-md rounded px-8 pt-6 pb-8"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="program"
            >
              Select Program
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="program"
            >
              <option value="">Select a program</option>
              <option value="program1">
                Volunteer Abroad – International Cultural Youth Exchange
              </option>
              <option value="program2">VPV Club</option>
              <option value="program3">Individual Volunteer Program</option>
              <option value="program4">Workcamp – Group program</option>
            </select>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              rows="4"
              placeholder="Enter your comment"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-gradient hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
