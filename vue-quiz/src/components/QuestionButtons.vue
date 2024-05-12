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
        this.$router.push({
          name: "TestComponent",
          query: { selectedQuestions: this.selectedQuestions.join(",") }, // Send questions as a comma-separated string
        });
      }
    },
  },
};
</script>

<style>
.selected {
  background-color: #2196f3; /* Blue */
}

button {
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
