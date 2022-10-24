<script>
import { mapActions, mapState } from 'pinia';
import d$todo from '@/stores/todo';
import ArgonButton from "@/components/ArgonButton.vue";

export default {
    name: 'Todo',
    components:{
        ArgonButton
    },
    computed: {
        ...mapState(d$todo, ['g$list']),
    },
    methods: {
        ...mapActions(d$todo, ["a$list", "a$del"]),
        async getList(){
            try {
                await this.a$list();
            } catch (e) {
                console.error(e);
            }
        },
        async deleteList(id){
            try {
                await this.a$del(id);
                window.location.reload();
            } catch (e) {
                console.error(e);
            }
        }
    },
    async created(){
        await this.getList();
    },
};
</script>

<template>
     <div class="card">
      <div class="card-header pb-0">
        <h6>Todo</h6>
        <router-link :to="{name: 'AddToDo'}">
          <argon-button variant="gradient" type="submit">Add List</argon-button>
        </router-link>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in g$list" :key="index">
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{item.name}}</h6>
                    </div>
                  </div>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success">{{item.status}}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">{{item.description}}</span>
                </td>
                <td class="align-middle">
                <router-link :to="{name: 'ToDoEdit', params: {id: item.id}}">
                  <a class="text-secondary font-weight-bold text-xs">Edit</a>
                </router-link>
                </td>
                <td class="align-middle">
                    <form @submit.prevent="deleteList(item.id)">
                      <argon-button variant="gradient" type="submit">Delete</argon-button>
                    </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>