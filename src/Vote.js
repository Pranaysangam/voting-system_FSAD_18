import { useState } from "react";
import api from "./api";

function Vote() {
  const [vote, setVote] = useState({
    voterId: "",
    candidateId: ""
  });

  const castVote = async () => {
    const res = await api.post("/vote/cast", vote);
    alert(res.data);
  };

  return (
    <div>
      <h2>Vote</h2>

      <input
        placeholder="Voter ID"
        onChange={(e) => setVote({ ...vote, voterId: e.target.value })}
      />

      <input
        placeholder="Candidate ID"
        onChange={(e) => setVote({ ...vote, candidateId: e.target.value })}
      />

      <br /><br />

      <button onClick={castVote}>Cast Vote</button>
    </div>
  );
}

export default Vote;