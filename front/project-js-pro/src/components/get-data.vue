<script>
export default {
  name: 'get-data',
  data() {
    return {
      API: 'http://localhost:3000',
      errorMessage: '',
      error: false,
    };
  },
  created() {
    this.$options.template = `<div>
            ${this.$options.template}
            <div v-if="error" class="popup">
                <p>Ошибка получения данных! {{errorMessage}}</p>
                <button @click="close">OK</button>
            </div>
        </div>`;
  },
  methods: {
    getJson(url) {
      return fetch(this.API + url, { cache: 'no-store' })
        .then((result) => result.json())
        .catch((error) => {
          this.showError(error);
        });
    },
    postJson(url, data) {
      return this.sendJson(url, data, 'POST');
    },
    putJson(url, data) {
      return this.sendJson(url, data, 'PUT');
    },
    deleteJson(url, data = {}) {
      return this.sendJson(url, data, 'DELETE');
    },
    sendJson(url, data, method, headers = {}) {
      const headersParam = { 'Content-Type': 'application/json', ...headers };
      return fetch(this.API + url, {
        method,
        headersParam,
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.showError(error);
        });
    },
    close() {
      this.error = false;
    },
    showError(error) {
      this.errorMessage = error;
      this.error = true;
    },
  },
}; </script>

<style lang="scss" scoped>
.popup {
  width: 200px;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: calc(50% - 100px);

  border: 1px solid black;
  border-radius: 10px;

  color: #000;
}
</style>
