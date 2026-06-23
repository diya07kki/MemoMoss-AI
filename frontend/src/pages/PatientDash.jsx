import { useNavigate } from "react-router-dom";
export default function PatientDash() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        navigate("/");
        return null;
    }

    const surname = user?.name?.split(" ")[0] || "Friend";
    
    const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    };
    const now = new Date();

    const currentDate = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    });

    const currentTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    });
  return (
    <div className="min-h-screen bg-[#eef7f8] pt-28">

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

                {/* Left Side */}
                <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-2xl">
                    ✨
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                    MemoMoss AI
                    </h1>

                    <p className="text-slate-500">
                    Your gentle companion
                    </p>
                </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                <div className="text-right">
                    <h3 className="font-semibold text-slate-700">
                    {currentDate}
                    </h3>

                    <p className="text-slate-500">
                    {currentTime}
                    </p>
                </div>

                <button className="w-12 h-12 rounded-full bg-sky-100">
                    🔔
                </button>

                <button className="w-12 h-12 rounded-full bg-sky-100">
                    ⚙️
                </button>

                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold">
                    S
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium hover:bg-red-200"
                    >
                    Logout
                </button>
                </div>

            </div>

        </header>

      {/* Welcome Card */}
    <section className="px-30">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-[40px] p-10 flex justify-between items-center shadow-sm">

            <div>
                <div className="inline-block bg-white px-4 py-2 rounded-full text-sky-700 mb-5">
                ✨ Sunday 21 June
                </div>

                <h2 className="text-6xl font-bold text-slate-800 mb-5">
                Good Afternoon, {surname} 😊
                </h2>

                <p className="text-2xl text-slate-600 max-w-3xl">
                I'm here whenever you need me.
                We'll take today nice and gentle, together.
                </p>
            </div>

            <div className="relative">
                <div className="absolute -top-4 right-0 bg-yellow-200 px-4 py-2 rounded-full">
                Hello!
                </div>

                <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center text-8xl shadow-lg">
                🌱
                </div>
            </div>

        </div>
    </section>

      {/* Chat */}
    <section className="px-30 py-8">
        <div className="bg-white rounded-[35px] p-8 shadow-sm mt-8">

            <div className="flex items-center justify-between mb-6">
                <div>
                <h2 className="text-3xl font-bold text-slate-800">
                    Talk with MemoMoss
                </h2>

                <p className="text-slate-500 mt-2">
                    Ask me anything — I'm listening with care.
                </p>
                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                ● Listening
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <input
                type="text"
                placeholder="Ask me anything..."
                className="w-full p-5 pl-6 rounded-full border border-sky-100 outline-none shadow-sm focus:ring-2 focus:ring-sky-200 transition"
                />

                <button
                    className="
                        h-14
                        px-8
                        rounded-full
                        bg-purple-100
                        text-purple-700
                        font-semibold
                        shadow-sm
                        hover:scale-105
                        transition
                    "
                    >
                    🎤 Speak
                    </button>

                    <button
                    className="
                        h-14
                        px-8
                        rounded-full
                        bg-sky-500
                        text-white
                        font-semibold
                        shadow-sm
                        hover:scale-105
                        transition
                    "
                    >
                    ✈️ Send
                    </button>
            </div>

            <h3 className="text-slate-600 font-semibold mb-4">
                Need a little help? Try asking:
            </h3>

            <div className="flex flex-wrap gap-3">

            {[
            "👤 Who is this person?",
            "📅 When did Ananya last visit?",
            "🕰️ What did I do yesterday?",
            "📸 Show me memories with Rohan",
            "💊 What medicine should I take now?",
            ].map((item) => (
            <button
                key={item}
                className="
                px-5 py-3
                rounded-full
                bg-white
                border border-sky-100
                hover:bg-sky-50
                hover:border-sky-300
                hover:scale-105
                transition-all
                duration-200
                shadow-sm
            "
            >
                {item}
            </button>
            ))}

            </div>

            </div>
    </section>

      {/* Quick Actions */}
    <section className="p-8">
        {/* Quick Actions */}
        <section className="px-26">

        <h2 className="text-4xl font-bold text-slate-800 mb-10">
            What would you like to do?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl mb-6">
                👨‍👩‍👧
            </div>

            <h3 className="text-2xl font-bold mb-3">
                Recognize Faces
            </h3>

            <p className="text-slate-500 mb-6">
                Help me remember someone.
            </p>

            <button className="text-sky-600 font-semibold">
                Open →
            </button>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-6">
                📖
            </div>

            <h3 className="text-2xl font-bold mb-3">
                Memory Timeline
            </h3>

            <p className="text-slate-500 mb-6">
                View important moments and memories.
            </p>

            <button className="text-sky-600 font-semibold">
                Open →
            </button>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-6">
                ❤️
            </div>

            <h3 className="text-2xl font-bold mb-3">
                My Family
            </h3>

            <p className="text-slate-500 mb-6">
                See trusted loved ones.
            </p>

            <button className="text-sky-600 font-semibold">
                Open →
            </button>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl mb-6">
                🧠
            </div>

            <h3 className="text-2xl font-bold mb-3">
                Brain Gym
            </h3>

            <p className="text-slate-500 mb-6">
                Keep your mind active.
            </p>

            <button onClick={() => navigate("/brain-gym")} className="text-sky-600 font-semibold">
                Open →
            </button>
            </div>

            <div
            onClick={() => navigate("/brain-gym")}
            className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-md transition cursor-pointer"
            >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-3xl mb-6">
                🚨
            </div>

            <h3 className="text-2xl font-bold mb-3">
                Emergency SOS
            </h3>

            <p className="text-slate-500 mb-6">
                Get help quickly when needed.
            </p>

            <button className="text-sky-600 font-semibold">
                Open →
            </button>
            </div>

        </div>
    </section>
    </section>

      {/* Reminders */}
    
    <section className="px-30 py-6">

        <div className="flex justify-between items-center mb-8">
            <div>
            <h2 className="text-4xl font-bold text-slate-800">
                Today's gentle reminders
            </h2>

            <p className="text-slate-500 mt-2">
                Sent with love from your family.
            </p>
            </div>

            <p className="text-slate-500 text-lg">
            0 of 4 done
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                🌻
                </div>

                <div>
                <p className="text-slate-500">9:00 AM</p>
                <h3 className="text-3xl font-bold">
                    Time for your medicine
                </h3>
                </div>
            </div>

            <p className="text-slate-500 mb-4">
                Ananya wanted to remind you ❤️ — one blue pill with water.
            </p>

            <div className="inline-block bg-sky-100 text-slate-700 px-4 py-2 rounded-full mb-6">
                ❤️ Ananya, your daughter
            </div>

            <div className="flex gap-4">
                <button className="bg-sky-500 text-white px-6 py-3 rounded-full">
                ✓ Mark completed
                </button>

                <button className="border px-6 py-3 rounded-full">
                Remind me later
                </button>
            </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-3xl">
                💧
                </div>

                <div>
                <p className="text-slate-500">10:30 AM</p>
                <h3 className="text-3xl font-bold">
                    A little sip of water
                </h3>
                </div>
            </div>

            <p className="text-slate-500 mb-6">
                Staying hydrated helps you feel bright and well.
            </p>

            <div className="flex gap-4">
                <button className="bg-sky-500 text-white px-6 py-3 rounded-full">
                ✓ Mark completed
                </button>

                <button className="border px-6 py-3 rounded-full">
                Remind me later
                </button>
            </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🚶
                </div>

                <div>
                <p className="text-slate-500">11:15 AM</p>
                <h3 className="text-3xl font-bold">
                    A gentle walk in the garden
                </h3>
                </div>
            </div>

            <p className="text-slate-500 mb-4">
                Rohan said the marigolds are blooming today.
            </p>

            <div className="inline-block bg-sky-100 text-slate-700 px-4 py-2 rounded-full mb-6">
                ❤️ Rohan, your son
            </div>

            <div className="flex gap-4">
                <button className="bg-sky-500 text-white px-6 py-3 rounded-full">
                ✓ Mark completed
                </button>

                <button className="border px-6 py-3 rounded-full">
                Remind me later
                </button>
            </div>

            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                📞
                </div>

                <div>
                <p className="text-slate-500">4:00 PM</p>
                <h3 className="text-3xl font-bold">
                    Video call with Ananya
                </h3>
                </div>
            </div>

            <p className="text-slate-500 mb-4">
                She's looking forward to hearing about your day.
            </p>

            <div className="inline-block bg-sky-100 text-slate-700 px-4 py-2 rounded-full mb-6">
                ❤️ Ananya, your daughter
            </div>

            <div className="flex gap-4">
                <button className="bg-sky-500 text-white px-6 py-3 rounded-full">
                ✓ Mark completed
                </button>

                <button className="border px-6 py-3 rounded-full">
                Remind me later
                </button>
            </div>

            </div>

        </div>

    </section>

      {/* Memories */}
    {/* Recent Memories */}
    <section className="px-32 py-8">

    <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-800">
        Recent memories
        </h2>

        <p className="text-slate-500 mt-2">
        Little moments worth holding on to.
        </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

        {/* Memory 1 */}
        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition">

        <div className="h-44 bg-gradient-to-r from-yellow-100 to-purple-100 flex items-center justify-center text-6xl">
            🎂
        </div>

        <div className="p-6">
            <p className="text-slate-500 uppercase text-sm">
            June 10, 2026
            </p>

            <h3 className="text-3xl font-bold mt-2 mb-3">
            Birthday Celebration
            </h3>

            <p className="text-slate-500 mb-5">
            The whole family came over with marigolds and cake.
            </p>

            <div className="flex gap-4 text-slate-500 text-sm mb-5">
            <span>📷 4 Photos</span>
            <span>🎥 2 Videos</span>
            <span>🎤 1 Voice</span>
            </div>

            <button className="w-full bg-sky-500 text-white py-3 rounded-full">
            View Memory →
            </button>
        </div>

        </div>

        {/* Memory 2 */}
        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition">

        <div className="h-44 bg-gradient-to-r from-sky-100 to-green-100 flex items-center justify-center text-6xl">
            🌊
        </div>

        <div className="p-6">
            <p className="text-slate-500 uppercase text-sm">
            May 22, 2026
            </p>

            <h3 className="text-3xl font-bold mt-2 mb-3">
            A Walk by the Sea
            </h3>

            <p className="text-slate-500 mb-5">
            You and Margaret watched the sun dip into the water.
            </p>

            <div className="flex gap-4 text-slate-500 text-sm mb-5">
            <span>📷 12 Photos</span>
            <span>🎥 1 Video</span>
            <span>🎤 2 Voice</span>
            </div>

            <button className="w-full bg-sky-500 text-white py-3 rounded-full">
            View Memory →
            </button>
        </div>

        </div>

        {/* Memory 3 */}
        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition">

        <div className="h-44 bg-gradient-to-r from-green-100 to-purple-100 flex items-center justify-center text-6xl">
            ☕
        </div>

        <div className="p-6">
            <p className="text-slate-500 uppercase text-sm">
            May 8, 2026
            </p>

            <h3 className="text-3xl font-bold mt-2 mb-3">
            Tea with Rohan
            </h3>

            <p className="text-slate-500 mb-5">
            He brought your favourite biscuits and stayed all afternoon.
            </p>

            <div className="flex gap-4 text-slate-500 text-sm mb-5">
            <span>📷 6 Photos</span>
            <span>🎥 0 Videos</span>
            <span>🎤 1 Voice</span>
            </div>

            <button className="w-full bg-sky-500 text-white py-3 rounded-full">
            View Memory →
            </button>
        </div>

        </div>

    </div>

    </section>

      {/* Brain + Family */}
    {/* Brain Challenge + Family */}
    <section className="px-32 py-8">

    <div className="grid lg:grid-cols-2 gap-8">

        {/* Brain Challenge */}
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-[35px] p-8 shadow-sm">

        <div className="text-sky-700 font-semibold mb-4">
            🧠 TODAY'S BRAIN CHALLENGE
        </div>

        <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Name the object 🌸
        </h2>

        <p className="text-slate-600 mb-8">
            A short, friendly game — perfect with a cup of tea.
        </p>

        <div className="bg-white rounded-2xl p-5 mb-6">
            <div className="flex justify-between mb-3">
            <span className="text-slate-600">
                Your progress this week
            </span>

            <span className="font-semibold">
                65%
            </span>
            </div>

            <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-sky-500 rounded-full"></div>
            </div>
        </div>

        <button className="w-full bg-sky-500 text-white py-4 rounded-full text-xl font-semibold hover:bg-sky-600 transition">
            Start Challenge →
        </button>

        <p className="mt-6 text-slate-600">
            Great job keeping your mind active ☀️
        </p>

        </div>

        {/* Family */}
        <div className="bg-white rounded-[35px] p-8 shadow-sm">

        <div className="flex justify-between items-center mb-8">

            <div>
            <h2 className="text-4xl font-bold text-slate-800">
                People who love you
            </h2>

            <p className="text-slate-500 mt-2">
                Tap a face to hear from them.
            </p>
            </div>

            <button className="text-sky-600 font-semibold">
            See all
            </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
            ["A", "Ananya", "Daughter ❤️", "bg-purple-200"],
            ["R", "Rohan", "Son", "bg-sky-200"],
            ["M", "Margaret", "Wife", "bg-yellow-200"],
            ["D", "Dr. Allen", "Doctor", "bg-green-200"],
            ].map(([letter, name, role, color]) => (

            <div
                key={name}
                className="border border-blue-100 rounded-[25px] p-4 text-center hover:shadow-md transition"
            >

                <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-4 ${color}`}
                >
                {letter}
                </div>

                <h3 className="font-bold text-xl">
                {name}
                </h3>

                <p className="text-slate-500 mb-4">
                {role}
                </p>

                <div className="flex justify-center gap-3">

                <button className="w-10 h-10 rounded-full bg-sky-500 text-white">
                    ▶
                </button>

                <button className="w-10 h-10 rounded-full bg-sky-100">
                    📹
                </button>

                </div>

            </div>

            ))}

        </div>

        </div>

    </div>

    </section>

    {/* SOS Section */}
    <section className="px-32 py-8 pb-32">

    <div className="bg-gradient-to-r from-orange-50 to-orange-50 border border-red-100 rounded-[35px] p-10 shadow-sm">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            🚨 Emergency Support
            </div>

            <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Need help right now?
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl">
            If you're feeling confused, lost, unwell, or simply need assistance,
            MemoMoss can quickly alert your loved ones and emergency contacts.
            </p>
        </div>

        <div className="flex flex-col gap-4">

            <button className="
            bg-red-500
            hover:bg-red-600
            text-white
            font-semibold
            px-10
            py-5
            rounded-full
            shadow-md
            transition
            ">
            🚨 I Need Help
            </button>

            <button className="
            bg-white
            border border-red-200
            text-red-600
            font-semibold
            px-10
            py-5
            rounded-full
            ">
            📞 Call Family
            </button>

        </div>

        </div>

    </div>

    </section>

      {/* Bottom Nav */}
    <nav className=" fixed bottom-0 left-0 right-0 h-24 bg-white/50 backdrop-blur-md border-t border-slate-100 z-50 ">
        {/* Bottom Navigation Container */}
        <div className="h-full flex justify-center items-center gap-20">

            <button className="flex flex-col items-center text-sky-600">
                <div className="bg-sky-100 px-8 py-3 rounded-full">
                🏠
                </div>
                <span className="text-sm mt-1">Home</span>
            </button>

            <button className="flex flex-col items-center text-slate-500">
                <span className="text-xl">📸</span>
                <span className="text-sm">Memories</span>
            </button>

            <button className="flex flex-col items-center text-slate-500">
                <span className="text-xl">❤️</span>
                <span className="text-sm">Family</span>
            </button>

            <button className="flex flex-col items-center text-slate-500">
                <span className="text-xl">🧠</span>
                <span className="text-sm">Brain Gym</span>
            </button>

            <button className="flex flex-col items-center text-slate-500">
                <span className="text-xl">👤</span>
                <span className="text-sm">Profile</span>
            </button>

        </div>
    </nav>

    </div>
  );
}