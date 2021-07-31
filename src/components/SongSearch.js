import React, { useState, useEffect } from "react";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h2>SongSearch</h2>
    </div>
  );
};

export default SongSearch;
