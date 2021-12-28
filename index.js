import { useApp } from './App.js'
import { vuexStore, CHANGE_HELLOVUE3_VISIBLE } from './js/vuexStore.js'

async function init() {

    await useApp();

    $('#btn').on('click', function () {
        vuexStore.commit(CHANGE_HELLOVUE3_VISIBLE, !vuexStore.state.helloVue3Visible);
        if (vuexStore.state.helloVue3Visible) {
            $(this).val('隐藏HelloVue3组件');
        } else {
            $(this).val('显示HelloVue3组件');
        }
    });

}

init();
