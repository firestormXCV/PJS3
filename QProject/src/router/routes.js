const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: 'Contact',
                component: () =>
                    import ('pages/Contact.vue')
            },
            {
                path: 'municipalite',
                component: () =>
                    import ('pages/municipalite.vue')
            }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes