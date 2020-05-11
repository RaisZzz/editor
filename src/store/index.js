import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        updateProjectName(ctx, name){
            ctx.commit('updateProjectName', name);
        },
        updateLine(ctx, data){
            ctx.commit('updateLine', data);
        }
    },
    mutations: {
        updateProjectName(state, name){
            state.projectName = name;
        },
        updateLine(state, data){
            const id = state.wordLines.indexOf(state.wordLines.find(item => item.id === data[0]));
            const text = data[1];
            if(text === ''){
                state.wordLines.splice(id, 1);
            }else {
                state.wordLines[id].text = text;
            }
        }
    },
    state: {
        projectName: 'Best Project',
        wordLines: [
            {id: 1, text: 'Example'},
            {id: 2, text: 'Example 2'},
            {id: 3, text: 'Example 3'},
            {id: 4, text: 'Example 4'}
        ]
    },
    getters: {
        getProjectName(state){
            return state.projectName;
        },
        getWordLines(state){
            return state.wordLines;
        }
    }
})