<script>
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/PollStore";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  
  let GlobalId = 1;

  let pollFields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const onSubmitForm = () => {
    valid = true;

    if (pollFields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }
    if (pollFields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Question must be at least 1 character long";
    } else {
      errors.answerA = "";
    }
    if (pollFields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Question must be at least 1 character long";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      const poll = {
        id: GlobalId,
        votesA: 0, 
        votesB: 0,
        ...pollFields,
      };
      GlobalId += 1;
      
      PollStore.update((polls) => {
        return [...polls, poll];
      });

      dispatch("newPoll");
    }
  };
</script>

<form on:submit|preventDefault={onSubmitForm}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={pollFields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={pollFields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={pollFields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type={"secondary"} flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
