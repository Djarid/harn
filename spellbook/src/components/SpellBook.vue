<template>
    <div id="spellbook">
        <h2>The Grimoires of {{ this.charName }}</h2>
        <ul>
            <li>
                <input class="header" type="text" v-for="(v,k) in spells[0]" :key=k :value="k">
            </li>
            <li v-for="(spell, index) in spellList" :key=index>                
                <input type="text" v-for="(v,k) in spell" :key=k v-model="spells[index][k]">
            </li>
        </ul>
    </div>
</template>

<script>
import grimoire from '../assets/spells.json'
export default {
    name: "spellbook",
    props: { 
        charName: String 
    },
    data: function() {
        return {
            spells: grimoire.spells,
            legend: grimoire.legend,
            convocations: grimoire.convocations
        }
    },
   computed: {
           spellList: function() {
                var filteredList = this.spells
                return filteredList
           }
   }}
</script>


<style lang="scss" scoped>
.header {
    font-weight: bold;
}
</style>
