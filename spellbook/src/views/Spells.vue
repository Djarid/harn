<template>
  <div class="spellbook">
    <SpellBook charName="Nuada Halirien"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SpellBook from '@/components/SpellBook.vue'

export default {
  name: 'Spells',
  components: {
    SpellBook
  }
}
</script>
