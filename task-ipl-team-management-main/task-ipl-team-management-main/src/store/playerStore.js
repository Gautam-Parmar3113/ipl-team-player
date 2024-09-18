import { create } from 'zustand';

const usePlayerStore = create(set => ({
  players: [],
  addPlayer: (player) => set(state => {
    const teamPlayers = state.players.filter(p => p.team === player.team);
    const isCaptainExists = teamPlayers.some(p => p.isCaptain);
    const isViceCaptainExists = teamPlayers.some(p => p.isViceCaptain);

    if (player.isCaptain && isCaptainExists) {
      alert('Team already has a captain!');
      return state;
    }

    if (player.isViceCaptain && isViceCaptainExists) {
      alert('Team already has a vice-captain!');
      return state;
    }

    return { players: [...state.players, player] };
  }),
}));

export default usePlayerStore;
