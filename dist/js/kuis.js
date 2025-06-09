// Data pertanyaan dan jawaban
const questions = [
  {
    question: "🛍️ Seberapa sering pakai kantong plastik?",
    options: [
      "Setiap hari",
      "3-4 kali seminggu",
      "1-2 kali seminggu",
      "Jarang",
      "Tidak pernah",
    ],
    scores: [1, 2, 3, 4, 5],
  },
  {
    question: "🚿 Berapa banyak air yang kamu pakai buat mandi?",
    options: [
      "Lebih dari 20 liter",
      "15-20 liter",
      "10-14 liter",
      "Kurang dari 10 liter",
      "Tidak tahu",
    ],
    scores: [1, 2, 3, 4, 2],
  },
  {
    question: "♻️ Sering nggak daur ulang sampah di rumah?",
    options: [
      "Tidak pernah",
      "Kadang-kadang",
      "Sering",
      "Selalu",
      "Belum pernah coba",
    ],
    scores: [1, 2, 4, 5, 1],
  },
  {
    question: "🚌 Sering naik transportasi umum atau naik sepeda?",
    options: [
      "Setiap hari",
      "3-4 kali seminggu",
      "1-2 kali seminggu",
      "Jarang",
      "Tidak pernah",
    ],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "💡 Biasanya hemat listrik nggak di rumah?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "📦 Sering beli barang dengan kemasan yang bisa didaur ulang?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🥬 Pilih beli produk lokal atau organik?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🌳 Sering nanam pohon atau tanaman di rumah?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🧹 Sering bersihin sampah di sekitar rumah?",
    options: [
      "Setiap hari",
      "Beberapa kali seminggu",
      "Seminggu sekali",
      "Sebulan sekali",
      "Tidak pernah",
    ],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🤝 Pernah ikut acara bersih-bersih lingkungan?",
    options: [
      "Sering",
      "Kadang-kadang",
      "Pernah sekali",
      "Tidak pernah",
      "Tidak tahu ada acara",
    ],
    scores: [5, 4, 3, 1, 1],
  },
  {
    question: "🗂️ Pernah pisahkan sampah organik dan anorganik?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question:
      "🌿 Pakai produk ramah lingkungan seperti tas belanja atau sabun eco-friendly?",
    options: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🍶 Sering bawa botol air minum sendiri buat kurangi plastik?",
    options: [
      "Setiap hari",
      "Sering",
      "Kadang-kadang",
      "Jarang",
      "Tidak pernah",
    ],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question: "🛒 Coba nggak beli barang yang nggak perlu atau berlebihan?",
    options: [
      "Ya, selalu",
      "Sering",
      "Kadang-kadang",
      "Jarang",
      "Tidak pernah",
    ],
    scores: [5, 4, 3, 2, 1],
  },
  {
    question:
      "☀️ Pakai energi terbarukan seperti panel surya atau listrik hijau?",
    options: [
      "Ya, di rumah ada",
      "Sedang berencana",
      "Tertarik tapi belum",
      "Belum kepikiran",
      "Tidak tertarik",
    ],
    scores: [5, 4, 3, 2, 1],
  },
];

let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;

// Update progress bar
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-text").textContent = `${
    currentQuestionIndex + 1
  } / ${questions.length}`;
}

// Render pertanyaan
function renderQuestion() {
  const questionData = questions[currentQuestionIndex];

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">${
              questionData.question
            }</h2>
            <p class="text-gray-600">Pilih jawaban yang paling sesuai dengan kebiasaanmu</p>
          </div>
          <div class="space-y-4 max-w-2xl mx-auto">
            ${questionData.options
              .map(
                (option, index) => `
                <label class="group relative flex items-center p-4 bg-white hover:bg-eco-light border-2 border-gray-200 hover:border-eco-green rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md">
                  <input type="radio" name="question-${currentQuestionIndex}" value="${index}" class="sr-only peer">
                  <div class="w-5 h-5 border-2 border-gray-300 rounded-full mr-4 flex items-center justify-center peer-checked:border-eco-green peer-checked:bg-eco-green transition-colors duration-200">
                    <div class="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                  </div>
                  <span class="text-lg text-gray-700 peer-checked:text-eco-dark peer-checked:font-medium">${option}</span>
                  <div class="absolute inset-0 border-2 border-transparent peer-checked:border-eco-green rounded-xl pointer-events-none"></div>
                </label>
              `
              )
              .join("")}
          </div>
        `;

  updateProgressBar();
}

