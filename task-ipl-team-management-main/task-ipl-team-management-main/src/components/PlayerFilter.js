export default function PlayerFilter({ setFilter }) {
    const handleFilterChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFilter(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    return (
      <div>
        <h2>Filter Players</h2>
        <div>
          <label>Role:</label>
          <select name="role" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All Rounder">All Rounder</option>
            <option value="WK">Wicket Keeper</option>
          </select>
        </div>
        <div>
          <label>Team:</label>
          <input name="team" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Captain:</label>
          <input type="checkbox" name="isCaptain" onChange={handleFilterChange} />
        </div>
        <div>
          <label>Vice-Captain:</label>
          <input type="checkbox" name="isViceCaptain" onChange={handleFilterChange} />
        </div>
      </div>
    );
  }
  