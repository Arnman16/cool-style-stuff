<template>
  <div>
    <div class="entry-wide">
      <component :is="drawing"></component>
    </div>
    <div v-if="0">
      <div
        v-for="(drawing, index) in drawings"
        :key="index"
        :class="drawing.class"
      >
        <component :is="drawing.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { list, drawing } from "@/common/list.js";

export default {
  name: "DrawingBoard",
  data() {
    return {
      drawings: list,
      drawing: drawing,
    };
  },
};
</script>

<style>
.title {
  position: absolute;
  padding: 5px;
  font-weight: 400;
  color: rgb(77, 83, 88);
  opacity: 0.3;
}
@media (min-width: 960px) {
  .entry {
    float: left;
    width: 50%;
  }
  .entry-33 {
    float: left;
    width: 33.3333%;
  }
  .entry-66 {
    float: left;
    width: 66.6666%;
  }
}
.entry,
.entry-33,
.entry-66 {
  text-align: center;
  min-height: 400px;
  position: relative;
  display: flex;
}
.entry-wide {
  text-align: center;
  min-height: 400px;
  position: relative;
  display: flex;
  width: 100%;
}
</style>
