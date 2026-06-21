export default function CaregiverDash() {
  return (
    <div className="min-h-screen bg-[#eef7f8] pb-32">

      <div className="max-w-[1400px] mx-auto px-8">

        {/* Welcome Card */}
        <section className="mt-8">

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-[35px] p-8 shadow-sm">

            <p className="text-slate-600 mb-3">
              Caregiver Dashboard
            </p>

            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Good Afternoon, Ananya 👋
            </h1>

            <p className="text-slate-600 text-lg">
              Here's how Mr. Sharma is doing today.
            </p>

          </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold mb-6">
                Patient Status
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white rounded-[25px] p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                    Last Active
                </h3>
                <p className="text-sky-600 text-2xl font-bold">
                    10 mins ago
                </p>
                </div>

                <div className="bg-white rounded-[25px] p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                    Mood
                </h3>
                <p className="text-green-600 text-2xl font-bold">
                    😊 Happy
                </p>
                </div>

                <div className="bg-white rounded-[25px] p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                    Tasks Completed
                </h3>
                <p className="text-purple-600 text-2xl font-bold">
                    3 / 4
                </p>
                </div>

            </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold mb-6">
                Quick Actions
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                {[
                "⏰ Add Reminder",
                "📸 Add Memory",
                "👨‍👩‍👧 Manage Family",
                "📊 View Reports"
                ].map((item) => (
                <div
                    key={item}
                    className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md cursor-pointer"
                >
                    {item}
                </div>
                ))}

            </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold mb-6">
                Today's Reminders
            </h2>

            <div className="bg-white rounded-[30px] p-6 shadow-sm">

                <ul className="space-y-4">

                <li>💊 Morning Medicine — Completed</li>
                <li>💧 Drink Water — Completed</li>
                <li>🚶 Garden Walk — Pending</li>
                <li>📞 Video Call with Ananya — Pending</li>

                </ul>

            </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold mb-6">
                Recent Memories
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {[
                "🎂 Birthday Celebration",
                "🌊 Walk by the Sea",
                "☕ Tea with Rohan"
                ].map((item) => (
                <div
                    key={item}
                    className="bg-white rounded-[25px] p-6 shadow-sm"
                >
                    {item}
                </div>
                ))}

            </div>

        </section>
        <section className="mt-8 mb-12">

            <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-[35px] p-8">

                <h2 className="text-3xl font-bold mb-4">
                ⚠ Insights & Alerts
                </h2>

                <ul className="space-y-3 text-slate-700">

                <li>• Water reminder completed on time.</li>
                <li>• Patient missed one activity yesterday.</li>
                <li>• Brain Gym participation increased by 15%.</li>

                </ul>

            </div>

        </section>
         </div>
    </div>
  );
}