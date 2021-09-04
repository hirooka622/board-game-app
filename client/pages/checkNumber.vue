<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" align="center">
        プレイヤー{{ currentPlayer + 1 }}
        <br />
        表示された数字を1枚ずつ紙にメモしてください。
      </v-col>
      <v-col cols="12" align="center">
        <p v-for="num of cardNum" :key="num" class="display-2 secondary--text">
          {{ randoms[currentPlayer*2 + num-1 ] }}
        </p>
        書き終わったら次の人に渡してください。
      </v-col>
      <v-col cols="12" align="center">
        <v-btn dark color="orange accent-4" @click="currentPlayer < playerNum - 1 ? currentPlayer++ : $router.push('selectQuestion')">
          {{ currentPlayer < playerNum - 1 ? "NEXT PLAYER" : "NEXT SETTING" }}
        </v-btn>
      </v-col>
      <v-btn dark color="grey" @click="$router.push('/')">
        BACK
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex"

export default{
    data(){
        return{
            randoms:[],
            currentPlayer:0,
        }
    },
    computed:{
        ...mapState(["playerNum", "cardNum"]),
    },
    mounted() {
        this.choiceNumber()
    },
    methods:{
        choiceNumber(){
            const _max = 100
            const _min = 0

            const _totalChoiceNum = this.playerNum * this.cardNum

            for(let i = 0; i < _totalChoiceNum; i++){
                while(true){
                    let _tmp = Math.floor( Math.random() * (_max - _min + 1)) + _min
                    if(!this.randoms.includes(_tmp)){
                        this.randoms.push(_tmp);
                        break
                    }
                }
            }

            console.log(this.rondoms)

        }
    }
}
</script>