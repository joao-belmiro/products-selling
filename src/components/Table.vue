<template>
  <section class="t-container">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.label">{{ col.label }}</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row[id]">
          <td v-for="col in columns" :key="col.label">{{ row[col.property] }}</td>
          <td class="t-options">
            <button @click="doDelete(row)" class="t-btn-edit">&#9998;</button>
            <button @click="doEdit(row)" class="t-btn-trash">&#10006;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue'
const props = defineProps({
  columns: Array,
  data: Array,
  id: String
})
const emit = defineEmits(['emitDelete', 'emitEdit'])

const doDelete = (row) => {
  emit('emitDelete', row)
}

const doEdit = (row) => {
  emit('emitEdit', row)
}
</script>

<style lang="scss">
.t-container {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid $dark;
  table {
    border-collapse: collapse;
    width: 100%;
    th {
      max-width: 150px;
      border-right: 1px solid $background;
      text-align: left;
      padding: 8px;

      &:last-child {
        border: none;
      }
    }
    td {
      border-right: 1px solid $dark;
      border-bottom: 1px solid $dark;
      padding: 8px;
    }
    thead {
      background-color: $primary;
    }
    thead tr th {
      color: $background;
      font-weight: normal;
    }
    tbody tr:last-child td {
      border-bottom: none;
    }
    tbody tr td {
      &:last-child {
        border-right: none;
      }
      .t-btn-edit {
        background: $secondary;
        transform: rotateX(180deg);
      }
      .t-btn-trash {
        background: $accent;
      }
      button {
        border-radius: 4px;
        border: 0px;
        width: 30px;
        height: 30px;
        margin-right: 12px;
        cursor: pointer;
        color: $background;

        &:hover:nth-child(1) {
          border: 2px solid $secondary;
        }
        &:hover:nth-child(2) {
          border: 2px solid $accent;
        }
      }
    }
  }
}
</style>
