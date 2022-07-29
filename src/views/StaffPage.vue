<template>
  <v-container class="d-flex justify-center">
    <v-card
      class="ma-8 pa-6 staff-card"
      max-width="800"
      width="100%"
      min-width="350"
      justify-center
    > 
      <DialogFormVue v-bind:itemEdited="this.getStaff[this.$route.params.index]" class="d-flex justify-end"/>
      <v-row
        class="mb-6"
        no-gutters
        v-for="(value, name) in valueList"
      >
        <v-col
          sm="6"
          md="6"
        >{{name}}:</v-col>
        <v-col
          sm="6"
          md="6"
        >{{value}}</v-col>
      </v-row>
      <div class="d-flex justify-end pr-2">
        <v-icon
          @click="dialogDelete = true;"
        >
          mdi-delete
        </v-icon>
      </div>
    </v-card>
    <v-toolbar flat class="delete-dialog">
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Вы точно хотите удалить работника?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">Да</v-btn>
            <v-btn color="blue darken-1" text @click="dialogDelete = false">Отмена</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DialogFormVue from '@/components/DialogForm.vue'
  import { mapMutations } from 'vuex'

  export default {
    computed: 
      mapGetters(['getStaff']),
      index: function() {return },
    components: {
      DialogFormVue,
    },
    data: () => ({
      valueList: {},
      index: null,
      dialogDelete: false,
    }),
    methods: {
      ...mapMutations(['deletStaff']),
      settingValue() {
        this.valueList = {
          ['Имя']: this.getStaff[this.index]['name'],
          ['Фамилия']: this.getStaff[this.index]['lastName'],
          ['Отчество']: this.getStaff[this.index]['patronymic'],
          ['Должность']: this.getStaff[this.index]['post'],
          ['Зарплата']: this.getStaff[this.index]['wage'],
          ['Ставка']: this.getStaff[this.index]['rate'],
          ['Трудовая книжка']: this.getStaff[this.index]['workbook'] ? 'сдана' : 'не сдана',
          ['Дата начала работы']: this.getStaff[this.index]['startDate'],
        };
      },
      deleteItemConfirm () {
        this.deletStaff(this.index);
        this.dialogDelete = false;
        this.$router.push({name: 'home'});
      },  
    },
    mounted() {
      this.index = this.$route.params.index;
      this.settingValue();
    },
    watch: {
      '$store.state.table.staff': function() {
        this.settingValue();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .delete-dialog {
    position: absolute;
    z-index: -1;
  }
</style>
