import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
// import "./Register.css";

export default function CreateSleep({ user, setUser }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    start_time: "",
    end_time: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Passwords do not match.",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsProcessing(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }
    const { data, error } = await apiClient.createSleep({
      start_time: form.start_time,
      end_time: form.end_time,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data) {
      navigate("/sleep");
    }
    setIsProcessing(false);
  };

  return (
    <div className="Register">
      <div className="card">
        <h2>New Sleep</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="name">Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              placeholder="Enter the start time"
              value={form.start_time}
              onChange={handleOnInputChange}
            />
            {errors.start_time && (
              <span className="error">{errors.start_time}</span>
            )}
          </div>
          <div className="input-field">
            <label htmlFor="category">End Time</label>
            <input
              type="datetime-local"
              name="end_time"
              placeholder="Enter the end time"
              value={form.end_time}
              onChange={handleOnInputChange}
            />
            {errors.end_time && (
              <span className="error">{errors.end_time}</span>
            )}
          </div>
          {/* <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="name">Duration In Minutes</label>
              <input
                type="number"
                name="duration"
                min="1"
                value={form.duration}
                onChange={handleOnInputChange}
              />
              {errors.duration && (
                <span className="error">{errors.duration}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="name">Intensity</label>
              <input
                type="number"
                name="intensity"
                max="10" min="0"
                value={form.intensity}
                onChange={handleOnInputChange}
              />
              {errors.intensity && (
                <span className="error">{errors.intensity}</span>
              )}
            </div>
          </div> */}

          {/* <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && (
              <span className="error">{errors.passwordConfirm}</span>
            )}
          </div> */}

          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Save"}
          </button>
        </div>

        {/* <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
