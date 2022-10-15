<template>
  <div class="container mt-3">
    <div v-if="loading">
      <Spinner />
    </div>
    <div class="row" v-if="!loading && Object.keys(user).length > 0">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="card-text">Name: {{ user.name }}</p>
            <p class="card-text">Email: {{ user.email }}</p>
            <p class="card-text">Company: {{ user.company.name }}</p>
            <p class="card-text">Website: {{ user.website }}</p>
            <p class="card-text">Adress: {{ user.address.city }}</p>
            <router-link class="btn btn-success" to="/users">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from '@/services/UserService';
import Spinner from './Spinner.vue';
export default {
    name: "UserDetails",
    data: function () {
        return {
            loading: false,
            user: {},
            errorMessage: null
        };
    },
    created: async function () {
        let userId = this.$route.params.userId;
        try {
            this.loading = true;
            let response = await UserService.getUser(userId);
            this.loading = false;
            this.user = response.data;
        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    },
    components: { Spinner }
}
</script>

<style lang="scss" scoped>
</style>