export const state = () => ({
  playerNum: 1,
  cardNum: 1,
})

export const mutations = {
  SET_PLAYER_NUM: (state, value) => {
      state.playerNum = state.playerNum + value
      if(state.playerNum < 1){
        state.playerNum = 1
      }
  },
  SET_CARD_NUM: (state, value) => {
      state.cardNum = state.cardNum + value
      if (state.cardNum < 1) {
        state.cardNum = 1
      }
  },
}