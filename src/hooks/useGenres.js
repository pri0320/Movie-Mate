const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreIds = selectedGenres.map((selected) => selected.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;
