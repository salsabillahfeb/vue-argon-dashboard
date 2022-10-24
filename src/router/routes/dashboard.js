const dashboard ={
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('@/views/Dashboard/Default.vue'),
            meta: { auth: true },
          },
          {
            path: "tables",
            name: "Tables",
            component: () => import('@/views/Dashboard/Tables.vue'),
            meta: { auth: true },
          },
          {
            path: "billing",
            name: "Billing",
            component: () => import('@/views/Dashboard/Billing.vue'),
            meta: { auth: true },
          },
          {
            path: "profile",
            name: "Profile",
            component: () => import('@/views/Dashboard/Profile.vue'),
            meta: { auth: true },
          },
          {
            path: "todo",
            name: "ToDo",
            component: () => import('@/views/Todo/todo.vue'),
            meta: {auth: true},
        },
        {
            path: 'todo/:id',
            name: 'ToDoEdit',
            component: () => import('@/views/Todo/edit.vue'),
            meta: {auth: true},
        },
        {
            path: 'addtodo',
            name: 'AddToDo',
            component: () => import('@/views/Todo/add.vue'),
            meta: {auth: true},
        },
    ],
};

export default dashboard;