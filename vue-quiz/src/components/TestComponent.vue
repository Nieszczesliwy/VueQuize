<template>
  <div class="container">
    <h1>Тест про HTML </h1>
    <div v-if="currentQuestionIndex < filteredQuestions.length">
      <h2>{{ filteredQuestions[currentQuestionIndex].question }}</h2>
      <ul>
        <li v-for="(answer, index) in filteredQuestions[currentQuestionIndex].answers" :key="index">
          <button @click="selectAnswer(answer.isCorrect)">{{ answer.answer }}</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Тест виконано</h2>
      <p>Кількість правильних: {{ score }} із {{ filteredQuestions.length }}</p>
      <button @click="restartTest">Розпочати знов тест</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Вкажіть тег для блоку?",
          answers: [
            { answer: "a", isCorrect: false },
            { answer: "div", isCorrect: true },
            { answer: "img", isCorrect: false },
            { answer: "p", isCorrect: false },
          ],
        },
        {
          question: "Вкажіть тег для параграфу?",
          answers: [
            { answer: "a", isCorrect: false },
            { answer: "div", isCorrect: false },
            { answer: "img", isCorrect: false },
            { answer: "p", isCorrect: true },
          ],
        },
        {
          question: "Вкажіть тег для фото?",
          answers: [
            { answer: "a", isCorrect: false },
            { answer: "div", isCorrect: false },
            { answer: "img", isCorrect: true },
            { answer: "p", isCorrect: false },
          ],
        },
        {
          question: "Вкажіть тег для посилання?",
          answers: [
            { answer: "a", isCorrect: true },
            { answer: "div", isCorrect: false },
            { answer: "span", isCorrect: false },
            { answer: "p", isCorrect: false },
          ],
        },
      ],
      filteredQuestions: [],
      currentQuestionIndex: 0,
      score: 0,
    };
  },
  methods: {
    selectAnswer(isCorrect) {
      if (isCorrect) {
        this.score += 1;
      }
      this.currentQuestionIndex += 1;
    },
    restartTest() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.$router.push({ name: "QuestionButtons" });
    },
  },
  mounted() {
    const selectedQuestions = (this.$route.query.selectedQuestions || "").split(",");
    this.filteredQuestions = this.questions.filter((q) => selectedQuestions.includes(q.question));
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1, h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #3278c3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  transform: scale(0.98);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em auto;
  padding: 2em;
  max-width: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
</style>
