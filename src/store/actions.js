export default {
    addBook({commit}, payload) {
        commit('addBook', payload);
    },
    editBook({commit}, payload) {
        commit('editBook', payload);
    },
    removeBook({commit}, payload) {
        commit('removeBook', payload);
    },
    selectBook({commit}, payload){
        commit('selectBook', payload);
    }

}