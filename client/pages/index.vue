<template>
  <v-container>
    <number-picker :input-items="inputItems" />
    <v-row justify="center" align="center" class="mt-10">
      <v-btn dark color="orange accent-4" @click="$router.push('checkNumber')">
        NEXT
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import numberPicker from "@/components/NumberPicker.vue"

export default{
    components: {
        numberPicker
    },
    data(){
        return{}
    },
    computed:{
        inputItems:{
            get: function (){
                const _inputItems = []
                const _maxNum = 10
                _inputItems.push({
                    methods : 'SET_PLAYER_NUM',
                    model: this.$store.state.playerNum,
                    subheader: '人数',
                    maxNum:_maxNum,
                })
                _inputItems.push({
                    methods : 'SET_CARD_NUM',
                    model: this.$store.state.cardNum,
                    subheader: '枚数（1人あたり）',
                    maxNum:30,
                })
                return _inputItems
            }
        }
    },
}
</script>