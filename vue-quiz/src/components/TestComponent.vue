<template>
  <div>
    <h1>HTML Tag Quiz</h1>
    <div v-if="currentQuestionIndex < questions.length">
      <h2>{{ questions[currentQuestionIndex].question }}</h2>
      <ul>
        <li v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index">
          <button @click="selectAnswer(answer.isCorrect)">{{ answer.answer }}</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Test Completed</h2>
      <p>Your score: {{ score }} out of {{ questions.length }}</p>
      <button @click="restartTest">Restart Test</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      score: 0
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
      this.$router.push({ name: 'QuestionButtons' });
    }
  },
  mounted() {
    this.questions = [
      {
        question: "Вкажіть тег для блоку?",
        answers: [
          { answer: "a", isCorrect: false },
          { answer: "div", isCorrect: true },
          { answer: "img", isCorrect: false },
          { answer: "p", isCorrect: false }
        ]
      },
      {
        question: "Вкажіть тег для параграфу?",
        answers: [
          { answer: "a", isCorrect: false },
          { answer: "div", isCorrect: false },
          { answer: "img", isCorrect: false },
          { answer: "p", isCorrect: true }
        ]
      },
      {
        question: "Вкажіть тег для фото?",
        answers: [
          { answer: "a", isCorrect: false },
          { answer: "div", isCorrect: false },
          { answer: "img", isCorrect: true },
          { answer: "p", isCorrect: false }
        ]
      },
      {
        question: "Вкажіть тег для гіперпосилання?",
        answers: [
          { answer: "a", isCorrect: true },
          { answer: "div", isCorrect: false },
          { answer: "span", isCorrect: false },
          { answer: "p", isCorrect: false }
        ]
      }
    ];
  }
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 5px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
