<template>
  <div>
    <h2>Select Questions for the Test:</h2>
    <button
      v-for="(question, index) in questions"
      :key="index"
      :class="{ selected: selectedQuestions.includes(question) }"
      @click="toggleQuestion(question)"
    >
      {{ question }}
    </button>

    <div v-if="selectedQuestions.length > 0">
      <button @click="startTest">Start Test</button>
    </div>

    <div v-if="testStarted">
      <h3>Test Started with these questions:</h3>
      <ul>
        <li v-for="(question, index) in selectedQuestions" :key="index">
          {{ question }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        "Вкажіть тег для блоку?",
        "Вкажіть тег для параграфу?",
        "Вкажіть тег для фото?",
        "Вкажіть тег для посилання?"
      ],
      selectedQuestions: [],
      testStarted: false
    };
  },
  methods: {
    toggleQuestion(question) {
      const index = this.selectedQuestions.indexOf(question);
      if (index > -1) {
        this.selectedQuestions.splice(index, 1);
      } else {
        this.selectedQuestions.push(question);
      }
    },
    startTest() {
    if (this.selectedQuestions.length > 0) {
      this.testStarted = true;
      this.$router.push({ 
        name: 'TestComponent', 
        params: { selectedQuestions: this.selectedQuestions } // Pass selectedQuestions as a param
      });
    }
  }
  }
};
</script>

<style>
.selected {
  background-color: #2196F3; /* Blue */
}

button {
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
