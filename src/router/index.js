import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes:[
        
        {
            path:'/',
            name:'home',
            component: ()=>import('../views/Home.vue')
        },
        {
            path:'/link',
            name:'link',
            component: ()=>import('../views/link.vue') //联系我们
        },
        {
            path:'/systemintro',
            name:'systemintro',
            component: ()=>import('../views/system_intro/index.vue') //系统介绍
        },
        {
            path:'/teamintro',
            name:'teamintro',
            component: ()=>import('../views/system_intro/teamintro.vue') //团队介绍
        },
        {
            path:'/systemframework',
            name:'systemframework',
            component: ()=>import('../views/system_intro/systemframework.vue') //系统框架
        },
        {
            path:'/projectintro',
            name:'projectintro',
            component: ()=>import('../views/system_intro/projectintro.vue') //系统框架
        },
        {
            path:'/learncenter',
            name:'learncenter',
            component: ()=>import('../views/learncenter/index.vue') //学习中心
        },
        {
            path:'/triz',
            name:'triz',
            component: ()=>import('../views/learncenter/triz.vue') //triz基本理论
        },
        {
            path:'/puttedforward',
            name:'puttedforward',
            component: ()=>import('../views/puttedforward/index.vue') //案例库
        },
        {
            path:'/putted_detail',
            name:'putted_detail',
            component: ()=>import('../views/puttedforward/putted_detail.vue') //案例库
        },
        {
            path:'/toollibrary',
            name:'toollibrary',
            redirect:'/toollibrary/integration',
            component: ()=>import('../views/toollibrary/index.vue'), //案例库
            children:[
                {
                    path:'/toollibrary/integration',
                    name:'integration',
                    component: ()=>import('../views/toollibrary/integration.vue') //案例库
                },
                {
                    path:'/toollibrary/cloudplatform',
                    name:'cloudplatform',
                    component: ()=>import('../views/toollibrary/cloudplatform.vue') //案例库
                },
                {
                    path:'/toollibrary/knowledge_search',
                    name:'knowledge_search',
                    component: ()=>import('../views/toollibrary/knowledge_search.vue') //知识检索
                },
                {
                    path:'/toollibrary/business_card',
                    name:'business_card',
                    component: ()=>import('../views/toollibrary/business_card.vue') //知识检索
                },
                {
                    path:'/toollibrary/innova_commun',
                    name:'innova_commun',
                    component: ()=>import('../views/toollibrary/innova_commun.vue') //知识检索
                },
                {
                    path:'/toollibrary/semantic_mining',
                    name:'semantic_mining',
                    component: ()=>import('../views/toollibrary/semantic_mining.vue') //语义挖掘
                },
                {
                    path:'/toollibrary/topic_selection',
                    name:'topic_selection',
                    component: ()=>import('../views/toollibrary/topic_selection.vue') //智能选题工具
                },
                {
                    path:'/toollibrary/intelligent_eval',
                    name:'intelligent_eval',
                    component: ()=>import('../views/toollibrary/intelligent_eval.vue') //智能评估
                },
                {
                    path:'/toollibrary/knowledge_push',
                    name:'knowledge_push',
                    component: ()=>import('../views/toollibrary/knowledge_push.vue') //知识推送
                },
            ]
        },
    ]
})
export default router;