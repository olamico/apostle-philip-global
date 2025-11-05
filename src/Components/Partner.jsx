import { useForm } from "react-hook-form";
const Partner = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onsubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Partner with Us
        </h2>

        <form
          target="_blank"
          onSubmit={onsubmit}
          action="https://formsubmit.co/23a12abb094a5399f05f4eb318ce115c"
          method="POST"
          className="space-y-5"
        >
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true, maxLength: 100 })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.type === "required" && "Name is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                maxLength: 100,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.type === "required" && "Email is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              {...register("message", { required: true, maxLength: 2000 })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.type === "required" && "Message is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Partner;