// Update tombol navigasi
function updateNavigation() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === questions.length - 1) {
    nextButton.innerHTML = `
            <span>Selesai</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          `;
  } else {
    nextButton.innerHTML = `
            <span>Selanjutnya</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          `;
  }
}

// Hitung skor dan tampilkan hasil
function calculateResults() {
  totalScore = userAnswers.reduce((acc, answerIndex, questionIndex) => {
    return acc + questions[questionIndex].scores[answerIndex];
  }, 0);

  // Animasi skor
  setTimeout(() => {
    animateScore(totalScore);
  }, 500);

  let resultText = "";
  let suggestions = "";
  let emoji = "";

  if (totalScore <= 35) {
    emoji = "🌱";
    resultText =
      "Pemula Hijau! Kamu baru memulai perjalanan ramah lingkungan. Setiap langkah kecil sangat berarti untuk bumi kita!";
    suggestions = `
            <div class="space-y-3">
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">🛍️</span>
                <span>Mulai bawa tas kain reusable setiap kali belanja</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">🚌</span>
                <span>Coba naik transportasi umum atau sepeda lebih sering</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">♻️</span>
                <span>Pisahkan sampah organik dan anorganik di rumah</span>
              </div>
            </div>
          `;
  } else if (totalScore <= 55) {
    emoji = "🌿";
    resultText =
      "Eco Warrior! Kamu sudah cukup peduli lingkungan, masih ada ruang untuk jadi lebih hijau lagi!";
    suggestions = `
            <div class="space-y-3">
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">💡</span>
                <span>Hemat energi dengan lampu LED dan matikan peralatan yang tidak digunakan</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">📦</span>
                <span>Pilih produk dengan kemasan yang bisa didaur ulang</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">🌳</span>
                <span>Mulai nanam tanaman di rumah atau ikut kegiatan penghijauan</span>
              </div>
            </div>
          `;
  } else {
    emoji = "🌍";
    resultText =
      "Green Champion! Kamu sudah sangat ramah lingkungan. Teruskan dan jadilah inspirasi untuk orang lain!";
    suggestions = `
            <div class="space-y-3">
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">👥</span>
                <span>Ajak teman dan keluarga untuk lebih peduli lingkungan</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">🎯</span>
                <span>Ikut kampanye lingkungan dan acara bersih-bersih</span>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <span class="text-xl">📚</span>
                <span>Bagikan tips ramah lingkungan di media sosial</span>
              </div>
            </div>
          `;
  }

  document.getElementById("result-text").innerText = resultText;
  document.getElementById("result-suggestions").innerHTML = `
          <h3 class="text-xl font-semibold text-eco-dark mb-4 flex items-center">
            <span class="text-2xl mr-2">💡</span>
            Saran untuk Kamu:
          </h3>
          ${suggestions}
        `;

  // Smooth scroll to results
  setTimeout(() => {
    document.getElementById("result-container").scrollIntoView({
      behavior: "smooth",
    });
  }, 100);

  document
    .getElementById("quiz-container")
    .parentElement.classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
}

// Animasi skor
function animateScore(targetScore) {
  let currentScore = 0;
  const increment = targetScore / 30; // 30 frames untuk animasi smooth
  const scoreDisplay = document.getElementById("score-display");

  const animation = setInterval(() => {
    currentScore += increment;
    if (currentScore >= targetScore) {
      currentScore = targetScore;
      clearInterval(animation);
    }
    scoreDisplay.textContent = Math.round(currentScore);
  }, 50);
}

// Pilih jawaban
function getSelectedAnswer() {
  const selectedOption = document.querySelector(
    `input[name="question-${currentQuestionIndex}"]:checked`
  );
  if (selectedOption) {
    return parseInt(selectedOption.value);
  }
  return null;
}

// Handle tombol Next
document.getElementById("next-button").addEventListener("click", () => {
  const selectedAnswer = getSelectedAnswer();
  if (selectedAnswer !== null) {
    userAnswers[currentQuestionIndex] = selectedAnswer;
    if (currentQuestionIndex === questions.length - 1) {
      calculateResults();
    } else {
      currentQuestionIndex++;
      renderQuestion();
      updateNavigation();
    }
  } else {
    // Shake animation jika belum pilih jawaban
    const container = document.getElementById("quiz-container");
    container.classList.add("animate-pulse");
    setTimeout(() => {
      container.classList.remove("animate-pulse");
    }, 500);
  }
});

// Handle tombol Prev
document.getElementById("prev-button").addEventListener("click", () => {
  currentQuestionIndex--;
  renderQuestion();
  updateNavigation();
});

// Inisialisasi pertama
renderQuestion();
updateNavigation();
