const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log("Suma de todas las notas:", totalScore);

const approvedScore = exams.reduce((acc, exam) => {
  if (exam.score >= 5) {
    return acc + exam.score;
  }
  return acc;
}, 0);
console.log("Suma de los aprobados:", approvedScore);

const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log("Media de las notas:", averageScore);
