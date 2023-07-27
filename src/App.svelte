<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // Polls
  let GlobalId = 1;
  let polls = [{
    id:0, 
    question: "C or C++?",
    answerA: "C",
    votesA: 9,
    answerB: "C++",
    votesB: 3,
  }];

  // Tabs
  const CURRENT_POLL_TAB = "Current Polls";
  const ADD_NEW_POLL_TAB = "Add New Poll";
  let items = [CURRENT_POLL_TAB, ADD_NEW_POLL_TAB];
  let activeItem = items[0];

  /**
   * @param {CustomEvent} e
   */
  const onTabClicked = (e) => {
    const tabClicked = e.detail;
    activeItem = tabClicked;
  };

  /**
   * Function callback for the CreatePollForm, when it emits a new poll.
   * @param {CustomEvent} e
   */
  const onNewPoll = (e) => {
    const newPoll = e.detail;
    const poll = {
      id: GlobalId,
      votesA: 0, 
      votesB: 0,
      ...newPoll,
    };
    polls = [...polls, poll];

    GlobalId += 1;

    activeItem = CURRENT_POLL_TAB;
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabClicked={onTabClicked} />
  {#if activeItem === CURRENT_POLL_TAB}
    <PollList polls={polls}/>
  {:else if activeItem === ADD_NEW_POLL_TAB}
    <CreatePollForm on:newPoll={onNewPoll}/>
  {:else}
    <p>This should not be visible...</p>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
