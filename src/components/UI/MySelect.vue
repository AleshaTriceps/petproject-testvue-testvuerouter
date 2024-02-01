<template>
  <select :value="internalValue" @input="updateInternalValue($event.target.value)">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      internalValue: this.modelValue
    }
  },
  methods: {
    updateInternalValue(value) {
      this.internalValue = value
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
