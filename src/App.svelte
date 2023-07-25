<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";

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
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabClicked={onTabClicked} />
  {#if activeItem === CURRENT_POLL_TAB}
    <p style="color: blue;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  {:else if activeItem === ADD_NEW_POLL_TAB}
    <p style="color:red;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
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
