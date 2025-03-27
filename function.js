const questions = {
    ipa: [
        { q: "Apa planet terbesar di tata surya?", options: ["Bumi", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
        { q: "Hewan apa yang bisa hidup di darat dan air?", options: ["Ikan", "Katak", "Burung", "Kucing"], answer: "Katak" },
        { q: "Apa gas yang paling banyak di atmosfer bumi?", options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"], answer: "Nitrogen" },
        { q: "Bagian tumbuhan yang berfungsi menyerap air dan mineral adalah?", options: ["Daun", "Akar", "Batang", "Bunga"], answer: "Akar" },
        { q: "Berapakah jumlah planet dalam tata surya?", options: ["7", "8", "9", "10"], answer: "8" },
        { q: "Apa nama lapisan terluar bumi?", options: ["Mantel", "Kerak", "Inti luar", "Inti dalam"], answer: "Kerak" },
        { q: "Sumber energi utama di bumi adalah?", options: ["Matahari", "Angin", "Air", "Api"], answer: "Matahari" },
        { q: "Gaya yang menarik benda ke bawah disebut?", options: ["Gesekan", "Gravitasi", "Gaya tarik", "Gaya dorong"], answer: "Gravitasi" },
        { q: "Bagian tumbuhan yang melakukan fotosintesis?", options: ["Akar", "Batang", "Daun", "Bunga"], answer: "Daun" },
        { q: "Apa yang dihasilkan tumbuhan saat fotosintesis?", options: ["Karbon dioksida", "Oksigen", "Nitrogen", "Hidrogen"], answer: "Oksigen" }
    ],
    ips: [
        { q: "Siapa proklamator Indonesia?", options: ["Soeharto", "Soekarno dan Hatta", "Bung Tomo", "Diponegoro"], answer: "Soekarno dan Hatta" },
        { q: "Pulau terbesar di Indonesia adalah?", options: ["Sumatra", "Jawa", "Kalimantan", "Bali"], answer: "Kalimantan" },
        { q: "Negara dengan jumlah penduduk terbanyak di dunia adalah?", options: ["India", "Amerika Serikat", "Indonesia", "Tiongkok"], answer: "Tiongkok" },
        { q: "Apa nama kerajaan Hindu-Buddha terbesar di Indonesia?", options: ["Majapahit", "Sriwijaya", "Mataram", "Singasari"], answer: "Majapahit" },
        { q: "Apa ibu kota negara Thailand?", options: ["Hanoi", "Bangkok", "Manila", "Kuala Lumpur"], answer: "Bangkok" },
        { q: "Apa nama mata uang Jepang?", options: ["Yuan", "Dolar", "Yen", "Rupiah"], answer: "Yen" },
        { q: "Benua terbesar di dunia adalah?", options: ["Afrika", "Asia", "Eropa", "Amerika"], answer: "Asia" },
        { q: "Negara yang terkenal dengan menara Eiffel adalah?", options: ["Italia", "Spanyol", "Perancis", "Jerman"], answer: "Perancis" },
        { q: "Siapa presiden pertama Indonesia?", options: ["Soeharto", "Habibie", "Soekarno", "Megawati"], answer: "Soekarno" }
    ],
    matematika: [
        { q: "Berapakah hasil dari 7 + 5?", options: ["10", "11", "12", "13"], answer: "12" },
        { q: "Berapakah hasil dari 20 - 8?", options: ["10", "11", "12", "13"], answer: "12" },
        { q: "Hasil dari 9 x 3 adalah?", options: ["27", "28", "29", "30"], answer: "27" },
        { q: "Berapakah hasil dari 25 ÷ 5?", options: ["3", "4", "5", "6"], answer: "5" },
        { q: "Jumlah sudut dalam segitiga adalah?", options: ["90°", "120°", "180°", "360°"], answer: "180°" },
        { q: "Berapakah hasil dari 15 + 6?", options: ["19", "20", "21", "22"], answer: "21" },
        { q: "Jika sebuah persegi memiliki sisi 4 cm, berapa luasnya?", options: ["12 cm²", "14 cm²", "16 cm²", "18 cm²"], answer: "16 cm²" },
        { q: "Berapakah hasil dari 100 ÷ 10?", options: ["8", "9", "10", "11"], answer: "10" },
        { q: "Berapakah hasil dari 3²?", options: ["6", "9", "12", "15"], answer: "9" },
        { q: "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapa kelilingnya? (Gunakan π ≈ 3,14)", options: ["21,98 cm", "43,96 cm", "50 cm", "60 cm"], answer: "43,96 cm" }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

document.getElementById("menu").style.display = "block";

function startQuiz(category) {
    currentQuiz = questions[category];
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
        const questionData = currentQuiz[currentQuestionIndex];
        document.getElementById("question").innerText = questionData.q;
        document.getElementById("options").innerHTML = questionData.options.map(option => 
            `<button onclick="checkAnswer('${option}')">${option}</button>`
        ).join(" ");
    } else {
        showResult();
    }
}

function checkAnswer(answer) {
    if (answer === currentQuiz[currentQuestionIndex].answer) {
        score++;
    } else {
        wrongAnswers.push(`${currentQuiz[currentQuestionIndex].q} - Jawaban benar : ${currentQuiz[currentQuestionIndex].answer}`);
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("evaluation-container").style.display = "block"; // Tampilkan kotak evaluasi
    document.getElementById("score").innerText = `Skor Anda: ${score} / ${currentQuiz.length}`;

    let evaluationHTML = "";
    if (wrongAnswers.length > 0) {
        wrongAnswers.forEach(item => {
            evaluationHTML += `<li class="evaluation-wrong">${item}</li>`;
        });
    } else {
        evaluationHTML = `<li class="evaluation-correct">Semua jawaban benar! 👍</li>`;
    }

    document.getElementById("evaluation").innerHTML = evaluationHTML;
}

function restartQuiz() {
    document.getElementById("result").style.display = "none";
    document.getElementById("evaluation-container").style.display = "none"; // Sembunyikan evaluasi saat restart
    document.getElementById("menu").style.display = "block";
}