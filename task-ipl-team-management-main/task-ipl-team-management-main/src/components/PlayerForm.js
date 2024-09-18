import { useForm } from 'react-hook-form';
import usePlayerStore from '../store/playerStore';

export default function PlayerForm() {
  const { register, handleSubmit, reset } = useForm();
  const { addPlayer } = usePlayerStore();

  const onSubmit = (data) => {
    addPlayer(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Role:</label>
        <select {...register('role', { required: true })}>
          <option value="">Select Role</option>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="All Rounder">All Rounder</option>
          <option value="WK">Wicket Keeper</option>
        </select>
      </div>
      <div>
        <label>Team:</label>
        <input {...register('team', { required: true })} />
      </div>
      <div>
        <label>Captain:</label>
        <input type="checkbox" {...register('isCaptain')} />
      </div>
      <div>
        <label>Vice-Captain:</label>
        <input type="checkbox" {...register('isViceCaptain')} />
      </div>
      <button type="submit">Add Player</button>
    </form>
  );
}
