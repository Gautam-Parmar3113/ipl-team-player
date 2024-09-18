import { useState } from 'react';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import PlayerFilter from './components/PlayerFilter';
import usePlayerStore from './store/playerStore';

export default function App() {
  const [filter, setFilter] = useState({});
  const { players } = usePlayerStore();

  console.log('Current players:', players); // Debugging line

  return (
    <div>
      <h1>IPL Team Management</h1>
      <PlayerForm />
      <PlayerFilter setFilter={setFilter} />
      <PlayerList players={players} filter={filter} />
    </div>
  );
}

