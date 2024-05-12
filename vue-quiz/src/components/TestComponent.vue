<template>
  <div>
    <h1>HTML Tag Quiz</h1>
    <div v-if="currentQuestionIndex < filteredQuestions.length">
      <h2>{{ filteredQuestions[currentQuestionIndex].question }}</h2>
      <ul>
        <li v-for="(answer, index) in filteredQuestions[currentQuestionIndex].answers" :key="index">
          <button @click="selectAnswer(answer.isCorrect)">{{ answer.answer }}</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Test Completed</h2>
      <p>Your score: {{ score }} out of {{ filteredQuestions.length }}</p>
      <button @click="restartTest">Restart Test</button>
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
button {
  margin: 10px;
  padding: 5px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
