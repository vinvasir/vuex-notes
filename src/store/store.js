import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 0
	},
	getters: {
		singleCounter: state => {
			return state.counter;
		},
		doubleCounter: state => {
			return state.counter * 2;
		},
		stringCounter: state => {
			return state.counter + ' number of clicks';
		}
	},
	mutations: {
		increment: state => {
			state.counter++;
		},
		decrement: state => {
			state.counter--;
		}
	}
});