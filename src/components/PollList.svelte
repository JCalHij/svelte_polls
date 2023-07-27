<script>
  export let polls;
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <p>{poll.answerA} - {poll.aVotes}</p>
    <p>{poll.answerB} - {poll.bVotes}</p>
  {:else}
    <p>There are no polls available.</p>
  {/each}
</div>

<style>
  .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
