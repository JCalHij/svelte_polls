<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails poll={poll}/>
    </div>
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
