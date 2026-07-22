import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faArrowRightLong,
  faCircleCheck,
  faCircleXmark,
  faLayerGroup,
  faPuzzlePiece,
  faSitemap,
  faCodeBranch,
  faBoxesStacked,
  faSliders,
  faWandMagicSparkles,
  faArrowTrendUp,
  faCubes,
  faBolt,
  faRotate,
  faCode,
  faCheckDouble,
  faGripVertical,
  faXmark,
  faWindowMinimize,
  faDownload,
  faLeftRight,
  faCircleArrowDown,
  faAnglesRight,
  faPlus,
  faCopy,
  faEnvelope,
  faCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRightLong);
library.add(faCircleCheck);
library.add(faCircleXmark);
library.add(faLayerGroup);
library.add(faPuzzlePiece);
library.add(faSitemap);
library.add(faCodeBranch);
library.add(faBoxesStacked);
library.add(faSliders);
library.add(faWandMagicSparkles);
library.add(faArrowTrendUp);
library.add(faCubes);
library.add(faBolt);
library.add(faRotate);
library.add(faCode);
library.add(faCheckDouble);
library.add(faGripVertical);
library.add(faXmark);
library.add(faWindowMinimize);
library.add(faDownload);
library.add(faLeftRight);
library.add(faCircleArrowDown);
library.add(faAnglesRight);
library.add(faPlus);
library.add(faCopy);
library.add(faEnvelope);
library.add(faLinkedin);
library.add(faGithub);
library.add(faCheck);
library.add(faBars);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
