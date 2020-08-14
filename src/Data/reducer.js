export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finnished developing
  //token:
  // "BQBRlfjzNHYMCzoHVLjuM5r3ouFgOTRpRAoPzZc6IdRvL6z-l84_-JiStBfLVfQn1-kRRb1vCTOyXX1zVfNBZnVTyqjcfOUaSF8s03cwBYTYtLVWLmCGpLLBZuwVnuBYP6zF_Nqju2cFhNVdrKofz7g4RJR2zss",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        current_playlist: action.current_playlist,
      };

    default:
      return state;
  }
};

export default reducer;
