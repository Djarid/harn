<template>
    <v-card id="spellbook" class="mx-auto mt-12" max-width="944">
        <v-card-title>
            <span>The Grimoires of {{ this.charName }}</span>

            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details>
            </v-text-field>
        </v-card-title>
        <!-- <ul>
            <li>
                <input class="header" type="text" v-for="(v,k) in spells[0]" :key=k :value="k">
            </li>
            <li v-for="(spell, index) in spellList" :key=index>              
                <input type="text" v-for="(v,k) in spell" :key=k v-model="spells[index][k]">
            </li>
        </ul> -->
        <v-spacer></v-spacer>
        <v-card-text>
            <v-data-table 
                dense
                :headers="spellHeaders"
                :items="spells"
                :items-per-page="200"
                class="elevation-1"
                multi-sort 
                :search="search"
                :footer-props="footerProps"
                :loading="loading"
                loading-text="Loading... Shouldn't take long">
            </v-data-table>
            <AddSpell></AddSpell>
        </v-card-text>
    </v-card>
</template>

<script>
import grimoire from '../assets/spells.json'
import AddSpell from '@/components/AddSpell'
import db from '@/firebase/init'

export default {
    name: "spellbook",
    props: { 
        charName: String 
    },
    components: {
        AddSpell
    },
    data: function() {
        return {
            spellHeaders: [],
            spells: [],
            legend: grimoire.legend,
            convocations: grimoire.convocations,
            search: null,
            loading: true,
            footerProps: {
                showFirstLastPage: false,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                itemsPerPageOptions: [20, 50, 100, 200]

            }
        }
    },
    methods: {
        addSpell() {
            this.$router.push({name: 'AddSpell'})
        }
    },
    computed: {
        //    spellList: function() {
        //         var filteredList = this.spells
        //         return filteredList
        //    }
        grimoire: function() {
            return this.spells.forEach(spell => {
                return {
                    name: spell.name,
                    ml: spell.ml,
                    si: Math.round(spell.ml,0),
                    lvl: spell.lvl,
                    sb: spell.sb,
                    ekf: spell.ekf,
                    description: spell.description
                }
            })
        }
   },
   created() {
       db.collection('spellbook').get().then(snapshot => {
           snapshot.forEach(doc => {
               let spell = doc.data()
               spell.id = doc.id
                this.spells.push(spell)
            })
        }).catch(err => {
           console.log(err.message)
       })

       db.collection('spell-headers').orderBy('order').get().then(snapshot => {
           snapshot.forEach(doc => {
               let header = doc.data()
               header.id = doc.id
               this.spellHeaders.push(header)               
           })
           this.loading = false
       })
   }
}
</script>


<style lang="scss" scoped>
.header {
    font-weight: bold;
}
</style>
