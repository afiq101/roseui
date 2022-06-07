/* eslint-disable */
export const state = {
  darkMode: localStorage.getItem("dark") === "true" ? true : false,
};

export const getters = {
  darkMode: (state) => state.darkMode,
};

export const mutations = {
  CHANGE_DARK_MODE(state, darkMode) {
    state.darkMode = darkMode.value;
    
    // Set darkmode to localstorage
    localStorage.setItem("dark", darkMode.value);
  },
};

export const actions = {
  toggleDarkMode({ commit, state, rootState }) {
    const html = document.documentElement;
    if (state.darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  },
};

export default { state, getters, mutations, actions };
