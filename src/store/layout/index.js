/* eslint-disable */

export const state = {
  layoutType: localStorage.getItem('layoutType') || 'vertical',
  windowWidth: window.innerWidth,
  mobileWidth: "1024",
};

export const getters = {
  layoutType: (state) => state.layoutType,
  windowWidth: (state) => state.windowWidth,
  mobileWidth: (state) => state.mobileWidth,
};

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
  CHANGE_WINDOW_WIDTH(state, windowWidth) {
    state.windowWidth = windowWidth;
  },
};

export const actions = {
  changeLayoutType({ commit, state, rootState }, { layoutType }) {
    commit("CHANGE_LAYOUT", layoutType);
  },

  changeWindowWidth({ commit, state, rootState }, { windowWidth }) {
    commit("CHANGE_WINDOW_WIDTH", windowWidth);
  },
};

export default { state, getters, mutations, actions };
