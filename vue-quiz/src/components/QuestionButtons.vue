<template>
  <div>
    <h2>Оберіть питання для тесту:</h2>
    <div class="container">
    <button
      v-for="(question, index) in questions"
      :key="index"
      :class="{ selected: selectedQuestions.includes(question) }"
      @click="toggleQuestion(question)"
    >
      {{ question }}
    </button>
    </div>
    <div v-if="selectedQuestions.length > 0">
      <button @click="startTest">Почати тест</button>
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
          query: { selectedQuestions: this.selectedQuestions.join(",") },
        });
      }
    },
  },
};
</script>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #000000;
}

div{
  color: white;
  font-size: 1.3rem;
  text-align: center;
}

.selected {
  background-color: #2196f3;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  padding: 1rem 1rem;
  margin: 0.5rem auto; 
  color: rgb(0, 0, 0);
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px; 
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1); 
  width: 20rem; 
  height: 3rem; 
}

button:hover {
  background-color: #45a049;
}
</style>
