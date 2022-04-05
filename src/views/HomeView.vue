<template>
  <div class="container">
    <h3 class="counterTitle">{{ counterData.counterTitle }}</h3>
    <div class="home" ref="appTittleRef" >
      <button class="btn" @click="incerment($event)">+</button>
      <span class="counter">
        {{ counterData.count }}
      </span>
      <button class="btn" @click="decrement">-</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h5>Modify title</h5>
      <input type="text" v-model="counterData.counterTitle" v-Autofocus/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isInDestructureAssignment, walkBlockDeclarations } from "@vue/compiler-core";
import { ref, onMounted, reactive, computed, watch, onBeforeMount,nextTick } from "vue";

// const count = ref(5),counterTitle = ref('Counter');
const appTitle = " Yo!";
const counterData = reactive({
  count: 0,
  counterTitle: "Counter",
});

const appTittleRef = ref()

onMounted(() => {
  console.log(appTittleRef.value.offsetWidth);
 
});

watch(
  () => counterData.count,
  (newData, oldData) => {
    newData == 10 ? alert("10 is reached") : null;
    // console.log(`${oldData} to ${newData}`);
  }
);

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

const incerment = async (e: Event): void => {
  //  console.log(e)
  counterData.count++;
    // we can catch the moment when Vue updates DOM using Vue.nextTick() this is useful because A change
    // to Vue component's data (props or state) isn't immediately reflected in the DOM. Rather, Vue updates DOM asynchronously.
    //after the dom is updated .. let's do this:
  await nextTick();
  console.log('the dom is updated now');
  // nextTick(() => {

  //   // after the dom is updated .. let's do this:
  //   console.log(appTittleRef.value.offsetWidth);
  // });
};
const decrement = (): void => {
  counterData.count--;
};


const vAutofocus = {
  mounted:(el:any)=>{
    el.focus();
   },

}




</script>

<style>
.counterTitle {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn,
.counter {
  font-size: 30px;
  margin: 10px;
}
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
