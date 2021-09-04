<template>
  <div>
    <v-row v-for="(inputItem, index) in inputItems" :key="index">
      <v-row justify="center" align="center">
        <v-col cols="8" offset="4">
          <v-subheader class="title">
            {{ inputItem.subheader }}
          </v-subheader>
        </v-col>
        <v-col cols="5" align="right">
          <v-btn
            dark
            icon
            class="secondary"
            @click="$store.commit(inputItem.methods, -1)"
          >
            <v-icon>mdi-minus-thick</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2" align="center">
          <p class="secondary--text display-3">
            {{ inputItem.model }}
          </p>
        </v-col>
        <v-col cols="5" align="left">
          <v-btn
            dark
            icon
            class="secondary"
            @click="$store.commit(inputItem.methods, 1)"
          >
            <v-icon>mdi-plus-thick</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
    props:{
        inputItems:{
            type: Array,
            default: [],
        }
    },
    data(){
        return{
            number: 0,
        }
    },
    computed:{
        inputVal: {
            // inputValの値を取得
            get() {
                return this.input // ゲッターには戻り値が必要 modelプロパティで指定した"input"を戻り値とする
            },
            // inputValが変更されると以下が動作
            set(value) {
                this.$emit("change", value) // modelプロパティのeventで指定されたイベント"change"を$emitする（親にデータを渡す）
            },
        },
    }
}
</script>
