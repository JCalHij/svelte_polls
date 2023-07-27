import { writable } from "svelte/store";

const PollStore = writable([{
    id:0, 
    question: "C or C++?",
    answerA: "C",
    votesA: 9,
    answerB: "C++",
    votesB: 3,
}]);


export default PollStore;