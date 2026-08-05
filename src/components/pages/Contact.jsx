import React, { useEffect, useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
};

const initialState = {
  alertStatus: false,
  message: "",
  style: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "warning":
      return {
        alertStatus: true,
        message: action.payload,
        style: "bg-yellow-100 text-yellow-700",
      };

    case "error":
      return {
        alertStatus: true,
        message: action.payload,
        style: "bg-red-100 text-red-700",
      };

    case "success":
      return {
        alertStatus: true,
        message: action.payload,
        style: "bg-green-100 text-green-700",
      };

    case "hide":
      return {
        ...state,
        alertStatus: false,
      };

    default:
      return state;
  }
};

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = "Contact | Onuoha Jephthah";
  }, []);

  // Hide alert after 3 seconds
  useEffect(() => {
    if (!state.alertStatus) return;

    const timer = setTimeout(() => {
      dispatch({ type: "hide" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.alertStatus]);

  const handleInputChange = (input) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user_name, user_email, subject, message } = formData;

    if (
      !user_name.trim() ||
      !user_email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      dispatch({
        type: "warning",
        payload: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user_email)) {
      dispatch({
        type: "error",
        payload: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      dispatch({
        type: "success",
        payload: "Your message has been sent successfully!",
      });

      setFormData(initialForm);
    } catch (error) {
      console.error(error);

      dispatch({
        type: "error",
        payload: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 px-6 pb-16 md:px-[8.5rem] h-auto md:h-screen flex flex-col justify-center">
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Contact Me</h1>

        <p className="mt-3 text-lg">
          Do you have a project in mind? Send me a message.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="my-8 w-full md:w-[60%] mx-auto"
      >
        {state.alertStatus && (
          <div
            className={`${state.style} py-4 px-4 rounded-lg text-center font-semibold mb-5`}
          >
            {state.message}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange("user_name")}
              placeholder="Enter full name"
              className="w-full p-4 rounded-lg bg-bgLessDark outline-none focus:outline-main transition-all"
              disabled={loading}
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange("user_email")}
              placeholder="Enter email address"
              className="w-full p-4 rounded-lg bg-bgLessDark outline-none focus:outline-main transition-all"
              disabled={loading}
            />
          </div>
        </div>

        <div className="my-4">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange("subject")}
            placeholder="Enter email subject"
            className="w-full p-4 rounded-lg bg-bgLessDark outline-none focus:outline-main transition-all"
            disabled={loading}
          />
        </div>

        <div className="my-4">
          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleInputChange("message")}
            placeholder="Enter your message"
            className="w-full p-4 rounded-lg bg-bgLessDark outline-none focus:outline-main transition-all resize-none"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-24 rounded-lg font-semibold block mx-auto transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-main hover:bg-mainDark hover:text-white"
          }`}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Submit <i className="ri-send-plane-2-line"></i>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;