import { markRaw } from "@vue/reactivity";
import Drawing from "@/components/Drawing.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Balls from "@/components/Balls.vue";
import Sharp from "@/components/Sharp.vue";
import Mario from "@/components/Mario.vue";
import Luigi from "@/components/Luigi.vue";
import Keystep from "@/components/Keystep.vue";
import GullDagger from "@/components/GullDagger.vue";
import SquidGame from "@/components/SquidGame.vue";
import JellyBeans from "@/components/JellyBeans.vue";
import Jack from "@/components/Jack.vue";
import PickaxeIron from "@/components/PickaxeIron.vue";
import PickaxeGold from "@/components/PickaxeGold.vue";
import PickaxeDiamond from "@/components/PickaxeDiamond.vue";
const drawing = markRaw(Drawing);
const list = [
  {
    component: markRaw(PickaxeIron),
    title: "Iron",
    class: "entry-33",
    comment: "",
    date: "2021-10-27",
  },
  {
    component: markRaw(PickaxeGold),
    title: "Gold",
    class: "entry-33",
    comment: "",
    date: "2021-10-27",
  },
  {
    component: markRaw(PickaxeDiamond),
    title: "Diamond",
    class: "entry-33",
    comment: "",
    date: "2021-10-27",
  },
  {
    component: markRaw(Jack),
    title: "Jack",
    class: "entry",
    comment: "",
    date: "2021-10-26",
  },
  {
    component: markRaw(JellyBeans),
    title: "Jelly Beans",
    class: "entry",
    comment: "",
    date: "2021-10-22",
  },
  {
    component: markRaw(SquidGame),
    title: "Squid Game",
    class: "entry",
    comment: "",
    date: "2021-10-21",
  },
  {
    component: markRaw(GullDagger),
    title: "Gull Dagger",
    class: "entry",
    comment: "",
    date: "2021-10-21",
  },
  {
    component: markRaw(Keystep),
    title: "Keystep",
    class: "entry-wide",
    comment: "",
    date: "2021-10-20",
  },
  {
    component: markRaw(Mario),
    title: "Mario",
    class: "entry",
    comment: "",
    date: "2021-10-19",
  },
  {
    component: markRaw(Luigi),
    title: "Luigi",
    class: "entry",
    comment: "",
    date: "2021-10-19",
  },
  {
    component: markRaw(HelloWorld),
    title: "Hello World!",
    class: "entry-wide",
    comment: "",
    date: "2021-10-18",
  },
  {
    component: markRaw(Balls),
    title: "Colorful Balls",
    class: "entry",
    comment: "",
    date: "2021-10-17",
  },
  {
    component: markRaw(Sharp),
    title: "Sharp",
    class: "entry",
    comment: "",
    date: "2021-10-16",
  },
];
export { list, drawing };
