<script>
  import Card from "../shared/Card.svelte";
  import PollStore from "../stores/PollStore";
  import Button from "../shared/Button.svelte";
  export let poll;
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 * poll.votesA) / totalVotes);
  $: percentB = Math.floor((100 * poll.votesB) / totalVotes);

  const onVoteClicked = (option, id) => {
    PollStore.update((data) => {
      const poll = data.find((p) => p.id === id);

      if (option === "a") {
        poll.votesA += 1;
      } else if (option === "b") {
        poll.votesB += 1;
      }
      return data;
    });
  };

  const onVoteDeleted = (id) => {
    PollStore.update((data) => {
      return data.filter((p) => p.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="answer"
      on:click={() => {
        onVoteClicked("a", poll.id);
      }}
    >
      <div class="percent percent-a" style="width: {percentA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="answer"
      on:click={() => {
        onVoteClicked("b", poll.id);
      }}
    >
      <div class="percent percent-b" style="width: {percentB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
  <div class="delete">
    <Button flat={true} on:click={() => {onVoteDeleted(poll.id)}}>Delete</Button>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background-color: #fafafa;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .percent-a {
    border-left: 8px solid #d91b42;
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 8px solid #45c496;
    background-color: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
