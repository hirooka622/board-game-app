<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-subheader class="title">
        お題
      </v-subheader>
      <v-btn
        color="secondary"
        icon
        @click="updateSelectQuestionNum"
      >
        <v-icon>mdi-cached</v-icon>
      </v-btn>
      <v-col cols="12" align="center">
        <p class="secondary--text display-3">
          {{ questionList[selectQuestionNum] }}
        </p>
      </v-col>
      <v-btn dark color="orange accent-4" @click="$router.push('/')">
        HOME
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default{
    data(){
        return{
            questionList:[
                "食べ物の人気",
                "動物の重さ",
                "人気の芸能人",
                "テンションが上がること",
                "かたいもの",
                "人気のおかず",
                "あると便利なもの",
                "強そうな名前",
                "人気の資格・免許",
                "動物の大きさ",
                "パンの人気の種類",
                "人気の居酒屋メニュー",
                "結婚したい芸能人",
                "かわいいもの",
                "お寿司の人気ネタ",
                "カバンに入ってたら嬉しいもの",
                "子供が好きなもの",
                "生活に必要なもの",
                "人気のお菓子",
                "人気のおかず",
            ],
            selectQuestionNum : 0,
        }
    },
    mounted() {
        this.updateSelectQuestionNum()
    },
    methods:{
        updateSelectQuestionNum(){
            this.selectQuestionNum = Math.floor( Math.random() * (this.questionList.length -1 - 0 + 1)) + 0
        }
    }
}
</script>