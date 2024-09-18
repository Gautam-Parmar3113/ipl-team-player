export default function PlayerList({ players, filter }) {
    const filteredPlayers = players.filter(player => {
      return (
        (filter.role ? player.role === filter.role : true) &&
        (filter.isCaptain !== undefined ? player.isCaptain === filter.isCaptain : true) &&
        (filter.isViceCaptain !== undefined ? player.isViceCaptain === filter.isViceCaptain : true) &&
        (filter.team ? player.team === filter.team : true)
      );
    });
  
    return (
      <div>
        <h2>Player List</h2>
        {filteredPlayers.length === 0 ? (
          <p>No players to display</p>
        ) : (
          filteredPlayers.map((player, index) => (
            <div key={index}>
              <p>{player.name} ({player.role})</p>
              <p>Team: {player.team} | Captain: {player.isCaptain ? 'Yes' : 'No'} | Vice-Captain: {player.isViceCaptain ? 'Yes' : 'No'}</p>
            </div>
          ))
        )}
      </div>
    );
  }
  