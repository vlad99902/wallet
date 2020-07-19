import Vue from 'vue'
import {uid} from 'quasar'

const state = {
    tasks: {
        'ID1' : {
            name: "Suck dick",
            completed: false,
            dueDate: '2020.01.01',
            dueTime: '18:00'
        },
        'ID2' : {
            name: "Suck dicksss",
            completed: true,
            dueDate: '2020.01.01',
            dueTime: '16:00',
        },
        'ID3' : {
            name: "By bananas",
            completed: false,
            dueDate: '2020.10.01',
            dueTime: '20:00'
        }
    }
    
}

// cant't be assinc
const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

//can be assinc
const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({commit}, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId, 
            task: task
        }
        commit ('addTask', payload)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}