import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.username.trim()) {
      setError("Username is required");
      return false;
    }

    if (!form.password.trim()) {
      setError("Password is required");
      return false;
    }

    if (form.password.length < 4) {
      setError("Password must be at least 4 characters");
      return false;
    }

    setError("");
    return true;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid login credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Server error. Try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mt-10">
        <Link
          to="/"
          className="px-4 py-2 text-white rounded-lg bg-gray-600"
        >
          Go to Home Page
        </Link>
      </div>

      <form
        onSubmit={login}
        className="max-w-sm mx-auto border-gray-200 mt-20 mb-20 border shadow-2xl
        flex flex-col py-5 px-8 rounded-xl"
      >
        <h3 className="font-bold mb-6 text-center">Admin Login</h3>

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <h3 className="font-semibold">Enter Username</h3>
        <input
          className="border border-gray-300 rounded px-2 py-1"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <h3 className="font-semibold mt-5">Enter Password</h3>
        <input
          className="border border-gray-300 rounded px-2 py-1"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-4 py-2 mt-5 rounded disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
