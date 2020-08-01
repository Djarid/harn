<template>
    <v-dialog max-width="900px">
        <template v-slot:activator="{on, attrs}">
                        <!-- <v-btn absolute fab top right color="primary" @click="$router.push({ name: 'AddSpell' })"> -->
                        <v-btn absolute fab top right color="primary" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <!-- <v-btn text class="success" v-bind="attrs" v-on="on">Add new spell</v-btn> -->
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a new spell</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="spellName" prepend-icon="mdi-folder"></v-text-field>
                    <!-- <v-text-field label="Convocation" v-model="spellConvocation" prepend-icon="mdi-school"></v-text-field> -->
                    <v-select :items="convocations" label="Convocation" v-model="spellConvocation" prepend-icon="mdi-school"></v-select>
                    <v-text-field label="Level" v-model="spellLevel" prepend-icon="mdi-equalizer"></v-text-field>
                    <v-text-field label="Mastery Level" v-model="spellML" prepend-icon="mdi-trending-up"></v-text-field>
                    <v-text-field label="Skill Index" :value="spellSI" prepend-icon="mdi-subdirectory-arrow-right"></v-text-field>
                    <v-text-field label="Skill Base" v-model="spellSB" prepend-icon="mdi-get_app"></v-text-field>
                    <v-text-field label="Esoteric Knowlege Factor" v-model="spellEKF" prepend-icon="mdi-trending-up"></v-text-field>
                    <v-textarea label="Description" v-model="spellDescription" prepend-icon="mdi-pencil"></v-textarea>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="success mx-0 ml-6 mt-3" @click="submit">Add Spell</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
//import db from '@/firebase/init'

export default {
    name: 'AddSpell',
    data: () => ({
        spellName: '',
        spellDescription: '',
        spellConvocation: '',
        spellLevel: '',
        spellML: '',
        spellSB: '',
        spellEKF: '',
        convocations: [
            'Fivria',
            'Jmorvi',
            'Lyahvi',
            'Neutral',
            'Odvishe',
            'Peleahn',
            'Savoryan',
            "Lyran"            
        ]

    }),
    methods: {
        submit() {
            console.log(this.spellName, this.spelDescription)
        }
    },
    computed: {
        spellSI: function() {
            return Math.round(this.spellML)
        }
    }
}
</script>

<style>

</style>