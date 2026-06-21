export default function BrainGym() {
  return (
    <div className="min-h-screen bg-[#eef7f8] px-18">

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-[35px] p-10 mb-8">

        <h1 className="text-3xl font-bold text-slate-800 mb-4">
            🧠 Brain Gym
        </h1>

        <p className="text-xl text-slate-600">
          Keep your mind active, one gentle step at a time.
        </p>

      </div>

    <div className="bg-white rounded-[30px] px-17">
        <section className="mt-8">

            <div className="bg-white rounded-[35px] p-6 shadow-sm">

                <div className="flex justify-between items-center mb-6">

                <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                    🌟 Today's Featured Challenge
                    </h2>

                    <p className="text-slate-500 mt-2">
                    A gentle activity selected for you.
                    </p>
                </div>

                <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full">
                    5 min
                </div>

                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-[25px] p-6">

                <h3 className="text-xl font-bold mb-3">
                    Name the Object
                </h3>

                <p className="text-slate-600 mb-6">
                    Look at the picture and choose the correct answer.
                </p>

                <div className="flex items-center gap-6">

                    <div className="w-28 h-28 rounded-[20px] bg-white flex items-center justify-center text-5xl shadow-sm">
                    🌻
                    </div>

                    <button className="bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600">
                    Start Challenge →
                    </button>

                </div>

                </div>

            </div>

        </section>
        <section className="mt-8">

            <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white rounded-[30px] p-6 shadow-sm">

                <h3 className="text-2xl font-bold mb-4">
                    📈 Weekly Progress
                </h3>

                <div className="flex justify-between mb-2">
                    <span>Activities Completed</span>
                    <span className="font-semibold text-sky-600">
                    65%
                    </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-sky-500 h-3 rounded-full w-[65%]"></div>
                </div>

                </div>

                <div className="bg-white rounded-[30px] p-6 shadow-sm">

                <h3 className="text-2xl font-bold mb-4">
                    🏆 Achievement
                </h3>

                <div className="text-4xl mb-3">🔥</div>

                <h4 className="font-semibold">
                    3 Day Streak
                </h4>

                <p className="text-slate-500 mt-2">
                    Great job staying consistent.
                </p>

                </div>

            </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
                🧩 Cognitive Activities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Memory Match */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-md transition">

                <div className="text-5xl mb-4">🃏</div>

                <h3 className="text-xl font-bold mb-2">
                    Memory Match
                </h3>

                <p className="text-slate-500 mb-4">
                    Match cards and improve memory recall.
                </p>

                <button className="text-sky-600 font-semibold">
                    Start →
                </button>

                </div>

                {/* Word Recall */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-md transition">

                <div className="text-5xl mb-4">🔤</div>

                <h3 className="text-xl font-bold mb-2">
                    Word Recall
                </h3>

                <p className="text-slate-500 mb-4">
                    Remember and repeat simple words.
                </p>

                <button className="text-sky-600 font-semibold">
                    Start →
                </button>

                </div>

                {/* Face Recognition */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-md transition">

                <div className="text-5xl mb-4">👤</div>

                <h3 className="text-xl font-bold mb-2">
                    Face Recognition
                </h3>

                <p className="text-slate-500 mb-4">
                    Identify familiar faces and loved ones.
                </p>

                <button className="text-sky-600 font-semibold">
                    Start →
                </button>

                </div>

                {/* Number Challenge */}
                <div className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-md transition">

                <div className="text-5xl mb-4">🔢</div>

                <h3 className="text-xl font-bold mb-2">
                    Number Challenge
                </h3>

                <p className="text-slate-500 mb-4">
                    Practice counting and simple calculations.
                </p>

                <button className="text-sky-600 font-semibold">
                    Start →
                </button>

                </div>

            </div>

        </section>
        <section className="mt-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
                📊 Your Progress
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white rounded-[25px] p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🧩</div>
                <h3 className="text-3xl font-bold text-sky-600">
                    12
                </h3>
                <p className="text-slate-500 mt-2">
                    Activities Done
                </p>
                </div>

                <div className="bg-white rounded-[25px] p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="text-3xl font-bold text-orange-500">
                    3
                </h3>
                <p className="text-slate-500 mt-2">
                    Day Streak
                </p>
                </div>

                <div className="bg-white rounded-[25px] p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-3xl font-bold text-green-600">
                    82%
                </h3>
                <p className="text-slate-500 mt-2">
                    Accuracy
                </p>
                </div>

                <div className="bg-white rounded-[25px] p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-3xl font-bold text-purple-600">
                    5
                </h3>
                <p className="text-slate-500 mt-2">
                    Achievements
                </p>
                </div>

            </div>

        </section>

    </div>
        <section className="mt-8 mb-12 px-8">

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-[35px] p-8">

                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                🌱 Great Work!
                </h2>

                <p className="text-slate-600 text-lg">
                Every exercise strengthens memory, confidence and independence.
                Keep going — you're doing amazing.
                </p>

            </div>

        </section>
    </div>
  );
}