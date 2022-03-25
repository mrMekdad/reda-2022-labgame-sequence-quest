// Red@ entrypoint for Labgame Sequence Quest
const root = document.getElementById('app');
const state = { project: 'labgame-sequence-quest', author: 'Red@', theme: 'games', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
