
<template>
  <div class="survay">
    <h2 class="survay__title">Survay</h2>
    <form @submit.prevent="save" class="survay-form">
      <div class="survay-form__selectbox">
        <section>
          <p>{{ survays.day.title }}</p>
          <select v-model="day">
            <option v-for="day in survays.day.days" :key="day">
              {{ day }}
            </option>
          </select>
        </section>
        <section>
          <p>{{ survays.city.title }}</p>

          <select v-model="city">
            <option v-for="city in survays.city.cities" :key="city">
              {{ city }}
            </option>
          </select>
        </section>
      </div>
      <button id="save">Save</button>
    </form>

    <div class="result">
      <section>
        <h3>Day :</h3>
        <span>{{ day }}</span>
      </section>
      <section>
        <h3>City :</h3>
        <span>{{ city }}</span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      survays: {
        day: { title: "how was your day", days: ["great", "fine", "bad"] },
        city: {
          title: "where have you been",
          cities: ["Amsterdam", "Utrecht", "Arnehem"],
        },
      },
      day: "",
      city: "",
    };
  },
  methods: {
    save() {
      console.log("saved");
    },
  },
};
</script>

<style scoped lang='scss'>
.survay {
  display: flex;
  flex-direction: column;
  align-content: center;

  &__title {
    letter-spacing: 0.8;
    color: red;
  }
  .survay-form {
    &__selectbox {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-sizing: border-box;
      p {
        margin-right: 1rem;
        display: inline-block;
      }
    }
  }
}

#save {
  padding: 5px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  width: 200px;
}

.result {
  section {
    h3 {
      display: inline-block;
    }
    span {
      margin-left: 1rem;
    }
  }
}
</style>