<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template  v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="itemEdited === undefined"
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Добавить
        </v-btn>
        <v-icon
          v-if="itemEdited !== undefined"
          class="mr-2"
          v-bind="attrs"
          v-on="on"
        >
          mdi-pencil
        </v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Новый работник</span>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row
              class="mb-6"
              no-gutters
            >
              <v-col
                sm="5"
                md="6"
              >
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Фамилия*"
                  required
                  class="mr-4"
                ></v-text-field>
              </v-col>
              <v-col
                sm="5"
                md="6"
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Имя*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                sm="5"
                md="6"
              >
                <v-text-field
                  v-model="patronymic"
                  :rules="nameRules"
                  label="Отчество*"
                  required
                  class="mr-4"
                ></v-text-field>
              </v-col>
              <v-col
                sm="5"
                md="6"
              >
                <v-text-field
                  v-model="post"
                  :rules="postRules"
                  label="Должность*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                sm="5"
                md="6"
              >
                <v-text-field
                  v-model="wage"
                  label="Заработная плата"
                  :rules="wageRules"
                  required
                  class="mr-4"
                ></v-text-field>
              </v-col>
              <v-col
                sm="5"
                md="6"
              >
                <v-select
                  :items="rateList"
                  :rules="rateRules"
                  label="Ставка"
                  v-model="rate"
                ></v-select>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="workbook"
              label="Трудовая книжка"
              required
            ></v-checkbox>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="Дата начала работы"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="startDateRules"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                @input="menu = false"
                locale="ru"
              ></v-date-picker>
            </v-menu>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Сохранить
            </v-btn>
            <v-btn
              color="error"
              class="mr-4"
              @click="resetForm"
            >
              Отмена
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex';

  export default {
    props: ['itemEdited'],
    data: () => ({
      dialog: false,
      valid: true,
      name: null,
      lastName: null,
      patronymic: null,
      post: null,
      wage: null,
      rate: null,
      workbook: false,
      rateList: ['Полная','Половина'],
      startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      nameRules: [
        v => !!v || 'Необходимо ввести имя',
        v => !/[^A-Za-zА-Яа-я]/.test(v) || 'Допускаются только буквы',
      ],
      postRules: [
        v => !!v || 'Необходимо ввести должность',
      ],
      wageRules: [
        v => !!v || 'Необходимо указать заработную плату',
        v => !/[^0-9]/.test(v) || 'Допускаются только цифры',
      ],
      rateRules: [
        v => !!v || 'Необходимо выбрать ставку',
      ],
      startDateRules: [
        v => !!v || 'Необходимо выбрать дату начала работы',
      ],
    }),
    computed: mapGetters(['getStaff']),
    methods: {
      ...mapMutations(['setStaff', 'deletStaff']),
      resetForm () {
        this.dialog = false;
        if (this.itemEdited !== undefined) {
          this.defaultValue();
          this.$refs.form.resetValidation();
        } else {
          this.$refs.form.reset();
        };
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.setStaff({
            newStaff: {
            name: this.name,
            lastName: this.lastName,
            patronymic: this.patronymic,
            post: this.post,
            wage: this.wage,
            rate: this.rate,
            workbook: this.workbook,
            startDate: this.startDate,
            }, 
            indexStaff: this.getEditedItem()
          });
          this.$nextTick(() => this.resetForm());
        };
      },
      getEditedItem () {
        if (this.itemEdited !== undefined) {
          return this.getStaff.indexOf(this.itemEdited);
        } else {
          return null;
        };
      },
      defaultValue() {
        this.name = this.itemEdited['name'];
        this.lastName = this.itemEdited['lastName'];
        this.patronymic = this.itemEdited['patronymic'];
        this.post = this.itemEdited['post'];
        this.wage = this.itemEdited['wage'];
        this.rate = this.itemEdited['rate'];
        this.workbook = this.itemEdited['workbook'];
        this.startDate = this.itemEdited['startDate'];
      }
    },
    watch: {
      editedIndex : (newVal, oldVal) => {
        console.log(newVal);
      },
    },
    mounted() {
      if (this.itemEdited !== undefined) {
        this.defaultValue()
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>