<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>Edit To Do List</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
            <form @submit.prevent="editList">
                <table class="table align-items-center mb-0">
                    <thead>
                    <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                        <th class="text-secondary opacity-7"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        <div class="d-flex px-2 py-1">
                            <div class="d-flex flex-column justify-content-center">
                                <argon-input v-model="input.name" type="text" name="name"/>
                            </div>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex px-2 py-1">
                            <div class="d-flex flex-column justify-content-center">
                                <argon-input v-model="input.description" type="text" name="name"/>
                            </div>
                        </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                            <select v-model="input.status" class="form-select" name="status">
                                <option selected value="todo">Todo</option>
                                <option value="done">Done</option>
                            </select>
                        </td>
                        <td>
                            <div class="text-center">
                                <argon-button variant="gradient" color="success" type="submit">Submit</argon-button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia';

import d$todo from '@/stores/todo';

import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
    name: 'ToDoEdit',
    data: () => ({
        input: {
            name: '',
            description: '',
            status: 'todo',
        },
    }),
    components: {
        ArgonInput,
        ArgonSwitch,
        ArgonButton,
    },
    computed: {
        ...mapState(d$todo, ['g$detail']),
    },
    methods: {
        ...mapActions(d$todo, ["a$edit"]),
        async editList() {
            try {
                const id = this.$route.params.id;

                await this.a$edit(id, {...this.input });
                this.$router.push('/dashboard/todo');
                
            } catch (e) {
                console.error(e);
            }
        },
    },
    async created() {
        await this.getListDetail();
    },
};
</script>