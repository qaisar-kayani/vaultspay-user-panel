import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
    namespace: true,
    state() {
        return {
            withdraw: {
                list:[],
                wallet:[],
                UserWithdrawMethods:[],
                currentMethod:null,
            }
        };
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};
