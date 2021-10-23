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
                "アニメ・漫画の人気",
                "あると便利なもの",
                "居酒屋メニューの人気",
                "言われて嬉しい言葉",
                "おかずの人気",
                "お菓子の人気",
                "お寿司の人気ネタ",
                "かたいもの",
                "かっこいい芸能人",
                "かっこいい苗字・名前",
                "かわいい芸能人",
                "かわいいもの",
                "カバンに入ってたら嬉しいもの",
                "ゲームの人気",
                "芸能人の人気",
                "結婚したい芸能人",
                "恋人にしたい職業",
                "子供が好きなもの",
                "資格・免許の人気",
                "人生で大切なもの・こと",
                "女優の人気",
                "生活に必要なもの",
                "食べ物の人気",
                "強そうな名前",
                "強そうな言葉",
                "強そうな効果音",
                "デートスポットの人気スポット",
                "電化製品の人気",
                "テンションが上がること",
                "動物の重さ",
                "動物の大きさ",
                "なりたい職業",
                "俳優の人気",
                "ハネムーンの人気スポット",
                "パンの人気の種類",
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