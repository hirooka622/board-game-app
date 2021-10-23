<template>
  <v-container>
    <v-row v-if="!hidden" justify="center" align="center">
      <v-col cols="12" align="center">
        プレイヤー{{ currentPlayer + 1 }}
        <br />
        表示された数字を1枚ずつ紙にメモしてください。
      </v-col>
      <v-col cols="12" align="center">
        <p v-for="num of cardNum" :key="num" class="display-2 secondary--text">
          {{ randoms[currentPlayer*cardNum + num-1 ] }}
        </p>
      </v-col>
      <v-col cols="12" align="center">
        <v-btn dark color="orange accent-4" @click="currentPlayer < playerNum - 1 ? nextPlayer() : $router.push('selectQuestion')">
          {{ currentPlayer < playerNum - 1 ? "NEXT PLAYER" : "NEXT SETTING" }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center">
        プレイヤー{{ currentPlayer + 1 }}
        <br />
        番号を確認します。
        CHECK NUMBER を押してください
        <v-col cols="12" align="center">
          <v-btn dark color="orange accent-4" @click="hidden = false">
            {{ "CHECK NUMBER" }}
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-12">
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
            hidden: false,
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
            console.log("_totalChoiceNum - ", _totalChoiceNum)

            for(let i = 0; i < _totalChoiceNum; i++){
                while(true){
                    let _tmp = Math.floor( Math.random() * (_max - _min + 1)) + _min
                    if(!this.randoms.includes(_tmp)){
                        this.randoms.push(_tmp);
                        break
                    }
                }
            }

            console.log(this.randoms)

        },
        nextPlayer(){
            this.currentPlayer++
            this.hidden = true
        }
    }
}
</script>