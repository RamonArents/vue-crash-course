<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, architecto? Consequatur, omnis dolorem! Praesentium molestias sunt quidem itaque quisquam dolor exercitationem quam aspernatur! Animi quia ipsa incidunt provident beatae expedita nulla, eveniet corrupti recusandae, tenetur, iusto odit dolorem adipisci necessitatibus.</p>
      </div>
      <div v-if="loading">
        <Spinner />
      </div>
      <div v-if="errorMessage">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
      <div class="row" v-if="!loading && users.length > 0">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-success text-white">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                  <router-link class="text-decoration-none fw-bold text-success" :to="'/users/' + user.id">{{ user.name }}</router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>{{ user.address.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService"
import Spinner from "./Spinner.vue";

export default {
    name: "UserList",
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await UserService.getAllusers();
            this.loading = false;
            this.users = response.data;
        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    },
    components: { Spinner }
};
</script>

<style lang="scss" scoped>

</style>