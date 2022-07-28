<template>
  <v-content fluid>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="getStaff"
        :search="search"
      >
        <template v-slot:top only>
          <v-toolbar flat class="delete-dialog">
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Вы точно хотите удалить работника?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">Да</v-btn>
                  <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-container class="contaier-icons">
            <v-icon
              class="mr-2"
              @click="routeStaff(item)"
            >
              mdi-eye
            </v-icon>
            <DialogFormVue v-bind:itemEdited="item"/>
            <v-icon
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </v-container>
        </template>
      </v-data-table>
    </v-card>
      <div class="d-flex justify-end ma-4">
        <DialogFormVue />
      </div>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import DialogFormVue from '@/components/DialogForm.vue'

export default {
  data: () => ({
    search: '',
    dialogDelete: false,
    editedIndex: -1,
    headers: [
        { text: 'Фамилия', value: 'lastName' },
        { text: 'Имя', value: 'name' },
        { text: 'Отчество', value: 'patronymic' },
        { text: 'Должность', value: 'post' },
        { text: '', value: 'actions', sortable: false }
      ],
  }),
  components: {
    DialogFormVue,
  },
  computed: mapGetters(['getStaff']),
  methods: {
    ...mapMutations(['deletStaff']),
    deleteItem (item) {
      this.editedIndex = this.getStaff.indexOf(item)
      this.dialogDelete = true;
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = -1;
      })
    },
    editedItem (item) {
      this.editedIndex = this.getStaff.indexOf(item);
    },
    closeEdited () {
      this.$nextTick(() => {
        this.editedIndex = -1;
      })
    },
    deleteItemConfirm () {
      this.deletStaff(this.editedIndex);
      this.closeDelete();
    },
    routeStaff(item) {
      this.$router.push({
        name: 'staff', 
        params: {index: this.getStaff.indexOf(item)}
      });
    },
  },
  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
}
</script>

<style lang="scss" scoped>
  .delete-dialog {
    position: absolute;
    z-index: -1;
  }

  .contaier-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-btn-container {
    display: flex;
    margin: 16px;
    justify-content: end;
  }
</style>