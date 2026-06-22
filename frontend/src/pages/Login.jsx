import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
const navigate = useNavigate();
const [role, setRole] = useState("");
const [isSignIn, setIsSignIn] = useState(true);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
if (!role) {
        alert("Please select Patient or Caregiver");
        return;
    }

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name should contain only letters");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }
  try {

    const endpoint = isSignIn
    ? "http://localhost:5000/login"
    : "http://localhost:5000/register";

    const response = await fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },

    body: JSON.stringify({
        name,
        email,
        password,
        role,
    }),
    });

    const data = await response.json();

    if (!response.ok) {
        alert(data.message);
        return;
    }

    if (!isSignIn) {
        alert("Account created successfully!");

        setIsSignIn(true);

        return;
    }
    if (data.role === "patient") {
        localStorage.setItem("user",JSON.stringify(data.patient));
        navigate("/patient");
    } else {
        localStorage.setItem("user",JSON.stringify(data.patient));
        navigate("/caregiver");
    }

  } catch (error) {

    console.error(error);

    alert("Server connection failed");

  }
};

return ( <div className="min-h-screen bg-[#eaf4f7] flex">


  {/* LEFT SIDE */}

  <div className="w-1/2 flex flex-col justify-center px-16">

    <div className="flex items-center gap-4 mb-10">
      <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-2xl">
        🤍
      </div>

      <h1 className="text-3xl font-bold text-slate-900">
        MemoMoss AI
      </h1>
    </div>

    <h2 className="text-5xl font-bold text-slate-900 leading-tight">
      A gentle companion,
      <br />
      always by your side.
    </h2>

    <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
      MemoMoss helps you remember the people,
      moments and little routines that make every day
      feel easier — together with the family who loves you.
    </p>

    <div className="mt-8 space-y-4 text-lg">

      <div className="flex items-center gap-4">
        ✨ Friendly daily reminders
      </div>

      <div className="flex items-center gap-4">
        👨‍👩‍👧 Family stays connected
      </div>

      <div className="flex items-center gap-4">
        🛡️ Private and secure
      </div>

    </div>

  </div>

  {/* RIGHT SIDE */}

  <div className="w-1/2 flex items-center justify-center py-7">

    <div className="bg-white w-[520px] rounded-[32px] shadow-lg p-8">

      <h2 className="text-3xl font-bold text-slate-900">
        {isSignIn ? "Welcome back" : "Create your account"}
      </h2>

      <p className="text-slate-500 mt-2 mb-8 text-lg">
        {isSignIn
          ? "Sign in to continue your gentle journey."
          : "A safe space for patients and caregivers."}
      </p>

      {/* TOGGLE */}

      <div className="bg-blue-100 rounded-full p-1 flex mb-8">

        <button
          onClick={() => setIsSignIn(true)}
          className={`flex-1 py-4 rounded-full text-lg font-semibold ${
            isSignIn ? "bg-white shadow" : ""
          }`}
        >
          Sign in
        </button>

        <button
          onClick={() => setIsSignIn(false)}
          className={`flex-1 py-4 rounded-full text-lg font-semibold ${
            !isSignIn ? "bg-white shadow" : ""
          }`}
        >
          Create account
        </button>

      </div>

      {/* ROLE */}

      <p className="font-semibold mb-3">I am a...</p>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <button
        onClick={() => setRole("patient")}
        className={`
            flex-1 p-6 rounded-3xl border-2 transition-all
            ${
            role === "patient"
                ? "border-sky-400 bg-sky-50"
                : "border-slate-200 bg-white"
            }
        `}
        >
        <h3 className="text-2xl font-bold">Patient</h3>

        <p className="text-slate-500 mt-2">
            Using MemoMoss for myself
        </p>
        </button>

        <button
        onClick={() => setRole("caregiver")}
        className={`
            flex-1 p-6 rounded-3xl border-2 transition-all
            ${
            role === "caregiver"
                ? "border-sky-400 bg-sky-50"
                : "border-slate-200 bg-white"
            }
        `}
        >
        <h3 className="text-2xl font-bold">Caregiver</h3>

        <p className="text-slate-500 mt-2">
            Supporting a loved one
        </p>
        </button>

      </div>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-full px-6 py-4 mb-4"
     />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-full px-6 py-4 mb-4"
     />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-full px-6 py-4 mb-6"
     />

      <button
        onClick={handleLogin}
        className="w-full py-4 rounded-full bg-sky-500 text-white font-semibold"
        >
        {isSignIn ? "Sign In" : "Create Account"}
    </button>

    </div>

  </div>

</div>


);
}
